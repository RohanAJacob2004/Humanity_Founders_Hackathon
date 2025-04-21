import React, { useState, useEffect, useRef } from 'react';
import { Send, X, RefreshCcw } from 'lucide-react';
import axios from 'axios';

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'assistant', content: 'Hello, how can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null);

    // Effect to scroll down when messages change
    useEffect(() => {
        if (chatContainerRef.current && isOpen) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        const userMessage = { type: 'user', content: trimmedInput };
        const newMessages = [...messages, userMessage];

        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const res = await axios.post(
                '/api/gemini',
                {
                    messages: newMessages.map(m => ({
                        role: m.type,
                        content: m.content,
                    }))
                }
            );

            const reply = res.data.output_text || '⚠️ No response received from the API.';
            setMessages(prevMessages => [...prevMessages, { type: 'assistant', content: reply }]);

        } catch (err) {
            console.error("Error calling Gemini API endpoint:", err);
            let errorMessage = '⚠️ Something went wrong.';
            if (err.response) {
                errorMessage = `⚠️ Error: ${err.response.data.error || err.response.statusText || 'Failed to get response.'}`;
            } else if (err.request) {
                errorMessage = '⚠️ Could not reach the API. Please check the connection.';
            }
            setMessages(prevMessages => [...prevMessages, { type: 'assistant', content: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleReset = () => {
        setMessages([
            { type: 'assistant', content: 'Hello, how can I help you today?' }
        ]);
        setInput('');
        setLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Button */}
            <button
                onClick={toggleChat}
                className="w-[50px] h-[50px] rounded-[10px] hover:opacity-90 transition-all duration-200"
            >
                <img src="./ChatbotPop.png" alt="AI Assistant" className="w-[50px] h-[50px]" />
            </button>

            {/* Chat Popup */}
            <div className={`absolute bottom-[70px] right-0 transition-all duration-300 transform origin-bottom-right
                ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
                <div className="w-[520px] bg-white rounded-[20px] shadow-[0_0_35px_rgba(219,219,219,0.5)] flex flex-col">
                    {/* Header */}
                    <div className="h-[82px] border-b border-[#CCCCCC] flex items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <img src="/chatbot.png" alt="AI Assistant" className="w-[50px] h-[50px]" />
                            <span className="text-[#333333] text-xl font-medium">AI Assistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleReset}
                                className="flex items-center text-[#333333] hover:text-[#666666] transition-colors duration-200"
                            >
                                <RefreshCcw className="w-5 h-5" />
                            </button>
                            <button
                                onClick={toggleChat}
                                className="w-6 h-6 flex items-center justify-center text-[#333333] hover:text-[#666666] transition-colors duration-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Content - Fixed height with overflow */}
                    <div
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto p-5 h-[375px] max-h-[375px]"
                    >
                        {messages.map((msg, i) => (
                            msg.type === 'assistant' ? (
                                <div key={i} className="flex gap-2.5 mb-4">
                                    <img src="/chatbot.png" alt="AI Assistant" className="w-[40px] h-[40px] flex-shrink-0" />
                                    <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-[#CCD7E9] rounded-md p-4 max-width-[370px] overflow-hidden">
                                        <p className="text-[#666666] whitespace-pre-wrap break-words overflow-wrap-anywhere">{msg.content}</p>
                                    </div>
                                </div>
                            ) : (
                                <div key={i} className="flex flex-row-reverse gap-2.5 mb-4">
                                    <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="bg-[#F8F8F8] border border-[#E6E6E6] rounded-md p-4 max-width-[370px] overflow-hidden">
                                        <p className="text-[#666666] whitespace-pre-wrap break-words overflow-wrap-anywhere">{msg.content}</p>
                                    </div>
                                </div>
                            )
                        ))}

                        {/* Loading indicator */}
                        {loading && (
                            <div className="flex gap-2.5 mb-4">
                                <img src="/chatbot.png" alt="AI Assistant" className="w-[40px] h-[40px] flex-shrink-0" />
                                <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-[#CCD7E9] rounded-md p-4 max-width-[370px]">
                                    <p className="text-[#666666] italic">Typing...</p>
                                </div>
                            </div>
                        )}

                        {/* Quick Actions - showing only if there are no user messages yet */}
                        {messages.length <= 1 && !loading && (
                            <div className="space-y-2.5 mt-4">
                                <button
                                    className="w-full text-left p-[10px] border border-[#CCD7E9] rounded-md text-[#666666] hover:bg-[#F8F8F8] transition-colors duration-200"
                                    onClick={() => setInput("Show me the around the app.")}
                                >
                                    Show me the around the app.
                                </button>
                                <button
                                    className="w-full text-left p-[10px] border border-[#CCD7E9] rounded-md text-[#666666] hover:bg-[#F8F8F8] transition-colors duration-200"
                                    onClick={() => setInput("How can I launch my product?")}
                                >
                                    How can I launch my product?
                                </button>
                                <button
                                    className="w-full text-left p-[10px] border border-[#CCD7E9] rounded-md text-[#666666] hover:bg-[#F8F8F8] transition-colors duration-200"
                                    onClick={() => setInput("How to start a new promotion?")}
                                >
                                    How to start a new promotion?
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="h-[63px] border-t border-[#E6E6E6] p-4 flex items-center gap-4 bg-white rounded-b-lg">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1 bg-transparent text-[#666666] placeholder-[#666666] outline-none"
                            disabled={loading}
                        />
                        <button
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 
                              ${loading || !input.trim() ? 'bg-[#7367F010] cursor-not-allowed' : 'bg-[#7367F01A] hover:bg-[#7367F030]'}`}
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                        >
                            <Send className={`w-[22px] h-[22px] ${loading || !input.trim() ? 'text-[#3159FF80]' : 'text-[#3159FF]'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPopup;
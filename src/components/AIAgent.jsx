import React, { useState, useEffect, useRef } from 'react';
import { Bell, User, Link, PlusCircle, Settings, Users, Send, RefreshCcw } from 'lucide-react';
import axios from 'axios';

const AIAgent = () => {
    const [userEmail, setUserEmail] = useState('');
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null); // Ref for scrolling

    useEffect(() => {
        // Attempt to get user email from storage
        const email = localStorage.getItem('email') || sessionStorage.getItem('email');
        let displayEmail = 'User'; // Default display name
        if (email) {
            try {
                // If email is stored as JSON string (e.g., "\"user@example.com\"")
                const parsedEmail = JSON.parse(email);
                displayEmail = parsedEmail.split('@')[0];
            } catch {
                // If email is stored as a plain string
                displayEmail = email.includes('@') ? email.split('@')[0] : email;
            }
        }
        setUserEmail(displayEmail);

        // Set initial AI welcome message using the derived display name
        setMessages([
            {
                type: 'assistant',
                // Use displayEmail which defaults to 'User' if email is not found/parsed
                content: `Welcome Back, ${displayEmail}!\nHow can I help you today?`
            }
        ]);
    }, []); // Run only once on mount

    // Effect to scroll down when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        const userMessage = { type: 'user', content: trimmedInput };
        const newMessages = [...messages, userMessage];

        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            // *** MODIFICATION: Point to the new Gemini backend endpoint ***
            const res = await axios.post(
                '/api/gemini', // Changed endpoint
                {
                    // *** MODIFICATION: Send messages in a format the backend expects ***
                    // Assuming backend /api/gemini expects an array of message objects
                    // The backend will handle converting this to Gemini's 'contents' format
                    // and mapping 'assistant' role to 'model'.
                    messages: newMessages.map(m => ({
                        role: m.type, // Send 'user' or 'assistant'
                        content: m.content,
                    }))
                    // Optional: You might send model info if your backend supports it
                    // model: 'gemini-pro' // Example model name
                }
            );

            // *** MODIFICATION: Assuming backend returns consistent output format ***
            // Keep this if your /api/gemini route returns { output_text: '...' }
            const reply = res.data.output_text || '⚠️ No response received from the API.';
            setMessages(prevMessages => [...prevMessages, { type: 'assistant', content: reply }]);

        } catch (err) {
            console.error("Error calling Gemini API endpoint:", err);
            let errorMessage = '⚠️ Something went wrong.';
            if (err.response) {
                // E.g., backend returned a specific error
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
        // Reset messages, keeping the initial welcome message
        const displayEmail = userEmail || 'User'; // Use current state or default
        setMessages([
            {
                type: 'assistant',
                content: `Welcome Back, ${displayEmail}!\nHow can I help you today?`
            }
        ]);
        setInput(''); // Clear input field as well
        setLoading(false); // Ensure loading state is reset
    }

    return (
        <div className="flex flex-col h-screen w-full bg-gray-50"> {/* Added bg color */}
            {/* Sticky Header */}
            <div className="sticky top-0 left-[245px] right-0 z-50 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
                <div className="flex items-center">
                    <h1 className="text-lg font-medium text-gray-900">AI Agent</h1>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <Bell className="text-gray-500 text-xl cursor-pointer hover:text-gray-700" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="text-gray-500 w-5 h-5" /> {/* Adjusted icon size */}
                        </div>
                        {/* Display userEmail state which holds the name part */}
                        <p className="text-sm font-medium text-gray-900">{userEmail}</p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            {/* Use flex-1 and overflow-hidden to manage layout */}
            <div className="flex-1 flex flex-col overflow-hidden p-6 pt-0 mt-4"> {/* Added pt-0 */}
                {/* Inner container for chat content */}
                <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"> {/* Added shadow */}
                    {/* AI Agent Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-200"> {/* Adjusted padding */}
                        <div className="flex items-center gap-3"> {/* Reduced gap */}
                            <img src="/chatbot.png" alt="chatbot" className="h-10 w-10" /> {/* Adjusted size */}
                            <span className="text-[#1C1C1C] text-base font-medium">AI Agent</span>
                        </div>
                        <button
                            className="flex items-center gap-2 text-[#555] hover:text-black" // Adjusted styles
                            onClick={handleReset} // Use handleReset
                        >
                            <RefreshCcw className="w-4 h-4" /> {/* Adjusted size */}
                            <span className="text-sm">Reset</span> {/* Added text size */}
                        </button>
                    </div>

                    {/* Chat Container - Takes remaining space and scrolls */}
                    <div ref={chatContainerRef} className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto"> {/* Adjusted gap/padding */}
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex gap-2.5 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.type === 'assistant' && (
                                    <img src="/chatbot.png" alt="AI" className="w-8 h-8 self-end mb-1" /> // Adjusted size/alignment
                                )}
                                <div
                                    className={`p-3 rounded-lg border text-sm text-[#333] max-w-[70%] whitespace-pre-wrap ${ // Added text-sm, whitespace-pre-wrap
                                        msg.type === 'user'
                                            ? 'bg-gray-100 border-gray-200' // Simplified user style
                                            : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100' // Simplified assistant style
                                        }`}
                                >
                                    {/* No need to split by \n if using whitespace-pre-wrap */}
                                    {msg.content}
                                </div>
                                {msg.type === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center self-end mb-1"> {/* Adjusted size/alignment */}
                                        <User className="text-gray-500 w-4 h-4" /> {/* Adjusted icon size */}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Display loading indicator */}
                        {loading && (
                            <div className="flex justify-start gap-2.5">
                                <img src="/chatbot.png" alt="AI" className="w-8 h-8 self-end mb-1" />
                                <div className="p-3 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 text-sm text-gray-500 italic">
                                    Typing...
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="mt-auto border-t border-gray-200 p-4"> {/* Adjusted padding */}
                        {/* Quick Links (Optional - kept as is) */}
                        <div className="pb-4">
                            <h3 className="text-[#1C1C1C] text-xs font-medium mb-3 text-gray-500 uppercase">Quick Actions</h3> {/* Style adjustments */}
                            <div className="flex flex-wrap gap-2"> {/* Use flex-wrap and smaller gap */}
                                {/* Reduced padding and text size for smaller screens */}
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#3159FF] rounded-md text-[#3159FF] hover:bg-blue-50 text-xs">
                                    <Link className="w-4 h-4" />
                                    <span>Send Referral</span>
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#3159FF] rounded-md text-[#3159FF] hover:bg-blue-50 text-xs">
                                    <PlusCircle className="w-4 h-4" />
                                    <span>Create Campaign</span>
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#3159FF] rounded-md text-[#3159FF] hover:bg-blue-50 text-xs">
                                    <Settings className="w-4 h-4" />
                                    <span>Follow-up</span> {/* Simplified text */}
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#3159FF] rounded-md text-[#3159FF] hover:bg-blue-50 text-xs">
                                    <Users className="w-4 h-4" />
                                    <span>View Referral</span>
                                </button>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg p-2"> {/* Adjusted styles */}
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none px-2" // Adjusted styles
                                disabled={loading} // Disable input while loading
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()} // Disable if loading or input is empty
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${loading || !input.trim()
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-blue-100 hover:bg-blue-200' // Use blue shades
                                    }`}
                            >
                                <Send className={`w-4 h-4 ${loading || !input.trim() ? 'text-gray-500' : 'text-[#3159FF]'}`} /> {/* Adjusted size and color */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgent;
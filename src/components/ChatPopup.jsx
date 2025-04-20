import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
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
                <div className="w-[520px] bg-white rounded-lg shadow-xl flex flex-col border border-[#CCCCCC]">
                    {/* Header */}
                    <div className="h-[82px] border-b border-[#CCCCCC] flex items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <img src="/chatbot.png" alt="AI Assistant" className="w-[50px] h-[50px]" />
                            <span className="text-[#333333] text-xl font-medium">AI Assistant</span>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="w-6 h-6 flex items-center justify-center text-[#333333] hover:text-[#666666] transition-colors duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 overflow-y-auto p-5 h-[375px]">
                        {/* AI Message */}
                        <div className="flex gap-2.5 mb-4">
                            <img src="/chatbot.png" alt="AI Assistant" className="w-[40px] h-[40px]" />
                            <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-[#CCD7E9] rounded-md p-4 max-w-[450px]">
                                <p className="text-[#666666]">Hello, how can I help you today?</p>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-2.5 mt-4">
                            <button className="w-full text-left p-[10px] border border-[#CCD7E9] rounded-md text-[#666666] hover:bg-[#F8F8F8] transition-colors duration-200">
                               Show me the around the app.
                            </button>
                            <button className="w-full text-left p-[10px] border border-[#CCD7E9] rounded-md text-[#666666] hover:bg-[#F8F8F8] transition-colors duration-200">
                                How can I launch my product?
                            </button>
                            <button className="w-full text-left p-[10px] border border-[#CCD7E9] rounded-md text-[#666666] hover:bg-[#F8F8F8] transition-colors duration-200">
                                How to start a new promotion?
                            </button>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="h-[63px] border-t border-[#E6E6E6] p-4 flex items-center gap-4 bg-white rounded-b-lg">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            className="flex-1 bg-transparent text-[#666666] placeholder-[#666666] outline-none"
                        />
                        <button className="w-10 h-10 rounded-full bg-[#7367F01A] flex items-center justify-center hover:bg-[#7367F030] transition-colors duration-200">
                            <Send className="w-[22px] h-[22px] text-[#3159FF]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPopup; 
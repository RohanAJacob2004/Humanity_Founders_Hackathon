import React from 'react';
import { Bell, User, Link, PlusCircle, Settings, Users, Send, RefreshCcw } from "lucide-react";

const AIAgent = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            {/* Sticky Header */}
            <div className="fixed top-0 left-[245px] right-0 z-50 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
                {/* Left side - AI Agent */}
                <div className="flex items-center">
                    <h1 className="text-lg font-medium text-gray-900">AI Agent</h1>
                </div>

                {/* Right side - Profile */}
                <div className="flex items-center space-x-6">
                    {/* Notifications */}
                    <div className="relative">
                        <Bell className="text-gray-500 text-xl cursor-pointer" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="text-gray-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 mt-16">
                {/* AI Agent Section */}
                <div className="flex flex-col h-full bg-white rounded-lg p-6">
                    {/* AI Agent Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                            <img src="/chatbot.png" alt="chatbot" className="h-14 w-14" />
                            <span className="text-[#1C1C1C] text-base font-medium">AI Agent</span>
                        </div>
                        <button className="flex items-center gap-4 text-[#1C1C1C]">
                            <RefreshCcw className="w-5 h-5" />
                            <span>Reset</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#CCCCCC] my-4"></div>

                    {/* Chat Container */}
                    <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
                        {/* AI Welcome Message */}
                        <div className="flex gap-2.5">
                            <img src="/chatbot.png" alt="AI Assistant" className="w-12 h-12" />
                            <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-gradient-to-r from-[#CCD7E9] to-[#DBD7E9] rounded-md p-4 max-w-[405px]">
                                <div className="text-[#333333]">
                                    <p className="font-medium mb-4">Welcome Back, Kadin!</p>
                                    <p>How can I help you today?</p>
                                </div>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-2.5 justify-end">
                            <div className="bg-[#F8F8F8] border border-[#CCD7E9] rounded-md p-4 max-w-[620px]">
                                <p className="text-[#333333]">Hey, I want to create a new referral campaign, but I'd like some help from AI to make sure it's set up correctly and performs well. Can you guide me through it?</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="text-gray-500" />
                            </div>
                        </div>

                        {/* AI Response */}
                        <div className="flex gap-2.5">
                            <img src="/chatbot.png" alt="AI Assistant" className="w-12 h-12" />
                            <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-gradient-to-r from-[#CCD7E9] to-[#DBD7E9] rounded-md p-4 max-w-[630px]">
                                <div className="text-[#333333] space-y-4">
                                    <p>I'll help you create a high-converting referral campaign. Here's what I see from your dashboard:</p>
                                    <ul className="space-y-2">
                                        <li>• 3 New Referrals</li>
                                        <li>• 1 New Customer Sending Referrals</li>
                                        <li>• "Summer Campaign" is performing 21% better than other campaigns</li>
                                    </ul>
                                    <p>Would you like to use insights from your successful Summer Campaign to optimize this new campaign?</p>
                                </div>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-2.5 justify-end">
                            <div className="bg-[#F8F8F8] border border-[#CCD7E9] rounded-md p-4 max-w-[620px]">
                                <p className="text-[#333333]">Yes, that would be great! What made the Summer Campaign so successful?</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="text-gray-500" />
                            </div>
                        </div>

                        {/* AI Response */}
                        <div className="flex gap-2.5">
                            <img src="/chatbot.png" alt="AI Assistant" className="w-12 h-12" />
                            <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-gradient-to-r from-[#CCD7E9] to-[#DBD7E9] rounded-md p-4 max-w-[630px]">
                                <div className="text-[#333333] space-y-4">
                                    <p>The Summer Campaign's success can be attributed to several key factors:</p>
                                    <ul className="space-y-2">
                                        <li>1. Double reward structure (both referrer and referee received benefits)</li>
                                        <li>2. Time-limited offers creating urgency</li>
                                        <li>3. Simplified sharing process via social media</li>
                                        <li>4. Personalized referral messages</li>
                                    </ul>
                                    <p>Would you like me to help you set up a similar structure for your new campaign?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links and Chat Input Section */}
                    <div className="mt-auto">
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#CCCCCC]"></div>

                        {/* Quick Links Section */}
                        <div className="py-4">
                            <h3 className="text-[#1C1C1C] text-sm font-medium mb-4">Quick Links</h3>
                            <div className="flex gap-12">
                                <button className="flex items-center gap-2.5 px-[46.5px] py-3 border border-[#3159FF] rounded-[10px] text-[#3159FF]">
                                    <Link className="w-5 h-5" />
                                    <span className="text-sm">Send Referral</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-[37.5px] py-3 border border-[#3159FF] rounded-[10px] text-[#3159FF]">
                                    <PlusCircle className="w-5 h-5" />
                                    <span className="text-sm">Create Campaign</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-[57.5px] py-3 border border-[#3159FF] rounded-[10px] text-[#3159FF]">
                                    <Settings className="w-5 h-5" />
                                    <span className="text-sm">FOLLOW-UP</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-[46px] py-3 border border-[#3159FF] rounded-[10px] text-[#3159FF]">
                                    <Users className="w-5 h-5" />
                                    <span className="text-sm">VIEW REFERRAL</span>
                                </button>
                            </div>
                        </div>

                        {/* Chat Input Section */}
                        <div className="flex items-center gap-4 bg-[#FAFAFA] border border-[#E6E6E6] p-4">
                            <input
                                type="text"
                                placeholder="Ask me anything..."
                                className="flex-1 bg-transparent text-[#666666] placeholder-[#666666] outline-none"
                            />
                            <button className="w-10 h-10 rounded-full bg-[#7367F01A] flex items-center justify-center">
                                <Send className="w-[22px] h-[22px] text-[#3159FF]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgent; 
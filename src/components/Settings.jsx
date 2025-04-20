import React from 'react';
import { User, Edit, Bell } from 'lucide-react';

const Settings = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            {/* Header */}
            <div className="fixed top-0 left-[245px] right-0 z-50 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
                {/* Left side - Title */}
                <div className="flex items-center">
                    <h1 className="text-lg font-medium text-gray-900">Settings</h1>
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
                <div className="bg-white rounded-[15px] p-6">
                    {/* Navigation Tabs */}
                    <div className="flex gap-0 mb-[30px]">
                        <div className="flex items-center gap-2 bg-[rgba(49,89,255,0.1)] rounded px-[15px] py-[11px]">
                            <User className="w-5 h-5 text-[#333333]" />
                            <span className="text-[#333333]">User Profile</span>
                        </div>
                        <div className="flex items-center gap-2 px-[15px] py-[11px]">
                            <User className="w-5 h-5 text-[#888888]" />
                            <span className="text-[#888888]">Business Profile</span>
                        </div>
                        <div className="flex items-center gap-2 px-[15px] py-[11px]">
                            <User className="w-5 h-5 text-[#888888]" />
                            <span className="text-[#888888]">AI Settings</span>
                        </div>
                        <div className="flex items-center gap-2 px-[15px] py-[11px]">
                            <User className="w-5 h-5 text-[#888888]" />
                            <span className="text-[#888888]">Email & Phone Setup</span>
                        </div>
                        <div className="flex items-center gap-2 px-[15px] py-[11px]">
                            <User className="w-5 h-5 text-[#888888]" />
                            <span className="text-[#888888]">Subscription & Usage</span>
                        </div>
                        <div className="flex items-center gap-2 px-[15px] py-[11px]">
                            <User className="w-5 h-5 text-[#888888]" />
                            <span className="text-[#888888]">Referral Goals</span>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-[#333333] text-2xl">Profile</h1>
                            <div className="flex items-center gap-[15px]">

                                <User className="text-gray-500" />

                                <button className="text-[#3159FF]">
                                    <Edit className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                        <div className="h-[0.5px] bg-[#AAAAAA] mb-5" />

                        {/* User Name */}
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-[#333333]">User Name</span>
                            <div className="flex items-center gap-[15px]">
                                <span className="text-[#646464]">Kadin Stanton</span>
                                <button className="text-[#3159FF]">
                                    <Edit className="w-6 h-6" />
                                </button>
                                <button className="border border-[#3159FF] text-[#3159FF] px-[10px] py-[10px] rounded-[3px]">
                                    Update
                                </button>
                            </div>
                        </div>
                        <div className="h-[0.5px] bg-[#AAAAAA] mb-5" />

                        {/* User Phone */}
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-[#333333]">User Phone</span>
                            <div className="flex items-center gap-[15px]">
                                <span className="text-[#646464]">1234567890</span>
                                <button className="text-[#3159FF]">
                                    <Edit className="w-6 h-6" />
                                </button>
                                <button className="border border-[#3159FF] text-[#3159FF] px-[10px] py-[10px] rounded-[3px]">
                                    Update
                                </button>
                            </div>
                        </div>
                        <div className="h-[0.5px] bg-[#AAAAAA] mb-5" />

                        {/* Email */}
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-[#333333]">Email</span>
                            <span className="text-[#646464]">kadin.stanton@example.com</span>
                        </div>
                        <div className="h-[0.5px] bg-[#AAAAAA] mb-5" />

                        {/* Password */}
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-[#333333]">Password</span>
                            <div className="flex items-center gap-[15px]">
                                <span className="text-[#646464]">*******</span>
                                <button className="border border-[#3159FF] text-[#3159FF] px-[15px] py-[10px] rounded-[5px]">
                                    Change Password
                                </button>
                            </div>
                        </div>
                        <div className="h-[0.5px] bg-[#AAAAAA] mb-5" />

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-[30px] mt-[50px]">
                            <button className="border border-[#FF4C51] text-[#FF4C51] px-[30px] py-[10px] rounded-[8px]">
                                Delete Account
                            </button>
                            <button className="bg-[#FF4C51] text-white px-[59px] py-[10px] rounded-[8px]">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings; 
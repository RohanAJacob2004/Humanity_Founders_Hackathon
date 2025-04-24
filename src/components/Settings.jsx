import React, { useState } from 'react';
import { User, Edit, Bell, Mail } from 'lucide-react';
import BusinessSettings from './BusinessSettings';
import EmailPhoneSetup from './EmailPhoneSetup';
import AISettings from './AISettings';
import SubscriptionUsage from './SubscriptionUsage';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('user');
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear both localStorage and sessionStorage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to login page
        navigate('/login');
    };
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
                        <div onClick={() => setActiveTab('user')} className={`flex items-center gap-2 px-[15px] py-[11px] ${activeTab === 'user' ? 'bg-[rgba(49,89,255,0.1)] rounded' : 'bg-transparent'}`}>
                            <User className="w-5 h-5 text-[#333333]" />
                            <button className="text-[#333333]">User Profile</button>
                        </div>
                        <div onClick={() => setActiveTab('business')} className={`flex items-center gap-2 px-[15px] py-[11px] ${activeTab === 'business' ? 'bg-[rgba(49,89,255,0.1)] rounded' : 'bg-transparent'}`}>
                            <User className="w-5 h-5 text-[#888888]" />
                            <button className="text-[#888888]">Business Profile</button>
                        </div>
                        <div onClick={() => setActiveTab('ai')} className={`flex items-center gap-2 px-[15px] py-[11px] ${activeTab === 'ai' ? 'bg-[rgba(49,89,255,0.1)] rounded' : 'bg-transparent'}`}>
                            <User className={`w-5 h-5 ${activeTab === 'ai' ? 'text-[#333333]' : 'text-[#888888]'}`} />
                            <button className={`${activeTab === 'ai' ? 'text-[#333333]' : 'text-[#888888]'}`}>AI Settings</button>
                        </div>
                        <div onClick={() => setActiveTab('emailphone')} className={`flex items-center gap-2 px-[15px] py-[11px] ${activeTab === 'emailphone' ? 'bg-[rgba(49,89,255,0.1)] rounded' : 'bg-transparent'}`}>
                            <Mail className={`w-5 h-5 ${activeTab === 'emailphone' ? 'text-[#333333]' : 'text-[#888888]'}`} />
                            <button className={`${activeTab === 'emailphone' ? 'text-[#333333]' : 'text-[#888888]'}`}>Email & Phone Setup</button>
                        </div>
                        <div onClick={() => setActiveTab('subscription')} className={`flex items-center gap-2 px-[15px] py-[11px] ${activeTab === 'subscription' ? 'bg-[rgba(49,89,255,0.1)] rounded' : 'bg-transparent'}`}>
                            <User className={`w-5 h-5 ${activeTab === 'subscription' ? 'text-[#333333]' : 'text-[#888888]'}`} />
                            <button className={`${activeTab === 'subscription' ? 'text-[#333333]' : 'text-[#888888]'}`}>Subscription & Usage</button>
                        </div>
                    </div>

                    {/* Content Section */}
                    {activeTab === 'user' && (
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-[#333333] text-2xl font-semibold mb-4">User Settings</h2>
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

                                <button onClick={handleLogout} className="bg-[#FF4C51] text-white px-[59px] py-[10px] rounded-[8px]">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'business' && (
                        <BusinessSettings />
                    )}
                    {activeTab === 'emailphone' && (
                        <EmailPhoneSetup />
                    )}
                    {activeTab === 'ai' && (
                        <AISettings />
                    )}
                    {activeTab === 'subscription' && (
                        <SubscriptionUsage />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings; 
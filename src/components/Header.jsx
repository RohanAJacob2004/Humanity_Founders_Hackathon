import React, { useState, useEffect } from 'react';
import { Bell, User } from "lucide-react";

const Header = ({ title }) => {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Try to get email from localStorage first, then sessionStorage
        const email = localStorage.getItem('email') || sessionStorage.getItem('email');
        if (email) {
            try {
                // Remove quotes if the email was stored with JSON.stringify
                const parsedEmail = JSON.parse(email);
                setUserEmail(parsedEmail.split('@')[0]);
            } catch {
                setUserEmail(email);
            }
        }
    }, []);

    return (
        <div className="sticky top-0 z-10 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
            {/* Left side - Title */}
            <div className="flex items-center">
                <h1 className="text-lg font-medium text-gray-900">{title}</h1>
            </div>

            {/* Right side - Profile */}
            <div className="flex items-center space-x-6">
                <button className="text-gray-600 hover:text-gray-900">
                    <Bell className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm text-gray-700">{userEmail || 'User'}</span>
                </div>
            </div>
        </div>
    );
};

export default Header; 
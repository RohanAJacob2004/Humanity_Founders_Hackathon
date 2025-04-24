import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { FaRegBuilding, FaRobot, FaChartBar, FaUsers, FaWallet, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { PiSpeakerHighBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: <FaRegBuilding />, label: 'Platform Setup', path: '/business-profile-setup' },
        { icon: <FaRobot />, label: 'AI Agent', path: '/ai-agent' },
        { icon: <FaChartBar />, label: 'Dashboard', path: '/dashboard' },
        { icon: <FaPeopleGroup />, label: 'Campaign', path: '/campaigns' },
        { icon: <PiSpeakerHighBold />, label: 'Promoters', path: '/promoters' },
        { icon: <FaUsers />, label: 'Leads', path: '/leads' },
        { icon: <FaWallet />, label: 'Payouts', path: '/payouts' },
    ];

    const bottomMenuItems = [
        { icon: <FaCog />, label: 'Settings', path: '/settings' },
        { icon: <FaQuestionCircle />, label: 'Help', path: '/help' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        // Clear both localStorage and sessionStorage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className={`sidebar ${isExpanded ? 'w-[245px]' : 'w-[80px]'} h-screen bg-white border-r border-[#E5E5E5] flex flex-col transition-all duration-300`}>
            {/* Logo and Toggle */}
            <div className="p-6 flex items-center justify-between">
                {isExpanded && <img src="/referralHub.png" alt="logo" className="object-contain h-20 w-20" />}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    {isExpanded ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Main Menu */}
            <div className="flex-1 px-4 py-2">
                {menuItems.map((item, index) => (
                    <div
                        data-tour-id={item.path}
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                        className={`flex items-center px-4 py-3 rounded-lg mb-2 cursor-pointer duration-200
                            ${location.pathname === item.path ? 'bg-[#3159FF]/10 text-[#3159FF]' : 'text-[#3159FF] hover:bg-gray-50'}`}
                    >
                        <span className="text-xl mr-3">{item.label === "AI Agent" ? (<img src="/chatbot.png" alt="logo" className="object-contain h-8 w-8 -ml-1 " />) : item.icon}</span>
                        {isExpanded && (
                            <>
                                <span className="text-sm font-medium">{item.label}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Menu */}
            <div className="px-4 py-4 border-t border-[#E5E5E5]">
                {bottomMenuItems.map((item, index) => (
                    <div
                        data-tour-id={item.path}
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                        className={`flex items-center px-4 py-3 rounded-lg mb-2 cursor-pointer
                            ${location.pathname === item.path ? 'bg-[#3159FF]/10 text-[#3159FF]' : 'text-[#3159FF] hover:bg-gray-50'}`}
                    >
                        <span className="text-xl mr-3">{item.icon}</span>
                        {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
                    </div>
                ))}

                {/* Logout Button */}
                <div
                    onClick={handleLogout}
                    className="flex items-center px-4 py-3 rounded-lg cursor-pointer text-red-600 hover:bg-red-50"
                >
                    <span className="text-xl mr-3"><FaSignOutAlt /></span>
                    {isExpanded && <span className="text-sm font-medium">Logout</span>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar; 
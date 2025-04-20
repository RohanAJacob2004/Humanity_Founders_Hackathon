import React, { useState } from "react";
import { Bell, User, Search, Filter, Pause, Edit, Trash2, ChevronRight, Eye, Play } from "lucide-react";
import NewPromoters from "./NewPromoters";
import NewLeads from "./NewLeads";
import NewCampaignModal from "./NewCampaignModal";

const Campaigns = () => {
    const [activeTab, setActiveTab] = useState("pastPromoters");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Campaign data
    const campaigns = [
        {
            id: 1,
            name: "Summer Referral Program",
            dateRange: "5/31/2024 - 8/30/2024",
            status: "active",
            stats: {
                referrals: 245,
                conversion: "32%",
                roi: "287%"
            },
            suggestion: "Increase reward by 10% to boost conversion rates during peak season",
            actions: ["pause", "edit", "delete", "view"]
        },
        {
            id: 2,
            name: "Early Bird Special",
            dateRange: "8/20/2024 - 9/19/2024",
            status: "draft",
            stats: {
                referrals: 300,
                conversion: "40%",
                roi: "320%"
            },
            suggestion: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
            actions: ["play", "edit", "delete", "view"]
        }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "pastPromoters":
                return (
                    <div className="flex-1 overflow-auto p-6">
                        {/* Top Actions */}
                        <div className="flex items-center justify-between mb-6">
                            {/* Create New Campaign Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3159FF] to-[#B5D1FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <span className="text-xl">+</span>
                                <span>Create New Campaign</span>
                            </button>

                            {/* Search and Filter */}
                            <div className="flex items-center gap-4">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search campaigns..."
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Filter */}
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    <Filter className="text-gray-500" />
                                    <span className="text-gray-700">Filter</span>
                                </button>
                            </div>
                        </div>

                        {/* Campaign Stats */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[#3159FF]">2 Campaigns</span>
                            <span className="text-[#3159FF]">1 Active</span>
                        </div>

                        {/* Campaign Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            {campaigns.map((campaign) => (
                                <div key={campaign.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                    {/* Campaign Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{campaign.name}</h3>
                                            <p className="text-gray-500">{campaign.dateRange}</p>
                                        </div>
                                        <div className={`px-4 py-1 rounded-lg ${campaign.status === 'active'
                                            ? 'bg-[#3159FF]/10 text-[#3159FF]'
                                            : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {campaign.status}
                                        </div>
                                    </div>

                                    {/* Campaign Stats */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-center">
                                            <p className="text-gray-500">Referrals</p>
                                            <p className="text-xl font-medium">{campaign.stats.referrals}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-500">Conversion</p>
                                            <p className="text-xl font-medium">{campaign.stats.conversion}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-500">ROI</p>
                                            <p className="text-xl font-medium">{campaign.stats.roi}</p>
                                        </div>
                                    </div>

                                    {/* AI Suggestion */}
                                    <div className="bg-gradient-to-r from-[#E8F0FF] to-[#F6F9FF] border border-[#D7E5FF] rounded-lg p-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                                <img src="/ai-icon.png" alt="AI" className="w-4 h-4" />
                                            </div>
                                            <p className="text-gray-600">{campaign.suggestion}</p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            {campaign.actions.includes('pause') && (
                                                <button className="text-gray-500 hover:text-gray-700">
                                                    <Pause className="w-5 h-5" />
                                                </button>
                                            )}
                                            {campaign.actions.includes('play') && (
                                                <button className="text-gray-500 hover:text-gray-700">
                                                    <Play className="w-5 h-5" />
                                                </button>
                                            )}
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button className="text-red-500 hover:text-red-700">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "newPromoters":
                return <NewPromoters />;
            case "newLeads":
                return <NewLeads />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-[#E5E5E5]">
                <div className="h-16 flex items-center justify-between px-6">
                    {/* Left side - Campaigns */}
                    <div className="flex items-center">
                        <h1 className="text-lg font-medium text-gray-900">Campaigns</h1>
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

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                    <button
                        className={`px-6 py-3 text-sm font-medium ${activeTab === "pastPromoters"
                            ? "text-[#3159FF] border-b-2 border-[#3159FF]"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setActiveTab("pastPromoters")}
                    >
                        Past Promoters
                    </button>
                    <button
                        className={`px-6 py-3 text-sm font-medium ${activeTab === "newPromoters"
                            ? "text-[#3159FF] border-b-2 border-[#3159FF]"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setActiveTab("newPromoters")}
                    >
                        New Promoters
                    </button>
                    <button
                        className={`px-6 py-3 text-sm font-medium ${activeTab === "newLeads"
                            ? "text-[#3159FF] border-b-2 border-[#3159FF]"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setActiveTab("newLeads")}
                    >
                        New Leads
                    </button>
                </div>
            </div>

            {/* Content */}
            {renderContent()}

            {/* Modal */}
            <NewCampaignModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Campaigns; 
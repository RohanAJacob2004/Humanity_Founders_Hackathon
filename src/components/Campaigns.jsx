import React, { useState, useEffect } from "react";
import { Bell, User, Search, Filter, Pause, Edit, Trash2, ChevronRight, Eye, Play } from "lucide-react";
import NewPromoters from "./NewPromoters";
import NewLeads from "./NewLeads";
import NewCampaignModal from "./NewCampaignModal";
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const Campaigns = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("pastPromoters");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [campaigns, setCampaigns] = useState([
        {
            id: 1,
            campaign_name: "Summer Referral Program",
            campaign_description: "Summer Referral Program",
            campaign_start_date: "5/31/2024",
            campaign_end_date: "8/30/2024",
            campaign_status: "active",
            campaign_stats: {
                referrals: 245,
                conversion: "32%",
                roi: "287%"
            },
            campaign_suggestion: "Increase reward by 10% to boost conversion rates during peak season",
            campaign_actions: ["pause", "edit", "delete", "view"]
        },
        {
            id: 2,
            campaign_name: "Early Bird Special",
            campaign_description: "Early Bird Special",
            campaign_start_date: "8/20/2024",
            campaign_end_date: "9/19/2024",
            campaign_status: "draft",
            campaign_stats: {
                referrals: 300,
                conversion: "40%",
                roi: "320%"
            },
            campaign_suggestion: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
            campaign_actions: ["play", "edit", "delete", "view"]
        }
    ]);

    // Generate random campaign status
    const generateRandomStatus = () => {
        const statuses = ["active", "draft", "paused", "ended"];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    // Generate random campaign stats
    const generateRandomStats = () => {
        return {
            referrals: Math.floor(Math.random() * 500),
            conversion: `${Math.floor(Math.random() * 70)}%`,
            roi: `${Math.floor(Math.random() * 400)}%`
        };
    };

    // Generate random campaign suggestion
    const generateRandomSuggestion = () => {
        const suggestions = [
            "Increase reward by 15% to boost conversion rates during slow periods",
            "Consider extending this campaign based on strong early performance",
            "Target more users in the 25-34 demographic for better engagement",
            "Add social media sharing options to improve campaign visibility",
            "Consider a tiered reward structure to incentivize multiple referrals",
            "Simplify your referral process to improve conversion rates",
            "Add an early-bird bonus to drive more immediate participation",
            "Analyze which channels are driving the most conversions and double down",
            "A/B test different reward structures to optimize performance"
        ];
        return suggestions[Math.floor(Math.random() * suggestions.length)];
    };

    // Generate random campaign actions based on status
    const generateRandomActions = (status) => {
        switch (status) {
            case "active":
                return ["pause", "edit", "delete", "view"];
            case "draft":
                return ["play", "edit", "delete", "view"];
            case "paused":
                return ["play", "edit", "delete", "view"];
            case "ended":
                return ["edit", "delete", "view"];
            default:
                return ["edit", "delete", "view"];
        }
    };

    // Enrich campaign data with missing fields
    const enrichCampaignData = (campaign) => {
        const status = campaign.campaign_status || generateRandomStatus();
        return {
            ...campaign,
            id: campaign.id || Math.floor(Math.random() * 10000),
            campaign_status: status,
            campaign_stats: campaign.campaign_stats || generateRandomStats(),
            campaign_suggestion: campaign.campaign_suggestion || generateRandomSuggestion(),
            campaign_actions: campaign.campaign_actions || generateRandomActions(status)
        };
    };

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await fetch('/api/fetchCampaigns', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });


                if (response.status === 200) {
                    const data = await response.json();
                    // Enrich each fetched campaign with missing data
                    const enrichedData = data.map(campaign => enrichCampaignData(campaign));
                    setCampaigns(prevCampaigns => {
                        // Keep our initial demo campaigns and add the enriched fetched ones
                        const existingIds = prevCampaigns.map(c => c.id);
                        const newCampaigns = enrichedData.filter(c => !existingIds.includes(c.id));
                        return [...prevCampaigns, ...newCampaigns];
                    });
                } else if (response.status === 401) {
                    const refreshToken = localStorage.getItem('refresh_token');
                    const refreshResponse = await fetch('/api/refreshToken', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ refresh: refreshToken }),
                    });

                    if (refreshResponse.status === 200) {
                        const refreshData = await refreshResponse.json();
                        localStorage.setItem('access_token', refreshData.access);
                        fetchCampaigns();
                    } else {
                        console.error('Failed to refresh token');
                    }
                } else if (response.status === 404) {
                    alert('User has no business owner. Please setup your business profile first.');
                    navigate('/business-profile-setup');
                } else {
                    console.error('Failed to fetch campaigns');
                }
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };

        fetchCampaigns();
    }, []);

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
                            <span className="text-[#3159FF]">{campaigns.length} Campaigns</span>
                            <span className="text-[#3159FF]">{campaigns.filter(c => c.campaign_status === 'active').length} Active</span>
                        </div>

                        {/* Campaign Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            {campaigns.map((campaign) => (
                                <div key={campaign.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                    {/* Campaign Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{campaign.campaign_name}</h3>
                                            <p className="text-gray-500">{campaign.campaign_start_date} - {campaign.campaign_end_date || 'Ongoing'}</p>
                                        </div>
                                        <div className={`px-4 py-1 rounded-lg ${campaign.campaign_status === 'active'
                                            ? 'bg-[#3159FF]/10 text-[#3159FF]'
                                            : campaign.campaign_status === 'draft'
                                                ? 'bg-gray-100 text-gray-600'
                                                : campaign.campaign_status === 'paused'
                                                    ? 'bg-yellow-100 text-yellow-600'
                                                    : 'bg-red-100 text-red-600'
                                            }`}>
                                            {campaign.campaign_status}
                                        </div>
                                    </div>

                                    {/* Campaign Stats */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-center">
                                            <p className="text-gray-500">Referrals</p>
                                            <p className="text-xl font-medium">{campaign.campaign_stats.referrals}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-500">Conversion</p>
                                            <p className="text-xl font-medium">{campaign.campaign_stats.conversion}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-500">ROI</p>
                                            <p className="text-xl font-medium">{campaign.campaign_stats.roi}</p>
                                        </div>
                                    </div>

                                    {/* AI Suggestion */}
                                    <div className="bg-gradient-to-r from-[#E8F0FF] to-[#F6F9FF] border border-[#D7E5FF] rounded-lg p-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                                <img src="/chatbot.png" alt="AI" className="w-6 h-6" />
                                            </div>
                                            <p className="text-gray-600">{campaign.campaign_suggestion}</p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            {campaign.campaign_actions.includes('pause') && (
                                                <button className="text-gray-500 hover:text-gray-700">
                                                    <Pause className="w-5 h-5" />
                                                </button>
                                            )}
                                            {campaign.campaign_actions.includes('play') && (
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
            <Header title="Campaigns" />

            {/* Main Tabs navigation */}
            <div className="flex border-b border-gray-200">
                <button
                    className={`flex-1 px-6 py-3 text-sm font-medium ${activeTab === "pastPromoters"
                        ? "text-[#3159FF] border-b-2 border-[#3159FF] bg-[#3159FF]/10"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveTab("pastPromoters")}
                >
                    Past Promoters
                </button>
                <button
                    className={`flex-1 px-6 py-3 text-sm font-medium ${activeTab === "newPromoters"
                        ? "text-[#3159FF] border-b-2 border-[#3159FF] bg-[#3159FF]/10"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveTab("newPromoters")}
                >
                    New Promoters
                </button>
                <button
                    className={`flex-1 px-6 py-3 text-sm font-medium ${activeTab === "newLeads"
                        ? "text-[#3159FF] border-b-2 border-[#3159FF] bg-[#3159FF]/10"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveTab("newLeads")}
                >
                    New Leads
                </button>
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
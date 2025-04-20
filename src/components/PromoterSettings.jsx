import React, { useState } from "react";
import { Target, Info } from "lucide-react";
import followupPreview from "../../public/followup.png";
import landingPreview from "../../public/landingpreview.png";

const PromoterSettings = () => {
    const [campaignName, setCampaignName] = useState("");
    const [description, setDescription] = useState("");
    const [rewardType, setRewardType] = useState("points");
    const [rewardValue, setRewardValue] = useState("200");
    const [targetAll, setTargetAll] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const filters = [
        { id: "highValue", label: "High-Value Customers (Spent over $500)" },
        { id: "recent", label: "Recent Customers (Purchased in last 30 days)" },
        { id: "inactive", label: "Inactive Customers (No purchase in last 90 days)" }
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Target className="text-gray-500" />
                        <h2 className="text-lg font-medium text-gray-900">Promoter Settings</h2>
                    </div>

                    {/* Campaign Name */}
                    <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Campaign Name *</label>
                            <Info className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={campaignName}
                            onChange={(e) => setCampaignName(e.target.value)}
                            placeholder="Summer Referral Special"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Promoter Message *</label>
                            <Info className="w-4 h-4 text-gray-400" />
                        </div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your campaign and its goals..."
                            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Reward Type and Value */}
                    <div className="space-y-2 mb-6">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <label className="text-sm font-medium text-gray-700">Reward Type *</label>
                                    <Info className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="bg-blue-50 border border-blue-500 rounded-lg p-4">
                                    <div className="text-blue-600 font-medium">Points</div>
                                    <div className="text-blue-600 text-sm">($1 is equivalent to 10 points)</div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <label className="text-sm font-medium text-gray-700">Reward Value *</label>
                                    <Info className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="border border-gray-300 rounded-lg p-6">
                                    <div className="text-gray-900">200 points</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Images */}
                    <div className="space-y-4 mb-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <label className="text-sm font-medium text-gray-700">Follow-up Preview</label>
                                    <Info className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <img src={followupPreview} alt="Follow-up Preview" className="w-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <label className="text-sm font-medium text-gray-700">Landing Preview</label>
                                    <Info className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <img src={landingPreview} alt="Landing Preview" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Campaign Status */}

                </div>
            </div>
        </div>
    );
};

export default PromoterSettings; 
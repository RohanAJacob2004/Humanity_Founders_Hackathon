import React, { useState } from "react";
import { X, Target, Info } from "lucide-react";
import followupleads from "../../public/followupleads.png";

const NewCampaignModal = ({ isOpen, onClose }) => {
    const [campaignName, setCampaignName] = useState("");
    const [description, setDescription] = useState("");
    const [rewardType, setRewardType] = useState("points");
    const [rewardValue, setRewardValue] = useState("200");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[800px] max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <Target className="text-gray-500" />
                        <h2 className="text-lg font-medium text-gray-900">New Campaign</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
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
                            <label className="text-sm font-medium text-gray-700">Leads Message *</label>
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

                    {/* Form Fields */}
                    <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Form Fields *</label>
                            <Info className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Full Name</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Email Address</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Phone Number</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Agree to Terms and Conditions</span>
                            </label>
                        </div>
                    </div>

                    {/* Preview Image */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Preview</label>
                            <Info className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <img src={followupleads} alt="Campaign Preview" className="w-full" />
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-4 p-4 border-t border-gray-200">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Create Campaign
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewCampaignModal; 
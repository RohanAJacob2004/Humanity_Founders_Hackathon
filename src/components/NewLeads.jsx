import React from "react";
import { Bell, User, Search, Filter, Pause, Edit, Trash2, ChevronRight, Eye, Play, Target } from "lucide-react";
import followupleads from "../../public/followupleads.png";

const NewLeads = () => {
    // Sample data for new leads
    const leads = [
        {
            id: 1,
            name: "Alex Thompson",
            date: "5/31/2024",
            source: "Referral",
            status: "new",
            stats: {
                value: "$2,500",
                probability: "75%",
                expectedClose: "7 days"
            },
            suggestion: "High probability lead with good potential value",
            actions: ["contact", "assign", "view"]
        },
        {
            id: 2,
            name: "Emily Rodriguez",
            date: "6/1/2024",
            source: "Website",
            status: "new",
            stats: {
                value: "$1,800",
                probability: "60%",
                expectedClose: "14 days"
            },
            suggestion: "Consider offering a limited-time discount to accelerate conversion",
            actions: ["contact", "assign", "view"]
        }
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
                {/* Top Actions */}
                <div className="flex items-center justify-between mb-6">
                    {/* Search and Filter */}
                    <div className="flex items-center gap-4">
                        {/* Search and filter components can be added here if needed */}
                    </div>
                </div>

                <div className="mt-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Target className="text-gray-500" />
                                <h3 className="text-lg font-medium text-gray-900">Leads Settings</h3>
                            </div>
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <img src={followupleads} alt="Leads Settings Preview" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewLeads; 
import React, { useState } from "react";
import { Bell, User, Search, Filter, Pause, Edit, Trash2, ChevronRight, Eye, Play, Target, Briefcase } from "lucide-react";
import PromoterSettings from "./PromoterSettings";
import LeadsSettings from "./LeadsSettings";

const NewPromoters = () => {
    const [activeSubTab, setActiveSubTab] = useState("promoterSettings");

    // Sample data for new promoters
    const promoters = [
        {
            id: 1,
            name: "Sarah Johnson",
            date: "5/31/2024",
            status: "pending",
            stats: {
                referrals: 12,
                conversion: "45%",
                roi: "210%"
            },
            suggestion: "High conversion rate suggests potential for increased rewards",
            actions: ["approve", "reject", "view"]
        },
        {
            id: 2,
            name: "Michael Chen",
            date: "6/1/2024",
            status: "pending",
            stats: {
                referrals: 8,
                conversion: "38%",
                roi: "195%"
            },
            suggestion: "Consider additional training to improve conversion rates",
            actions: ["approve", "reject", "view"]
        }
    ];

    const renderContent = () => {
        switch (activeSubTab) {
            case "promoterSettings":
                return <PromoterSettings />;
            case "leadsSettings":
                return <LeadsSettings />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* Sub-tabs */}
            <div className="flex border-b border-gray-200">
                <button
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium ${activeSubTab === "promoterSettings"
                        ? "text-[#3159FF] border-b-2 border-[#3159FF] bg-[#3159FF]/10"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveSubTab("promoterSettings")}
                >
                    <Target className="w-4 h-4" />
                    Promoter Settings
                </button>
                <button
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium ${activeSubTab === "leadsSettings"
                        ? "text-[#3159FF] border-b-2 border-[#3159FF] bg-[#3159FF]/10"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveSubTab("leadsSettings")}
                >
                    <Briefcase className="w-4 h-4" />
                    Leads Settings
                </button>
            </div>

            {/* Content */}
            {renderContent()}
        </div>
    );
};

export default NewPromoters; 
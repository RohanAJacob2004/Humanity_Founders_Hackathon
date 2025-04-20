import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PromoterProfile } from "../components/ui/promoter-profile";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export const PromoterProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // In a real application, you would fetch the promoter data based on the ID
    // For now, we'll use mock data
    const promoter = {
        id: id,
        name: "Emery Dokidis",
        email: "emerydokidis@gmail.com",
        contactNo: "+979970174715",
        status: "Active",
        leads: 12,
        conversionRate: "50%",
        lastFollowUp: "28-4-2024",
        revenueGenerated: "$50"
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-[#333333]"
                    onClick={() => navigate("/promoters")}
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Promoters</span>
                </Button>
            </div>
            <PromoterProfile promoter={promoter} />
        </div>
    );
}; 
import React from "react";
import { Card } from "./card";
import { UsersIcon, PercentIcon, DollarSignIcon } from "lucide-react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { PromoterTabs } from "./promoter-tabs";

export const PromoterProfile = ({ promoter, onClose }) => {
    if (!promoter) return null;

    const metrics = [
        {
            title: "Total Referrals",
            value: "24",
            icon: <UsersIcon className="h-6 w-6" />,
            bgColor: "bg-[#f4f8ff]",
            iconBgColor: "bg-[#e2ebff]",
            viewAll: true
        },
        {
            title: "Conversion Rate",
            value: "75%",
            icon: <PercentIcon className="h-6 w-6" />,
            bgColor: "bg-[#f6fcf8]",
            iconBgColor: "bg-[#e2ffe8]",
            viewAll: true
        },
        {
            title: "Revenue Generated",
            value: "$1250",
            icon: <DollarSignIcon className="h-6 w-6" />,
            bgColor: "bg-[#fbf6fe]",
            iconBgColor: "bg-[#f5e2ff]",
            viewAll: true
        },
        {
            title: "Last follow-up",
            value: "28-4-2024",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 8H19V21H5V8Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 12H14V16H10V12Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ),
            bgColor: "bg-[#f4f8ff]",
            iconBgColor: "bg-[#e2ebff]",
            viewAll: true
        }
    ];

    return (
        <Card className="w-full min-h-[275px] bg-white p-6">
            <div className="flex flex-col gap-[35px]">
                {/* Profile Info Section */}
                <div className="flex items-start gap-6 flex-wrap">
                    {/* Profile Avatar and Name */}
                    <div className="flex items-center gap-5">
                        <div className="relative w-[100px] h-[100px] bg-[#b5d4ff] rounded-full flex items-center justify-center">
                            <div className="text-white">
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path d="M5.83333 21.875H29.1667M11.6667 4.375H23.3333" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[#333333] text-lg font-medium">{promoter.name}</h2>
                            <div className="px-3 py-1 bg-[#28c76f1a] text-[#28c76f] rounded-md text-sm inline-block w-fit">
                                {promoter.status}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex gap-5 ml-auto flex-wrap">
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-[#333333]" />
                            <div className="flex flex-col">
                                <span className="text-[#333333] text-sm">Email ID:</span>
                                <span className="text-[#666666]">{promoter.email || "emerydokidis@gmail.com"}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-[#333333]" />
                            <div className="flex flex-col">
                                <span className="text-[#333333] text-sm">Phone Number:</span>
                                <span className="text-[#666666]">{promoter.contactNo}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-[#333333]" />
                            <button className="text-[#4084e8] text-sm">Send Message</button>
                        </div>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className={`${metric.bgColor} rounded-[10px] p-5 flex items-center gap-5`}
                        >
                            <div className={`w-[50px] h-[50px] ${metric.iconBgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                                {metric.icon}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[#979797] text-sm">{metric.title}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#1c1c1c] text-xl font-medium">{metric.value}</span>
                                    {metric.viewAll && (
                                        <span className="text-[#4071ba] text-xs cursor-pointer">View All</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8">
                <PromoterTabs />
            </div>
        </Card>
    );
}; 
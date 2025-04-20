import {
    EyeIcon,
    FilterIcon,
    MessageSquarePlusIcon,
    SearchIcon,
    DollarSignIcon,
    PercentIcon,
    TrendingDownIcon,
    TrendingUpIcon,
    UsersIcon,
    Bell,
    User
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { UploadModal } from "./ui/upload-modal";
import { PromoterProfile } from "./ui/promoter-profile";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import Header from './Header';

const HeaderSection = () => {
    // Data for metric cards
    const metricCards = [
        {
            title: "Total Customers",
            value: "8",
            change: "+12%",
            isPositive: true,
            iconBgColor: "bg-[#e0e3dd]",
            icon: <UsersIcon className="h-6 w-6" />,
        },
        {
            title: "New Customers",
            value: "94",
            change: "+8%",
            isPositive: true,
            iconBgColor: "bg-[#ffd2bf]",
            icon: <UsersIcon className="h-6 w-6" />,
        },
        {
            title: "Average Conversion rate",
            value: "64%",
            change: "-3%",
            isPositive: false,
            iconBgColor: "bg-[#ffc8e1]",
            icon: <PercentIcon className="h-6 w-6" />,
        },
        {
            title: "Total Revenue Generated",
            value: "$23,900",
            change: "+15%",
            isPositive: true,
            iconBgColor: "bg-[#d7f0ff]",
            icon: <DollarSignIcon className="h-6 w-6" />,
        },
    ];

    return (
        <Card className="flex w-full h-28 items-start gap-[29.5px] p-5 bg-white rounded-[10px]">
            <CardContent className="flex items-start gap-[29.5px] p-0 w-full">
                {metricCards.map((card, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <Separator orientation="vertical" className="h-[50px]" />
                        )}

                        <div className="flex items-start gap-2.5">
                            <div
                                className={`relative w-[50px] h-[50px] ${card.iconBgColor} rounded-[25px] flex items-center justify-center`}
                            >
                                {card.icon}
                            </div>

                            <div className="flex flex-col items-start gap-[5px]">
                                <div className="font-semibold text-[#979797] text-base">
                                    {card.title}
                                </div>

                                <div className="flex items-center justify-between w-full">
                                    <div className="font-semibold text-[#1c1c1c] text-[21px]">
                                        {card.value}
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 w-full">
                                    <div className="flex items-center">
                                        <div
                                            className={`font-normal ${card.isPositive ? "text-[#28c76f]" : "text-[#ff4c51]"} text-xs text-right leading-[18px]`}
                                        >
                                            {card.change}
                                        </div>
                                        {card.isPositive ? (
                                            <TrendingUpIcon className="w-4 h-4 text-[#28c76f]" />
                                        ) : (
                                            <TrendingDownIcon className="w-4 h-4 text-[#ff4c51]" />
                                        )}
                                    </div>

                                    <div className="font-medium text-[#979797] text-[10px]">
                                        vs last month
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </CardContent>
        </Card>
    );
};

export const PromoterListSection = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const navigate = useNavigate();

    // Sample data for promoters
    const promoters = [
        {
            id: 1,
            name: "Emery Dokidis",
            contactNo: "+979970174715",
            leads: 12,
            conversionRate: "50%",
            lastFollowUp: "28-4-2024",
            revenueGenerated: "$50",
            status: "Active",
            selected: true,
        },
        {
            id: 2,
            name: "Kadin Lipshutz",
            contactNo: "+971501948279",
            leads: 8,
            conversionRate: "30%",
            lastFollowUp: "27-5-2024",
            revenueGenerated: "$900",
            status: "Active",
            selected: true,
        },
        {
            id: 3,
            name: "Randy Culhane",
            contactNo: "+971501598978",
            leads: 15,
            conversionRate: "60%",
            lastFollowUp: "29-5-2024",
            revenueGenerated: "$1000",
            status: "Inactive",
            selected: false,
        },
        {
            id: 4,
            name: "Jaxson Vaccaro",
            contactNo: "+971522503635",
            leads: 10,
            conversionRate: "45%",
            lastFollowUp: "30-6-2024",
            revenueGenerated: "$500",
            status: "Completed",
            selected: false,
        },
        {
            id: 5,
            name: "Jocelyn Levin",
            contactNo: "+971554315300",
            leads: 6,
            conversionRate: "28%",
            lastFollowUp: "01-7-2024",
            revenueGenerated: "$1,500",
            status: "Inactive",
            selected: false,
        },
        {
            id: 6,
            name: "Maren Septimus",
            contactNo: "+971525620832",
            leads: 18,
            conversionRate: "65%",
            lastFollowUp: "03-7-2024",
            revenueGenerated: "$2,000",
            status: "Completed",
            selected: false,
        },
        {
            id: 7,
            name: "Haylie Saris",
            contactNo: "+971503328228",
            leads: 13,
            conversionRate: "58%",
            lastFollowUp: "05-7-2024",
            revenueGenerated: "$300",
            status: "Active",
            selected: false,
        },
        {
            id: 8,
            name: "Randy Herwitz",
            contactNo: "+971554231522",
            leads: 12,
            conversionRate: "50%",
            lastFollowUp: "10-7-2024",
            revenueGenerated: "$600",
            status: "Inactive",
            selected: false,
        },
    ];

    // Function to get badge color based on status
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "Active":
                return "bg-[#4084e81a] text-[#4184e9]";
            case "Inactive":
                return "bg-[#fcaa5c1a] text-[#fcaa5c]";
            case "Completed":
                return "bg-[#28c76f1a] text-[#28c76f]";
            default:
                return "";
        }
    };

    return (
        <div className="flex flex-col h-full">
            <Header title="Promoters" />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
                <HeaderSection />
                <div className="flex justify-between items-center mt-6">
                    <Button
                        onClick={() => setIsUploadModalOpen(true)}
                        className="bg-gradient-to-r from-[#3159FF]/80 to-[#B5D4FF] text-white px-4 py-2.5 h-[42px] rounded-lg flex items-center gap-[15px]"
                    >
                        <div className="w-[22px] h-[22px] flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute w-[13px] h-[2px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute w-[2px] h-[13px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                        <span className="text-base">New Promoter</span>
                    </Button>
                </div>

                <UploadModal
                    isOpen={isUploadModalOpen}
                    onClose={() => setIsUploadModalOpen(false)}
                />

                <section className="w-full mt-6">
                    <Card className="w-full">
                        <CardContent className="p-5 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center bg-neutral-100 rounded">
                                        <div className="flex items-center w-[307px] py-[5px]">
                                            <div className="flex items-center gap-2 px-2 py-1 flex-1">
                                                <SearchIcon className="w-4 h-4 text-gray-500" />
                                                <Input
                                                    className="border-0 bg-transparent h-auto p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-desktopgray"
                                                    placeholder="Search"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="flex items-center gap-3 border-[#cccccc] text-[#333333] text-lg font-normal"
                                    >
                                        <FilterIcon className="w-5 h-5" />
                                        Filter
                                    </Button>
                                </div>
                            </div>

                            <div className="border-[0.5px] border-[#cacaca] rounded-lg bg-[#fdfdfd] p-5">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b-0">
                                            <TableHead className="w-6"></TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Promoter Name
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Contact No.
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Leads
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Conversion Rate
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Last Follow-Up
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Revenue Generated
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Referrer Status
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Actions
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {promoters.map((promoter) => (
                                            <TableRow key={promoter.id} className="border-b-0 relative">
                                                <TableCell className="py-3">
                                                    <Checkbox checked={promoter.selected} />
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {promoter.name}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {promoter.contactNo}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {promoter.leads}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {promoter.conversionRate}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {promoter.lastFollowUp}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {promoter.revenueGenerated}
                                                </TableCell>
                                                <TableCell className="py-3">
                                                    <Badge
                                                        className={`font-normal text-sm ${getStatusBadgeClass(promoter.status)}`}
                                                    >
                                                        {promoter.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="py-3">
                                                    <div className="flex items-center gap-2.5">
                                                        <div className="relative group">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                                onClick={() => navigate(`/promoters/${promoter.id}`)}
                                                            >
                                                                <EyeIcon className="h-6 w-6" />
                                                            </Button>
                                                            <div className="absolute right-0 top-full mt-2 bg-[#4184e9] text-white text-xs py-2.5 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                View Profile
                                                            </div>
                                                        </div>
                                                        <div className="relative group">
                                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                                <MessageSquarePlusIcon className="h-6 w-6" />
                                                            </Button>
                                                            <div className="absolute right-0 top-full mt-2 bg-[#4184e9] text-white text-xs py-2.5 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                Send follow-up message
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
};

export default PromoterListSection;

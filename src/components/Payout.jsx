import {
    EyeIcon,
    DollarSignIcon,
    CoinsIcon,
    ArrowRightLeftIcon,
    SearchIcon,
    FilterIcon,
    Bell,
    User
} from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

const HeaderSection = () => {
    // Data for metric cards
    const metricCards = [
        {
            title: "Total Points Given",
            value: "15,240",
            iconBgColor: "bg-[#e0e3dd]",
            icon: <CoinsIcon className="h-6 w-6" />,
        },
        {
            title: "Current Point Balance",
            value: "5,430",
            iconBgColor: "bg-[#ffd2bf]",
            icon: <DollarSignIcon className="h-6 w-6" />,
        },
        {
            title: "Last Points Transfer",
            value: "2,500",
            iconBgColor: "bg-[#d7f0ff]",
            icon: <ArrowRightLeftIcon className="h-6 w-6" />,
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
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </CardContent>
        </Card>
    );
};

const PayoutTable = () => {
    // Sample data for payouts
    const payouts = [
        {
            id: "PAY001",
            promoterName: "Emery Dokidis",
            points: 1500,
            rewardDate: "28-4-2024",
            rewardEarnedFor: "Customer Referrals",
            status: "paid"
        },
        {
            id: "PAY002",
            promoterName: "Kadin Lipshutz",
            points: 2000,
            rewardDate: "27-5-2024",
            rewardEarnedFor: "Sales Commission",
            status: "disputed"
        },
        {
            id: "PAY003",
            promoterName: "Randy Culhane",
            points: 1000,
            rewardDate: "29-5-2024",
            rewardEarnedFor: "Customer Referrals",
            status: "paid"
        },
        {
            id: "PAY004",
            promoterName: "Sarah Johnson",
            points: 3500,
            rewardDate: "01-6-2024",
            rewardEarnedFor: "Performance Bonus",
            status: "pending"
        },
        {
            id: "PAY005",
            promoterName: "Michael Chen",
            points: 750,
            rewardDate: "02-6-2024",
            rewardEarnedFor: "Early Bird Bonus",
            status: "paid"
        },
        {
            id: "PAY006",
            promoterName: "Emma Rodriguez",
            points: 2800,
            rewardDate: "03-6-2024",
            rewardEarnedFor: "Quarterly Achievement",
            status: "processing"
        },
        {
            id: "PAY007",
            promoterName: "Alex Thompson",
            points: 1200,
            rewardDate: "04-6-2024",
            rewardEarnedFor: "Customer Referrals",
            status: "disputed"
        },
        {
            id: "PAY008",
            promoterName: "Lisa Wang",
            points: 4000,
            rewardDate: "05-6-2024",
            rewardEarnedFor: "Sales Commission",
            status: "paid"
        },
        {
            id: "PAY009",
            promoterName: "James Wilson",
            points: 900,
            rewardDate: "06-6-2024",
            rewardEarnedFor: "Welcome Bonus",
            status: "pending"
        },
        {
            id: "PAY010",
            promoterName: "Sofia Garcia",
            points: 3200,
            rewardDate: "07-6-2024",
            rewardEarnedFor: "Performance Bonus",
            status: "processing"
        }
    ];

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "paid":
                return "bg-[#28c76f1a] text-[#28c76f]";
            case "disputed":
                return "bg-[#fcaa5c1a] text-[#fcaa5c]";
            case "pending":
                return "bg-[#4084e81a] text-[#4184e9]";
            case "processing":
                return "bg-[#7367f01a] text-[#7367f0]";
            default:
                return "";
        }
    };

    return (
        <Card className="w-full">
            <CardContent className="p-5 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <h2 className="font-semibold text-lg text-[#1c1c1c]">
                            Payout History
                        </h2>
                    </div>

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
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Payout ID
                                </TableHead>
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Promoter Name
                                </TableHead>
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Points
                                </TableHead>
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Reward Date
                                </TableHead>
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Reward Earned For
                                </TableHead>
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Status
                                </TableHead>
                                <TableHead className="font-semibold text-sm text-[#333333]">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payouts.map((payout) => (
                                <TableRow key={payout.id} className="border-b-0">
                                    <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                        {payout.id}
                                    </TableCell>
                                    <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                        {payout.promoterName}
                                    </TableCell>
                                    <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                        {payout.points}
                                    </TableCell>
                                    <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                        {payout.rewardDate}
                                    </TableCell>
                                    <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                        {payout.rewardEarnedFor}
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Badge className={getStatusBadgeClass(payout.status)}>
                                            {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="relative group">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                >
                                                    <EyeIcon className="h-6 w-6" />
                                                </Button>
                                                <div className="absolute right-0 top-full mt-2 bg-[#4184e9] text-white text-xs py-2.5 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    View Details
                                                </div>
                                            </div>
                                            <span className="text-sm text-blue-600 cursor-pointer">
                                                {payout.status === "paid" ? "Request Dispute" : "Track Dispute"}
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

const Payout = () => {
    return (
        <div className="flex flex-col h-full">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
                {/* Left side - Title */}
                <div className="flex items-center">
                    <h1 className="text-lg font-medium text-gray-900">Payouts</h1>
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

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
                <HeaderSection />
                <div className="mt-6">
                    <PayoutTable />
                </div>
            </div>
        </div>
    );
};

export default Payout; 
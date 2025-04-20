import React, { useEffect, useState } from "react";
import { InfoIcon, DollarSignIcon, PercentIcon, TrendingDownIcon, TrendingUpIcon, UsersIcon, Bell, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import Header from './Header';

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log("Component mounted, setting isVisible to true");
        // Add a small delay to ensure the initial false state is rendered
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    // Metrics Card Data
    const metricCards = [
        {
            icon: <UsersIcon className="w-6 h-6" />,
            iconBgColor: "#e0e3dd",
            title: "Total Promoters",
            value: "1,234",
            change: {
                value: "+12%",
                isPositive: true,
            },
        },
        {
            icon: <PercentIcon className="w-6 h-6" />,
            iconBgColor: "#ffd2bf",
            title: "Conversion rate",
            value: "23.5%",
            change: {
                value: "-2.4%",
                isPositive: false,
            },
        },
        {
            icon: <DollarSignIcon className="w-6 h-6" />,
            iconBgColor: "#ffc8e1",
            title: "Revenue Generated",
            value: "$12,345",
            change: {
                value: "+8.7%",
                isPositive: true,
            },
        },
        {
            icon: (
                <div className="relative w-6 h-6">
                    <img
                        className="absolute w-4 h-[18px] top-[3px] left-1"
                        alt="Group"
                        src="/group.png"
                    />
                </div>
            ),
            iconBgColor: "#d7f0ff",
            title: "Active Campaigns",
            value: "3",
        },
    ];

    // Performance Metrics Data
    const metricsData = [
        {
            title: "Repeat Referral Rate",
            percentage: "42%",
            color: "#28c76f",
            progressPercentage: 42,
        },
        {
            title: "Referral Engagement Rate",
            percentage: "67%",
            color: "#f98272",
            progressPercentage: 67,
        },
        {
            title: "Churn Rate of Leads",
            percentage: "28%",
            color: "#4b91ff",
            progressPercentage: 28,
        },
        {
            title: "Upsell Rate of Leads",
            percentage: "19%",
            color: "#b113c0",
            progressPercentage: 19,
        },
    ];

    // Chart Data
    const monthlyData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const percentageLabels = ["50%", "40%", "30%", "20%", "10%", "0%"];
    const conversionData = {
        referralsSent: "57%",
        converted: "42%",
    };
    const channelPerformance = [
        { name: "Facebook", percentage: "78%", bgColor: "bg-[#ffd2bf99]" },
        { name: "Twitter", percentage: "45%", bgColor: "bg-[#ffc8e199]" },
        { name: "LinkedIn", percentage: "23%", bgColor: "bg-[#d7f0ff99]" },
    ];

    // Activities Data
    const activities = [
        {
            activity: "Julian earned $10",
            date: "28-4-2024",
            time: "10:30 AM",
        },
        {
            activity: "John Doe signed up from your referral link",
            date: "29-4-2024",
            time: "9:45 AM",
        },
        {
            activity: "You reached 50 referrals milestone!",
            date: "30-4-2024",
            time: "8:20 AM",
        },
        {
            activity: "You updated your referral campaign",
            date: "31-4-2024",
            time: "7:00 AM",
        },
    ];

    // Leaderboard Data
    const leaderboardData = [
        {
            rank: 1,
            name: "Emery Dokidis",
            conversionRate: 150,
            referralsSent: 80,
            successfulConversions: "60%",
            revenueGenerated: "$1,200",
        },
        {
            rank: 2,
            name: "Kadin Lipshutz",
            conversionRate: 132,
            referralsSent: 90,
            successfulConversions: "65%",
            revenueGenerated: "$980",
        },
        {
            rank: 3,
            name: "Randy Culhane",
            conversionRate: 110,
            referralsSent: 60,
            successfulConversions: "60%",
            revenueGenerated: "$880",
        },
        {
            rank: 4,
            name: "Jaxson Vaccaro",
            conversionRate: 100,
            referralsSent: 85,
            successfulConversions: "75%",
            revenueGenerated: "$500",
        },
        {
            rank: 5,
            name: "Jocelyn Levin",
            conversionRate: 50,
            referralsSent: 30,
            successfulConversions: "63%",
            revenueGenerated: "$600",
        },
        {
            rank: 6,
            name: "Maren Septimus",
            conversionRate: 80,
            referralsSent: 35,
            successfulConversions: "25%",
            revenueGenerated: "$200",
        },
        {
            rank: 7,
            name: "Haylie Saris",
            conversionRate: 120,
            referralsSent: 55,
            successfulConversions: "45%",
            revenueGenerated: "$150",
        },
        {
            rank: 8,
            name: "Randy Herwitz",
            conversionRate: 110,
            referralsSent: 90,
            successfulConversions: "65%",
            revenueGenerated: "$880",
        },
    ];

    return (
        <div className="flex flex-col h-full">
            <Header title="Dashboard" />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
                {/* Metrics Cards */}
                <Card className="flex items-start gap-[43.5px] p-5 w-full bg-white rounded-[10px] mb-8">
                    <CardContent className="flex items-start gap-[70px] p-0 w-full">
                        {metricCards.map((card, index) => (
                            <React.Fragment key={card.title}>
                                <div className="inline-flex items-start gap-2.5">
                                    <div
                                        className="relative w-[50px] h-[50px] rounded-[25px] flex items-center justify-center"
                                        style={{ backgroundColor: card.iconBgColor }}
                                    >
                                        {card.icon}
                                    </div>

                                    <div className="inline-flex flex-col items-start gap-[5px]">
                                        <div className="font-semibold text-[#979797] text-base">
                                            {card.title}
                                        </div>

                                        <div className="flex items-center justify-between self-stretch w-full">
                                            <div className="font-semibold text-[#1c1c1c] text-[21px]">
                                                {card.value}
                                            </div>
                                        </div>

                                        {card.change && (
                                            <div className="flex items-center gap-5 self-stretch w-full">
                                                <div className="inline-flex items-center">
                                                    <div
                                                        className={`font-normal text-xs text-right leading-[18px] ${card.change.isPositive
                                                            ? "text-[#28c76f]"
                                                            : "text-[#ff4c51]"
                                                            }`}
                                                    >
                                                        {card.change.value}
                                                    </div>
                                                    {card.change.isPositive ? (
                                                        <TrendingUpIcon className="w-4 h-4" />
                                                    ) : (
                                                        <TrendingDownIcon className="w-4 h-4" />
                                                    )}
                                                </div>
                                                <div className="font-medium text-[#979797] text-[10px]">
                                                    vs last month
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {index < metricCards.length - 1 && (
                                    <Separator orientation="vertical" className="h-[50px]" />
                                )}
                            </React.Fragment>
                        ))}
                    </CardContent>
                </Card>

                {/* Performance Metrics */}
                <div className="flex flex-wrap gap-24 w-full">
                    {metricsData.map((metric, index) => (
                        <Card
                            key={index}
                            className="w-[260px] h-[200px] rounded-[10px] overflow-hidden flex-shrink-0"
                        >
                            <CardContent className="p-0 h-full relative">
                                <div className="inline-flex items-center gap-[5px] absolute top-[21px] left-[30px]">
                                    <div className="font-medium text-[#333333] text-base leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                        {metric.title}
                                    </div>
                                    <InfoIcon className="w-4 h-4" />
                                </div>

                                <div className="absolute w-28 h-[110px] top-[61px] left-[75px]">
                                    <div className="relative w-[110px] h-[110px]">
                                        <div
                                            className="absolute top-[45px] left-[35px] font-bold text-lg leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]"
                                            style={{ color: metric.color }}
                                        >
                                            {metric.percentage}
                                        </div>

                                        <div className="absolute w-[110px] h-[110px] top-0 left-0">
                                            <svg
                                                width="110"
                                                height="110"
                                                viewBox="0 0 110 110"
                                                className="absolute top-0 left-0"
                                            >
                                                <circle
                                                    cx="55"
                                                    cy="55"
                                                    r="50"
                                                    fill="none"
                                                    stroke="#E6E6E6"
                                                    strokeWidth="10"
                                                />
                                                <circle
                                                    cx="55"
                                                    cy="55"
                                                    r="50"
                                                    fill="none"
                                                    stroke={metric.color}
                                                    strokeWidth="10"
                                                    strokeDasharray={`${metric.progressPercentage * 3.14}, 314`}
                                                    strokeDashoffset={isVisible ? "0" : "314"}
                                                    transform="rotate(-90, 55, 55)"
                                                    style={{
                                                        transition: "stroke-dashoffset 2.5s ease-in-out",
                                                        willChange: "stroke-dashoffset"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Performance Chart and Stats */}
                <div className="flex flex-col md:flex-row items-start gap-3 w-full">
                    <Card className="w-full md:flex-1">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-semibold text-[#1c1c1c]">
                                Promoter Performance Over Time
                            </CardTitle>

                            <Select defaultValue="last-6-months">
                                <SelectTrigger className="w-auto h-9 border border-[#dddddd] bg-white text-[#979797] text-sm font-medium">
                                    <SelectValue placeholder="Last 6 months" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="last-6-months">Last 6 months</SelectItem>
                                    <SelectItem value="last-3-months">Last 3 months</SelectItem>
                                    <SelectItem value="last-year">Last year</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardHeader>

                        <CardContent>
                            <div className="relative h-[376px]">
                                <div className="absolute top-0 left-0 h-[348px]">
                                    <div className="flex flex-col h-full justify-between">
                                        {percentageLabels.map((label, index) => (
                                            <div
                                                key={`y-axis-${index}`}
                                                className="flex items-center gap-[15px]"
                                            >
                                                <span className="text-xs font-medium text-[#979797] w-8 text-center">
                                                    {label}
                                                </span>
                                                <div className="w-[600px] h-px bg-[#f0f0f0]" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute top-[57px] left-[54px] w-[592px] h-[90px]">
                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 592 90"
                                        fill="none"
                                    >
                                        <path
                                            d="M0 90 L148 45 L296 0 L444 45 L592 90"
                                            stroke="#3059fe"
                                            strokeWidth="2"
                                            strokeDasharray="1000"
                                            strokeDashoffset={isVisible ? "0" : "1000"}
                                            style={{
                                                transition: "stroke-dashoffset 3s ease-in-out",
                                                willChange: "stroke-dashoffset"
                                            }}
                                        />
                                    </svg>
                                </div>

                                <div className="absolute top-[41px] left-[149px] h-[298px]">
                                    <div className="h-[265px] absolute top-[33px] left-[22px] w-5 [background:linear-gradient(180deg,rgba(88,64,186,0.1)_19%,rgba(88,64,186,0.02)_100%)]">
                                        <div className="w-px h-full bg-gray-200" />
                                    </div>

                                    <div className="absolute w-3 h-3 top-[94px] left-[26px] shadow-[0px_2px_2px_#0000001a]">
                                        <div className="h-3 bg-[#3059fe] rounded-md border-[3px] border-solid border-white rotate-180" />
                                    </div>

                                    <div className="absolute w-[66px] h-[43px] top-0 left-0">
                                        <div className="flex items-center gap-1 px-3 py-2 bg-[#979797] rounded-md backdrop-blur-[10px]">
                                            <div className="flex flex-col items-start justify-center gap-1">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-[#3059fe] rounded rotate-180" />
                                                    <div className="text-white text-xs font-medium">30%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            className="absolute w-[17px] h-[9px] top-[34px] left-[23px]"
                                            alt="Tooltip pointer"
                                            src="/polygon-1.svg"
                                        />
                                    </div>
                                </div>

                                <div className="absolute top-[358px] left-[37px] flex items-center gap-12">
                                    {monthlyData.map((month, index) => (
                                        <div
                                            key={`x-axis-${index}`}
                                            className="w-[60px] text-xs font-medium text-[#979797] text-center"
                                        >
                                            {month}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col w-full md:w-[409px] gap-[25px]">
                        <Card>
                            <CardHeader className="pb-0">
                                <CardTitle className="text-lg font-semibold text-[#1c1c1c]">
                                    Conversion Success Rate
                                </CardTitle>
                            </CardHeader>

                            <Separator className="my-5 mx-5" />

                            <CardContent className="flex items-center justify-between">
                                <div className="relative w-[150px] h-[150px]">
                                    <svg
                                        width="150"
                                        height="150"
                                        viewBox="0 0 150 150"
                                    >
                                        <circle
                                            cx="75"
                                            cy="75"
                                            r="60"
                                            fill="none"
                                            stroke="#EDEAFC"
                                            strokeWidth="15"
                                        />
                                        <circle
                                            cx="75"
                                            cy="75"
                                            r="60"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="15"
                                            strokeDasharray="377"
                                            strokeDashoffset={isVisible ? "188.4" : "377"}
                                            transform="rotate(-90, 75, 75)"
                                            style={{
                                                transition: "stroke-dashoffset 2.5s ease-in-out",
                                                willChange: "stroke-dashoffset"
                                            }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="rgba(48,90,255,0.8)" />
                                                <stop offset="100%" stopColor="rgba(181,210,255,1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="w-[134px]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2.5 h-2.5 rounded-[5px] [background:linear-gradient(90deg,rgba(48,90,255,0.8)_0%,rgba(181,210,255,1)_100%)]" />
                                        <span className="text-xs font-medium text-[#777777]">
                                            Referrals sent {conversionData.referralsSent}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 bg-[#edeafc] rounded-[5px]" />
                                        <span className="text-xs font-medium text-[#777777]">
                                            Converted {conversionData.converted}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-[#1c1c1c]">
                                    Top Performing Channel
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-center gap-4 justify-between">
                                    {channelPerformance.map((channel, index) => (
                                        <div
                                            key={`channel-${index}`}
                                            className={`flex flex-col w-28 items-center gap-2.5 py-2 rounded-[5px] ${channel.bgColor}`}
                                        >
                                            <div className="text-xs font-medium text-[#333333] text-center w-full">
                                                {channel.name}
                                            </div>
                                            <div className="font-semibold text-[#1c1c1c] text-[21px] text-center w-full">
                                                {channel.percentage}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Recent Activities */}
                <Card className="flex flex-col gap-6 p-5 w-full bg-white rounded-[10px]">
                    <CardHeader className="p-0">
                        <CardTitle className="font-semibold text-lg text-[#1c1c1c] font-['Inter',Helvetica]">
                            Recent Activities
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                        <div className="bg-[#fdfdfd] rounded-lg border-[0.5px] border-solid border-[#cacaca] p-5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-semibold text-sm text-[#333333] font-['Inter',Helvetica]">
                                            Activities
                                        </TableHead>
                                        <TableHead className="font-semibold text-sm text-[#333333] font-['Inter',Helvetica] text-right">
                                            Date
                                        </TableHead>
                                        <TableHead className="font-semibold text-sm text-[#333333] font-['Inter',Helvetica] text-right">
                                            Time
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {activities.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-normal text-sm text-[#636363] font-['Inter',Helvetica]">
                                                {item.activity}
                                            </TableCell>
                                            <TableCell className="font-normal text-sm text-[#636363] font-['Inter',Helvetica] text-right">
                                                {item.date}
                                            </TableCell>
                                            <TableCell className="font-normal text-sm text-[#636363] font-['Inter',Helvetica] text-right">
                                                {item.time}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {/* Leaderboard */}
                <Card className="w-full">
                    <CardHeader className="pb-0">
                        <CardTitle className="text-lg font-semibold text-[#1c1c1c] font-['Inter',Helvetica]">
                            Leaderboard Table View
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="bg-[#fdfdfd] rounded-lg border-[0.5px] border-solid border-[#cacaca] p-5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-semibold text-[#333333] text-sm font-['Inter',Helvetica]">
                                            Rank
                                        </TableHead>
                                        <TableHead className="font-semibold text-[#333333] text-sm font-['Inter',Helvetica]">
                                            Promoter Name
                                        </TableHead>
                                        <TableHead className="font-semibold text-[#333333] text-sm font-['Inter',Helvetica]">
                                            Conversion Rate
                                        </TableHead>
                                        <TableHead className="font-semibold text-[#333333] text-sm font-['Inter',Helvetica]">
                                            Referrals Sent
                                        </TableHead>
                                        <TableHead className="font-semibold text-[#333333] text-sm font-['Inter',Helvetica]">
                                            Successful Conversions
                                        </TableHead>
                                        <TableHead className="font-semibold text-[#333333] text-sm font-['Inter',Helvetica]">
                                            Revenue Generated
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {leaderboardData.map((row) => (
                                        <TableRow key={row.rank}>
                                            <TableCell className="font-normal text-[#636363] text-sm font-['Inter',Helvetica]">
                                                {row.rank}
                                            </TableCell>
                                            <TableCell className="font-normal text-[#636363] text-sm font-['Inter',Helvetica]">
                                                {row.name}
                                            </TableCell>
                                            <TableCell className="font-normal text-[#636363] text-sm font-['Inter',Helvetica]">
                                                {row.conversionRate}
                                            </TableCell>
                                            <TableCell className="font-normal text-[#636363] text-sm font-['Inter',Helvetica]">
                                                {row.referralsSent}
                                            </TableCell>
                                            <TableCell className="font-normal text-[#636363] text-sm font-['Inter',Helvetica]">
                                                {row.successfulConversions}
                                            </TableCell>
                                            <TableCell className="font-normal text-[#636363] text-sm font-['Inter',Helvetica]">
                                                {row.revenueGenerated}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import {
    ArrowUpIcon,
    EyeIcon,
    FilterIcon,
    MessageSquarePlusIcon,
    SearchIcon,
    UserIcon,
    PhoneIcon,
    DollarSignIcon,
    PercentIcon,
    Bell,
    User
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const metrics = [
        {
            title: "Total Leads",
            value: "2,456",
            change: "+12.5%",
            icon: <UserIcon className="w-5 h-5 text-[#4184e9]" />,
        },
        {
            title: "New Leads",
            value: "245",
            change: "+8.2%",
            icon: <PhoneIcon className="w-5 h-5 text-[#4184e9]" />,
        },
        {
            title: "Conversion Rate",
            value: "32%",
            change: "+5.1%",
            icon: <PercentIcon className="w-5 h-5 text-[#4184e9]" />,
        },
        {
            title: "Potential Revenue",
            value: "$125,000",
            change: "+15.3%",
            icon: <DollarSignIcon className="w-5 h-5 text-[#4184e9]" />,
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
                <Card key={index}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-[#edf3fd] rounded">
                                {metric.icon}
                            </div>
                            <div className="flex items-center gap-1 text-[#22c55e]">
                                <ArrowUpIcon className="w-4 h-4" />
                                <span className="text-sm">{metric.change}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-[#636363] text-sm">{metric.title}</p>
                            <p className="text-[#1c1c1c] text-2xl font-semibold mt-1">
                                {metric.value}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
        case "new":
            return "bg-[#edf3fd] text-[#4184e9]";
        case "contacted":
            return "bg-[#fff4e5] text-[#ff9800]";
        case "qualified":
            return "bg-[#e8f5e9] text-[#4caf50]";
        case "lost":
            return "bg-[#fbe9e7] text-[#f44336]";
        default:
            return "bg-[#f5f5f5] text-[#9e9e9e]";
    }
};

const leads = [
    {
        id: 1,
        name: "John Smith",
        contactNo: "+1 234-567-8901",
        source: "Website",
        interest: "Premium Plan",
        lastContact: "2024-03-15",
        potentialValue: "$5,000",
        status: "New",
        selected: false,
    },
    {
        id: 2,
        name: "Sarah Johnson",
        contactNo: "+1 345-678-9012",
        source: "Referral",
        interest: "Basic Plan",
        lastContact: "2024-03-14",
        potentialValue: "$2,500",
        status: "Contacted",
        selected: false,
    },
    {
        id: 3,
        name: "Michael Brown",
        contactNo: "+1 456-789-0123",
        source: "Social Media",
        interest: "Enterprise Plan",
        lastContact: "2024-03-13",
        potentialValue: "$10,000",
        status: "Qualified",
        selected: false,
    },
    {
        id: 4,
        name: "Emily Davis",
        contactNo: "+1 567-890-1234",
        source: "Trade Show",
        interest: "Enterprise Plan",
        lastContact: "2024-03-12",
        potentialValue: "$15,000",
        status: "Qualified",
        selected: false,
    },
    {
        id: 5,
        name: "David Wilson",
        contactNo: "+1 678-901-2345",
        source: "LinkedIn",
        interest: "Premium Plan",
        lastContact: "2024-03-11",
        potentialValue: "$7,500",
        status: "Lost",
        selected: false,
    },
    {
        id: 6,
        name: "Jennifer Martinez",
        contactNo: "+1 789-012-3456",
        source: "Email Campaign",
        interest: "Basic Plan",
        lastContact: "2024-03-15",
        potentialValue: "$3,000",
        status: "New",
        selected: false,
    },
    {
        id: 7,
        name: "Robert Taylor",
        contactNo: "+1 890-123-4567",
        source: "Partner Referral",
        interest: "Enterprise Plan",
        lastContact: "2024-03-14",
        potentialValue: "$20,000",
        status: "Contacted",
        selected: false,
    },
    {
        id: 8,
        name: "Lisa Anderson",
        contactNo: "+1 901-234-5678",
        source: "Webinar",
        interest: "Premium Plan",
        lastContact: "2024-03-13",
        potentialValue: "$6,000",
        status: "New",
        selected: false,
    },
    {
        id: 9,
        name: "James Wilson",
        contactNo: "+1 012-345-6789",
        source: "Google Ads",
        interest: "Basic Plan",
        lastContact: "2024-03-12",
        potentialValue: "$2,000",
        status: "Lost",
        selected: false,
    },
    {
        id: 10,
        name: "Maria Garcia",
        contactNo: "+1 123-456-7890",
        source: "Website",
        interest: "Enterprise Plan",
        lastContact: "2024-03-11",
        potentialValue: "$12,000",
        status: "Qualified",
        selected: false,
    }
];

const Leads = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
                {/* Left side - Title */}
                <div className="flex items-center">
                    <h1 className="text-lg font-medium text-gray-900">Leads</h1>
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

                <section className="w-full mt-6">
                    <Card className="w-full">
                        <CardContent className="p-5 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <h2 className="font-semibold text-lg text-[#1c1c1c]">
                                        Leads
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
                                            <TableHead className="w-6"></TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Lead Name
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Contact No.
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Source
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Interest
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Last Contact
                                            </TableHead>
                                            <TableHead className="font-semibold text-sm text-[#333333]">
                                                Potential Value
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
                                        {leads.map((lead) => (
                                            <TableRow key={lead.id} className="border-b-0 relative">
                                                <TableCell className="py-3">
                                                    <Checkbox checked={lead.selected} />
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {lead.name}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {lead.contactNo}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {lead.source}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {lead.interest}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {lead.lastContact}
                                                </TableCell>
                                                <TableCell className="py-3 font-normal text-sm text-[#636363]">
                                                    {lead.potentialValue}
                                                </TableCell>
                                                <TableCell className="py-3">
                                                    <Badge
                                                        className={`font-normal text-sm ${getStatusBadgeClass(lead.status)}`}
                                                    >
                                                        {lead.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="py-3">
                                                    <div className="flex items-center gap-2.5">
                                                        <div className="relative group">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                                onClick={() => navigate(`/leads/${lead.id}`)}
                                                            >
                                                                <EyeIcon className="h-6 w-6" />
                                                            </Button>
                                                            <div className="absolute right-0 top-full mt-2 bg-[#4184e9] text-white text-xs py-2.5 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                View Lead
                                                            </div>
                                                        </div>
                                                        <div className="relative group">
                                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                                <MessageSquarePlusIcon className="h-6 w-6" />
                                                            </Button>
                                                            <div className="absolute right-0 top-full mt-2 bg-[#4184e9] text-white text-xs py-2.5 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                Send message
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

export default Leads; 
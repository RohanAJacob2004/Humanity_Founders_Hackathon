import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
    ArrowLeftIcon,
    PhoneIcon,
    MailIcon,
    BuildingIcon,
    CalendarIcon,
    DollarSignIcon,
    TagIcon,
    UserIcon,
} from "lucide-react";

// This would typically come from an API or database
const getLeadById = (id) => {
    const leads = [
        {
            id: 1,
            name: "John Smith",
            contactNo: "+1 234-567-8901",
            email: "john.smith@email.com",
            company: "Tech Solutions Inc.",
            source: "Website",
            interest: "Premium Plan",
            lastContact: "2024-03-15",
            potentialValue: "$5,000",
            status: "New",
            notes: "Interested in implementing our solution across their entire organization. Has a team of 50+ employees.",
            timeline: [
                {
                    date: "2024-03-15",
                    action: "Initial Contact",
                    details: "Submitted inquiry through website"
                },
                {
                    date: "2024-03-14",
                    action: "Email Sent",
                    details: "Welcome email with product information"
                },
                {
                    date: "2024-03-13",
                    action: "Downloaded Whitepaper",
                    details: "Enterprise Security Solutions Guide"
                }
            ]
        },
        {
            id: 2,
            name: "Sarah Johnson",
            contactNo: "+1 345-678-9012",
            email: "sarah.j@email.com",
            company: "Digital Marketing Pro",
            source: "Referral",
            interest: "Basic Plan",
            lastContact: "2024-03-14",
            potentialValue: "$2,500",
            status: "Contacted",
            notes: "Small business owner looking to expand digital presence. Price-sensitive but interested in our basic features.",
            timeline: [
                {
                    date: "2024-03-14",
                    action: "Follow-up Call",
                    details: "Discussed basic plan features and pricing"
                },
                {
                    date: "2024-03-13",
                    action: "Referral Received",
                    details: "Referred by existing client Tom Wilson"
                }
            ]
        },
        {
            id: 3,
            name: "Michael Brown",
            contactNo: "+1 456-789-0123",
            email: "m.brown@email.com",
            company: "Global Innovations Ltd",
            source: "Social Media",
            interest: "Enterprise Plan",
            lastContact: "2024-03-13",
            potentialValue: "$10,000",
            status: "Qualified",
            notes: "Enterprise client with international presence. Looking for comprehensive solution with custom integration requirements.",
            timeline: [
                {
                    date: "2024-03-13",
                    action: "Technical Discussion",
                    details: "Met with their IT team to discuss integration requirements"
                },
                {
                    date: "2024-03-12",
                    action: "LinkedIn Connection",
                    details: "Initial contact through LinkedIn campaign"
                }
            ]
        },
        {
            id: 4,
            name: "Emily Davis",
            contactNo: "+1 567-890-1234",
            email: "emily.d@email.com",
            company: "Innovative Startups Inc",
            source: "Trade Show",
            interest: "Enterprise Plan",
            lastContact: "2024-03-12",
            potentialValue: "$15,000",
            status: "Qualified",
            notes: "Met at TechExpo 2024. Rapidly growing startup with immediate needs for our solution.",
            timeline: [
                {
                    date: "2024-03-12",
                    action: "Product Demo",
                    details: "Conducted virtual demo for their team"
                },
                {
                    date: "2024-03-11",
                    action: "Trade Show Meeting",
                    details: "Initial discussion at TechExpo booth"
                }
            ]
        },
        {
            id: 5,
            name: "David Wilson",
            contactNo: "+1 678-901-2345",
            email: "d.wilson@email.com",
            company: "Wilson Consulting",
            source: "LinkedIn",
            interest: "Premium Plan",
            lastContact: "2024-03-11",
            potentialValue: "$7,500",
            status: "Lost",
            notes: "Chose competitor's solution due to existing relationship. Keep in touch for future opportunities.",
            timeline: [
                {
                    date: "2024-03-11",
                    action: "Status Update",
                    details: "Informed about decision to go with competitor"
                },
                {
                    date: "2024-03-10",
                    action: "Proposal Sent",
                    details: "Submitted detailed proposal with custom pricing"
                }
            ]
        },
        {
            id: 6,
            name: "Jennifer Martinez",
            contactNo: "+1 789-012-3456",
            email: "j.martinez@email.com",
            company: "Creative Solutions Agency",
            source: "Email Campaign",
            interest: "Basic Plan",
            lastContact: "2024-03-15",
            potentialValue: "$3,000",
            status: "New",
            notes: "Small creative agency interested in our basic plan. Looking to streamline their project management.",
            timeline: [
                {
                    date: "2024-03-15",
                    action: "Email Response",
                    details: "Replied to our campaign with interest"
                }
            ]
        },
        {
            id: 7,
            name: "Robert Taylor",
            contactNo: "+1 890-123-4567",
            email: "r.taylor@email.com",
            company: "Taylor & Associates",
            source: "Partner Referral",
            interest: "Enterprise Plan",
            lastContact: "2024-03-14",
            potentialValue: "$20,000",
            status: "Contacted",
            notes: "Large law firm looking to modernize their systems. High potential for long-term partnership.",
            timeline: [
                {
                    date: "2024-03-14",
                    action: "Initial Call",
                    details: "Discussed firm's requirements and potential solutions"
                },
                {
                    date: "2024-03-13",
                    action: "Referral",
                    details: "Received referral from technology partner"
                }
            ]
        },
        {
            id: 8,
            name: "Lisa Anderson",
            contactNo: "+1 901-234-5678",
            email: "l.anderson@email.com",
            company: "Anderson Digital",
            source: "Webinar",
            interest: "Premium Plan",
            lastContact: "2024-03-13",
            potentialValue: "$6,000",
            status: "New",
            notes: "Attended our webinar on digital transformation. Showed strong interest in premium features.",
            timeline: [
                {
                    date: "2024-03-13",
                    action: "Webinar Attendance",
                    details: "Participated actively in Q&A session"
                },
                {
                    date: "2024-03-12",
                    action: "Registration",
                    details: "Signed up for digital transformation webinar"
                }
            ]
        },
        {
            id: 9,
            name: "James Wilson",
            contactNo: "+1 012-345-6789",
            email: "j.wilson@email.com",
            company: "Wilson Technologies",
            source: "Google Ads",
            interest: "Basic Plan",
            lastContact: "2024-03-12",
            potentialValue: "$2,000",
            status: "Lost",
            notes: "Budget constraints led to postponing the decision. Follow up in Q3.",
            timeline: [
                {
                    date: "2024-03-12",
                    action: "Follow-up Call",
                    details: "Discussed budget limitations and future plans"
                },
                {
                    date: "2024-03-11",
                    action: "Ad Click",
                    details: "Came through Google Ads campaign"
                }
            ]
        },
        {
            id: 10,
            name: "Maria Garcia",
            contactNo: "+1 123-456-7890",
            email: "m.garcia@email.com",
            company: "Garcia Enterprises",
            source: "Website",
            interest: "Enterprise Plan",
            lastContact: "2024-03-11",
            potentialValue: "$12,000",
            status: "Qualified",
            notes: "Multi-national company looking to implement solution across all branches. High priority lead.",
            timeline: [
                {
                    date: "2024-03-11",
                    action: "Requirements Meeting",
                    details: "Detailed discussion of enterprise requirements"
                },
                {
                    date: "2024-03-10",
                    action: "Website Inquiry",
                    details: "Submitted enterprise contact form"
                }
            ]
        }
    ];
    return leads.find(lead => lead.id === Number(id));
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

const LeadProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const lead = getLeadById(id);

    if (!lead) {
        return <div>Lead not found</div>;
    }

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate('/leads')}
                        className="h-10 w-10"
                    >
                        <ArrowLeftIcon className="h-6 w-6" />
                    </Button>
                    <h1 className="text-2xl font-semibold text-[#1c1c1c]">Lead Profile</h1>
                </div>
                <Badge className={`${getStatusBadgeClass(lead.status)} text-sm px-3 py-1`}>
                    {lead.status}
                </Badge>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-3 gap-6">
                {/* Lead Information */}
                <Card className="col-span-2">
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-[#1c1c1c]">Lead Information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <UserIcon className="h-5 w-5 text-[#4184e9]" />
                                    <div>
                                        <p className="text-sm text-[#636363]">Name</p>
                                        <p className="text-[#1c1c1c]">{lead.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon className="h-5 w-5 text-[#4184e9]" />
                                    <div>
                                        <p className="text-sm text-[#636363]">Contact Number</p>
                                        <p className="text-[#1c1c1c]">{lead.contactNo}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MailIcon className="h-5 w-5 text-[#4184e9]" />
                                    <div>
                                        <p className="text-sm text-[#636363]">Email</p>
                                        <p className="text-[#1c1c1c]">{lead.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BuildingIcon className="h-5 w-5 text-[#4184e9]" />
                                    <div>
                                        <p className="text-sm text-[#636363]">Company</p>
                                        <p className="text-[#1c1c1c]">{lead.company}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TagIcon className="h-5 w-5 text-[#4184e9]" />
                                    <div>
                                        <p className="text-sm text-[#636363]">Source</p>
                                        <p className="text-[#1c1c1c]">{lead.source}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <DollarSignIcon className="h-5 w-5 text-[#4184e9]" />
                                    <div>
                                        <p className="text-sm text-[#636363]">Potential Value</p>
                                        <p className="text-[#1c1c1c]">{lead.potentialValue}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-[#1c1c1c]">Notes</h2>
                            <p className="text-[#636363]">{lead.notes}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Timeline */}
                <Card>
                    <CardContent className="p-6 space-y-6">
                        <h2 className="text-xl font-semibold text-[#1c1c1c]">Activity Timeline</h2>
                        <div className="space-y-4">
                            {lead.timeline.map((activity, index) => (
                                <div key={index} className="relative pl-6 pb-6 border-l-2 border-[#edf3fd] last:pb-0">
                                    <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[#4184e9]" />
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="h-4 w-4 text-[#4184e9]" />
                                            <p className="text-sm text-[#636363]">{activity.date}</p>
                                        </div>
                                        <p className="font-medium text-[#1c1c1c]">{activity.action}</p>
                                        <p className="text-sm text-[#636363]">{activity.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LeadProfilePage; 
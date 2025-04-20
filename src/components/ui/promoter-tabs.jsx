import React, { useState } from 'react';
import { ClipboardIcon, MessageSquareIcon, RotateCcwIcon, FileTextIcon, GiftIcon } from 'lucide-react';

export const PromoterTabs = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            icon: FileTextIcon,
            isActive: true
        },
        {
            id: 'referral-history',
            label: 'Referral History',
            icon: RotateCcwIcon
        },
        {
            id: 'interactions',
            label: 'Interactions & Notes',
            icon: MessageSquareIcon
        },
        {
            id: 'rewards',
            label: 'Rewards & Incentives',
            icon: GiftIcon
        },
        {
            id: 'engagement',
            label: 'Engagement Strategies',
            icon: ClipboardIcon
        }
    ];

    return (
        <div className="w-full">
            <div className="flex items-center gap-0">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex items-center gap-[5px] px-[15px] py-[10px]
                                ${activeTab === tab.id
                                    ? 'bg-[#3159FF]/10 text-[#333333]'
                                    : 'text-[#888888]'
                                }
                            `}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="h-[0.5px] bg-[#CCCCCC] mt-0" />

            <div className="mt-5">
                {activeTab === 'overview' && (
                    <div>
                        {/* Graph Title and Period Selector */}
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-[#1C1C1C] text-lg">Referral Performance</h3>
                            <div className="border border-[#DDDDDD] rounded px-[10px] py-[10px] flex items-center gap-[10px]">
                                <span className="text-[#888888]">Last 6 months</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9L12 15L18 9" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Graph Container */}
                        <div className="h-[348px] relative pr-4">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[#888888] text-sm">
                                <span>50%</span>
                                <span>40%</span>
                                <span>30%</span>
                                <span>20%</span>
                                <span>10%</span>
                                <span>0%</span>
                            </div>

                            {/* Graph Area */}
                            <div className="ml-[41px] h-full relative">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="border-t border-[#EBEBEB] w-full" />
                                    ))}
                                </div>

                                {/* Graph Line */}
                                <div className="absolute inset-0 flex items-center">
                                    <svg className="w-full h-[88px]" viewBox="0 0 589 88" fill="none" preserveAspectRatio="none">
                                        <path
                                            d="M0 88L147.25 44L294.5 0L441.75 44L589 88"
                                            stroke="#3159FF"
                                            strokeWidth="2.5"
                                        />
                                    </svg>
                                </div>

                                {/* Data Point */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-3 h-3 rounded-full border-2 border-white bg-[#3159FF] shadow-sm" />
                                </div>
                            </div>

                            {/* X-axis labels */}
                            <div className="absolute bottom-0 left-[41px] right-0 grid grid-cols-6 text-[#888888] text-sm">
                                <span className="text-center">Jan</span>
                                <span className="text-center">Feb</span>
                                <span className="text-center">Mar</span>
                                <span className="text-center">Apr</span>
                                <span className="text-center">May</span>
                                <span className="text-center">Jun</span>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'referral-history' && (
                    <div className="text-sm text-gray-500">
                        Referral History content will go here
                    </div>
                )}
                {activeTab === 'interactions' && (
                    <div className="text-sm text-gray-500">
                        Interactions & Notes content will go here
                    </div>
                )}
                {activeTab === 'rewards' && (
                    <div className="text-sm text-gray-500">
                        Rewards & Incentives content will go here
                    </div>
                )}
                {activeTab === 'engagement' && (
                    <div className="text-sm text-gray-500">
                        Engagement Strategies content will go here
                    </div>
                )}
            </div>
        </div>
    );
}; 
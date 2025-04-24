import React from 'react';

const SubscriptionUsage = () => {
    return (
        <div className="bg-white rounded-[7px] p-6 w-full">
            {/* Header */}
            <h2 className="text-[#333333] text-2xl font-semibold mb-4">Subscription & Usage</h2>
            <div className="h-[0.5px] bg-[#AAAAAA] mb-6" />

            {/* Plan and Usage Details */}
            <div className="grid grid-cols-2 gap-6">
                {/* Current Plan */}
                <div>
                    <p className="text-[#333333] font-medium">Current Plan</p>
                    <p className="text-[#646464] mt-2">Your Current Plan is Basic</p>
                    <p className="text-[#646464] mt-2">A simple start for everyone</p>
                    <p className="text-[#646464] mt-2">Active until May 09, 2025</p>
                </div>
                {/* Usage Stats */}
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#646464]">Days</span>
                        <p className="text-[#646464] font-medium">12 of 30 Days</p>
                    </div>
                    <div className="bg-[#5D56BC33] rounded-full h-2 mt-3 relative">
                        <div className="bg-[#3159FF] rounded-full h-2 w-[23%]" />
                    </div>
                </div>
            </div>

            {/* Plan Pricing and Tag */}
            <div className="flex-col mt-6">
                <div className="flex items-center gap-6">
                    <span className="bg-[rgba(49,89,255,0.1)] text-[#3159FF] rounded-full px-3 py-2 text-sm">Popular</span>
                    <span className="text-[#333333] font-medium">$25 Per Month</span>
                </div>
                <div>
                    <p className="text-[#646464] ml-1">Standard plan for small to medium businesses</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-4 mt-6">
                <button className="border border-[#FF4C51] text-[#FF4C51] px-6 py-2 rounded-[7px]">
                    Cancel Subscription
                </button>
                <button className="bg-gradient-to-r from-[#3159FFCC] to-[#BDD1FF] text-white px-6 py-2 rounded-[6px]">
                    Upgrade Plan
                </button>
            </div>
        </div>
    );
};

export default SubscriptionUsage; 
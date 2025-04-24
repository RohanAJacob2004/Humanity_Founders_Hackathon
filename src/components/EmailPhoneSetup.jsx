import React, { useState } from 'react';

const EmailPhoneSetup = () => {
    const [emailOption, setEmailOption] = useState('system');
    const [phoneOption, setPhoneOption] = useState('system');

    return (
        <div className="bg-white rounded-[15px] p-6 w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-[#333333] text-2xl font-semibold">Email & Phone Setup</h2>
            </div>

            {/* Email Section */}
            <p className="text-[#646464] mb-6">
                Choose how your outgoing emails (referral links, follow-ups, etc.) are sent from the platform.
            </p>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <input
                        type="radio"
                        id="systemEmail"
                        name="emailSetup"
                        value="system"
                        checked={emailOption === 'system'}
                        onChange={() => setEmailOption('system')}
                        className="accent-[#3159FF] w-6 h-6 mt-1"
                    />
                    <div>
                        <label htmlFor="systemEmail" className="block text-[#333333] font-medium">
                            Use System Email
                        </label>
                        <p className="text-[#646464]">
                            Emails will be sent using ReferralHub's default system address (e.g., notify@ReferralHub.app).
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <input
                        type="radio"
                        id="customEmail"
                        name="emailSetup"
                        value="custom"
                        checked={emailOption === 'custom'}
                        onChange={() => setEmailOption('custom')}
                        className="accent-[#3159FF] w-6 h-6 mt-1"
                    />
                    <div>
                        <label htmlFor="customEmail" className="block text-[#333333] font-medium">
                            Connect Your Custom Email Domain
                        </label>
                        <p className="text-[#646464]">
                            Improve deliverability and brand recognition by sending from your own domain (e.g., you@yourcompany.com).
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[0.5px] bg-[#AAAAAA] my-8" />

            {/* Phone Section */}
            <h3 className="text-[#333333] text-2xl font-semibold mb-6">
                Global SMS Sending Number
            </h3>
            <p className="text-[#646464] mb-6">
                Choose how SMS messages (referral links, updates, rewards) are sent to your customers.
            </p>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <input
                        type="radio"
                        id="systemPhone"
                        name="phoneSetup"
                        value="system"
                        checked={phoneOption === 'system'}
                        onChange={() => setPhoneOption('system')}
                        className="accent-[#3159FF] w-6 h-6 mt-1"
                    />
                    <div>
                        <label htmlFor="systemPhone" className="block text-[#333333] font-medium">
                            Use System Phone Number
                        </label>
                        <p className="text-[#646464]">
                            Messages will be sent from a standard number owned by ReferralHub.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <input
                        type="radio"
                        id="ownPhone"
                        name="phoneSetup"
                        value="own"
                        checked={phoneOption === 'own'}
                        onChange={() => setPhoneOption('own')}
                        className="accent-[#3159FF] w-6 h-6 mt-1"
                    />
                    <div>
                        <label htmlFor="ownPhone" className="block text-[#333333] font-medium">
                            Connect Your Own Phone Number
                        </label>
                        <p className="text-[#646464]">
                            Use a verified number for better brand trust and consistency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailPhoneSetup; 
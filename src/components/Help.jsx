import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './Header';

const faqs = [
    { question: 'How do I reset my password?', answer: 'Go to the Profile settings, click "Change Password," and follow the prompts.' },
    { question: 'How can I update my business profile?', answer: 'Navigate to Business Profile in Settings and click the Edit icon to update your details.' },
    { question: 'How do I upgrade my subscription?', answer: 'Under Subscription & Usage, choose your new plan and click "Upgrade Plan."' },
];

const Help = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div className="bg-white rounded-[15px]  w-full">
            <Header title="Help & FAQs" />
            <div className="p-6">
                <h2 className="text-[#333333] text-2xl font-semibold mb-6">Help & FAQs</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-[#E5E5E5] rounded-[7px]">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-4"
                            >
                                <span className="text-[#333333]">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#333333] transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </button>
                            {activeIndex === index && (
                                <p className="p-4 pt-0 text-[#646464]">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h3 className="text-[#333333] text-lg font-semibold mb-2">Still need help?</h3>
                    <p className="text-[#646464]">
                        Contact our support at <a href="mailto:support@ReferralHub.app" className="text-[#3159FF]">support@ReferralHub.app</a> or call <span className="text-[#3159FF]">(123) 456-7890</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Help; 
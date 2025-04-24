import React, { useEffect, useState } from 'react';

const steps = [
    { id: '/business-profile-setup', message: `Setup your business profile to get started. This will help us personalize your experience and tailor our services to your needs.` },
    { id: '/ai-agent', message: `Hey there! I'm (Bot Name), your AI agent. This is where I live — your go-to space to ask anything, generate campaigns, or get help filling out forms. I'm always just a click away!` },
    { id: '/dashboard', message: `Get a quick overview of your platform's performance. View recent activities, monitor key analytics and stay updated on what's working—all in real-time.` },
    { id: '/campaigns', message: `Create and manage campaigns with ease. Set rewards, define messages, and personalize journeys for both referrers and referred users.` },
    { id: '/promoters', message: `Manage your customer database. View profiles, referral history, engagement levels, and import or sync customer lists from external sources like CSV or Zapier.` },
    { id: '/leads', message: `Here, you'll see a list of all the people who were referred by promoters and have filled out the lead form. You can view the follow-up messages.` },
    { id: '/payouts', message: `Here, you'll see the payouts for the campaigns you've created.` }
];

const PopupTutorial = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const alreadySeen = sessionStorage.getItem('tutorialSeen');
        if (!alreadySeen) {
            setIsVisible(true);
        }
    }, []);

    // Highlight the sidebar option for the current tutorial step
    useEffect(() => {
        // Remove highlight from any previously highlighted element
        const prevEl = document.querySelector('.tour-highlight');
        if (prevEl) {
            prevEl.classList.remove('tour-highlight');
            prevEl.style.boxShadow = '';
            prevEl.style.position = '';
            prevEl.style.zIndex = '';
        }
        if (!isVisible) return;
        // Highlight current target element
        const id = steps[currentStep].id;
        const el = document.querySelector(`[data-tour-id="${id}"]`);
        if (el) {
            el.classList.add('tour-highlight');
            el.style.boxShadow = '0 0 0 4px rgba(49,89,255,0.5)';
            el.style.position = 'relative';
            el.style.zIndex = '51';
        }
    }, [currentStep, isVisible]);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            sessionStorage.setItem('tutorialSeen', 'true');
            setIsVisible(false);
        }
    };

    if (!isVisible) return null;

    // Handler to skip tutorial
    const skipTutorial = () => {
        sessionStorage.setItem('tutorialSeen', 'true');
        setIsVisible(false);
    };

    const message = steps[currentStep].message;
    // Find target element for current step
    const target = document.querySelector(`[data-tour-id="${steps[currentStep].id}"]`);
    const rect = target?.getBoundingClientRect();
    if (!rect) return null;
    // Center popup vertically relative to the target element
    const popupHeight = 50;
    const margin = 85;
    const top = rect.top + rect.height / 2 - popupHeight / 2;
    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <div
                className="absolute pointer-events-auto"
                style={{ top: `${top}px`, left: `${rect.right + margin - 60}px` }}
            >
                <div className="w-[520px] h-[315px] bg-white rounded-[20px] shadow-[0_0_35px_rgba(219,219,219,0.5)] flex flex-col">
                    {/* Header */}
                    <div className="h-[82px] flex items-center px-6">
                        <div className="flex items-center gap-4">
                            <img src="/chatbot.png" alt="AI Agent" className="w-[50px] h-[50px]" />
                            <span className="text-xl text-[#333333] font-medium">AI Agent</span>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex-1 p-6">
                        <div className="bg-gradient-to-r from-[#E8F1FF] to-[#F6EEF6] border border-[#CCD7E9] rounded-lg p-4">
                            <p className="text-[#444444] whitespace-pre-wrap">{message}</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="h-[63px] border-t border-[#E5E5E5] px-6 flex items-center justify-between">
                        <button onClick={skipTutorial} className="text-[#3159FF] text-sm">Skip</button>
                        <button onClick={nextStep} className="bg-[#3159FF] text-white text-sm px-4 py-2 rounded-lg">
                            {currentStep < steps.length - 1 ? `Next (${currentStep + 1}/${steps.length})` : 'Got it'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupTutorial; 
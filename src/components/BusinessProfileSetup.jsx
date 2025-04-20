import React, { useState } from 'react';
import { Bell, User } from "lucide-react";
import { FaChevronDown, FaSearch, FaCheck, FaUpload, FaToggleOn } from 'react-icons/fa';

const BusinessProfileSetup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([0]); // First step is completed by default

    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        phone: '',
        industry: '',
        services: '',
        products: '',
        companySize: '',
        city: '',
        state: '',
        zipCode: '',
        businessDescription: '',
        toneOfCommunication: '',
        responseStyle: '',
        autoOfferHelp: true,
        userInitiatedOnly: false,
        // Campaign related fields
        campaignName: '',
        rewardType: 'Points',
        rewardValue: '',
        promoterMessage: '',
        followUpStrategy: [],
        // Leads related fields
        leadsRewardType: 'Discount',
        leadsRewardValue: '',
        referredMessage: '',
        formFields: {
            fullName: true,
            emailAddress: true,
            phoneNumber: false,
            agree: true
        },
        leadsFollowUpStrategy: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Mark current step as completed
        setCompletedSteps(prev => [...prev, currentStep]);
        // Move to next step if available
        if (currentStep < setupSteps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleStepClick = (index) => {
        // Only allow clicking on completed steps or the next available step
        if (index <= Math.max(...completedSteps) + 1) {
            setCurrentStep(index);
        }
    };

    const setupSteps = [
        { id: 1, title: 'Set Up Business Profile', status: 'completed' },
        { id: 2, title: 'Sync Your Customer Data', status: 'current' },
        { id: 3, title: 'Set Up AI Agent Rules', status: 'pending' },
        { id: 4, title: 'Set Up Campaign', status: 'pending' },
        { id: 5, title: 'Set Up Leads', status: 'pending' }
    ];

    const getStepStatus = (index) => {
        if (completedSteps.includes(index)) return 'completed';
        if (index === currentStep) return 'current';
        return 'pending';
    };

    const renderForm = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">Build Your Business Identity</h1>
                            <p className="text-gray-500 mt-2">
                                Help us tailor the referral experience by adding key details about your business
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-6">
                            {/* Business Logo */}
                            <div className="flex items-center space-x-4">
                                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400">Logo</span>
                                </div>
                                <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                    Choose Image
                                </button>
                            </div>

                            {/* Two columns grid for form fields */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Name
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter business name"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter business email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Industry
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="industry"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                            value={formData.industry}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select industry</option>
                                            <option value="tech">Technology</option>
                                            <option value="retail">Retail</option>
                                            <option value="healthcare">Healthcare</option>
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Services
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="services"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                            value={formData.services}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select services</option>
                                            <option value="consulting">Consulting</option>
                                            <option value="development">Development</option>
                                            <option value="design">Design</option>
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Products
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="products"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                            value={formData.products}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select products</option>
                                            <option value="software">Software</option>
                                            <option value="hardware">Hardware</option>
                                            <option value="services">Services</option>
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Size (Optional)
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="companySize"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select size</option>
                                            <option value="1-10">1-10 employees</option>
                                            <option value="11-50">11-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201+">201+ employees</option>
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        State
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="state"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                            value={formData.state}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select state</option>
                                            <option value="NY">New York</option>
                                            <option value="CA">California</option>
                                            <option value="TX">Texas</option>
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ZIP Code
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter ZIP code"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Business Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Business Description
                                </label>
                                <textarea
                                    name="businessDescription"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tell us about your business..."
                                    value={formData.businessDescription}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-gradient-to-r from-[#3159FF] to-[#B5D1FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Save & Continue
                            </button>
                        </form>
                    </div>
                );
            case 1:
                return (
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">Import Customer Data</h1>
                            <p className="text-gray-500 mt-2">
                                Sync your customer data with Zapier or upload a CSV file
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-8 space-y-6">
                            <div className="flex space-x-4">
                                <button className="flex-1 p-4 border border-[#3159FF] rounded-lg hover:bg-[#F7F9FF]">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-[#3159FF] flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-white"></div>
                                        </div>
                                        <span className="text-[#3159FF]">Sync with Zapier</span>
                                    </div>
                                </button>
                                <button className="flex-1 p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                        </div>
                                        <span className="text-gray-500">Upload CSV File</span>
                                    </div>
                                </button>
                            </div>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <div className="mb-4">
                                    <FaUpload className="text-[#3159FF] text-4xl mx-auto" />
                                </div>
                                <p className="text-gray-600 mb-2">Drag and drop files here</p>
                                <p className="text-gray-400">or</p>
                                <button className="mt-4 px-6 py-2 border border-[#3159FF] text-[#3159FF] rounded-lg hover:bg-[#F7F9FF]">
                                    Browse
                                </button>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full py-3 px-4 bg-gradient-to-r from-[#3159FF] to-[#B5D1FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">Set Up AI Agent Rules</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-8">
                            {/* Tone of Communication */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Tone of Communication
                                </label>
                                <div className="relative">
                                    <select
                                        name="toneOfCommunication"
                                        value={formData.toneOfCommunication}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                    >
                                        <option value="">Select tone</option>
                                        <option value="professional">Professional</option>
                                        <option value="casual">Casual</option>
                                        <option value="friendly">Friendly</option>
                                        <option value="formal">Formal</option>
                                    </select>
                                    <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Response Style */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Response Style
                                </label>
                                <div className="relative">
                                    <select
                                        name="responseStyle"
                                        value={formData.responseStyle}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                    >
                                        <option value="">Select style</option>
                                        <option value="concise">Concise</option>
                                        <option value="detailed">Detailed</option>
                                        <option value="conversational">Conversational</option>
                                    </select>
                                    <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Auto-offer help */}
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-gray-900">Auto-offer help</h3>
                                    <p className="text-sm text-gray-500">
                                        AI pops up suggestions automatically when user lands on a page.
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="autoOfferHelp"
                                        checked={formData.autoOfferHelp}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3159FF]"></div>
                                </label>
                            </div>

                            {/* User-initiated only */}
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-gray-900">User-initiated only</h3>
                                    <p className="text-sm text-gray-500">
                                        AI only responds when clicked or messaged.
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="userInitiatedOnly"
                                        checked={formData.userInitiatedOnly}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3159FF]"></div>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-gradient-to-r from-[#3159FF] to-[#B5D1FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Save & Continue
                            </button>
                        </form>
                    </div>
                );
            case 3:
                return (
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">Create New Campaign</h1>
                            <p className="text-gray-500 mt-2">Create a new referral campaign in just few steps.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-8">
                            {/* Campaign Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Campaign Name
                                </label>
                                <input
                                    type="text"
                                    name="campaignName"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., Summer Referral Special"
                                    value={formData.campaignName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Promoter Settings */}
                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Promoter Settings</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Reward Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Reward Type<span className="text-red-500">*</span>
                                        </label>
                                        <div className="bg-[#F7F9FF] p-4 rounded-lg">
                                            <div className="text-[#3159FF]">Points</div>
                                            <div className="text-sm text-gray-500">($1 is equivalent to 10 points)</div>
                                        </div>
                                    </div>

                                    {/* Reward Value */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Reward Value<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="rewardValue"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="e.g., 200 points"
                                            value={formData.rewardValue}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Promoter Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Promoter Message<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="promoterMessage"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder='e.g., "Hey! Share this with your friends and get $20 for each successful signup!"'
                                    value={formData.promoterMessage}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Follow-Up Strategy */}
                            <div className="bg-[#F7F9FF] p-6 rounded-lg">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">
                                    Follow-Up Strategy<span className="text-red-500">*</span>
                                </h2>
                                <div className="space-y-6">
                                    {/* Action Type Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
                                        <div className="flex space-x-4">
                                            <label className="flex items-center">
                                                <input type="radio" name="actionType" value="email" className="mr-2" />
                                                <span>Email</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="actionType" value="sms" className="mr-2" />
                                                <span>SMS</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="actionType" value="wait" className="mr-2" />
                                                <span>Wait Duration</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Phone Number Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <select
                                            name="phoneNumber"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                        </select>
                                    </div>

                                    {/* Follow-Up Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Follow-Up Message</label>
                                        <textarea
                                            name="followUpMessage"
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter message..."
                                        />
                                    </div>

                                    {/* Add Action Button */}
                                    <button
                                        type="button"
                                        className="w-full py-3 px-4 bg-[#3159FF] text-white rounded-lg hover:bg-opacity-90 transition-opacity flex items-center justify-center space-x-2"
                                    >
                                        <span>+</span>
                                        <span>Add Action</span>
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-gradient-to-r from-[#3159FF] to-[#B5D1FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Save & Continue
                            </button>
                        </form>
                    </div>
                );
            case 4:
                return (
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">Leads Settings</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-8">
                            {/* Reward Settings */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* Reward Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Reward Type<span className="text-red-500">*</span>
                                    </label>
                                    <div className="bg-[#F7F9FF] p-4 rounded-lg">
                                        <div className="text-[#3159FF]">Discount</div>
                                    </div>
                                </div>

                                {/* Reward Value */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Reward Value<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="leadsRewardValue"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., 20%"
                                        value={formData.leadsRewardValue}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Referred Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Referred Message<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="referredMessage"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 'You&apos;ve been invited! Sign up now and get 15% off your first order.'"
                                    value={formData.referredMessage}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Form Fields */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">
                                    Form Fields<span className="text-red-500">*</span>
                                    <span className="ml-2 text-gray-400 cursor-help" title="Select the fields you want to collect from leads">ⓘ</span>
                                </label>
                                <div className="space-y-3">
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="formFields.fullName"
                                            checked={formData.formFields.fullName}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-[#3159FF] border-gray-300 rounded focus:ring-[#3159FF]"
                                        />
                                        <span>Full Name</span>
                                    </label>
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="formFields.emailAddress"
                                            checked={formData.formFields.emailAddress}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-[#3159FF] border-gray-300 rounded focus:ring-[#3159FF]"
                                        />
                                        <span>Email Address</span>
                                    </label>
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="formFields.phoneNumber"
                                            checked={formData.formFields.phoneNumber}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-[#3159FF] border-gray-300 rounded focus:ring-[#3159FF]"
                                        />
                                        <span>Phone Number</span>
                                    </label>
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="formFields.agree"
                                            checked={formData.formFields.agree}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-[#3159FF] border-gray-300 rounded focus:ring-[#3159FF]"
                                        />
                                        <span>Agree</span>
                                    </label>
                                </div>
                            </div>

                            {/* Follow-Up Strategy */}
                            <div className="bg-[#F7F9FF] p-6 rounded-lg">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">
                                    Follow-Up Strategy<span className="text-red-500">*</span>
                                </h2>
                                <div className="space-y-6">
                                    {/* Action Type Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
                                        <div className="flex space-x-4">
                                            <label className="flex items-center">
                                                <input type="radio" name="actionType" value="email" className="mr-2" />
                                                <span>Email</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="actionType" value="sms" className="mr-2" />
                                                <span>SMS</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="actionType" value="wait" className="mr-2" />
                                                <span>Wait Duration</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Phone Number Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <select
                                            name="phoneNumber"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                        </select>
                                    </div>

                                    {/* Follow-Up Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Follow-Up Message</label>
                                        <textarea
                                            name="followUpMessage"
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter message..."
                                        />
                                    </div>

                                    {/* Add Action Button */}
                                    <button
                                        type="button"
                                        className="w-full py-3 px-4 bg-[#3159FF] text-white rounded-lg hover:bg-opacity-90 transition-opacity flex items-center justify-center space-x-2"
                                    >
                                        <span>+</span>
                                        <span>Add Action</span>
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#3159FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Launch
                            </button>
                        </form>
                    </div>
                );
            // Add more cases for other steps
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
                {/* Left side - Platform Setup */}
                <div className="flex items-center">
                    <h1 className="text-lg font-medium text-gray-900">Platform Setup</h1>
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
                <div className="flex h-full">
                    {/* Left Sidebar */}
                    <div className="w-[346px] bg-[#F7F9FF] p-8 rounded-lg">
                        <div className="border-b border-gray-200 pb-8 mb-8">
                            <h2 className="text-[#3159FF] text-xl font-semibold mb-3">
                                Get Started with ReferralHub
                            </h2>
                            <p className="text-gray-600">
                                To get started with better referrals & rewards, complete your account setup in a few easy steps.
                            </p>
                        </div>
                        <div className="space-y-11">
                            {setupSteps.map((step, index) => {
                                const status = getStepStatus(index);
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 cursor-pointer"
                                        onClick={() => handleStepClick(index)}
                                    >
                                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center
                                            ${status === 'completed' ? 'border-[#19C48A] bg-[#19C48A]' :
                                                status === 'current' ? 'border-[#3159FF]' : 'border-gray-400'}`}>
                                            {status === 'completed' ? (
                                                <FaCheck className="text-white text-xl" />
                                            ) : (
                                                <div className={`w-6 h-6 rounded-full 
                                                    ${status === 'current' ? 'bg-[#3159FF]' : 'bg-gray-400'}`} />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-medium">{step.title}</h3>
                                            <p className={`text-sm ${status === 'completed' ? 'text-[#19C48A]' :
                                                status === 'current' ? 'text-[#3159FF]' : 'text-gray-500'
                                                }`}>
                                                {status === 'completed' ? 'Completed' :
                                                    status === 'current' ? 'In Progress' : 'Not Started'}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8">
                        {renderForm()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessProfileSetup; 
import React, { useState } from 'react';

const FollowUpStrategy = ({ onStrategyChange }) => {
    const [formData, setFormData] = useState({
        actionType: '',
        phoneNumber: '',
        followUpMessage: '',
        waitDuration: '',
        actions: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddAction = () => {
        const { actionType, phoneNumber, followUpMessage, waitDuration } = formData;

        if (!actionType) {
            alert('Please select an action type');
            return;
        }

        if (actionType === 'wait' && !waitDuration) {
            alert('Please enter wait duration');
            return;
        }

        if ((actionType === 'sms' || actionType === 'email') && !followUpMessage) {
            alert('Please enter a message');
            return;
        }

        if (actionType === 'sms' && !phoneNumber) {
            alert('Please select a phone number');
            return;
        }

        const newAction = {
            type: actionType,
            ...(actionType === 'wait' && { duration: waitDuration }),
            ...(actionType === 'sms' && { phoneNumber }),
            ...(actionType !== 'wait' && { message: followUpMessage })
        };

        const updatedActions = [...formData.actions, newAction];
        setFormData(prev => ({
            ...prev,
            actions: updatedActions,
            // Reset form fields
            actionType: '',
            phoneNumber: '',
            followUpMessage: '',
            waitDuration: ''
        }));

        // Notify parent component of the change
        onStrategyChange(updatedActions);
    };

    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
                Follow-Up Strategy<span className="text-red-500">*</span>
            </h2>

            {/* Timeline Display */}
            <div className="mb-8">
                <div className="flex flex-col items-start space-y-4">
                    {formData.actions?.map((action, index) => (
                        <div key={index} className="flex items-center w-full">
                            <div className="bg-[#F7F9FF] p-4 rounded-lg shadow-sm w-full">
                                {action.type === 'sms' && (
                                    <div className="flex items-center text-gray-700">
                                        <span className="mr-2">💬</span> SMS
                                    </div>
                                )}
                                {action.type === 'wait' && (
                                    <div className="flex items-center text-gray-700">
                                        <span className="mr-2">⏱️</span> Wait: {action.duration}
                                    </div>
                                )}
                                {action.type === 'email' && (
                                    <div className="flex items-center text-gray-700">
                                        <span className="mr-2">✉️</span> Email
                                    </div>
                                )}
                            </div>
                            {index < formData.actions.length - 1 && (
                                <div className="h-8 w-0.5 bg-gray-200 mx-auto my-1"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                {/* Action Type Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Action Type
                    </label>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="actionType"
                                value="email"
                                checked={formData.actionType === 'email'}
                                onChange={handleChange}
                                className="w-4 h-4 text-[#3159FF] border-gray-300 focus:ring-[#3159FF]"
                            />
                            <span className="ml-2 text-sm text-gray-600">Email</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="actionType"
                                value="sms"
                                checked={formData.actionType === 'sms'}
                                onChange={handleChange}
                                className="w-4 h-4 text-[#3159FF] border-gray-300 focus:ring-[#3159FF]"
                            />
                            <span className="ml-2 text-sm text-gray-600">SMS</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="actionType"
                                value="wait"
                                checked={formData.actionType === 'wait'}
                                onChange={handleChange}
                                className="w-4 h-4 text-[#3159FF] border-gray-300 focus:ring-[#3159FF]"
                            />
                            <span className="ml-2 text-sm text-gray-600">Wait Duration</span>
                        </label>
                    </div>
                </div>

                {formData.actionType === 'wait' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Wait Duration
                        </label>
                        <input
                            type="text"
                            name="waitDuration"
                            value={formData.waitDuration}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3159FF] focus:border-transparent"
                            placeholder="e.g., 5 days"
                        />
                    </div>
                )}

                {formData.actionType === 'sms' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <select
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3159FF] focus:border-transparent bg-white"
                        >
                            <option value="">Select</option>
                            <option value="primary">Primary Phone</option>
                            <option value="secondary">Secondary Phone</option>
                        </select>
                    </div>
                )}

                {(formData.actionType === 'sms' || formData.actionType === 'email') && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Follow-Up Message
                        </label>
                        <textarea
                            name="followUpMessage"
                            rows={3}
                            value={formData.followUpMessage}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3159FF] focus:border-transparent resize-none"
                            placeholder="Enter message..."
                        />
                    </div>
                )}

                {/* Add Action Button */}
                <button
                    type="button"
                    onClick={handleAddAction}
                    className="w-full py-3 px-4 bg-[#3159FF] text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm"
                >
                    <span className="text-xl font-light">+</span>
                    <span>Add Action</span>
                </button>
            </div>
        </div>
    );
};

export default FollowUpStrategy; 
import React from 'react';
import { Edit } from 'lucide-react';

const BusinessSettings = () => {
    return (
        <div className="bg-white rounded-[15px] p-6 w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[#333333] text-2xl font-semibold">Business Profile</h2>
                <button className="text-[#3159FF]">
                    <Edit className="w-6 h-6" />
                </button>
            </div>
            <div className="h-[0.5px] bg-[#AAAAAA] mb-8" />

            <form className="space-y-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    {/* Business Description */}
                    <div>
                        <label className="block text-[#333333] mb-2">Business Description</label>
                        <textarea
                            rows={3}
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            placeholder="Enter business description"
                        />
                    </div>

                    {/* Business Email */}
                    <div>
                        <label className="block text-[#333333] mb-2">Business Email</label>
                        <input
                            type="email"
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            placeholder="Enter business email"
                        />
                    </div>

                    {/* Business Name */}
                    <div>
                        <label className="block text-[#333333] mb-2">Business Name</label>
                        <input
                            type="text"
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            placeholder="Enter business name"
                        />
                    </div>

                    {/* Industry */}
                    <div>
                        <label className="block text-[#333333] mb-2">Industry</label>
                        <select
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            multiple={false}
                        >
                            <option value="">Select industry</option>
                        </select>
                    </div>

                    {/* Business Phone No. */}
                    <div>
                        <label className="block text-[#333333] mb-2">Business Phone No.</label>
                        <input
                            type="tel"
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            placeholder="Enter phone number"
                        />
                    </div>

                    {/* Products */}
                    <div>
                        <label className="block text-[#333333] mb-2">Products</label>
                        <select
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                        >
                            <option value="">Select products</option>
                        </select>
                    </div>

                    {/* Company Size (Optional) */}
                    <div>
                        <label className="block text-[#333333] mb-2">Company Size (Optional)</label>
                        <select className="w-full border border-[#AAAAAA] rounded-[7px] p-3">
                            <option value="">Select size</option>
                        </select>
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-[#333333] mb-2">City</label>
                        <input
                            type="text"
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            placeholder="Enter city"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-[#333333] mb-2">State</label>
                        <select className="w-full border border-[#AAAAAA] rounded-[7px] p-3">
                            <option value="">Select state</option>
                        </select>
                    </div>

                    {/* Zip Code */}
                    <div>
                        <label className="block text-[#333333] mb-2">Zip Code</label>
                        <input
                            type="text"
                            className="w-full border border-[#AAAAAA] rounded-[7px] p-3"
                            placeholder="Enter zip code"
                        />
                    </div>
                </div>

                {/* Business Logo */}
                <div className="mt-4">
                    <p className="text-[#333333] mb-2">Business Logo</p>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-24 bg-[#F4F6FB] rounded-[7px] flex items-center justify-center">
                            <span className="text-[#646464]">No Image</span>
                        </div>
                        <button
                            type="button"
                            className="px-4 py-2 bg-white border border-[#3159FF] text-[#3159FF] rounded-[7px]"
                        >
                            Choose Image
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end gap-4">
                    <button
                        type="button"
                        className="border border-[#FF4C51] text-[#FF4C51] px-6 py-2 rounded-[8px]"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[#3159FF] text-white px-6 py-2 rounded-[8px]"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BusinessSettings; 
import React from "react";
import { Button } from "./button";
import { X, Target, Upload } from "lucide-react";

export const UploadModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
            <div className="relative bg-white w-[700px] h-[692px] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                {/* Close Button */}
                <div className="absolute -top-[10px] right-[26px]">
                    <button
                        onClick={onClose}
                        className="w-9 h-9 bg-white rounded-md shadow-[0_0_20px_rgba(0,0,0,0.15)] flex items-center justify-center"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h2 className="text-[#4D4D4D] text-lg">Choose How You Want to Add Customers</h2>

                    <div className="border-t border-[#CCCCCC] my-6" />

                    <div className="flex gap-0">
                        <button className="flex items-center gap-2 px-4 py-2.5 h-[42px] rounded-lg hover:bg-[#3159FF]/10">
                            <Target className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-500">Add Manually</span>
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2.5 h-[42px] rounded-lg bg-[#3159FF]/10">
                            <div className="w-5 h-5 text-gray-500">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 7H3C2.45 7 2 7.45 2 8V16C2 16.55 2.45 17 3 17H17C17.55 17 18 16.55 18 16V8C18 7.45 17.55 7 17 7ZM16 15H4V9H16V15Z" fill="#888888" />
                                    <path d="M7 11H13V13H7V11Z" fill="#888888" />
                                </svg>
                            </div>
                            <span className="text-[#333333]">Upload CSV File</span>
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2.5 h-[42px] rounded-lg hover:bg-[#3159FF]/10">
                            <div className="w-6 h-6 rounded-full bg-[#5D56BD] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full" />
                            </div>
                            <span className="text-gray-500">Sync with Zapier</span>
                        </button>
                    </div>

                    {/* Upload Area */}
                    <div className="mt-[60px] border-2 border-[#CCCCCC] rounded-lg bg-[#fdfdfd] p-5 h-[252px] flex flex-col items-center justify-center">
                        <Upload className="w-[70px] h-[70px] text-[#3159FF]" />
                        <p className="mt-5 text-[#333333] text-lg">Drag and drop files here</p>
                        <p className="mt-4 text-[#7D7D7D]">or</p>
                        <button className="mt-4 w-[200px] h-10 border border-[#3159FF] rounded-lg text-[#3159FF]">
                            Browse Files
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-[61px] right-[28px] flex gap-4">
                        <Button
                            variant="secondary"
                            className="w-[200px] h-10 bg-[#E6E6E6] text-[#808080]"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="w-[200px] h-10 bg-gradient-to-r from-[#3159FF]/80 to-[#B5D4FF] text-white"
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}; 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaEye, FaEyeSlash, FaRobot, FaSpinner } from 'react-icons/fa';

const Registration = () => {



    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        setIsLoading(true);

        try {
            const requestBody = {
                email: formData.email,
                password: formData.password,
                role: "BusinessOwner",
                full_name: formData.email.split('@')[0],
            };

            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message || 'Registration failed');
            }

            const data = await res.json();
            alert('Registration successful!');
            setFormData({ email: '', password: '', confirmPassword: '' });
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.message || 'An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#F5F7FA] flex items-center justify-start p-4 overflow-hidden">
            {/* Background Vectors */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <img
                    src="/Vector 15.png"
                    alt="Background design top"
                    className="relative"
                />
                <img
                    src="/Vector 16.png"
                    alt="Background design bottom"
                    className="relative -mt-48"
                />
            </div>

            {/* Registration Form Container - keeping original dimensions */}
            <div className="w-full max-w-[695px] bg-white rounded-[20px] p-8 shadow-lg relative z-10 ml-16">
                <h1 className="text-2xl font-semibold text-gray-700 text-center mb-8">
                    Register for ReferralHub
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 text-left">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 text-left">Create Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-4 text-gray-500"
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 text-left">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-4 text-gray-500"
                            >
                                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <FaSpinner className="animate-spin mr-2" /> Signing Up...
                            </span>
                        ) : (
                            'Sign Up'
                        )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <span className="text-gray-500">or</span>
                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center space-x-4">
                        <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <FcGoogle className="w-6 h-6" />
                        </button>
                        <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <FaFacebook className="w-6 h-6 text-blue-600" />
                        </button>
                        <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <FaTwitter className="w-6 h-6 text-blue-400" />
                        </button>
                        <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <FaLinkedin className="w-6 h-6 text-blue-700" />
                        </button>
                    </div>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>

            {/* Chatbot Icon */}
            <div className="fixed bottom-8 right-8 z-20">
                <button className="w-15 h-15 bg-white rounded-full shadow-lg p-4 hover:bg-gray-50 transition-colors">
                    <FaRobot className="text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default Registration; 
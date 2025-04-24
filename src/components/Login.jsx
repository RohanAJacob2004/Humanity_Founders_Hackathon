import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);


        try {
            
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Store the token in localStorage or sessionStorage based on rememberMe
            const storage = localStorage
            storage.setItem('email', JSON.stringify(email.split('@')[0]));
            storage.setItem('access_token', data.access);
            storage.setItem('refresh_token', data.refresh);

            // Reset form and redirect to dashboard
            setEmail('');
            setPassword('');
            navigate('/business-profile-setup');

        } catch (err) {
            setError(err.message || 'An error occurred during login');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#F5F7FA] flex items-center justify-center overflow-hidden">
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
                    className="relative -mt-44"
                />
            </div>

            {/* Login Form Container */}
            <div className="bg-white rounded-2xl shadow-lg p-8 w-[480px] min-h-[690px] relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-700">Login to ReferralHub</h1>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Magic Link Login Section */}
                    <div className="space-y-4">

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Magic Link Login
                            </label>

                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                        disabled={isLoading}
                    >
                        Send Magic Link
                    </button>
                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">or</span>
                        </div>
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 text-left">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>  setEmail(e.target.value) }
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 text-left">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                disabled={isLoading}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>


                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                disabled={isLoading}
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                Remember Me
                            </label>
                        </div>


                        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">or</span>
                        </div>
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

                    {/* Registration Link */}
                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login; 
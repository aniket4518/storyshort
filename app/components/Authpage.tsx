"use client"
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react"

export default function Authpage({isSignin}:{isSignin:boolean}){
     const handleGoogleSignIn = async () => {
        try {
            await signIn("google", { callbackUrl: "/dashboard" });
        } catch (error) {
            console.error("Google sign in failed", error);
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return(
        <div className="min-h-screen bg-black text-white flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        <span className="text-2xl font-bold">StoryShort</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold mb-8">
                        {isSignin ? "Sign in to your account" : "Create your account"}
                    </h1>

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Name Input - Only for Sign Up */}
                        {!isSignin && (
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-800 rounded-full px-6 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors"
                                />
                            </div>
                        )}

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="hello@johndoe.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-800 rounded-full px-6 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-800 rounded-full px-6 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password - Only for Sign In */}
                        {isSignin && (
                            <div className="text-left">
                                <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-gray-300">
                                    Forgot password?
                                </Link>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3.5 rounded-full transition-colors"
                        >
                            {isSignin ? "Sign in" : "Sign up"}
                        </button>

                        {/* Toggle Sign In/Sign Up */}
                        <div className="text-center">
                            {isSignin ? (
                                <p className="text-gray-400">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/signup" className="text-white hover:underline font-medium">
                                        Sign up
                                    </Link>
                                </p>
                            ) : (
                                <p className="text-gray-400">
                                    Already have an account?{" "}
                                    <Link href="/login" className="text-white hover:underline font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-black text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Google Sign In */}
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="w-full bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-medium py-3.5 rounded-full transition-colors flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Google
                        </button>

                        {/* Terms */}
                        <p className="text-xs text-center text-gray-500 mt-6">
                            By clicking on sign in, you agree to our{" "}
                            <Link href="/terms" className="text-gray-400 hover:text-gray-300 underline">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-gray-400 hover:text-gray-300 underline">
                                Privacy Policy
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-black items-center justify-center p-12 relative">
                {/* Decorative dotted border */}
                <div className="absolute inset-0 border-l-2 border-dashed border-gray-800"></div>
                
                <div className="max-w-md text-center relative z-10">
                    {/* User Avatars */}
                    <div className="flex justify-center mb-6">
                        <div className="flex -space-x-2">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-black"></div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-4 border-black"></div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-black"></div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-4 border-black"></div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-black"></div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-4 border-black relative">
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        ))}
                    </div>

                    <p className="text-gray-400 mb-8">
                        Trusted by 27,000+ creators
                    </p>

                    <h2 className="text-3xl font-bold mb-4">
                        Join Thousands Of Content Creators
                    </h2>

                    <p className="text-gray-400">
                        Who use StoryShort to create and share their stories.
                    </p>
                </div>
            </div>
        </div>
    )
}
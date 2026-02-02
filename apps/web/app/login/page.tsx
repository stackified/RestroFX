"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Button } from "@crimsonfx/ui";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login with:", email, password);
    };

    return (
        <div className="min-h-screen relative w-full bg-white flex flex-col font-sans selection:bg-red-500/20">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center relative w-full overflow-hidden">
                {/* Background Effect */}
                <div className="absolute inset-0 z-0">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-white"
                        colors={[[220, 38, 38]]} // Red dots
                        dotSize={3}
                    />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 w-full max-w-md p-4 sm:p-6 my-24 sm:my-40">
                    <div className="bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(220,38,38,0.3)]">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold mb-3 tracking-tight bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Welcome Back</h1>
                            <p className="text-neutral-500 text-base">Sign in to your account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-neutral-700 ml-1"
                                >
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-600 transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-[3px] focus:ring-red-500/10 focus:border-red-500 transition-all outline-none font-medium text-neutral-900 placeholder:text-neutral-400"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between ml-1">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-semibold text-neutral-700"
                                    >
                                        Password
                                    </label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors hover:underline underline-offset-4"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-600 transition-colors">
                                        <Lock className="h-5 w-5" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-[3px] focus:ring-red-500/10 focus:border-red-500 transition-all outline-none font-medium text-neutral-900 placeholder:text-neutral-400"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors p-1 rounded-md hover:bg-neutral-100"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all duration-300 group mt-4"
                            >
                                <span className="flex items-center gap-2">
                                    Sign In <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-sm text-neutral-500">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-red-600 hover:text-red-700 font-bold hover:underline underline-offset-4 transition-all ml-1">
                                Create free account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

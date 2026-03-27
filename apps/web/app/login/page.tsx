"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Button } from "@crimsonfx/ui";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
    useEffect(() => {
        window.location.replace("https://portal.restrofx.com/login");
    }, []);


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
                <div className="relative z-10 w-full max-w-md p-4 sm:p-6 my-24 sm:my-40 text-center">
                    <div className="bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-10">
                        <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-6" />
                        <h1 className="text-2xl font-bold mb-3 tracking-tight text-neutral-900">Redirecting to Portal</h1>
                        <p className="text-neutral-500 mb-8">Please wait while we take you to the RestroFX login page...</p>
                        
                        <Button 
                            className="w-full h-12 font-bold"
                            onClick={() => window.location.replace("https://portal.restrofx.com/login")}
                        >
                            Click here if not redirected
                        </Button>

                        <div className="mt-8 pt-6 border-t border-neutral-100 text-sm text-neutral-500">
                            Don&apos;t have an account?{" "}
                            <Link href="https://portal.restrofx.com/register" className="text-red-600 hover:text-red-700 font-bold hover:underline underline-offset-4 transition-all ml-1">
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

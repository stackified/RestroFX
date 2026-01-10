"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
    value: string | number;
    className?: string;
    duration?: number;
}

export function AnimatedCounter({
    value,
    className,
    duration = 2,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    // Parse the value string
    const stringValue = String(value);
    const numberMatch = stringValue.match(/(\d+(\.\d+)?)/);
    const numericValue = numberMatch ? parseFloat(numberMatch[0]) : 0;

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, numericValue, {
                duration: duration,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, motionValue, numericValue, duration]);

    useEffect(() => {
        return motionValue.on("change", (latest) => {
            if (ref.current) {
                // Determine decimal places from the original string match
                // If match is "2.5", decimals is 1. If "30", decimals is 0.
                const decimals = numberMatch?.[0].split(".")[1]?.length || 0;
                const formattedNumber = latest.toFixed(decimals);

                // Reconstruct the string
                if (numberMatch) {
                    const newValue = stringValue.replace(numberMatch[0], formattedNumber);
                    ref.current.textContent = newValue;
                } else {
                    ref.current.textContent = stringValue;
                }
            }
        });
    }, [motionValue, stringValue, numberMatch]);

    return <span ref={ref} className={className}>{stringValue.replace(numberMatch?.[0] || "", "0")}</span>;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLDivElement>;
  customVariants?: Variants;
  className?: string;
  [key: string]: unknown;
}

export function TimelineContent({
  children,
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const refToObserve = timelineRef?.current || elementRef.current;
    if (refToObserve) {
      observer.observe(refToObserve);
    }

    return () => {
      if (refToObserve) {
        observer.unobserve(refToObserve);
      }
    };
  }, [timelineRef]);

  const defaultVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  const motionProps: any = {
    custom: animationNum,
    initial: "hidden",
    animate: isVisible ? "visible" : "hidden",
    variants,
    className: cn(className),
    ...props,
  };

  if (Component === "div") {
    return (
      <motion.div ref={elementRef as React.RefObject<HTMLDivElement>} {...motionProps}>
        {children}
      </motion.div>
    );
  }
  if (Component === "span") {
    return (
      <motion.span ref={elementRef as React.RefObject<HTMLSpanElement>} {...motionProps}>
        {children}
      </motion.span>
    );
  }
  if (Component === "h1") {
    return (
      <motion.h1 ref={elementRef as React.RefObject<HTMLHeadingElement>} {...motionProps}>
        {children}
      </motion.h1>
    );
  }
  if (Component === "h2") {
    return (
      <motion.h2 ref={elementRef as React.RefObject<HTMLHeadingElement>} {...motionProps}>
        {children}
      </motion.h2>
    );
  }
  if (Component === "p") {
    return (
      <motion.p ref={elementRef as React.RefObject<HTMLParagraphElement>} {...motionProps}>
        {children}
      </motion.p>
    );
  }
  if (Component === "a") {
    return (
      <motion.a ref={elementRef as React.RefObject<HTMLAnchorElement>} {...motionProps}>
        {children}
      </motion.a>
    );
  }
  if (Component === "button") {
    return (
      <motion.button ref={elementRef as React.RefObject<HTMLButtonElement>} {...motionProps}>
        {children}
      </motion.button>
    );
  }
  if (Component === "figure") {
    return (
      <motion.figure ref={elementRef as React.RefObject<HTMLElement>} {...motionProps}>
        {children}
      </motion.figure>
    );
  }

  return (
    <motion.div ref={elementRef as React.RefObject<HTMLDivElement>} {...motionProps}>
      {children}
    </motion.div>
  );
}

"use client";

import React, { useEffect, useRef, ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      if (!cardRef.current || !isHovered) return;
      
      const { clientX: x, clientY: y } = e;
      const rect = cardRef.current.getBoundingClientRect();
      const localX = x - rect.left;
      const localY = y - rect.top;
      
      cardRef.current.style.setProperty('--x', localX.toFixed(2));
      cardRef.current.style.setProperty('--y', localY.toFixed(2));
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, [isHovered]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .red-glow-card {
            --x: 50%;
            --y: 50%;
            --spotlight-size: 350px;
            position: relative;
            will-change: transform;
          }
          
          .red-glow-card::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: inherit;
            padding: 2px;
            background: radial-gradient(
              calc(var(--spotlight-size) * 0.8) calc(var(--spotlight-size) * 0.8) at
              var(--x) var(--y),
              rgba(220, 38, 38, 0.7),
              rgba(220, 38, 38, 0.5),
              rgba(220, 38, 38, 0.35),
              rgba(220, 38, 38, 0.2),
              rgba(220, 38, 38, 0.1),
              transparent 70%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            z-index: 1;
            filter: blur(2px) brightness(1.15);
            box-shadow: 0 0 30px rgba(220, 38, 38, 0.3);
          }
          
          .red-glow-card::after {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: inherit;
            padding: 2px;
            background: radial-gradient(
              calc(var(--spotlight-size) * 0.6) calc(var(--spotlight-size) * 0.6) at
              var(--x) var(--y),
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.3),
              rgba(255, 255, 255, 0.15),
              transparent 60%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            z-index: 1;
            filter: blur(1px);
          }
          
          .red-glow-card.glow-active::before,
          .red-glow-card.glow-active::after {
            opacity: 1;
          }
          
          .red-glow-inner {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: radial-gradient(
              calc(var(--spotlight-size) * 1.1) calc(var(--spotlight-size) * 1.1) at
              var(--x) var(--y),
              rgba(220, 38, 38, 0.15),
              rgba(220, 38, 38, 0.1),
              rgba(220, 38, 38, 0.06),
              rgba(220, 38, 38, 0.03),
              transparent 65%
            );
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            z-index: 0;
          }
          
          .red-glow-card.glow-active .red-glow-inner {
            opacity: 1;
          }
        `
      }} />
      <div 
        ref={cardRef} 
        className={cn("red-glow-card relative flex flex-col", isHovered && "glow-active", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="red-glow-inner" />
        <div className="relative z-10 flex flex-col flex-1 min-h-0">
          {children}
        </div>
      </div>
    </>
  );
};
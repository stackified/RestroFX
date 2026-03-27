"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface CarouselItem {
  id: string;
  title: string;
  videoId: string;
}

interface CurvedCarouselProps {
  items: CarouselItem[];
  title?: string;
  subtitle?: string;
}

export function CurvedCarousel({ items, title, subtitle }: CurvedCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Triplicate items for infinite loop
  const displayItems = useMemo(() => [...items, ...items, ...items], [items]);
  const middleIndexOffset = items.length;
  
  // Constants
  const itemWidth = 300;
  const gap = 32;
  const itemTotalWidth = itemWidth + gap;
  const centerOffset = -itemWidth / 2;

  // Spring for smooth dragging and scroll
  const springX = useSpring(x, { stiffness: 150, damping: 25 });

  // Scroll Sync
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to a rotational offset
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [itemTotalWidth, -itemTotalWidth]);

  const handleDragStart = () => setIsDragging(true);
  
  const handleDragEnd = (_: any, info: any) => {
    setTimeout(() => setIsDragging(false), 50); // Small delay to prevent immediate click
    
    const velocity = info.velocity.x;
    const currentX = x.get() - centerOffset;
    let newIndex = Math.round(-currentX / itemTotalWidth);
    
    if (Math.abs(velocity) > 500) {
        newIndex = velocity > 0 ? active - 1 : active + 1;
    }

    // Wrap index within the displayItems range if needed
    // But setActive should really be based on the middle set for stability
    setActive(newIndex);
  };

  // Sync scroll and handle infinite wrapping
  useEffect(() => {
    // Initial position: center of the middle set
    x.set(-(middleIndexOffset * itemTotalWidth) + centerOffset);
    setActive(middleIndexOffset);
  }, []);

  useEffect(() => {
    x.set(-(active * itemTotalWidth) + centerOffset);
  }, [active, x, itemTotalWidth, centerOffset]);

  const handleCardClick = (videoId: string) => {
    if (isDragging) return;
    window.open(`https://youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-24 bg-transparent overflow-hidden perspective-1000">
      <div className="container px-4 md:px-6 mb-12 text-center">
        {title && <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">{title}</h2>}
        {subtitle && <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      <div 
        ref={containerRef}
        className="relative h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          style={{ x: useTransform([springX, scrollOffset], ([sx, so]) => (sx as number) + (so as number)), left: "50%" }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="absolute flex gap-8 items-center"
        >
          {displayItems.map((item, index) => {
            const itemOffset = index * itemTotalWidth;
            
            // Transform logic relative to the combined springX + scrollOffset
            const combinedPos = useTransform([springX, scrollOffset], ([sx, so]) => (sx as number) + (so as number));
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemRotation = useTransform(combinedPos, 
                [-itemOffset + centerOffset - itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + itemTotalWidth], 
                [-45, 0, 45]
            );
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemScale = useTransform(combinedPos, 
                [-itemOffset + centerOffset - itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + itemTotalWidth], 
                [0.8, 1, 0.8]
            );
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemZ = useTransform(combinedPos, 
                [-itemOffset + centerOffset - itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + itemTotalWidth], 
                [-200, 0, -200]
            );
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemOpacity = useTransform(combinedPos, 
                [-itemOffset + centerOffset - 2 * itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + 2 * itemTotalWidth], 
                [0, 1, 0]
            );

            return (
              <motion.div
                key={`${item.id}-${index}`}
                style={{
                  width: itemWidth,
                  height: 400,
                  rotateY: itemRotation,
                  scale: itemScale,
                  z: itemZ,
                  opacity: itemOpacity,
                }}
                className="relative flex-shrink-0 group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                onClick={() => handleCardClick(item.videoId)}
              >
                <Image
                  src={`https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="p-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 w-fit mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-6 h-6 text-primary fill-primary" />
                  </motion.div>
                  <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i + middleIndexOffset)}
            className={`h-2 rounded-full transition-all duration-300 ${active % items.length === i ? 'w-8 bg-primary' : 'w-2 bg-neutral-800'}`}
          />
        ))}
      </div>
    </section>
  );
}

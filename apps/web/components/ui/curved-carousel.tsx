"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Spring for smooth dragging
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  
  // Calculate the rotation based on the number of items
  // We want to map the drag distance to an index
  const itemWidth = 300; // estimated width of a card
  const gap = 32; // gap-8 = 2rem = 32px
  
  // Center offset to align the active item's center with the viewport's center
  const centerOffset = -itemWidth / 2;

  const handleDragEnd = (_: any, info: any) => {
    // Determine the closest index based on the drag offset
    const velocity = info.velocity.x;
    
    // Simple snapping
    if (Math.abs(velocity) > 500) {
        if (velocity > 0) setActive((prev) => Math.max(0, prev - 1));
        else setActive((prev) => Math.min(items.length - 1, prev + 1));
    } else {
        const currentX = x.get() - centerOffset;
        const index = Math.round(-currentX / (itemWidth + gap));
        setActive(Math.max(0, Math.min(items.length - 1, index)));
    }
  };

  useEffect(() => {
    x.set(-(active * (itemWidth + gap)) + centerOffset);
  }, [active, x, centerOffset, gap]);

  return (
    <section className="py-24 bg-transparent overflow-hidden perspective-1000">
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
          dragConstraints={{ 
            left: -(items.length - 1) * (itemWidth + gap) + centerOffset, 
            right: centerOffset 
          }}
          style={{ x, left: "50%" }}
          onDragEnd={handleDragEnd}
          className="absolute flex gap-8 items-center"
        >
          {items.map((item, index) => {
            const itemOffset = index * (itemWidth + gap);
            
            // Map the global x motion value to local item transforms
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemRotation = useTransform(springX, 
                [-itemOffset + centerOffset - (itemWidth + gap), -itemOffset + centerOffset, -itemOffset + centerOffset + (itemWidth + gap)], 
                [-45, 0, 45]
            );
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemScale = useTransform(springX, 
                [-itemOffset + centerOffset - (itemWidth + gap), -itemOffset + centerOffset, -itemOffset + centerOffset + (itemWidth + gap)], 
                [0.8, 1, 0.8]
            );
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemZ = useTransform(springX, 
                [-itemOffset + centerOffset - (itemWidth + gap), -itemOffset + centerOffset, -itemOffset + centerOffset + (itemWidth + gap)], 
                [-200, 0, -200]
            );
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemOpacity = useTransform(springX, 
                [-itemOffset + centerOffset - 2 * (itemWidth + gap), -itemOffset + centerOffset, -itemOffset + centerOffset + 2 * (itemWidth + gap)], 
                [0, 1, 0]
            );

            return (
              <motion.div
                key={item.id}
                style={{
                  width: itemWidth,
                  height: 400,
                  rotateY: itemRotation,
                  scale: itemScale,
                  z: itemZ,
                  opacity: itemOpacity,
                }}
                className="relative flex-shrink-0 group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                onClick={() => window.open(`https://youtube.com/watch?v=${item.videoId}`, '_blank')}
              >
                <Image
                  src={`https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                {/* Overlay */}
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

                {/* Glassmorphic Reflection Overlay */}
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
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-primary' : 'w-2 bg-neutral-800'}`}
          />
        ))}
      </div>
    </section>
  );
}

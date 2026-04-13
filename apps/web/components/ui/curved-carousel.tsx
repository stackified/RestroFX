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
  title?: string | React.ReactNode;
  subtitle?: string;
}

interface CarouselCardProps {
  item: CarouselItem;
  index: number;
  combinedPos: any; // MotionValue<number>
  itemWidth: number;
  itemHeight: number;
  itemTotalWidth: number;
  centerOffset: number;
  onClick: (videoId: string) => void;
}

function CarouselCard({ 
  item, 
  index, 
  combinedPos, 
  itemWidth, 
  itemHeight, 
  itemTotalWidth, 
  centerOffset, 
  onClick 
}: CarouselCardProps) {
  const itemOffset = index * itemTotalWidth;
  
  // Transform logic relative to the combined position
  const itemRotation = useTransform(combinedPos, 
      [-itemOffset + centerOffset - itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + itemTotalWidth], 
      [-45, 0, 45]
  );
  const itemScale = useTransform(combinedPos, 
      [-itemOffset + centerOffset - itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + itemTotalWidth], 
      [0.8, 1, 0.8]
  );
  const itemZ = useTransform(combinedPos, 
      [-itemOffset + centerOffset - itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + itemTotalWidth], 
      [-itemWidth * 0.5, 0, -itemWidth * 0.5]
  );
  const itemOpacity = useTransform(combinedPos, 
      [-itemOffset + centerOffset - 2 * itemTotalWidth, -itemOffset + centerOffset, -itemOffset + centerOffset + 2 * itemTotalWidth], 
      [0, 1, 0]
  );

  const [imgSrc, setImgSrc] = useState(`https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`);

  return (
    <motion.div
      style={{
        width: itemWidth,
        height: itemHeight,
        rotateY: itemRotation,
        scale: itemScale,
        z: itemZ,
        opacity: itemOpacity,
      }}
      className="relative flex-shrink-0 group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black pointer-events-auto"
      onClick={() => onClick(item.videoId)}
    >
      <Image
        src={imgSrc}
        alt={item.title}
        fill
        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        onError={() => {
          setImgSrc(`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`);
        }}
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
}

export function CurvedCarousel({ items, title, subtitle }: CurvedCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 480, height: 270, gap: 32 });
  
  // Responsive dimensions
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        const w = Math.min(width - 40, 320);
        setDimensions({ width: w, height: w * 9/16, gap: 16 });
      } else if (width < 1024) {
        // Tablet
        setDimensions({ width: 400, height: 225, gap: 24 });
      } else {
        // Desktop
        setDimensions({ width: 480, height: 270, gap: 32 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width: itemWidth, height: itemHeight, gap } = dimensions;
  
  // Triplicate items for infinite loop
  const displayItems = useMemo(() => [...items, ...items, ...items], [items]);
  const middleIndexOffset = items.length;
  
  // Constants
  const itemTotalWidth = itemWidth + gap;
  const centerOffset = -itemWidth / 2;

  // Spring for smooth dragging and scroll
  const springX = useSpring(x, { stiffness: 150, damping: 25 });

  // Scroll Sync
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to a rotational offset - reduced for subtler effect and responsive scaling
  const scrollIntensity = itemWidth < 400 ? 0.15 : 0.3;
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [itemWidth * scrollIntensity, -itemWidth * scrollIntensity]);

  // Combined position for all items to reactive to
  const combinedPos = useTransform([springX, scrollOffset], ([sx, so]) => (sx as number) + (so as number));

  const handleDragStart = () => setIsDragging(true);
  
  const handleDragEnd = (_: any, info: any) => {
    setTimeout(() => setIsDragging(false), 50);
    
    const velocity = info.velocity.x;
    // Calculate current visual position relative to the center
    const visualX = x.get() + scrollOffset.get() - centerOffset;
    let newIndex = Math.round(-visualX / itemTotalWidth);
    
    if (Math.abs(velocity) > 500) {
        newIndex = velocity > 0 ? active - 1 : active + 1;
    }

    // Keep active within reasonable bounds of the triple list
    if (newIndex < 1) newIndex = middleIndexOffset;
    if (newIndex > displayItems.length - 2) newIndex = middleIndexOffset + items.length - 1;

    setActive(newIndex);
  };

  useEffect(() => {
    // Subtract current scrollOffset so that combinedPos (x + scrollOffset) equals the target
    const targetX = -(middleIndexOffset * itemTotalWidth) + centerOffset;
    x.set(targetX - scrollOffset.get());
    setActive(middleIndexOffset);
  }, [middleIndexOffset, itemTotalWidth, centerOffset, x, scrollOffset]);

  useEffect(() => {
    const targetX = -(active * itemTotalWidth) + centerOffset;
    x.set(targetX - scrollOffset.get());
  }, [active, x, itemTotalWidth, centerOffset, scrollOffset]);

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
        style={{ height: itemHeight * 1.8 }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          drag="x"
          // Ghost Drag: capture events without moving the element itself
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrag={(_, info) => {
            x.set(x.get() + info.delta.x);
          }}
          style={{ x: combinedPos, left: "50%" }}
          className="absolute flex gap-8 items-center cursor-grab active:cursor-grabbing preserve-3d"
        >
          {displayItems.map((item, index) => (
            <CarouselCard
              key={`${item.id}-${index}`}
              item={item}
              index={index}
              combinedPos={combinedPos}
              itemWidth={itemWidth}
              itemHeight={itemHeight}
              itemTotalWidth={itemTotalWidth}
              centerOffset={centerOffset}
              onClick={handleCardClick}
            />
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, i) => {
          // Calculate if this dot represents the "active" visual item
          // Since we use springX + scrollOffset, the visual center is slightly shifted
          const isSelected = active % items.length === i;
          return (
            <button
              key={i}
              onClick={() => setActive(i + middleIndexOffset)}
              className={`h-2 rounded-full transition-all duration-300 ${isSelected ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
              aria-label={`Go to video ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}

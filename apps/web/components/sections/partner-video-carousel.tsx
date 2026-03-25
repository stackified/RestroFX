"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image, ScrollControls, useScroll, useCursor } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
}

const CURVE_AMOUNT = 0.35;
const GAP = 2.5;

function VideoItem({ 
  url, 
  index, 
  total, 
  onSelect 
}: { 
  url: string; 
  title: string; 
  index: number; 
  total: number;
  onSelect: () => void;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  useFrame(() => {
    if (!mesh.current) return;
    
    // Calculate distance from center based on world position
    const worldPos = new THREE.Vector3();
    mesh.current.getWorldPosition(worldPos);
    const dist = worldPos.x;
    
    // Apply curvature in Z and rotation based on X position
    mesh.current.position.z = -Math.pow(Math.abs(dist), 2) * CURVE_AMOUNT;
    mesh.current.rotation.y = -dist * 0.15;
    
    // Scale up on hover
    const targetScale = hovered ? 1.1 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.1);
  });

  return (
    <group position={[index * GAP - (total * GAP) / 2 + GAP / 2, 0, 0]}>
      <Image
        ref={mesh}
        url={url}
        transparent
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onSelect}
      >
        <planeGeometry args={[2, 2.8, 32, 32]} />
      </Image>
    </group>
  );
}

function Scene({ videos, onVideoSelect }: { videos: VideoData[], onVideoSelect: (id: string) => void }) {
  const scroll = useScroll();
  const group = useRef<any>(null!);

  useFrame(() => {
    if (!group.current) return;
    // Maps scroll 0-1 to X position
    const offset = scroll.offset;
    const scrollWidth = (videos.length - 1) * GAP;
    group.current.position.x = -offset * scrollWidth + (scrollWidth / 2);
  });

  return (
    <group ref={group}>
      {videos.map((video, i) => (
        <VideoItem 
          key={video.id} 
          url={video.thumbnail} 
          title={video.title} 
          index={i} 
          total={videos.length}
          onSelect={() => onVideoSelect(video.id)}
        />
      ))}
    </group>
  );
}

export function PartnerVideoCarousel({ videos }: { videos: VideoData[] }) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-transparent overflow-hidden my-12">
      <div className="absolute top-0 left-0 w-full z-10 text-center pointer-events-none mt-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-heading mb-4"
        >
          My Latest <span className="text-primary">Content</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground uppercase tracking-widest text-sm"
        >
          Scroll to explore • Click to watch
        </motion.p>
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ScrollControls horizontal pages={2} damping={0.2}>
          <Scene videos={videos} onVideoSelect={setSelectedVideo} />
        </ScrollControls>
      </Canvas>

      {/* Video Overlay / Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button 
                className="absolute top-6 right-6 p-4 rounded-full bg-black/50 hover:bg-primary text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/30">
        <ArrowLeft size={20} />
        <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
                className="absolute inset-0 bg-primary origin-left"
                style={{ scaleX: 0.5 }} // This could be linked to scroll state if needed
            />
        </div>
        <ArrowRight size={20} />
      </div>
    </div>
  );
}

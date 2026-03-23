"use client";

import { motion } from "framer-motion";

interface PartnerVideoProps {
  youtubeId: string;
}

export function PartnerVideo({ youtubeId }: PartnerVideoProps) {
  if (!youtubeId) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Premium Glowing Backdrop */}
          <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-700" />
          
          <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-background/50 backdrop-blur-sm">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Decorative Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-primary/20 pointer-events-none group-hover:border-primary/40 transition-colors duration-500" />
        </motion.div>
      </div>
    </section>
  );
}

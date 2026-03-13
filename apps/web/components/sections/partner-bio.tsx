"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";

interface PartnerBioProps {
  name: string;
  bio: string;
  imageUrl: string;
  quote?: string;
}

export function PartnerBio({ name, bio, imageUrl, quote }: PartnerBioProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-20 text-center relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Meet the Trader</span>
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-4 leading-tight"
            >
                A proud partner of <br /> 
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">{name}.</span>
            </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10" />
              
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="squircle-clip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.5 C 0,0 0,0 0.5,0 C 1,0 1,0 1,0.5 C 1,1 1,1 0.5,1 C 0,1 0,1 0,0.5 Z" />
                  </clipPath>
                </defs>
              </svg>

              <div 
                className="relative w-full h-full overflow-hidden shadow-2xl group border-l-[6px] border-b-[6px] border-primary/20"
                style={{ clipPath: "url(#squircle-clip)" }}
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                {quote && (
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-xl md:text-2xl italic text-white font-medium leading-snug drop-shadow-md">&quot;{quote}&quot;</p>
                      <p className="mt-4 font-bold text-primary text-sm uppercase tracking-widest">— {name}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-muted text-muted-foreground font-semibold text-sm mb-6 w-fit border border-border">
              About The Partner
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-8 font-heading">{name}</h3>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed relative">
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-primary to-transparent rounded-full opacity-50 hidden md:block" />
              <div className="md:pl-6 space-y-6 text-justify">
                {bio.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <Button
                size="lg"
                className="rounded-xl bg-primary hover:bg-primary/90 text-white px-10 h-14 font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                asChild
              >
                <Link href="/register">Start Trading Under {name.split(' ')[0]}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

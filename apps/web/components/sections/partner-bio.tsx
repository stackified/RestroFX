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
        <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold font-heading mb-4"
            >
                A <span className="text-primary">proud</span> partner of <br /> {name}.
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
            <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {quote && (
                <div className="mt-8 text-center lg:text-left">
                    <p className="text-xl italic text-muted-foreground">"{quote}"</p>
                    <p className="mt-2 font-bold text-primary">— {name}</p>
                </div>
            )}
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">About {name}.</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              {bio.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-red-700 text-white px-8"
                asChild
              >
                <Link href="/register">Start Trading</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

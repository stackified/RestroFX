"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BackgroundBeams } from "@/components/ui/background-beams"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <section className={cn("py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden", className)}>
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of traders and start your trading journey today.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-2 md:order-1 space-y-8 md:space-y-10">
            {features.map((feature, index) => {
              const isActive = index === currentFeature
              const isCompleted = index < currentFeature

              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 md:gap-8"
                  initial={{ opacity: isActive ? 1 : 0.4 }}
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 flex-shrink-0",
                      isActive
                        ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                        : isCompleted
                        ? "bg-muted/50 border-2 border-border/40"
                        : "bg-muted/50 border-2 border-border/40",
                    )}
                    whileHover={{ scale: isActive ? 1.15 : 1.05 }}
                  >
                    {isCompleted || isActive ? (
                      <span className={cn(
                        "text-lg font-bold",
                        isActive ? "text-white" : "text-muted-foreground/60"
                      )}>✓</span>
                    ) : (
                      <span className="text-lg font-semibold font-numbers text-muted-foreground/60">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1 pt-1">
                    <h3 className={cn(
                      "text-xl md:text-2xl font-semibold font-heading mb-2 transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted-foreground/60"
                    )}>
                      {feature.title || feature.step}
                    </h3>
                    <p className={cn(
                      "text-base md:text-lg leading-relaxed",
                      isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                    )}>
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-lg shadow-lg",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={500}
                        priority={index === 0}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export function AboutSectionEnhanced() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-8 px-4 bg-muted/30" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-primary animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-muted-foreground uppercase tracking-wide"
              >
                ABOUT CRIMSONFX
              </TimelineContent>
            </div>
          </div>

          {/* Image */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <div className="relative w-full aspect-[2.5/1] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop"
                alt="Trading platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-6 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-primary font-bold font-numbers">500K+</span>
                <span className="text-muted-foreground">Traders Worldwide</span>
                <span className="text-border">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-primary font-bold font-numbers">$2.5B+</span>
                <span className="text-muted-foreground">Withdrawals Processed</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-primary font-semibold font-numbers">150+</span>
                <span className="text-foreground uppercase font-heading">Partners</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-primary font-bold font-numbers">&lt;30ms</span>
                <span className="text-muted-foreground">Execution Speed</span>
                <span className="text-border lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold font-heading text-foreground mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.3,
                }}
              >
                Trading Excellence. Trusted Worldwide.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-muted-foreground"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-sm font-body"
              >
                <p className="leading-relaxed">
                  CrimsonFX is a leading online trading platform dedicated to
                  providing traders with access to global financial markets. We
                  combine cutting-edge technology with transparent trading
                  conditions to deliver a professional trading experience.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-sm font-body"
              >
                <p className="leading-relaxed">
                  Our mission is to empower traders by providing them with the
                  tools, platforms, and support they need to succeed. We believe
                  in transparency, integrity, and putting our clients first.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-primary text-2xl font-bold font-heading mb-2"
              >
                CRIMSONFX
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-muted-foreground text-sm mb-8 font-body"
              >
                Regulated Broker | Global Markets
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-foreground font-medium mb-4 font-body">
                  Ready to start your trading journey?
                </p>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <Link
                  href="/register"
                  className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 border border-primary flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-primary-foreground px-5 py-3 rounded-lg cursor-pointer font-semibold font-body inline-flex items-center"
                >
                  START TRADING <ArrowRight className="w-4 h-4" />
                </Link>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

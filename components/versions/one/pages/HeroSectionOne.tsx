"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import {
  HERO_PARALLAX_CONTENT,
  HERO_SHORT_BIO,
  HERO_STATS,
  HERO_STATS_CONTEXT,
  HERO_PROFILE_IMAGE,
  HERO_NAME,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  MotionValue,
  AnimatePresence,
} from "motion/react";

const TIMELINE = {
  PARALLAX_END: 0.6,
  EXPANSION_START: 0.2,
  EXPANSION_END: 0.6,
};

// Independent arrays to ensure zero cross-contamination

export default function HeroSectionOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_PARALLAX_CONTENT.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="w-full portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
        className="min-h-dvh w-full flex flex-col justify-between overflow-x-hidden py-10 md:py-20 px-5 md:px-10"
      >
        {/* PHASE 1: GRID-LOCKED INDEPENDENT TEXT */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-0 shrink-0 h-35 md:h-45 relative">
          {/* LEFT COLUMN: COMPLEX / TO / FOR - Locked to Left */}
          <div className="relative h-full flex justify-center md:justify-start items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`left-${index}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="extra-large absolute left-0 text-left whitespace-nowrap"
              >
                {HERO_PARALLAX_CONTENT[index].left}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: SYSTEMS / AGENTS / FOUNDERS - Locked to Right */}
          <div className="relative h-full flex justify-center md:justify-end items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`right-${index}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05,
                }}
                className="extra-large text-primary absolute right-0 text-right whitespace-nowrap"
              >
                {HERO_PARALLAX_CONTENT[index].right}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* PHASE 2: CONTENT BOTTOM */}
        <div className="w-full h-full mt-auto">
          <HeroSectionContent progress={smoothProgress} />
        </div>
      </motion.div>
    </section>
  );
}

function HeroSectionContent({ progress }: { progress: MotionValue<number> }) {
  const imageScale = useTransform(
    progress,
    [TIMELINE.EXPANSION_START, 0.9],
    [0.85, 1],
  );
  const imageContentY = useTransform(
    progress,
    [TIMELINE.EXPANSION_START, TIMELINE.EXPANSION_END],
    ["100%", "0%"],
  );
  const increasingOpacity = useTransform(
    progress,
    [TIMELINE.EXPANSION_START, TIMELINE.EXPANSION_END],
    [0.2, 0.7],
  );

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 items-start">
      {/* LEFT: IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full lg:flex-1 flex items-end"
      >
        <motion.div
          style={{ scale: imageScale, transformOrigin: "bottom" }}
          className="relative aspect-square w-full md:max-w-140 overflow-hidden"
        >
          <Image
            src={HERO_PROFILE_IMAGE}
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top scale-110"
            priority
          />
          <motion.div
            style={{ opacity: increasingOpacity }}
            className="absolute inset-0 bg-black"
          />
          <motion.div
            style={{ y: imageContentY }}
            className="absolute bottom-0 left-0 p-6 text-background z-10"
          >
            <h4 className="text-xl font-medium">
              Hi, I&apos;m <span className="text-primary">{HERO_NAME}</span>
            </h4>
            <div className="bg-primary h-0.5 w-12 my-2" />
            <p className="text-sm max-w-xs opacity-90">{HERO_SHORT_BIO}</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT: BIO & STATS */}
      <div className="w-full my-auto lg:max-w-120 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            {HERO_STATS_CONTEXT}
          </p>
          {/* Grid ensures stats stack properly on small screens */}
          <div className="grid grid-cols-3 gap-y-10 gap-x-6">
            {HERO_STATS.map((stat, index) => (
              <StatItem
                key={stat.label + index}
                label={stat.label}
                value={stat.value}
                delay={0.5 + index * 0.1}
                progress={progress}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2 group w-full sm:w-auto"
            onClick={handleScroll}
          >
            Services I Provide
            <ArrowDown
              className="w-4 h-4 group-hover:translate-y-1 transition-transform"
              aria-hidden="true"
            />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
  progress: MotionValue<number>;
}) {
  const numberValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const iterations = useMemo(
    () => [0, Math.floor(numberValue / 2), numberValue],
    [numberValue],
  );
  const targetY = ((iterations.length - 1) / iterations.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col"
    >
      <div className="flex items-baseline overflow-hidden h-[3em]">
        <motion.div
          initial={{ y: "0%" }}
          whileInView={{ y: `-${targetY}%` }}
          transition={{
            delay: delay + 0.3,
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col"
        >
          {iterations.map((num, i) => (
            <h3
              key={i}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              {num}
            </h3>
          ))}
        </motion.div>
        <h3 className="text-3xl md:text-4xl font-bold ml-1">{suffix}</h3>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mt-2 font-semibold">
        {label}
      </span>
    </motion.div>
  );
}

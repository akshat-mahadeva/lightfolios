"use client";
import React from "react";
import { motion } from "motion/react";
import { EXPERIENCE_HEADER, EXPERIENCE_LIST } from "@/lib/data";
import CallToAction from "./CallToAction";

const ExperienceSectionOne = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 1, 0.36, 1] }}
      className="relative z-10 w-full portfolio text-background bg-foreground px-5 py-20 md:px-10"
    >
      {/* HEADER - Consistent with ServiceSectionOne */}
      <div className="z-10 flex flex-col md:flex-row justify-between gap-8 items-start pb-12">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="uppercase"
          >
            {EXPERIENCE_HEADER.title}
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className=" caption"
        >
          {EXPERIENCE_HEADER.description}
        </motion.p>
        <CallToAction label={EXPERIENCE_HEADER.cta.label} />
      </div>

      {/* EXPERIENCE LIST - Clean, scan-friendly layout */}
      <div className="flex flex-col">
        {EXPERIENCE_LIST.map((item, ind) => (
          <ExperienceItem key={ind} item={item} index={ind} />
        ))}
      </div>
    </motion.section>
  );
};

const ExperienceItem = ({
  item,
  index,
}: {
  item: (typeof EXPERIENCE_LIST)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      animate="initial"
      className="group relative flex flex-col border-b border-foreground/10 cursor-default"
    >
      <div className="flex flex-col lg:flex-row items-start py-10 md:py-16 gap-8 lg:gap-10 transition-colors duration-500">
        {/* Left: Role & Company */}
        <div className="flex-[40%] flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-muted/80 group-hover:text-primary transition-colors">
              0{index + 1}
            </span>
            <motion.h3 className=" text-muted/80 group-hover:text-muted transition-colors duration-300">
              {item.role}
            </motion.h3>
          </div>
          <div className="flex flex-col ml-10">
            <span className="caption text-primary font-medium">
              {item.company}
            </span>
            <span className="text-xs text-muted font-mono uppercase mt-1">
              {item.startDate} — {item.endDate}
            </span>
          </div>
        </div>

        {/* Right: Description & Tech Stack */}
        <div className="flex-[60%] flex flex-col gap-6 lg:pl-10">
          <motion.div
            variants={{
              initial: { opacity: 0.7, y: 5 },
              hover: { opacity: 1, y: 0 },
            }}
            className="text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
          >
            {/* Allowing for both string and object descriptions */}
            {typeof item.description === "string" ? (
              <p>{item.description}</p>
            ) : (
              item.description
            )}
          </motion.div>

          <div className="flex flex-wrap items-center gap-2">
            {item.tech.map((t, idx) => (
              <motion.span
                key={idx}
                variants={{
                  initial: { opacity: 0.7, scale: 0.95 },
                  hover: { opacity: 1, scale: 1 },
                }}
                className="caption text-muted border border-muted/60 rounded-full px-3 py-1 uppercase font-medium"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSectionOne;

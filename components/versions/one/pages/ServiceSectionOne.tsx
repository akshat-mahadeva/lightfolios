"use client";
import React from "react";
import { motion } from "motion/react";
import { SERVICES_LIST, SERVICES_HEADER } from "@/lib/data";
import CallToAction from "./CallToAction";

const ServiceSectionOne = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 1, 0.36, 1] }}
      className=" z-10  w-full portfolio  px-5 py-20 md:px-10 bg-muted/60"
    >
      {/* HEADER - Keep it clean and static */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 1, 0.36, 1] }}
        className=" z-10"
      >
        <div className="  flex flex-col md:flex-row justify-between gap-8 items-start pb-12">
          <div className="flex flex-col gap-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="uppercase "
            >
              {SERVICES_HEADER.title}
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground caption"
          >
            {SERVICES_HEADER.description}
          </motion.p>
          <CallToAction label={SERVICES_HEADER.cta.label} />
        </div>

        {/* SERVICES LIST - Standard layout, no sticky/parallax */}
        <div className="flex flex-col">
          {SERVICES_LIST.map((item, ind) => (
            <ServiceItem key={ind} item={item} index={ind} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

const ServiceItem = ({
  item,
  index,
}: {
  item: { title: string; description: string; skills: string[] };
  index: number;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileFocus="hover" // Accessibility support
      animate="initial"
      className="group relative flex flex-col border-b border-foreground/10 cursor-default"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center py-5 md:py-10 gap-6 md:gap-10 transition-colors duration-500">
        {/* Left: Index & Title */}
        <div className="flex-[50%] flex items-baseline gap-6">
          <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
            0{index + 1}
          </span>
          <motion.h3
            variants={{
              initial: { color: "var(--foreground)" },
              hover: { color: "var(--primary)" },
            }}
            className="text-3xl md:text-6xl font-medium tracking-tight transition-colors duration-300"
          >
            {item.title}
          </motion.h3>
        </div>

        {/* Right: Description & Skills */}
        <div className="flex-[50%] flex flex-col gap-6">
          <motion.p
            variants={{
              initial: { opacity: 0.6, y: 5 },
              hover: { opacity: 1, y: 0 },
            }}
            className="text-lg leading-relaxed text-foreground"
          >
            {item.description}
          </motion.p>

          <div className="flex flex-wrap items-center gap-2">
            {item.skills.map((skill, idx) => (
              <motion.span
                key={idx}
                variants={{
                  initial: { opacity: 0.6, scale: 0.95 },
                  hover: { opacity: 1, scale: 1 },
                }}
                className="caption border border-foreground/70 rounded-full px-4 py-1 uppercase font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceSectionOne;

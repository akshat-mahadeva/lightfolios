"use client";

import React from "react";
import { motion } from "motion/react";

interface FlipTextAnimationProps {
  text: string;
  className?: string;
}

export const FlipLinkText: React.FC<FlipTextAnimationProps> = ({ text }) => {
  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="relative inline-block overflow-hidden"
          style={{ height: "1.5em" }}
          whileHover="flip"
          initial="rest"
        >
          {/* Front */}
          <motion.span
            className="block"
            variants={{
              rest: { y: 0 },
              flip: { y: "-100%" },
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
              delay: i * 0.015, // 👈 subtle cascade
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>

          {/* Back */}
          <motion.span
            className="absolute inset-0 block"
            variants={{
              rest: { y: "100%" },
              flip: { y: "0%" },
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
              delay: i * 0.015,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
};

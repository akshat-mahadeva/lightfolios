"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
} from "@tabler/icons-react";
import { TESTIMONIALS_LIST, SOCIAL_LINKS, COPYRIGHT } from "@/lib/data";
import ContactFormOne from "./ContactFormOne";

// Animation Variants for consistency across the site
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
};

const ContactSectionOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 1, 0.36, 1] }}
      className="min-h-screen bg-background portfolio py-5 md:py-10 flex flex-col px-5 md:px-10"
    >
      {/* 1. HEADER - Staggered entrance to match Experience/Projects */}
      <div className="z-10 flex flex-col md:flex-row justify-between gap-8 items-start pb-12">
        <div className="flex flex-col gap-2">
          <motion.h3
            {...fadeInUp}
            transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
            className="uppercase"
          >
            CONTACT
          </motion.h3>
        </div>

        {/* 2. TESTIMONIAL PULSE - Centered Focus */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1, 0.36, 1] }}
          className="max-w-xl w-full h-20 flex items-center justify-center text-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm md:text-base italic opacity-70 font-serif">
                &quot;{TESTIMONIALS_LIST[index].comment}&quot;
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">
                — {TESTIMONIALS_LIST[index].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 1, 0.36, 1] }}
        >
          <Button
            variant={"outline"}
            size="lg"
            onClick={() =>
              (window.location.href = "mailto:akshat@risinloop.com")
            }
          >
            Send Email
            <IconArrowRight
              className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform"
              aria-hidden="true"
            />
          </Button>
        </motion.div>
      </div>

      {/* 3. CENTERED FORM - Slide in with section */}
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-1 flex flex-col justify-center"
      >
        <ContactFormOne />
      </motion.div>

      {/* 4. INTEGRATED FOOTER - Staggered Socials */}
      <div className="mt-auto pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-foreground/5 pt-8 pb-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4">
            {[
              {
                ...SOCIAL_LINKS.linkedin,
                icon: <IconBrandLinkedinFilled size={14} />,
              },
              { ...SOCIAL_LINKS.x, icon: <IconBrandXFilled size={14} /> },
              {
                ...SOCIAL_LINKS.github,
                icon: <IconBrandGithubFilled size={14} />,
              },
            ].map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <SocialLink
                  href={link.href}
                  label={link.name}
                  icon={link.icon}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center md:items-end"
          >
            <span className="text-[10px] uppercase tracking-widest text-center md:text-right">
              © {COPYRIGHT.year} — {COPYRIGHT.name} — ALL RIGHTS RESERVED
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit my ${label} profile`}
    className="flex items-center gap-2.5 group text-[11px] md:text-xs opacity-50 hover:opacity-100 transition-all uppercase tracking-[0.15em] font-medium"
  >
    <span className="group-hover:text-primary transition-colors group-hover:-translate-y-0.5 transform duration-300">
      {icon}
    </span>
    {label}
  </a>
);

export default ContactSectionOne;

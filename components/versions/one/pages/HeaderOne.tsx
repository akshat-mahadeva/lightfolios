"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FlipLinkText } from "./FlipTextAnimation";
import { Linkedin, Menu, X } from "lucide-react";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { SOCIAL_LINKS } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const links = [
  {
    icon: <Linkedin className="h-4 w-4" />,
    href: SOCIAL_LINKS.linkedin.href,
    label: SOCIAL_LINKS.linkedin.name,
  },
  {
    icon: <IconBrandX className="h-4 w-4" />,
    href: SOCIAL_LINKS.x.href,
    label: SOCIAL_LINKS.x.name,
  },
  {
    icon: <IconBrandGithub className="h-4 w-4" />,
    href: SOCIAL_LINKS.github.href,
    label: SOCIAL_LINKS.github.name,
  },
];

const HeaderOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle smooth scroll navigation
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // We use offset because of your sticky transition components
        const offset = element.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
    // Update URL hash without jump
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, filter: "blur(8px)", y: -8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between gap-2 py-4 px-5 portfolio relative z-100"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className={`caption font-medium uppercase tracking-tighter transition-opacity duration-300 ${isOpen ? "invisible" : "opacity-100"}`}
        >
          Akshat Mahadeva
        </motion.span>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center justify-center gap-6 caption">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              aria-label={`Visit my ${link.name} page`}
              onClick={(e) => handleScroll(e, link.id)}
              className="cursor-pointer"
            >
              <FlipLinkText text={link.name} />
            </a>
          ))}
        </nav>

        {/* DESKTOP SOCIALS & MOBILE TOGGLE */}
        <div className="flex items-center justify-end gap-4">
          <div className="hidden md:flex items-center gap-3">
            {links.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={`Visit my ${social.label} profile`}
                className="hover:text-primary transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 relative z-110ext-foreground transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} className="text-background" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN SHEET */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-90 bg-primary text-background flex flex-col justify-between p-8 pt-32"
          >
            {/* NAV LINKS STAGGERED */}
            <div className="flex flex-col gap-8">
              <span className="caption text-background/50 uppercase tracking-[0.2em] mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScroll(e, link.id)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM DRAWER (Socials & Copyright) */}
            <div className="border-t border-background/10 pt-8 flex flex-col gap-8">
              <div className="flex gap-4">
                {links.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    aria-label={`Visit my ${social.label} profile`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-4 border border-background/20 rounded-full hover:bg-background hover:text-primary transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <span className="caption uppercase tracking-widest text-background/40 text-[10px]">
                © 2026 Akshat Mahadeva — All Rights Reserved
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderOne;

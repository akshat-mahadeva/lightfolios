import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = ({ label }: { label: string }) => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();

    const element = document.getElementById("contact");
    if (element) {
      // We use offset because of your sticky transition components
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
    // Update URL hash without jump
    window.history.pushState(null, "", `#${"contact"}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Button
        variant={"outline"}
        size={"lg"}
        className="group cta-light"
        onClick={handleScroll}
      >
        {label}
        <ArrowRight
          className="ml-2 group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        />
      </Button>
    </motion.div>
  );
};

export default CallToAction;

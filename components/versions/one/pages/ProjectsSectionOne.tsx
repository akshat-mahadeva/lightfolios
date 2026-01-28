"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS_LIST, PROJECTS_HEADER } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";

const ProjectsSectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine items per view
  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = PROJECTS_LIST.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 1, 0.36, 1] }}
      className=" w-full min-h-screen flex flex-col bg-background portfolio py-20 overflow-hidden px-5 md:px-10"
    >
      {/* HEADER - CTA Removed as requested */}
      <div className="flex flex-col md:flex-row justify-between gap-8 items-start pb-12">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="uppercase"
          >
            {PROJECTS_HEADER.title}
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground caption"
        >
          {PROJECTS_HEADER.description}
        </motion.p>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            aria-label=" Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* PROJECT SLIDER TRACK */}
      <div className="relative overflow-visible my-auto">
        <motion.div
          animate={{ x: `-${currentIndex * (isMobile ? 100 : 50)}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-0"
        >
          {PROJECTS_LIST.map((project, i) => (
            <div
              key={project.id}
              className={`shrink-0 px-2 md:px-4 transition-opacity duration-500 ${
                i >= currentIndex && i < currentIndex + itemsPerView
                  ? "opacity-100"
                  : "opacity-40"
              }`}
              style={{ width: isMobile ? "100%" : "50%" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="flex flex-col gap-6 group">
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-video w-full overflow-hidden bg-foreground/5">
        <Image
          src={project.images?.[0] || ""}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={project.id <= 2} // Force-load the first two projects
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* HOVER OVERLAY FOR LINKS */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {project.role}
            </span>
            <div className="h-px w-8 bg-foreground/10" />
            <span className="text-[10px] text-muted-foreground uppercase font-mono">
              {project.startDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank">
                <Button
                  size="icon-lg"
                  variant={"ghost"}
                  className=" bg-background hover:bg-background/80"
                  aria-label={`Visit ${project.name} live website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank">
                <Button
                  size="icon-lg"
                  variant={"ghost"}
                  className=" bg-background hover:bg-background/80"
                  aria-label={`Visit ${project.name} GitHub repository`}
                >
                  <IconBrandGithub className="w-5 h-5" />
                </Button>
              </a>
            )}
            {project.demoVideo && (
              <a href={project.demoVideo} target="_blank">
                <Button
                  size="icon-lg"
                  variant={"ghost"}
                  className=" bg-background hover:bg-background/80"
                  aria-label={`Watch ${project.name} demo video`}
                >
                  <IconBrandYoutube className="w-5 h-5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-3">
        <h3 className="uppercase">{project.name}</h3>

        <p className="max-w-xl">{project.description}</p>

        {/* TECH STACK CAPSULES */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack?.slice(0, 4).map((t: string) => (
            <span
              key={t}
              className="text-[10px] border border-foreground/10 rounded-full px-3 py-1 uppercase tracking-wider font-semibold opacity-60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSectionOne;

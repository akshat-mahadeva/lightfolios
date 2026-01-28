"use client";
import React from "react";
import HeaderOne from "./pages/HeaderOne";
import HeroSectionOne from "./pages/HeroSectionOne";
import ServiceSectionOne from "./pages/ServiceSectionOne";
import ProjectsSectionOne from "./pages/ProjectsSectionOne";
import ExperienceSectionOne from "./pages/ExperienceSectionOne";
import ContactSectionOne from "./pages/ContactSectionOne";

const PortfolioOne = () => {
  return (
    <main className="relative bg-background">
      <HeaderOne />
      <HeroSectionOne />

      {/* SERVICES */}
      <div id="services">
        <ServiceSectionOne />
      </div>

      {/* PROJECTS */}
      <div id="projects">
        <ProjectsSectionOne />
      </div>

      {/* EXPERIENCE */}
      <div id="experience">
        <ExperienceSectionOne />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <ContactSectionOne />
      </div>
    </main>
  );
};

export default PortfolioOne;

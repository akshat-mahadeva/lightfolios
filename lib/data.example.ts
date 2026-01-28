// Copy this file to `lib/data.ts` and edit the values to personalize your site.
// Keep the same exported names — the components import these constants directly.

export const HERO_PARALLAX_CONTENT = [
  { left: "YOUR", right: "WORDS" },
  { left: "SAY", right: "MORE" },
];

export const HERO_STATS_CONTEXT =
  "Short, punchy sentence describing what you do and who you serve.";

export const HERO_STATS = [
  { label: "Projects", value: "8+", delay: 0.1 },
  { label: "Clients", value: "20+", delay: 0.2 },
  { label: "Years", value: "5+", delay: 0.3 },
];

export const HERO_SHORT_BIO =
  "A concise one-line bio highlighting role, focus and value.";
export const HERO_PROFILE_IMAGE = "/Akshat.png";
export const HERO_NAME = "Your Name";

export const SERVICES_HEADER = {
  title: "Services",
  description: "A short description of the services you offer.",
  cta: { label: "Contact", action: "contact" },
};

export const SERVICES_LIST = [
  {
    title: "Design & UI",
    description: "Design systems, product UI and interaction work.",
    skills: ["Design", "Prototyping"],
  },
  {
    title: "Engineering",
    description: "Full-stack product engineering and architecture.",
    skills: ["Next.js", "TypeScript"],
  },
];

export const PROJECTS_HEADER = {
  title: "Projects",
  description: "A few projects or products you want to showcase.",
  cta: { label: "See more" },
};

export const PROJECTS_LIST = [
  {
    id: 1,
    name: "Example Project",
    description: "Short description of the project.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your/repo",
    images: ["/project.png"],
    status: "active",
  },
];

export const EXPERIENCE_HEADER = {
  title: "Experience",
  description: "Where you've worked or what you've built.",
  cta: { label: "Hire me" },
};

export const EXPERIENCE_LIST = [
  {
    company: "Your Company",
    role: "Your Role",
    startDate: "2020",
    endDate: "Present",
    location: "Remote",
    description: "Short description of responsibilities and impact.",
    tech: ["Next.js", "React"],
    highlights: ["Built an app", "Improved performance"],
  },
];

export const COPYRIGHT = { year: new Date().getFullYear(), name: "Your Name" };

export const TESTIMONIALS_LIST = [
  { id: 1, name: "Client", organization: "Org", comment: "Great work!" },
];

export const SOCIAL_LINKS = {
  linkedin: { name: "LinkedIn", href: "https://linkedin.com/in/your" },
  github: { name: "Github", href: "https://github.com/your" },
  x: { name: "X", href: "https://x.com/your" },
};

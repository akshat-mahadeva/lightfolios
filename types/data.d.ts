type ProjectItem = {
  id: number;
  name: string;
  description: string;
  role?: string;
  stack?: string[];
  liveUrl?: string;
  demoVideo?: string;
  repoUrl?: string;
  startDate?: string;
  endDate?: string;
  highlights?: string[];
  status?: "active" | "archived" | "prototype";
  images?: string[]; // public images paths
};

type ExperienceItem = {
  company: string;
  role: string;
  startDate: string; // e.g. "Nov 2024"
  endDate: string; // e.g. "Oct 2025" or "Present"
  location?: string;
  tech: string[]; // stack used
  companyUrl?: string;
  description: string;
  highlights: string[]; // achievements / impact
};

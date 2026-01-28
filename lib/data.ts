export const HERO_PARALLAX_CONTENT = [
  {
    // Fixes the spelling of "Integrations" and focuses on the "Complex" problem Mathijs liked
    left: "COMPLEX",
    right: "SYSTEMS",
  },
  {
    // "To Agents" is clear, but "Autonomous" adds the "Premium" feel Mathijs looks for
    left: "TO",
    right: "AGENTS",
  },
  {
    // because Founders are the ones who hire.
    left: "FOR",
    right: "FOUNDERS",
  },
];
// 2. FIX STATS CONTEXT: Use the sentence Mathijs liked as the primary context.
export const HERO_STATS_CONTEXT =
  "I transform complex ideas into scalable AI systems — specializing in autonomous agents that capture intent and automate production workflows.";
// 3. FIX STATS: Remove "Leadership" (vague) and replace with "Products Led" (concrete).
// Ensure the math makes sense (2 years exp = ~6 products led is believable).
export const HERO_STATS = [
  {
    label: "Products Launched", // High-level outcome
    value: "6+",
    delay: 0.1,
  },
  {
    label: "AI Agents Deployed", // Specific high-demand skill
    value: "10+",
    delay: 0.2,
  },
  {
    label: "Years Experience", // Your actual professional timeline
    value: "2+",
    delay: 0.3,
  },
];

export const HERO_SHORT_BIO =
  "A product-minded Full-Stack Engineer specializing in high-performance UIs and real-time systems. I architect autonomous AI agents and low-latency collaborative tools that remove operational friction for growing SaaS platforms.";
export const HERO_PROFILE_IMAGE = "/Akshat.png";

export const HERO_NAME = "Akshat Mahadeva";

export const SERVICES_HEADER = {
  title: "Services",
  description:
    "Need help building AI systems that actually ship and scale? Let’s talk.",
  cta: {
    label: "Book a Call",
    action: "contact", // or route name
  },
};

export const SERVICES_LIST = [
  {
    title: "Autonomous AI Agents",
    description:
      "I architect agentic workflows that capture user intent and prioritize high-signal actions before they reach the user.",
    skills: [
      "Agentic Workflows",
      "Decision Logic",
      "Task Automation",
      "Intent Capture",
    ],
  },
  {
    title: "AI-Native Products",
    description:
      "End-to-end development of high-performance SaaS platforms, bridging the gap between high-end UI/UX and complex backend logic.",
    skills: [
      "Full-Stack Architecture",
      "Real-Time Systems",
      "Scalable Infrastructure",
      "Product Engineering",
    ],
  },
  {
    title: "System Intelligence",
    description:
      "Removing operational friction by integrating fragmented data sources and automating lead qualification or CRM intelligence.",
    skills: [
      "RAG Systems",
      "Data Orchestration",
      "API Strategy",
      "Workflow Optimization",
    ],
  },
  {
    title: "Product Strategy",
    description:
      "Iterative system thinking for messy problems, defining technical architectures that scale from MVP to production.",
    skills: [
      "System Thinking",
      "UX Engineering",
      "Technical Roadmap",
      "Scalability Design",
    ],
  },
];

export const PROJECTS_HEADER = {
  title: "Projects",
  description:
    "Have a product idea or system in mind? Let’s explore how to build it properly.",
  cta: {
    label: "Build Together",
  },
};

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 1,
    name: "Whizbot",
    description:
      "Conversational AI that qualifies website leads before they ever book a call.",
    liveUrl: "https://whizbot.onrender.com",
    demoVideo: "https://youtu.be/eL8sX2FQlPA",
    images: ["/whizbot.png"],
    status: "prototype",
  },
  {
    id: 2,
    name: "Risinloop",
    description:
      "AI-first meeting qualification layer that filters low-intent calls automatically.",
    liveUrl: "https://risinloop.com",
    demoVideo: "https://youtu.be/idtgJRskEaI",
    images: ["/risinloop.png"],
    status: "prototype",
  },
  {
    id: 3,
    name: "0Auth",
    description:
      "Production-ready NextAuth v5 starter with OTP and common auth patterns.",
    repoUrl: "https://github.com/akshat-mahadeva/0Auth",
    images: ["/0auth.png"],
    status: "active",
  },
  {
    id: 4,
    name: "Unifero AI",
    description:
      "Open-source AI research platform for deep web search and synthesis.",
    repoUrl: "https://github.com/akshat-mahadeva/unifero-ai",
    images: ["/unifero.png"],
    status: "active",
  },
];

export const EXPERIENCE_HEADER = {
  title: "Experience",
  description:
    "Turning complex ideas into production-ready AI systems for founders and small teams.",
  cta: {
    label: "HIRE ME", // Removed all-caps "HIRE ME"
  },
};

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: "Independent AI Consulting",
    role: "AI Product Engineer",
    startDate: "2025",
    endDate: "Present",
    location: "Remote",
    description:
      "Architecting autonomous AI agents that bridge the gap between high-end UI/UX and complex backend workflows. I build systems that capture deep user intent and automate lead qualification before human handoff.",
    tech: ["AI Agents", "Next.js", "Vector DBs", "Agentic Workflows"],
    highlights: [
      "Specializing in 'Intent-First' architectures for early-stage SaaS teams",
      "Designing automated CRM intelligence and lead qualification pipelines",
    ],
  },
  {
    company: "MO (Metaverse Ventures)", // Match PDF name
    role: "Full Stack Engineer",
    location: "Remote",
    startDate: "Nov 2024",
    endDate: "Oct 2025",
    description:
      "Led the end-to-end development of 6+ production-ready AI products[cite: 20, 29]. I engineered real-time collaborative editors and low-latency streaming interfaces for voice and search[cite: 21, 30].",
    tech: ["Vercel AI SDK", "WebSockets", "LiveKit", "RAG"],
    highlights: [
      "Shipped 6+ products including Voice AI, PDF Chat, and Research Tools ",
      "Implemented citation-aware RAG pipelines to ensure data groundedness [cite: 32]",
    ],
  },
  {
    company: "Nessviews",
    role: "Frontend Developer",
    startDate: "Oct 2023",
    endDate: "Dec 2023",
    location: "Remote",
    description:
      "Developed high-performance interactive dashboards for a SaaS platform serving over 1,000 businesses[cite: 37, 38].",
    tech: ["Next.js", "TypeScript", "Shadcn UI"],
    highlights: [
      "Optimized frontend performance by 90% and redesigned UX hierarchies ",
      "Reduced cognitive load for users managing data-heavy business interfaces [cite: 40]",
    ],
  },
  {
    company: "United Ecommerce",
    role: "Web Developer",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    location: "Remote",
    description:
      "Automated backend operational workflows and integrated custom CRM intelligence to reduce manual errors[cite: 45, 47].",
    tech: ["WordPress", "WooCommerce", "CRM Automation"],
    highlights: [
      "Streamlined order processing and payment system logic [cite: 47]",
      "Designed high-converting storefronts focused on lead retention [cite: 52, 54]",
    ],
  },
];

// Correcting the Typo Mathijs flagged
export const COPYRIGHT = {
  year: new Date().getFullYear(),
  name: "Akshat Mahadeva",
};

export const TESTIMONIALS_LIST = [
  {
    id: 1,
    name: "Rohan",
    organization: "Nessviews",
    comment:
      "Exceptional skills, discipline, and self-motivation during his internship.",
  },
  {
    id: 2,
    name: "Ankit Gupta",
    organization: "United Ecommerce",
    comment:
      "Exceptionally talented and hardworking intern, helped me deliver high-quality results for my clients.",
  },
  {
    id: 3,
    name: "Sanat",
    organization: "Funkfeets",
    comment: "Pleasure working with you, very capable and hardworking.",
  },
];

export const SOCIAL_LINKS = {
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akshat-mahadeva/",
  },
  x: {
    name: "X",
    href: "https://x.com/akshatmahadeva",
  },
  github: {
    name: "Github",
    href: "https://github.com/akshat-mahadeva",
  },
};

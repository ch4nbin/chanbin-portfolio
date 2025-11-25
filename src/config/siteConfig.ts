// Chanbin Park - Portfolio Configuration
// Personal SWE Portfolio Website

export const siteConfig = {
  // Personal Information
  company: {
    name: "CHANBIN", // Display name for hero
    fullName: "Chanbin Park",
    tagline: "Software Engineer | Princeton CS '28",
    description:
      "Building reliable AI agents, thoughtful product experiences, and resilient full-stack systems.",

    // About Section
    about: {
      title: "Chanbin Park",
      paragraphs: [
        "I'm a Computer Science student at Princeton University (Visual Arts minor) who thrives at the intersection of AI systems, full-stack engineering, and polished user experiences.",
        "Recently, I've built LLM-driven lab automation, shipped data pipelines, and designed production-ready web apps using React, Next.js, Node.js, and modern databases.",
        "I love turning ambiguous ideas into shipped features, whether that's streaming transcription, realtime collaboration, or resilient API/platform integrations.",
      ],
      statistics: [
        {
          icon: "GraduationCap",
          value: "Princeton '28",
          label: "B.A. CS + Visual Arts",
          color: "#38bdf8",
        },
        {
          icon: "Code",
          value: "15+",
          label: "Technologies",
          color: "#e0f2fe",
        },
        {
          icon: "Briefcase",
          value: "3",
          label: "Internships",
          color: "#7dd3fc",
        },
        {
          icon: "Rocket",
          value: "8+",
          label: "Projects",
          color: "#38bdf8",
        },
      ],
    },
  },

  // Contact Information
  contact: {
    email: "cp5721@princeton.edu",
    phone: "626-807-8660",
    location: "Princeton, NJ | Remote-friendly",
    formAction: "/api/contact",
  },

  // Social Media Links
  social: {
    github: "https://github.com/ch4nbin",
    twitter: "",
    linkedin: "https://linkedin.com/in/chanbinp",
    instagram: "",
  },

  // Technical Skills
  skills: [
    {
      title: "LLM Systems & Agents",
      description:
        "Designing reliable AI workflows with LangChain/LangGraph, secure API handling, and evaluation-ready orchestration.",
      accent: "#38bdf8",
      technologies: ["LangChain", "LangGraph", "OpenAI/GPT", "Grok (xAI)", "Gemini"],
    },
    {
      title: "Full-Stack Web",
      description:
        "Shipping end-to-end products with React/Next.js, TypeScript, and performant Node/Express APIs.",
      accent: "#7dd3fc",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js"],
    },
    {
      title: "Backend & Data",
      description:
        "Modeling data and APIs with SQL/NoSQL stores, auth, and defensive error handling for resilient services.",
      accent: "#0ea5e9",
      technologies: ["PostgreSQL", "MongoDB", "Supabase", "Appwrite", "RLS"],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying to Vercel and containerized stacks with Git-first workflows, env-scoped configs, and observability.",
      accent: "#38bdf8",
      technologies: ["Vercel", "Kubernetes", "Linux", "Git/GitHub"],
    },
    {
      title: "Data Engineering",
      description:
        "Building Python ETL and analytics pipelines that turn unstructured PDFs into reproducible datasets.",
      accent: "#67e8f9",
      technologies: ["Python", "NumPy", "PyPDF2", "pdfplumber"],
    },
    {
      title: "Languages & Tools",
      description:
        "Proficient in multiple programming languages and development environments",
      accent: "#bae6fd",
      technologies: ["Java", "Python", "TypeScript", "C/C++", "MATLAB"],
    },
  ],

  // Experience
  experience: [
    {
      company: "WIT Sports",
      role: "Software Engineer Intern",
      location: "New York City, NY",
      period: "Winter 2026 (Incoming)",
      description: "Joining to build data-rich sports technology with realtime experiences and polished UX.",
      accent: "#38bdf8",
    },
    {
      company: "Kindred Laboratories, Inc.",
      role: "Software Engineer Intern",
      location: "Remote",
      period: "June 2025 - August 2025",
      description: "Built an LLM-powered Python agent that automated end-to-end lab workflows and tool extension.",
      accent: "#0ea5e9",
      highlights: [
        "85% faster turnaround across lab workflows",
        "Secure API key handling cut setup overhead by 30%",
        "Architecture for rapid tool/API additions improved maintainability by 70%",
      ],
    },
    {
      company: "Child Creativity Lab",
      role: "Data Engineer Intern",
      location: "Santa Ana, CA",
      period: "June 2025 - August 2025",
      description: "Automated reporting for Google Grant metrics with reproducible Python ETL pipelines.",
      accent: "#38bdf8",
      highlights: [
        "Reduced reporting workload by 75% via automated aggregation",
        "Eliminated manual transcription errors with structured datasets",
      ],
    },
    {
      company: "Carnegie Mellon University SAMS",
      role: "Student Researcher",
      location: "Pittsburgh, PA",
      period: "June 2023 - August 2023",
      description: "Explored cryptography and computer vision across Python and embedded systems.",
      accent: "#7dd3fc",
      highlights: ["98% correctness on RSA & Diffie-Hellman implementations", "40% fewer false positives in bird tracking with motion filtering"],
    },
  ],

  // Portfolio Projects
  portfolio: [
    {
      id: 1,
      title: "NoteNest",
      category: "Full-Stack AI App",
      description:
        "AI-powered notes workspace that ingests lectures and articles, streams transcription, and folds group Q&A into one master doc.",
      year: "2024",
      accent: "#38bdf8",
      type: "project",
      projectUrl: "https://github.com/ch4nbin/notenest",
      githubUrl: "https://github.com/ch4nbin/notenest",
      technologies: ["Next.js", "React", "TypeScript", "Supabase/Postgres", "Grok", "Gemini"],
      highlights: [
        "Realtime audio transcription pipeline with API routes + WebSockets",
        "Voice-to-text ingestion from Zoom/YouTube via Gemini",
        "Supabase/Postgres with RLS + Supabase Auth deployed on Vercel",
      ],
    },
    {
      id: 2,
      title: "Athlytic",
      category: "MERN Stack",
      description:
        "Full-stack CRUD application for tracking workouts with RESTful Express/MongoDB backend and React frontend using Context API and Reducers.",
      year: "2024",
      accent: "#7dd3fc",
      type: "project",
      projectUrl: "https://github.com/ch4nbin/Athlytic",
      githubUrl: "https://github.com/ch4nbin/Athlytic",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      highlights: [
        "RESTful API with Mongoose models",
        "Global state with Context API",
        "Real-time UI updates",
      ],
    },
    {
      id: 3,
      title: "MovieMatch",
      category: "React App",
      description:
        "Movie discovery web app integrating TMDB API for real-time search with debounced requests, trending features, and responsive design.",
      year: "2024",
      accent: "#bae6fd",
      type: "project",
      projectUrl: "https://github.com/ch4nbin/MovieMatch",
      githubUrl: "https://github.com/ch4nbin/MovieMatch",
      technologies: ["React", "TailwindCSS", "TMDB API", "Appwrite"],
      highlights: [
        "Debounced API requests",
        "Trending movies feature",
        "Modular API-driven components",
      ],
    },
    {
      id: 4,
      title: "Lab Automation Agent",
      category: "AI/ML",
      description:
        "LLM-powered Python agent using LangChain and LangGraph to automate end-to-end lab workflows at Kindred Laboratories.",
      year: "2025",
      accent: "#0ea5e9",
      type: "project",
      projectUrl: "",
      technologies: ["Python", "LangChain", "LangGraph", "OpenAI GPT"],
      highlights: [
        "85% reduction in turnaround time",
        "Extensible tool/API architecture",
        "Secure API key handling",
      ],
    },
  ],

  // SEO and Meta Information
  seo: {
    title: "Chanbin Park - Software Engineer | Princeton CS",
    description:
      "Software Engineer and Princeton CS student specializing in LLM systems, full-stack development, and dynamic digital experiences.",
    keywords: [
      "software engineer",
      "princeton",
      "full-stack developer",
      "AI",
      "machine learning",
      "react",
      "python",
    ],
  },

  // Copyright and Legal
  legal: {
    copyrightYear: "2025",
    copyrightHolder: "Chanbin Park",
    rightsText: "Built with passion and code.",
  },
};

// Helper function to get configuration values
export const getConfig = (key: string) => {
  return siteConfig[key as keyof typeof siteConfig];
};

export const profile = {
  name: "Juha Ala-Rantala",
  siteName: "Ala-Ranta.la",
  handle: "_Rantala",
  role: "Software engineer, CTO, and builder of practical AI products",
  location: "Seinäjoki, Finland",
  email: "juha@ala-ranta.la",
  description:
    "Personal portfolio of Juha Ala-Rantala, a software engineer from Finland working across full-stack products, mobile apps, systems, and applied AI.",
  repo: "https://github.com/Koodattu/ala-ranta.la",
  image: "/assets/profile.webp",
  cv: {
    fi: "/assets/Juha_Ala-Rantala_CV_FI.pdf",
    en: "/assets/Juha_Ala-Rantala_CV_EN.pdf",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/Koodattu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/juha-ala-rantala/" },
    { label: "Email", href: "mailto:juha@ala-ranta.la" },
  ],
};

export const focusAreas = [
  {
    title: "Product engineering",
    text: "Designing, building, deploying, and maintaining complete software products from mobile clients to backend systems.",
  },
  {
    title: "Applied AI",
    text: "Exploring language, vision, speech, and local-model workflows that solve concrete user and business problems.",
  },
  {
    title: "Pragmatic systems",
    text: "Keeping architecture understandable, costs visible, and delivery focused on the next useful improvement.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["C#", "Java", "Python", "JavaScript", "TypeScript", "Dart", "C++"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Astro", "React", "Flutter", "WPF", "WinForms"],
  },
  {
    title: "Backend",
    skills: [".NET", "Spring Boot", "Flask", "Node.js", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "GitHub", "VS Code", "IntelliJ IDEA", "Jira", "Unity", "Blender"],
  },
  {
    title: "AI",
    skills: ["Language models", "Vision", "Diffusion", "Speech-to-text", "Text-to-speech"],
  },
];

export const experience = [
  {
    organization: "Clevoy Oy",
    role: "Chief Technology Officer",
    period: "Jan 2026 - Present",
    logo: "/assets/clevoy.webp",
    url: "https://clevoy.io",
    summary:
      "Leading technology strategy and building a full-stack platform spanning mobile, backend, infrastructure, and administrative tools.",
    details: [
      "Owns architecture and implementation across SaaS, B2B, and B2C product surfaces.",
      "Works from requirements and stakeholder planning through deployment, cost optimization, maintenance, and iteration.",
    ],
    tags: ["Flutter", "Backend", "Infrastructure", "Product"],
  },
  {
    organization: "Tampere University",
    role: "Research Assistant",
    period: "Jun 2024 - Dec 2025",
    logo: "/assets/tuni.webp",
    url: "https://www.tuni.fi/en",
    summary:
      "Worked on the GPT Lab Seinäjoki project, researching applications of large language models and applied AI for local companies.",
    details: [
      "Built prototypes involving language models, machine vision, optimization, and software engineering workflows.",
      "Contributed to research, reporting, communication, and event organization.",
    ],
    tags: ["Python", "AI", "Language models", "Vision", "Flask"],
  },
  {
    organization: "Prima Power / Finn-Power Oy",
    role: "Software Designer",
    period: "Apr 2018 - Nov 2022",
    logo: "/assets/prima-power.webp",
    url: "https://www.primapower.com/en",
    summary:
      "Developed Windows desktop applications, internal tools, machine interfaces, and parametrization workflows.",
    details: [
      "Built C#, .NET Framework, WinForms, and WPF applications for industrial software environments.",
      "Improved testing, diagnostics, installation, and internal productivity tooling.",
    ],
    tags: ["C#", ".NET Framework", "WPF", "WinForms", "SQL"],
  },
];

export const education = [
  {
    organization: "Tampere University",
    role: "Master of Science - Information Technology",
    period: "Aug 2023 - Dec 2025",
    logo: "/assets/tuni.webp",
    url: "https://www.tuni.fi/en",
    summary:
      "Focused on large-scale software development, software production processes, project management, and information-based web systems.",
    details: [
      "Completed a master's thesis with the maximum grade.",
      "Studied software process, project management, and web system design from an industry-oriented perspective.",
    ],
    tags: ["Software production", "Project management", "Web systems"],
  },
  {
    organization: "Seinäjoki University of Applied Sciences",
    role: "Bachelor of Engineering - Information Technology",
    period: "Sep 2015 - May 2019",
    logo: "/assets/seamk.webp",
    url: "https://www.seamk.fi/en",
    summary:
      "Specialized in programming and software development while building practical mobile and desktop applications.",
    details: [
      "Graduated with a weighted GPA of 4.24 on a 0-5 scale.",
      "Received the maximum grade for the bachelor's thesis.",
    ],
    tags: ["Software development", "Mobile apps", "Desktop apps"],
  },
];

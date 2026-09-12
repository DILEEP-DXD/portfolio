// ============================================================
// Content data — single source of truth for all section content.
// Edit here, not in JSX. Typed for safety.
// ============================================================

// GitHub Pages serves this site under /portfolio (project pages, not a
// username.github.io repo), and next/image's automatic basePath prefixing
// is unreliable when images.unoptimized is true (static export mode).
// Prefixing local asset paths here explicitly avoids broken images.
// If you switch to a custom domain or rename the repo to
// <username>.github.io, set this back to "".
const BASE_PATH = "/portfolio";

// ----- Hero (01) -----
export const HERO = {
  eyebrow: "// 01 — Hello",
  heading: "Hi, I'm Dileep Kumar.",
  subhead:
    "I build AI-powered apps and automation — from RAG pipelines to Telegram bots that save people time.",
  supporting:
    "B.Tech CSE (AI/ML) student at LPU, currently building toward GenAI application development.",
  badge: "🟢 Open to opportunities",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "https://drive.google.com/file/d/1HuZWhYhjMx3a3_flccVQ2gBlJwaighrj/view?usp=sharing" },
  },
  socials: {
    github: "https://github.com/DILEEP-DXD",
    linkedin: "https://www.linkedin.com/in/dileep-kumar-donthireddy",
    email: "mailto:dileepkumarreddy2007@gmail.com",
  },
  headshot: `${BASE_PATH}/dileep-pic.jpg`,
} as const;

// ----- About (02) -----
export const ABOUT = {
  eyebrow: "// 02 — About",
  heading: "About Me",
  bio: [
    "Hey, I'm Dileep — a second-year CS/AI-ML student at Lovely Professional University. I like taking messy, complex problems and turning them into things that actually run: automation pipelines, RAG-based tools, small agents that do the boring parts of my day for me.",
    "Most recently I built <strong>Sea-Tra</strong>, a pipeline that scrapes and summarizes lectures I miss, and <strong>Flow Me</strong>, a multi-agent research assistant that plans, researches, and writes up answers on its own. I also help run tech for my family's food business, which keeps me equally interested in practical, real-world software — not just side projects.",
    "Outside of code, I edit video, watch a lot of anime, and I'm always half-way through some new experiment I probably won't finish this week.",
  ],
  goals: [
    { emoji: "🎯", text: "Landing a GenAI application developer role" },
    { emoji: "🤖", text: "Getting better at RAG pipelines & agent architectures" },
    { emoji: "🧪", text: "Shipping one new experiment most months" },
    { emoji: "🎬", text: "Editing/producing short-form video on the side" },
  ],
  techTags: [
    "Python", "C++", "Java", "JavaScript", "React", "Node.js",
    "FastAPI", "LangChain", "Gemini API", "OpenAI API", "Whisper",
    "Playwright", "Supabase", "Figma",
  ],
  quote: "I'd rather automate the boring part than do it twice.",
} as const;

// ----- Skills (03) -----
export interface SkillCategory {
  title: string;
  icon: string; // key for the SVG lookup
  tags: string[];
}

export const SKILLS: { eyebrow: string; heading: string; categories: SkillCategory[] } = {
  eyebrow: "// 03 — Skills",
  heading: "What I Work With",
  categories: [
    { title: "Languages", icon: "code", tags: ["Python", "C++", "C", "Java", "JavaScript"] },
    { title: "Frontend", icon: "palette", tags: ["React", "HTML/CSS", "Tailwind CSS", "Figma", "Framer"] },
    { title: "Backend & Data", icon: "server", tags: ["Node.js", "FastAPI", "Supabase", "REST APIs"] },
    { title: "AI / ML & GenAI", icon: "brain", tags: ["OpenAI API", "Gemini API", "Whisper", "LangChain", "RAG Pipelines"] },
    { title: "Tools & Automation", icon: "wrench", tags: ["Git", "Playwright", "Telegram Bots", "GitHub Actions"] },
    { title: "Soft Skills", icon: "users", tags: ["Problem-Solving", "Teamwork", "Leadership", "Time Management", "Adaptability"] },
  ],
};

// ----- Projects (04) -----
export interface Project {
  title: string;
  date: string;
  cover: string;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
  github: string;
}

export const PROJECTS: { eyebrow: string; heading: string; cards: Project[]; githubAll: string } = {
  eyebrow: "// 04 — Projects",
  heading: "Things I've Built",
  githubAll: "https://github.com/DILEEP-DXD",
  cards: [
    {
      title: "Music Playlist Manager",
      date: "Jul '26",
      cover: `${BASE_PATH}/visuals/playlist-manager.jpg`,
      problem:
        "Standard playlist logic doesn't support smooth, continuous forward/backward navigation or looping.",
      approach:
        "A playlist management project focused on organizing music data and making search and management more practical.",
      result:
        "Supports dynamic insertion, deletion, and traversal — a flexible playback system built from core data structures, not a library.",
      tags: ["C++", "Circular Doubly Linked List", "FIFO Queue"],
      github: "https://github.com/DILEEP-DXD/Playlist-Manager",
    },
    {
      title: "Sea-Tra",
      date: "Jun '26",
      cover: `${BASE_PATH}/visuals/sea-tra.jpg`,
      problem:
        "Missing a DSA lecture on CodeTantra meant either losing the content or sitting through a full recording to find out if it mattered.",
      approach:
        "An automated lecture recovery pipeline that captures recordings, transcribes them, and turns missed classes into practical summaries.",
      result:
        "Runs on a schedule and delivers the summary straight to Telegram, so missed lectures get triaged in minutes, not hours.",
      tags: ["Python", "Playwright", "Whisper", "Groq API", "Telegram Bot API"],
      github: "https://github.com/DILEEP-DXD/SEA-TRA",
    },
    {
      title: "Flow Me",
      date: "Dec '25",
      cover: `${BASE_PATH}/visuals/flow-me.jpg`,
      problem:
        "Researching a complex question well means breaking it down, finding sources, and synthesizing — most tools skip straight to a single shallow answer.",
      approach:
        "A multi-agent research workflow that plans a question, finds sources, and synthesizes a structured answer.",
      result:
        "Turns one broad question into a sourced, structured research report automatically.",
      tags: ["Python", "Gemini API", "Google Custom Search API", "Multi-Agent"],
      github: "https://github.com/DILEEP-DXD/Flowme",
    },
  ],
};

// ----- Training (05) -----
export const TRAINING = {
  eyebrow: "// 05 — Training",
  heading: "Training",
  card: {
    title: "Data Structures & Algorithms with C++",
    image: `${BASE_PATH}/visuals/dsa-blueprint.jpg`,
    meta: "Jun '26 – Jul '26 · Certificate",
    badge: "Completed",
    bullets: [
      "Mastered core data structures — arrays, linked lists, stacks, queues, trees, heaps, graphs, hash tables",
      "Applied Big-O analysis and competitive-programming techniques to optimize time/space efficiency",
      "Solved 50+ curated coding problems",
      "Built the Music Playlist Manager project (see Projects) as the applied outcome of this training",
    ],
  },
} as const;

// ----- Certificates (06) -----
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
}

export const CERTIFICATES: { eyebrow: string; heading: string; cards: Certificate[] } = {
  eyebrow: "// 06 — Certificates",
  heading: "Certificates",
  cards: [
    {
      title: "Database Management Systems Part-1",
      issuer: "Infosys Springboard",
      date: "Dec '25",
      image: `${BASE_PATH}/certificates/dbms.jpg`,
      verifyUrl: "https://drive.google.com/file/d/1Iop_KN35f1Q9FOht3Gmoorh_-x7Fo8cY/view",
    },
    {
      title: "Java Programming",
      issuer: "Iam Neo",
      date: "Sep '25",
      image: `${BASE_PATH}/certificates/java.jpg`,
      verifyUrl: "https://drive.google.com/file/d/1yaVqxek-DPMh1YDGEtnFVYVspDm8hV8v/view",
    },
    {
      title: "Data Structures and Algorithms in C++",
      issuer: "Iam Neo",
      date: "Nov '25",
      image: `${BASE_PATH}/certificates/dsa-cpp.jpg`,
      verifyUrl: "https://drive.google.com/file/d/1nArq9P47o2R_S7Q8Nh2j0afnW3Tp2gBI/view?usp=sharing",
    },
    {
      title: "Programming in C++",
      issuer: "Infosys Springboard",
      date: "Nov '25",
      image: `${BASE_PATH}/certificates/programming-cpp.jpg`,
      verifyUrl: "https://drive.google.com/file/d/1OVAt17AhRljHvCh1oc_txrowg5OYHrDw/view",
    }
  ],
};

// ----- Education (07) -----
export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export const EDUCATION: { eyebrow: string; heading: string; entries: EducationEntry[] } = {
  eyebrow: "// 07 — Education",
  heading: "Education",
  entries: [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Aug '24 – Present",
      score: "CGPA: 6.89",
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior Kalasala",
      location: "Hyderabad, Telangana",
      period: "May '22 – Mar '24",
      score: "87.5%",
    },
    {
      degree: "Matriculation",
      institution: "Aravinda High School",
      location: "Kunchanapalli, Andhra Pradesh",
      period: "Sep '20 – Jul '22",
      score: "85%",
    },
  ],
};

// ----- Achievements (08) -----
export interface Achievement {
  emoji: string;
  bold: string;
  detail: string;
  link?: string;
  linkText?: string;
}

export const ACHIEVEMENTS: { eyebrow: string; heading: string; items: Achievement[] } = {
  eyebrow: "// 08 — Achievements",
  heading: "Along the Way",
  items: [
    {
      emoji: "🚀",
      bold: "2+ AI/ML tools shipped",
      detail: "Built and fully documented on GitHub — Dec '25",
      link: "https://github.com/DILEEP-DXD",
      linkText: "Github",
    },
    {
      emoji: "🎖️",
      bold: "Google Agents Intensive",
      detail: "Earned a Kaggle badge & certificate from the 5-day course — Nov '25",
      link: "https://www.kaggle.com/certification/badges/dileepkumar091/105",
      linkText: "View badge",
    },
    {
      emoji: "🏆",
      bold: "Code-A-Haunt Hackathon finalist",
      detail: "Reached the final round with an AI-powered mental health tracking chatbot — Jul '25",
      link: "https://www.linkedin.com/posts/dileep-kumar-donthireddy_hackathon-lpu-ai-activity-7339551070039285760-dtjD",
      linkText: "View post",
    },
  ],
};

// ----- Contact (09) -----
export const CONTACT = {
  eyebrow: "// 09 — Contact",
  heading: "Let's build something.",
  supporting:
    "Open to GenAI application developer roles, internships, and interesting freelance work.",
  cta: { label: "Email Me", href: "mailto:dileepkumarreddy2007@gmail.com" },
  details: {
    email: "dileepkumarreddy2007@gmail.com",
    phone: "+91 7981428918",
    github: "https://github.com/DILEEP-DXD",
    linkedin: "https://www.linkedin.com/in/dileep-kumar-donthireddy",
  },
  footer: "© 2026 Dileep Kumar Reddy",
} as const;

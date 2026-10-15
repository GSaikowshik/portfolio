export const projects = [
  {
    id: "instarepo",
    title: "INSTA REPO",
    subtitle: "Production Career Acceleration Workspace",
    tagline: "Instant generation of ATS-optimized resumes and interactive web portfolios using structured LLM schemas.",
    category: "genai", // can filter: 'all', 'genai', 'fullstack'
    categories: ["genai", "fullstack"],
    timeline: "Aug 2026",
    status: "Live in Production",
    badgeColor: "text-zinc-200 bg-zinc-900 border-zinc-700",
    image: "assets/instarepo_2.png",
    fallbackImage: "assets/instarepo.png",
    liveUrl: "https://instarepo.me",
    githubUrl: "https://github.com/GSaikowshik/insta-repo",
    overview: "Architected and deployed a production-grade AI career acceleration platform that converts raw, unstructured profile data into validated, ATS-compliant resumes and interactive live portfolios with real-time multi-viewport rendering.",
    keyPoints: [
      "Architected and deployed a production-grade AI career workspace for the instant generation of ATS-optimized resumes and fully responsive web portfolios.",
      "Engineered a high-throughput backend using FastAPI and PostgreSQL, implementing strict JWT cryptographic verification and custom-domain authentication via Clerk.",
      "Designed a dynamic React templating engine with independent viewport rendering and leveraged the Gemini API to parse unstructured profile data into validated JSON schemas."
    ],
    architecture: {
      client: "React.js, Tailwind CSS, Vite, Lucide Icons, Canvas/Print Engine",
      apiGateway: "FastAPI (AsyncIO), Pydantic v2 Schema Validation, CORS & Rate Limiting",
      aiEngine: "Google Gemini 2.5 Flash / Pro via structured JSON extraction mode",
      authDatabase: "PostgreSQL (Supabase) with connection pooling & Clerk JWT verification",
      deployment: "Vercel Frontend + Render/Cloud Backend Microservices"
    },
    highlights: [
      {
        title: "High-Throughput Backend Architecture",
        desc: "Engineered asynchronous FastAPI REST endpoints with Supabase PostgreSQL connection pooling, maintaining sub-100ms response latencies under heavy request loads."
      },
      {
        title: "Gemini Structured Extraction Pipeline",
        desc: "Integrated Gemini LLM with Pydantic JSON schema guarantees to parse messy PDF/text inputs into strictly typed sections (work history, skills, metrics)."
      },
      {
        title: "Dynamic Multi-Viewport Templating Engine",
        desc: "Built a responsive React rendering pipeline enabling real-time split-screen portfolio previews, instantaneous vector PDF downloads, and custom sub-domains."
      },
      {
        title: "Enterprise-Grade Auth & Security",
        desc: "Implemented Clerk Webhook synchronization with strict JWT cryptographic verification to ensure secure user authentication and multi-tenant data isolation."
      }
    ],
    stack: ["React.js", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "Supabase", "Clerk Auth", "Google Gemini API", "Vercel"]
  },
  {
    id: "dayzero",
    title: "DayZero AI",
    subtitle: "Startup Market Trend Intelligence",
    tagline: "Real-time AI market analysis and founder intelligence platform for discovering untapped niches.",
    category: "genai",
    categories: ["genai", "fullstack", "hackathon"],
    timeline: "Mar 2026",
    status: "Hackathon Winning Project",
    badgeColor: "text-zinc-200 bg-zinc-900 border-zinc-700",
    image: "assets/dayzero.png",
    fallbackImage: "assets/dayzero.png",
    liveUrl: "https://dayzeroai.vercel.app",
    githubUrl: "https://github.com/GSaikowshik/DayZeroAI",
    overview: "An AI-powered intelligence workspace built for founders, investors, and builders to identify emerging market trends, evaluate competitor matrices, and discover high-potential product opportunities with low-latency streaming queries.",
    keyPoints: [
      "Developed an AI-powered platform for startup founders to discover market trends and business opportunities through real-time data analysis.",
      "Built a high-performance backend using FastAPI and Supabase to handle complex data queries and ensure a smooth, responsive user interface.",
      "Shipped end-to-end under intense 48-hour pressure during the GenAI & Agentic Intelligence Hackathon."
    ],
    architecture: {
      client: "React.js, Tailwind CSS, Interactive Charts, Responsive Bento UI",
      apiGateway: "FastAPI REST endpoints with cached trend analysis pipelines",
      aiEngine: "Gemini 2.5 Flash for rapid niche opportunity evaluation and synthesis",
      authDatabase: "Supabase PostgreSQL with real-time change triggers",
      deployment: "Vercel Cloud Platform"
    },
    highlights: [
      {
        title: "Market Trend Scoring Engine",
        desc: "Ingests and scores high-momentum keywords and industry pain points using Gemini 2.5 Flash for rapid niche opportunity discovery."
      },
      {
        title: "Asynchronous Database Synchronization",
        desc: "Utilizes FastAPI and Supabase PostgreSQL database triggers to maintain up-to-the-minute market intelligence feeds with low client latency."
      },
      {
        title: "Hackathon Winning Build",
        desc: "Designed, engineered, and shipped end-to-end under intense 48-hour pressure during the GenAI & Agentic Intelligence Hackathon."
      }
    ],
    stack: ["React.js", "Tailwind CSS", "FastAPI", "Python", "Supabase", "PostgreSQL", "Gemini 2.5 Flash", "Vercel"]
  }
];

import {
  Brain,
  Code2,
  Globe,
  Layers,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
  Database,
  Cpu,
  Cloud,
  Bot,
  Search,
  FlaskConical,
  Plug,
  Activity,
  Boxes,
  Lock,
  Network,
  KeyRound,
  ClipboardCheck,
  Eye,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "ai-engineering",
    icon: Brain,
    title: "AI & Machine Learning Engineering",
    summary:
      "Custom models, LLM applications, RAG systems, and ML pipelines built for production.",
    description:
      "From generative AI assistants to predictive models, we take AI from prototype to production. We design retrieval-augmented generation systems, fine-tune and evaluate models, and ship reliable, observable AI features your users can trust.",
    deliverables: [
      "LLM & generative AI applications",
      "Retrieval-augmented generation (RAG)",
      "Model fine-tuning & evaluation",
      "Computer vision & NLP systems",
      "MLOps, monitoring & guardrails",
    ],
  },
  {
    slug: "software-engineering",
    icon: Code2,
    title: "Custom Software Engineering",
    summary:
      "Robust web platforms, mobile apps, and APIs engineered to scale with your business.",
    description:
      "We build production-grade software end to end — resilient backends, elegant frontends, and the APIs that connect them. Clean architecture, strong test coverage, and CI/CD so you ship fast without breaking things.",
    deliverables: [
      "Web platforms & SaaS products",
      "iOS & Android applications",
      "API & microservice architecture",
      "Cloud-native backends",
      "QA automation & CI/CD",
    ],
  },
  {
    slug: "web-experience",
    icon: Globe,
    title: "Web & Product Experience",
    summary:
      "High-craft websites and product interfaces with motion, performance, and conversion in mind.",
    description:
      "Your digital storefront, designed and engineered to perform. We craft fast, accessible, conversion-focused web experiences and design systems that scale across every surface of your brand.",
    deliverables: [
      "Marketing & corporate websites",
      "Design systems & UI engineering",
      "E-commerce experiences",
      "Performance & SEO optimization",
      "Accessibility (WCAG) compliance",
    ],
  },
  {
    slug: "digital-transformation",
    icon: Workflow,
    title: "Digital Transformation",
    summary:
      "Modernize legacy systems, automate operations, and unlock new digital revenue.",
    description:
      "We help established organizations move faster — re-platforming legacy systems, automating manual workflows, and embedding data and AI into the core of how you operate.",
    deliverables: [
      "Legacy system modernization",
      "Process & workflow automation",
      "Cloud migration strategy",
      "Integration & middleware",
      "Change management & enablement",
    ],
  },
  {
    slug: "data-platforms",
    icon: Database,
    title: "Data Engineering & Analytics",
    summary:
      "Reliable data platforms, pipelines, and dashboards that turn raw data into decisions.",
    description:
      "Great AI starts with great data. We architect data platforms, build streaming and batch pipelines, and deliver analytics and dashboards that give leaders clarity in real time.",
    deliverables: [
      "Data warehouse & lakehouse design",
      "ETL / ELT pipelines",
      "Real-time streaming",
      "BI dashboards & reporting",
      "Data governance & quality",
    ],
  },
  {
    slug: "advisory",
    icon: LineChart,
    title: "AI Strategy & Advisory",
    summary:
      "Roadmaps, opportunity assessments, and fractional leadership to guide your AI journey.",
    description:
      "Not sure where to start? We assess your landscape, identify the highest-ROI AI opportunities, and build a pragmatic roadmap — then we help you execute it.",
    deliverables: [
      "AI opportunity assessment",
      "Technology & architecture audits",
      "Implementation roadmaps",
      "Fractional CTO / AI leadership",
      "Team training & upskilling",
    ],
  },
];

export type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    icon: Bot,
    title: "Intelligent Assistants",
    description:
      "Domain-aware copilots and chat agents that automate support, research, and internal knowledge work.",
  },
  {
    icon: Cpu,
    title: "Predictive Intelligence",
    description:
      "Forecasting, risk scoring, and recommendation engines that turn historical data into foresight.",
  },
  {
    icon: Layers,
    title: "Process Automation",
    description:
      "Document understanding and workflow automation that removes repetitive, error-prone manual work.",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform Engineering",
    description:
      "Scalable, secure cloud foundations on AWS, Azure, and GCP — built for reliability and cost control.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible & Secure AI",
    description:
      "Governance, evaluation, and guardrails so your AI is safe, compliant, and explainable.",
  },
  {
    icon: Sparkles,
    title: "Generative Experiences",
    description:
      "Creative and content tooling that augments teams across marketing, design, and product.",
  },
];

export type Industry = {
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  { name: "Financial Services", blurb: "Fraud detection, risk, and intelligent automation." },
  { name: "Healthcare & Life Sciences", blurb: "Clinical insight, imaging, and patient experience." },
  { name: "Retail & E-commerce", blurb: "Personalization, demand forecasting, and search." },
  { name: "Real Estate & PropTech", blurb: "Valuation models and smart property platforms." },
  { name: "Logistics & Mobility", blurb: "Route optimization and predictive operations." },
  { name: "Government & Public Sector", blurb: "Citizen services and secure digital infrastructure." },
  { name: "Energy & Utilities", blurb: "Predictive maintenance and grid intelligence." },
  { name: "Education", blurb: "Adaptive learning and intelligent tutoring." },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const process: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse in your business, map opportunities, and align on measurable outcomes before a line of code is written.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We prototype rapidly — architecture, experience, and AI approach — validating value with real users early.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Cross-functional pods ship in tight iterations with engineering rigor, automated testing, and full transparency.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We harden, monitor, and optimize for production — then enable your team to own and evolve what we built together.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "2026", label: "Founded in Dubai" },
  { value: "8", label: "Engineers & specialists" },
  { value: "100%", label: "Senior-led delivery" },
  { value: "~2 wks", label: "From kickoff to prototype" },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlas-bank-copilot",
    client: "Atlas Fintech",
    industry: "Financial Services",
    title: "A support copilot that cut first-response time by 38%",
    summary:
      "We built a secure, retrieval-augmented assistant on top of their help desk and product docs — deflecting routine questions and drafting agent replies in real time.",
    metrics: [
      { value: "38%", label: "Faster first response" },
      { value: "30%", label: "Queries auto-resolved" },
      { value: "6 wks", label: "To live pilot" },
    ],
    tags: ["RAG", "LLM", "Security"],
  },
  {
    slug: "meridian-retail-forecasting",
    client: "Meridian Retail",
    industry: "Retail & E-commerce",
    title: "Demand forecasting that trimmed stockouts for a growing retailer",
    summary:
      "A lightweight data pipeline and forecasting model that unified sales and supply signals across their stores — cutting waste while keeping shelves stocked.",
    metrics: [
      { value: "22%", label: "Fewer stockouts" },
      { value: "12", label: "Stores live" },
      { value: "8 wks", label: "From data to forecast" },
    ],
    tags: ["Data Platform", "Forecasting", "Cloud"],
  },
  {
    slug: "noor-health-imaging",
    client: "Noor Health",
    industry: "Healthcare",
    title: "An imaging triage assistant for a faster diagnostic workflow",
    summary:
      "We delivered a human-in-the-loop imaging assist prototype that flags and prioritises urgent scans, helping a small radiology team clear backlogs sooner.",
    metrics: [
      { value: "35%", label: "Faster triage" },
      { value: "2", label: "Clinics piloting" },
      { value: "100%", label: "Human-reviewed" },
    ],
    tags: ["Computer Vision", "MLOps", "Healthcare"],
  },
  {
    slug: "horizon-proptech",
    client: "Horizon Properties",
    industry: "Real Estate",
    title: "A rebuild that doubled qualified leads for a property team",
    summary:
      "An end-to-end rebuild with a modern web experience and an AI-assisted valuation tool — turning a static portfolio into a high-converting product.",
    metrics: [
      { value: "2.1×", label: "Qualified leads" },
      { value: "−48%", label: "Page load time" },
      { value: "96", label: "Lighthouse score" },
    ],
    tags: ["Web", "AI Valuation", "Product"],
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  keyPoints: string[];
};

export const insights: Insight[] = [
  {
    slug: "rag-in-production",
    category: "Engineering",
    title: "Shipping RAG to production without the hallucinations",
    excerpt:
      "Retrieval-augmented generation is easy to demo and hard to operate. Here is the architecture and evaluation discipline we use to make it reliable.",
    date: "2026-04-22",
    readTime: "8 min",
    keyPoints: [
      "Retrieval quality matters more than which model you pick.",
      "Evaluate against golden datasets before anything reaches users.",
      "Monitor grounding, cost, and latency continuously in production.",
    ],
  },
  {
    slug: "ai-roadmap-uae",
    category: "Strategy",
    title: "Building a pragmatic AI roadmap for UAE enterprises",
    excerpt:
      "The National AI Strategy 2031 is reshaping the region. We break down how organizations can move from ambition to measurable impact.",
    date: "2026-03-15",
    readTime: "6 min",
    keyPoints: [
      "Start from business outcomes, not the technology.",
      "Sequence quick wins ahead of moonshots to build momentum.",
      "Govern data and risk from day one, not as an afterthought.",
    ],
  },
  {
    slug: "design-systems-that-scale",
    category: "Design",
    title: "Design systems that scale with your product, not against it",
    excerpt:
      "A look at how we structure tokens, components, and governance so design and engineering move as one team.",
    date: "2026-02-08",
    readTime: "5 min",
    keyPoints: [
      "Tokens first — colour, type, and spacing as single sources of truth.",
      "Treat the component library as a product, with owners and versioning.",
      "Govern contributions so the system grows without fragmenting.",
    ],
  },
  {
    slug: "evaluating-llms",
    category: "AI",
    title: "How we evaluate LLMs before they touch a customer",
    excerpt:
      "Offline benchmarks lie. We share the eval harness, golden datasets, and human review loops we trust in the real world.",
    date: "2026-01-19",
    readTime: "9 min",
    keyPoints: [
      "Public benchmarks rarely predict real-world behaviour.",
      "Build golden datasets from your actual use cases.",
      "Keep humans in the loop for high-stakes evaluation.",
    ],
  },
];

export const values = [
  {
    title: "Outcomes over output",
    description:
      "We measure success by the business value we create, not the volume of code we ship.",
  },
  {
    title: "Engineering as craft",
    description:
      "Clean architecture, thorough testing, and care in the details — software you can build on for years.",
  },
  {
    title: "Responsible by default",
    description:
      "Security, privacy, and ethical AI are built into our process from day one, not bolted on at the end.",
  },
  {
    title: "Partners, not vendors",
    description:
      "We embed with your team, transfer knowledge, and leave you stronger than we found you.",
  },
];

/* ------------------------------------------------------------------ *
 * Approach infographics (the /approach page)
 * Visual, content-driven explanations of how we build, integrate,
 * and assure quality. Keep copy tight — these render inside diagrams.
 * ------------------------------------------------------------------ */

export type BuildStage = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  detail: string;
  points: string[];
};

/** "How we build AI" — an interactive, staged pipeline. */
export const buildPipeline: BuildStage[] = [
  {
    id: "frame",
    icon: Search,
    title: "Discover & frame",
    summary: "Define the problem and what success means.",
    detail:
      "Before a single model is chosen, we map the real business problem, the data available, and the metric that proves it worked. No AI for the sake of AI.",
    points: [
      "Use-case and ROI assessment",
      "Data and feasibility review",
      "Clear success metrics agreed up front",
    ],
  },
  {
    id: "ground",
    icon: Database,
    title: "Ground in your data",
    summary: "Connect knowledge with privacy built in.",
    detail:
      "We connect the model to your real context — documents, databases, and tools — using retrieval and structured access so answers are grounded, not guessed.",
    points: [
      "Retrieval-augmented generation (RAG)",
      "Secure connectors to your sources",
      "Privacy and data-minimisation by design",
    ],
  },
  {
    id: "build",
    icon: FlaskConical,
    title: "Build & evaluate",
    summary: "Engineer it, then prove it with evals.",
    detail:
      "We build the system and measure it against golden datasets and regression tests — so quality is demonstrated with evidence, not vibes.",
    points: [
      "Prompt, tool, and pipeline engineering",
      "Golden datasets & automated evals",
      "Guardrails against unsafe output",
    ],
  },
  {
    id: "integrate",
    icon: Plug,
    title: "Integrate",
    summary: "Wire it into your stack, safely.",
    detail:
      "The system plugs into your existing tools behind authenticated APIs, with humans kept in the loop wherever decisions carry real weight.",
    points: [
      "Secure API integration",
      "Human-in-the-loop for high-stakes steps",
      "Rollout behind feature flags",
    ],
  },
  {
    id: "monitor",
    icon: Activity,
    title: "Monitor & improve",
    summary: "Watch quality, cost, and drift in production.",
    detail:
      "Once live, we track accuracy, latency, and spend — catching drift early and tightening the loop so the system gets better over time.",
    points: [
      "Quality, cost & latency dashboards",
      "Drift and regression alerts",
      "Continuous evaluation & iteration",
    ],
  },
];

export type IntegrationLayer = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

/** "How we plug into your stack" — a layered architecture diagram. */
export const integrationLayers: IntegrationLayer[] = [
  {
    icon: Boxes,
    title: "Your systems",
    detail:
      "The apps, CRMs, data warehouses, and tools where your work already happens.",
  },
  {
    icon: Lock,
    title: "Secure integration layer",
    detail:
      "Authenticated APIs, least-privilege access, and audit logs sit between you and the AI.",
  },
  {
    icon: Network,
    title: "Orchestration & retrieval",
    detail:
      "Routing, retrieval, and tool-use ground every response in your real, current context.",
  },
  {
    icon: Brain,
    title: "AI core",
    detail:
      "Carefully chosen models — evaluated, guard-railed, and tuned to your specific use case.",
  },
];

export type Assurance = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

/** Security & quality principles — interactive cards. */
export const assurance: Assurance[] = [
  {
    icon: Lock,
    title: "Your data stays yours",
    detail:
      "We isolate your data, minimise what we send, and never train third-party models on it.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege access",
    detail:
      "Scoped credentials, managed secrets, and full audit trails are the default, not an upgrade.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluated, not assumed",
    detail:
      "Every AI feature ships against golden datasets and regression evals before it reaches a user.",
  },
  {
    icon: Eye,
    title: "Human-in-the-loop",
    detail:
      "High-stakes actions get human review and clear guardrails before anything runs for real.",
  },
  {
    icon: Gauge,
    title: "Built to observe",
    detail:
      "Quality, latency, and cost are monitored in production from the very first day.",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade craft",
    detail:
      "Typed, tested, and peer-reviewed code — systems you can safely build on for years.",
  },
];

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
  { value: "30+", label: "Engineers & specialists" },
  { value: "12", label: "Industries served" },
  { value: "4×", label: "Avg. faster delivery" },
  { value: "99.9%", label: "Uptime on managed platforms" },
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
    client: "Atlas Bank",
    industry: "Financial Services",
    title: "An AI copilot that cut customer resolution time by 62%",
    summary:
      "We built a secure, retrieval-augmented assistant integrated with core banking systems, deflecting routine queries and surfacing answers for agents in real time.",
    metrics: [
      { value: "62%", label: "Faster resolution" },
      { value: "3.2M", label: "Queries / year" },
      { value: "+18", label: "NPS points" },
    ],
    tags: ["RAG", "LLM", "Security"],
  },
  {
    slug: "meridian-retail-forecasting",
    client: "Meridian Retail",
    industry: "Retail & E-commerce",
    title: "Demand forecasting that reduced stockouts across 240 stores",
    summary:
      "A real-time data platform and forecasting engine that unified sales, supply, and weather signals — cutting waste while keeping shelves full.",
    metrics: [
      { value: "31%", label: "Fewer stockouts" },
      { value: "AED 40M", label: "Working capital freed" },
      { value: "240", label: "Stores live" },
    ],
    tags: ["Data Platform", "Forecasting", "Cloud"],
  },
  {
    slug: "noor-health-imaging",
    client: "Noor Health",
    industry: "Healthcare",
    title: "Computer vision triage for faster diagnostic workflows",
    summary:
      "We delivered an FDA-aware imaging assist pipeline with human-in-the-loop review, prioritizing urgent cases and reducing radiologist backlog.",
    metrics: [
      { value: "47%", label: "Faster triage" },
      { value: "99.4%", label: "Recall on priority cases" },
      { value: "6", label: "Hospitals deployed" },
    ],
    tags: ["Computer Vision", "MLOps", "Healthcare"],
  },
  {
    slug: "horizon-proptech",
    client: "Horizon Properties",
    industry: "Real Estate",
    title: "A digital transformation that doubled qualified leads",
    summary:
      "End-to-end re-platforming with an AI valuation model and a modern web experience that turned a static portfolio into a high-converting product.",
    metrics: [
      { value: "2.1×", label: "Qualified leads" },
      { value: "−54%", label: "Page load time" },
      { value: "98", label: "Lighthouse score" },
    ],
    tags: ["Digital Transformation", "Web", "ML"],
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
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
  },
  {
    slug: "ai-roadmap-uae",
    category: "Strategy",
    title: "Building a pragmatic AI roadmap for UAE enterprises",
    excerpt:
      "The National AI Strategy 2031 is reshaping the region. We break down how organizations can move from ambition to measurable impact.",
    date: "2026-03-15",
    readTime: "6 min",
  },
  {
    slug: "design-systems-that-scale",
    category: "Design",
    title: "Design systems that scale with your product, not against it",
    excerpt:
      "A look at how we structure tokens, components, and governance so design and engineering move as one team.",
    date: "2026-02-08",
    readTime: "5 min",
  },
  {
    slug: "evaluating-llms",
    category: "AI",
    title: "How we evaluate LLMs before they touch a customer",
    excerpt:
      "Offline benchmarks lie. We share the eval harness, golden datasets, and human review loops we trust in the real world.",
    date: "2026-01-19",
    readTime: "9 min",
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

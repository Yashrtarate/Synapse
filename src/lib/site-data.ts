import {
  Atom,
  Binary,
  Boxes,
  BrainCircuit,
  Braces,
  Cpu,
  Database,
  GitBranch,
  Layers,
  LayoutGrid,
  Network,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type Domain = {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  topics: string[]
  notes: number
  accent: string
}

export const domains: Domain[] = [
  {
    slug: 'frontend',
    title: 'Frontend Development',
    description:
      'Markup, styling and the modern component era — from semantic HTML to React Server Components.',
    icon: LayoutGrid,
    topics: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    notes: 148,
    accent: 'var(--chart-1)',
  },
  {
    slug: 'backend',
    title: 'Backend Development',
    description:
      'Servers, databases and the contracts between them. APIs, auth and system design at scale.',
    icon: Server,
    topics: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Authentication', 'APIs', 'System Design'],
    notes: 132,
    accent: 'var(--chart-2)',
  },
  {
    slug: 'dsa',
    title: 'Data Structures & Algorithms',
    description:
      'The mental models behind efficient code — patterns, complexity analysis and battle-tested techniques.',
    icon: Binary,
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Greedy', 'Recursion'],
    notes: 96,
    accent: 'var(--chart-3)',
  },
  {
    slug: 'ai',
    title: 'Artificial Intelligence',
    description:
      'From classical ML to the LLM stack — retrieval, agents and the infrastructure that powers them.',
    icon: BrainCircuit,
    topics: ['Machine Learning', 'Deep Learning', 'LLMs', 'RAG', 'AI Agents', 'Vector Databases'],
    notes: 74,
    accent: 'var(--chart-4)',
  },
]

export const stats = [
  { label: 'Notes archived', value: 450, suffix: '+' },
  { label: 'Code snippets', value: 1280, suffix: '+' },
  { label: 'Topics mapped', value: 32, suffix: '' },
  { label: 'Days of streak', value: 365, suffix: '' },
]

export type FeaturedNote = {
  title: string
  excerpt: string
  domain: string
  tags: string[]
  readTime: string
  updated: string
  icon: LucideIcon
}

export const featuredNotes: FeaturedNote[] = [
  {
    title: 'Demystifying React Server Components',
    excerpt:
      'How the server/client boundary works, when components run, and the mental model for streaming UI.',
    domain: 'Frontend',
    tags: ['React', 'Next.js', 'RSC'],
    readTime: '8 min',
    updated: '2 days ago',
    icon: Atom,
  },
  {
    title: 'Designing Idempotent REST APIs',
    excerpt:
      'Idempotency keys, retries and the failure modes you must design around in distributed systems.',
    domain: 'Backend',
    tags: ['APIs', 'System Design'],
    readTime: '11 min',
    updated: '5 days ago',
    icon: Network,
  },
  {
    title: 'Dynamic Programming: The Decision Tree',
    excerpt:
      'A repeatable framework to recognize DP problems and convert recursion into tabulation.',
    domain: 'DSA',
    tags: ['Dynamic Programming', 'Recursion'],
    readTime: '14 min',
    updated: '1 week ago',
    icon: GitBranch,
  },
  {
    title: 'Building a RAG Pipeline From Scratch',
    excerpt:
      'Chunking strategies, embedding models and how vector databases turn documents into context.',
    domain: 'AI',
    tags: ['RAG', 'Vector Databases', 'LLMs'],
    readTime: '16 min',
    updated: '1 week ago',
    icon: Sparkles,
  },
  {
    title: 'PostgreSQL Indexing Internals',
    excerpt:
      'B-trees, partial indexes and how the query planner actually decides what to use.',
    domain: 'Backend',
    tags: ['PostgreSQL', 'Databases'],
    readTime: '9 min',
    updated: '2 weeks ago',
    icon: Database,
  },
  {
    title: 'TypeScript Generics, Properly',
    excerpt:
      'Constraints, conditional types and inference — writing types that scale with your codebase.',
    domain: 'Frontend',
    tags: ['TypeScript'],
    readTime: '10 min',
    updated: '3 weeks ago',
    icon: Braces,
  },
]

export type RoadmapStep = {
  phase: string
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
}

export const roadmap: RoadmapStep[] = [
  {
    phase: 'Phase 01',
    title: 'Web Foundations',
    description: 'Master the language of the browser and the visual layer before frameworks.',
    icon: LayoutGrid,
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    phase: 'Phase 02',
    title: 'Modern Frontend',
    description: 'Component architecture, type safety and production-grade rendering.',
    icon: Layers,
    skills: ['TypeScript', 'React', 'Next.js'],
  },
  {
    phase: 'Phase 03',
    title: 'Backend & Data',
    description: 'Build APIs, model data and secure your applications end to end.',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Auth'],
  },
  {
    phase: 'Phase 04',
    title: 'Algorithms & Scale',
    description: 'Sharpen problem-solving and learn how systems behave under load.',
    icon: Workflow,
    skills: ['DSA', 'System Design'],
  },
  {
    phase: 'Phase 05',
    title: 'Applied AI',
    description: 'Bring intelligence into products with the modern LLM and retrieval stack.',
    icon: Cpu,
    skills: ['LLMs', 'RAG', 'AI Agents', 'Vector DBs'],
  },
]

export const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Frontend', href: '/frontend' },
  { label: 'Blogs', href: '/blog' },
  // { label: 'Search', href: '/#search' },
]

export const brandIcons = { Boxes }

import {
  Atom,
  Binary,
  BrainCircuit,
  LayoutGrid,
  Server,
  type LucideIcon,
} from 'lucide-react'

export type DocLeaf = { title: string; slug: string }
export type DocFolder = {
  title: string
  icon: LucideIcon
  items: DocLeaf[]
}

export const docTree: DocFolder[] = [
  {
    title: 'Frontend',
    icon: LayoutGrid,
    items: [
      { title: 'HTML', slug: 'html' },
      { title: 'CSS', slug: 'css' },
      { title: 'JavaScript', slug: 'javascript' },
      { title: 'TypeScript', slug: 'typescript' },
      { title: 'React Server Components', slug: 'rsc' },
      { title: 'Next.js App Router', slug: 'nextjs' },
      { title: 'Tailwind CSS', slug: 'tailwind' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { title: 'Node.js', slug: 'nodejs' },
      { title: 'Express.js', slug: 'express' },
      { title: 'MongoDB', slug: 'mongodb' },
      { title: 'PostgreSQL', slug: 'postgresql' },
      { title: 'Authentication', slug: 'auth' },
      { title: 'Designing REST APIs', slug: 'apis' },
      { title: 'System Design', slug: 'system-design' },
    ],
  },
  {
    title: 'DSA',
    icon: Binary,
    items: [
      { title: 'Arrays', slug: 'arrays' },
      { title: 'Linked Lists', slug: 'linked-lists' },
      { title: 'Trees', slug: 'trees' },
      { title: 'Graphs', slug: 'graphs' },
      { title: 'Dynamic Programming', slug: 'dp' },
      { title: 'Greedy', slug: 'greedy' },
      { title: 'Recursion', slug: 'recursion' },
    ],
  },
  {
    title: 'AI',
    icon: BrainCircuit,
    items: [
      { title: 'Machine Learning', slug: 'ml' },
      { title: 'Deep Learning', slug: 'dl' },
      { title: 'LLMs', slug: 'llms' },
      { title: 'RAG Pipelines', slug: 'rag' },
      { title: 'AI Agents', slug: 'agents' },
      { title: 'Vector Databases', slug: 'vector-db' },
    ],
  },
]

export const recentNotes = [
  'React Server Components',
  'Designing REST APIs',
  'Dynamic Programming',
  'RAG Pipelines',
]

export const bookmarks = ['PostgreSQL', 'AI Agents', 'Graphs']

export type TocItem = { id: string; label: string; level: 2 | 3 }

export const docIcon = Atom

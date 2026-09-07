import {
  Brain,
  Code2,
  Database,
  Layers3,
  Rocket,
  Sparkles,
} from 'lucide-react'

export const blogPosts = [
  {
    slug: 'building-a-personal-knowledge-base',
    title: 'Building a Personal Knowledge Base for Developers',
    excerpt:
      'How I designed Synapse to capture, organize, search, and revisit everything I learn as a developer.',
    category: 'Engineering',
    date: 'September 7, 2026',
    readTime: '8 min read',
    author: 'Your Name',
    icon: Brain,
    featured: true,
    tags: ['Knowledge Base', 'Developers', 'Productivity'],
    content: [
      {
        type: 'paragraph',
        text: 'Developers consume an enormous amount of information every day. Documentation, tutorials, code snippets, architecture decisions, debugging solutions, and random ideas quickly become scattered across browser tabs, bookmarks, screenshots, and different applications.',
      },
      {
        type: 'heading',
        text: 'The problem with scattered knowledge',
      },
      {
        type: 'paragraph',
        text: 'Learning something once is not enough. The real value comes from being able to retrieve that knowledge when you need it again.',
      },
      {
        type: 'paragraph',
        text: 'Synapse was created around this idea: create one focused place where technical knowledge can be captured, organized, and retrieved quickly.',
      },
      {
        type: 'heading',
        text: 'A second brain for developers',
      },
      {
        type: 'paragraph',
        text: 'The goal is not simply to store notes. The goal is to create a system where knowledge compounds over time.',
      },
      {
        type: 'code',
        language: 'tsx',
        code: `const knowledge = {
  notes: [],
  snippets: [],
  diagrams: [],
  resources: [],
}`,
      },
      {
        type: 'heading',
        text: 'Why structure matters',
      },
      {
        type: 'paragraph',
        text: 'A structured knowledge base makes it easier to connect related concepts. Instead of keeping React, TypeScript, APIs, databases, and DevOps knowledge completely separate, they can become interconnected parts of the same engineering system.',
      },
      {
        type: 'heading',
        text: 'The long-term vision',
      },
      {
        type: 'paragraph',
        text: 'Synapse is designed to grow alongside the developer. The more knowledge you capture, the more useful the system becomes.',
      },
    ],
  },

  {
    slug: 'how-i-organize-my-development-notes',
    title: 'How I Organize My Development Notes',
    excerpt:
      'A practical approach to organizing programming concepts, code snippets, debugging notes, and useful resources.',
    category: 'Productivity',
    date: 'September 2, 2026',
    readTime: '6 min read',
    author: 'Your Name',
    icon: Layers3,
    featured: true,
    tags: ['Notes', 'Productivity', 'Learning'],
    content: [
      {
        type: 'paragraph',
        text: 'A good note-taking system should reduce friction instead of creating more work.',
      },
      {
        type: 'heading',
        text: 'Start with broad domains',
      },
      {
        type: 'paragraph',
        text: 'I prefer organizing knowledge around broad engineering domains such as frontend, backend, databases, DevOps, and artificial intelligence.',
      },
      {
        type: 'heading',
        text: 'Keep individual notes focused',
      },
      {
        type: 'paragraph',
        text: 'Each note should answer a specific question or explain one concept. This makes notes easier to search and easier to revisit.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `type Note = {
  title: string
  category: string
  tags: string[]
  content: string
}`,
      },
    ],
  },

  {
    slug: 'building-scalable-nextjs-applications',
    title: 'Building Scalable Next.js Applications',
    excerpt:
      'Architecture principles and practical decisions for building maintainable and scalable Next.js applications.',
    category: 'Next.js',
    date: 'August 28, 2026',
    readTime: '10 min read',
    author: 'Your Name',
    icon: Rocket,
    featured: true,
    tags: ['Next.js', 'TypeScript', 'Architecture'],
    content: [
      {
        type: 'paragraph',
        text: 'Scaling a Next.js application is not only about adding more servers. Good architecture makes the application easier to maintain, test, deploy, and scale.',
      },
      {
        type: 'heading',
        text: 'Start with a clear project structure',
      },
      {
        type: 'paragraph',
        text: 'A predictable project structure makes it easier for developers to understand where features belong.',
      },
      {
        type: 'code',
        language: 'text',
        code: `src/
├── app/
├── components/
├── lib/
├── hooks/
└── services/`,
      },
      {
        type: 'heading',
        text: 'Keep responsibilities separated',
      },
      {
        type: 'paragraph',
        text: 'Components should focus on presentation while application logic and data access should live in appropriate modules.',
      },
    ],
  },

  {
    slug: 'understanding-database-indexes',
    title: 'Understanding Database Indexes',
    excerpt:
      'A practical explanation of database indexes, how they work, and when you should use them.',
    category: 'Database',
    date: 'August 20, 2026',
    readTime: '7 min read',
    author: 'Your Name',
    icon: Database,
    featured: false,
    tags: ['PostgreSQL', 'Database', 'Performance'],
    content: [
      {
        type: 'paragraph',
        text: 'Database indexes are one of the most important tools for improving query performance.',
      },
      {
        type: 'heading',
        text: 'What is an index?',
      },
      {
        type: 'paragraph',
        text: 'An index is an additional data structure that allows a database to locate rows more efficiently without scanning the entire table.',
      },
      {
        type: 'code',
        language: 'sql',
        code: `CREATE INDEX idx_users_email
ON users(email);`,
      },
    ],
  },

  {
    slug: 'my-approach-to-learning-ai',
    title: 'My Approach to Learning AI',
    excerpt:
      'How I approach learning artificial intelligence without getting overwhelmed by the rapidly changing ecosystem.',
    category: 'Artificial Intelligence',
    date: 'August 14, 2026',
    readTime: '9 min read',
    author: 'Your Name',
    icon: Sparkles,
    featured: false,
    tags: ['AI', 'Machine Learning', 'Learning'],
    content: [
      {
        type: 'paragraph',
        text: 'The AI ecosystem moves incredibly quickly. A structured learning approach is therefore more important than trying to learn every new framework.',
      },
      {
        type: 'heading',
        text: 'Focus on fundamentals',
      },
      {
        type: 'paragraph',
        text: 'Instead of chasing every new tool, I focus on understanding the concepts behind machine learning, embeddings, retrieval, transformers, and AI systems.',
      },
    ],
  },

  {
    slug: 'clean-code-principles',
    title: 'Practical Clean Code Principles',
    excerpt:
      'Simple principles that make code easier to understand, maintain, test, and evolve.',
    category: 'Programming',
    date: 'August 8, 2026',
    readTime: '5 min read',
    author: 'Your Name',
    icon: Code2,
    featured: false,
    tags: ['Clean Code', 'Programming', 'Software Engineering'],
    content: [
      {
        type: 'paragraph',
        text: 'Clean code is primarily about reducing unnecessary complexity and making the intent of the code obvious.',
      },
      {
        type: 'heading',
        text: 'Prefer meaningful names',
      },
      {
        type: 'paragraph',
        text: 'A good variable or function name can eliminate the need for additional comments explaining what the code does.',
      },
    ],
  },
]
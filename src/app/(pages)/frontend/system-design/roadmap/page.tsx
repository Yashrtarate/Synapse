
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Network,
  Radio,
  Globe,
  Monitor,
  Code2,
  ShieldCheck,
  Puzzle,
  Accessibility,
  Search,
  Smartphone,
  Layers3,
  Gauge,
  TestTube2,
  Rocket,
  Database,
  Activity,
  Component,
  Boxes,
  Workflow,
  Lightbulb,
  CheckCircle2,
  Circle,
  BookOpen,
} from 'lucide-react'

import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'

const stages = [
  {
    id: '01',
    title: 'Networking & Communication',
    description:
      'Understand how browsers, servers, and services communicate before designing frontend systems.',
    color: '#60a5fa',
    topics: [
      {
        title: 'Networking Fundamentals',
        slug: 'networking',
        icon: Network,
        description:
          'Understand how data travels across networks and reaches a web application.',
        concepts: ['DNS', 'TCP/IP', 'TLS/HTTPS', 'CDN'],
      },
      {
        title: 'Communication Protocols',
        slug: 'communication',
        icon: Radio,
        description:
          'Choose the right communication strategy for requests, streaming, and real-time updates.',
        concepts: ['HTTP/1.1–HTTP/3', 'REST', 'GraphQL', 'WebSockets', 'SSE'],
      },
    ],
  },
  {
    id: '02',
    title: 'Browser & Web Platform',
    description:
      'Learn how web applications render, interact with browser capabilities, and serve different users.',
    color: '#a78bfa',
    topics: [
      {
        title: 'Browser Fundamentals',
        slug: 'browser',
        icon: Monitor,
        description:
          'Understand browser rendering, execution, navigation, and resource loading.',
        concepts: ['DOM/CSSOM', 'Event loop', 'Rendering pipeline', 'Critical rendering path'],
      },
      {
        title: 'Web APIs',
        slug: 'web-apis',
        icon: Code2,
        description:
          'Use native browser capabilities to build responsive and interactive experiences.',
        concepts: ['Fetch', 'Storage APIs', 'Intersection Observer', 'Workers'],
      },
      {
        title: 'Web Security',
        slug: 'web-security',
        icon: ShieldCheck,
        description:
          'Protect users, sessions, data, and application boundaries.',
        concepts: ['XSS', 'CSRF', 'CORS', 'CSP', 'OAuth 2.0'],
      },
      {
        title: 'Web Components',
        slug: 'web-components',
        icon: Puzzle,
        description:
          'Build reusable components using browser-native component technologies.',
        concepts: ['Custom Elements', 'Shadow DOM', 'HTML Templates'],
      },
      {
        title: 'Web Accessibility',
        slug: 'web-accessibility',
        icon: Accessibility,
        description:
          'Design inclusive interfaces that work with keyboards, assistive technologies, and different needs.',
        concepts: ['WCAG', 'ARIA', 'Focus management', 'Screen readers'],
      },
      {
        title: 'Web SEO',
        slug: 'web-seo',
        icon: Search,
        description:
          'Design crawlable, indexable web applications with strong rendering and metadata strategies.',
        concepts: ['SSR/SSG', 'Metadata', 'Structured data', 'Core Web Vitals'],
      },
      {
        title: 'Progressive Web Apps',
        slug: 'pwas',
        icon: Smartphone,
        description:
          'Build installable, resilient applications that can work with limited connectivity.',
        concepts: ['Service Workers', 'Offline caching', 'Web App Manifest', 'Push notifications'],
      },
    ],
  },
  {
    id: '03',
    title: 'Frontend Architecture & Performance',
    description:
      'Turn individual features into maintainable, scalable, and high-performing frontend systems.',
    color: '#34d399',
    topics: [
      {
        title: 'Frontend Design Architecture',
        slug: 'frontend-architecture',
        icon: Layers3,
        description:
          'Structure applications around clear boundaries, reusable features, and predictable data flow.',
        concepts: ['Component architecture', 'State management', 'Routing', 'Modularity'],
      },
      {
        title: 'Design Systems',
        slug: 'design-systems',
        icon: Component,
        description:
          'Create consistent UI foundations that scale across pages, products, and teams.',
        concepts: ['Design tokens', 'Component APIs', 'Theming', 'Documentation'],
      },
      {
        title: 'Performance Optimization',
        slug: 'performance',
        icon: Gauge,
        description:
          'Improve loading speed, runtime responsiveness, and rendering efficiency.',
        concepts: ['Code splitting', 'Lazy loading', 'Virtualization', 'Core Web Vitals'],
      },
    ],
  },
  {
    id: '04',
    title: 'Quality & Delivery',
    description:
      'Make frontend systems reliable, testable, observable, and safe to release.',
    color: '#fb923c',
    topics: [
      {
        title: 'Testing',
        slug: 'testing',
        icon: TestTube2,
        description:
          'Verify individual components, complete user journeys, and system behavior.',
        concepts: ['Unit tests', 'Integration tests', 'E2E', 'Visual regression'],
      },
      {
        title: 'Deployment & Release',
        slug: 'deployment',
        icon: Rocket,
        description:
          'Ship frontend applications safely through automated pipelines and controlled releases.',
        concepts: ['CI/CD', 'Build artifacts', 'Rollbacks', 'Feature flags'],
      },
    ],
  },
  {
    id: '05',
    title: 'Data, Caching & Observability',
    description:
      'Understand how frontend systems store, retrieve, measure, and recover from data and failures.',
    color: '#f472b6',
    topics: [
      {
        title: 'Databases & Caching',
        slug: 'databases-caching',
        icon: Database,
        description:
          'Design efficient data access, browser storage, and caching strategies across the stack.',
        concepts: ['HTTP caching', 'Redis', 'IndexedDB', 'Cache invalidation', 'Normalization'],
      },
      {
        title: 'Logging & Monitoring',
        slug: 'logging-monitoring',
        icon: Activity,
        description:
          'Observe production behavior, diagnose errors, and measure real user experience.',
        concepts: ['Error tracking', 'Telemetry', 'RUM', 'Alerts', 'Dashboards'],
      },
    ],
  },
  {
    id: '06',
    title: 'System Design & Interview Practice',
    description:
      'Apply everything you have learned to component-level problems and complete production-scale systems.',
    color: '#fbbf24',
    topics: [
      {
        title: 'Low-Level Design (LLD)',
        slug: 'lld',
        icon: Boxes,
        description:
          'Design reusable components, APIs, state transitions, and detailed UI behavior.',
        concepts: ['Component APIs', 'Autocomplete', 'Infinite scroll', 'Pagination'],
      },
      {
        title: 'High-Level Design (HLD)',
        slug: 'hld',
        icon: Workflow,
        description:
          'Design end-to-end frontend systems and explain architectural trade-offs.',
        concepts: ['Architecture diagrams', 'Data flow', 'Scalability', 'Failure handling'],
      },
      {
        title: 'System Design — Bonus',
        slug: 'bonus',
        icon: Lightbulb,
        description:
          'Practice real-world case studies, trade-offs, and interview-style design exercises.',
        concepts: ['Chat app', 'E-commerce', 'Social feed', 'Video streaming'],
      },
    ],
  },
]

const allTopics = stages.flatMap((stage) => stage.topics)

export default function SystemDesignRoadmapPage() {
  const [completed, setCompleted] = useState<string[]>([])

  const toggleComplete = (slug: string) => {
    setCompleted((previous) =>
      previous.includes(slug)
        ? previous.filter((item) => item !== slug)
        : [...previous, slug],
    )
  }

  const progress = Math.round(
    (completed.length / allTopics.length) * 100,
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="overflow-hidden pt-28">
        {/* Hero */}
        <section className="relative px-6 pb-16 pt-12">
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <Reveal className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
              <BookOpen className="size-3.5" />
              SYNAPSE LEARNING PATH
            </span>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Frontend System
              <span className="block text-primary">Design Roadmap</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
              Go from understanding browser fundamentals to designing
              scalable frontend systems. Follow the topics in order,
              practice the concepts, and build the architectural thinking
              needed for real-world engineering.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-lg border border-border bg-card/60 px-3 py-2">
                {stages.length} learning stages
              </span>
              <span className="rounded-lg border border-border bg-card/60 px-3 py-2">
                {allTopics.length} topics
              </span>
              <span className="rounded-lg border border-border bg-card/60 px-3 py-2">
                Beginner → Advanced
              </span>
            </div>
          </Reveal>
        </section>

        {/* Progress */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Your learning progress</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Mark topics complete as you learn them.
                </p>
              </div>

              <span className="font-mono text-sm text-primary">
                {completed.length}/{allTopics.length} · {progress}%
              </span>
            </div>

            <div
              className="mt-4 h-2 overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-label="Roadmap completion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <motion.div
                className="h-full rounded-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </section>

        {/* Roadmap stages */}
        <section
          id="roadmap"
          className="relative border-y border-border bg-card/20 py-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

          <div className="relative mx-auto max-w-5xl px-6">
            <Reveal className="mb-12 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                The learning path
              </span>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Learn in the right sequence
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Complete the foundations first. Each stage prepares you
                for the architectural decisions in the next one.
              </p>
            </Reveal>

            <div className="relative space-y-12">
              {stages.map((stage, stageIndex) => (
                <motion.section
                  key={stage.id}
                  id={`stage-${stage.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.45,
                    delay: 0.05,
                  }}
                  className="relative"
                >
                  {/* Stage heading */}
                  <div className="mb-5 flex items-start gap-4">
                    <div
                      className="flex size-12 shrink-0 items-center justify-center rounded-2xl border bg-card"
                      style={{
                        borderColor: `${stage.color}50`,
                        color: stage.color,
                      }}
                    >
                      <span className="font-mono text-sm font-semibold">
                        {stage.id}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {stage.title}
                      </h3>
                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="ml-3 space-y-3 border-l border-border pl-5 sm:ml-6 sm:pl-7">
                    {stage.topics.map((topic, topicIndex) => {
                      const Icon = topic.icon
                      const isCompleted = completed.includes(topic.slug)

                      return (
                        <motion.article
                          key={topic.slug}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{
                            duration: 0.35,
                            delay: topicIndex * 0.045,
                          }}
                          className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
                        >
                          {/* Accent glow */}
                          <div
                            className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                            style={{ background: stage.color }}
                          />

                          <div className="relative flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:p-5">
                            <div
                              className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary"
                              style={{ color: stage.color }}
                            >
                              <Icon className="size-5" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="text-sm font-semibold sm:text-base">
                                  {topic.title}
                                </h4>

                                {isCompleted && (
                                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400">
                                    <CheckCircle2 className="size-3.5" />
                                    Completed
                                  </span>
                                )}
                              </div>

                              <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                {topic.description}
                              </p>

                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {topic.concepts.map((concept) => (
                                  <span
                                    key={concept}
                                    className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                                  >
                                    {concept}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-4 flex flex-wrap items-center gap-3">
                                <Link
                                  href={`/frontend/system-design/roadmap/${topic.slug}`}
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary"
                                >
                                  Explore topic
                                  <ArrowUpRight className="size-3.5" />
                                </Link>

                                <button
                                  type="button"
                                  onClick={() => toggleComplete(topic.slug)}
                                  aria-pressed={isCompleted}
                                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                                  ) : (
                                    <Circle className="size-3.5" />
                                  )}
                                  {isCompleted ? 'Completed' : 'Mark complete'}
                                </button>
                              </div>
                            </div>

                            <span className="hidden shrink-0 font-mono text-[10px] text-muted-foreground sm:block">
                              {stage.id}.{String(topicIndex + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </motion.article>
                      )
                    })}
                  </div>

                  {stageIndex < stages.length - 1 && (
                    <div className="ml-8 mt-5 flex items-center gap-2 text-xs text-muted-foreground sm:ml-11">
                      <ArrowDown className="size-3.5" />
                      Continue to the next stage
                    </div>
                  )}
                </motion.section>
              ))}
            </div>

            {/* Completion callout */}
            <Reveal className="mt-16">
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      Final milestone
                    </span>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      Think like a system designer.
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      Practice explaining requirements, drawing architecture,
                      evaluating trade-offs, and handling failures in real-world
                      frontend systems.
                    </p>
                  </div>

                  <Link
                    href="/frontend/system-design/roadmap/hld"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Start HLD practice
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Code2,
  Layers3,
  Search,
  Sparkles,
  Target,
  Eye,
  BookOpen,
} from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { MissionVision } from '@/components/site/mission-vision'

const values = [
  {
    icon: Brain,
    title: 'Knowledge that connects',
    description:
      'Synapse is designed around connections between concepts, not isolated notes. Ideas, code snippets, resources and learning paths belong together.',
  },
  {
    icon: Layers3,
    title: 'Everything in one place',
    description:
      'Keep engineering notes, code examples, diagrams, roadmaps and references inside one organized knowledge base.',
  },
  {
    icon: Search,
    title: 'Find it instantly',
    description:
      'A knowledge base is only useful when you can retrieve what you need. Synapse makes your accumulated knowledge searchable.',
  },
  {
    icon: Code2,
    title: 'Built for developers',
    description:
      'The platform is designed around the way developers actually learn, build, experiment and document technical concepts.',
  },
]

const principles = [
  'Capture what you learn',
  'Organize knowledge naturally',
  'Connect related concepts',
  'Search without digging through folders',
  'Turn notes into reusable references',
  'Keep improving over time',
]

export default function AboutPage() {
  return (
  <>
  <Navbar/>
    <main className="relative min-h-screen overflow-hidden  pt-25">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      <div className="pointer-events-none absolute left-1/2 top-[-250px] size-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[400px] size-[450px] rounded-full bg-[var(--chart-2)]/5 blur-[130px]" />

      

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 font-mono text-xs text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            About Synapse
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-balance font-heading text-5xl font-semibold tracking-tight md:text-7xl">
            A second brain for
            <span className="text-gradient"> serious developers.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            Synapse is a personal engineering knowledge base built to capture,
            organize and connect everything you learn while building software.
          </p>
        </motion.div>
      </section>

      {/* Project */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              The project
            </span>

            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Knowledge should compound.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                Developers learn constantly. A tutorial here, a debugging
                session there, a useful command, a design pattern, an
                architecture diagram or a small code snippet.
              </p>

              <p>
                Over time, that knowledge becomes scattered across bookmarks,
                screenshots, browser tabs, documents and forgotten folders.
              </p>

              <p>
                Synapse was created to solve that problem—a focused place where
                technical knowledge can be captured, organized and retrieved
                whenever it is needed.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl border border-border p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/10 blur-[80px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Engineering Knowledge
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    synapse / knowledge-base
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Frontend',
                  'Backend',
                  'Algorithms',
                  'Artificial Intelligence',
                  'DevOps',
                  'System Design',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3"
                  >
                    <span className="text-sm">{item}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      connected
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        <MissionVision />

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Principles
          </span>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Built around how developers learn.
          </h2>

          <p className="mt-5 text-muted-foreground">
            Synapse focuses on reducing friction between learning something and
            being able to use it again.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

    

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Sparkles className="mx-auto size-8 text-primary" />

        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          Your knowledge deserves a home.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Start building your own engineering knowledge base with Synapse.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Explore the knowledge base
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
    <Footer/>
  </>
  )
}
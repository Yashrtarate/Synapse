'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Compass, Target } from 'lucide-react'

const missionVision = [
  {
    id: 'mission',
    title: 'Our Mission',
    description:
      'To create a personal engineering knowledge base that makes learning, organizing, and revisiting technical knowledge simple, structured, and enjoyable.',
    topics: [
      'Capture knowledge',
      'Organize ideas',
      'Learn continuously',
      'Build better habits',
    ],
    icon: Target,
    accent: '#22d3ee',
    label: 'Purpose',
    footer: 'Knowledge that stays useful',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    description:
      'To build a long-term second brain for developers where ideas, notes, code, diagrams, and learning paths come together in one focused and searchable place.',
    topics: [
      'Developer focused',
      'Long-term learning',
      'Searchable knowledge',
      'Continuous growth',
    ],
    icon: Compass,
    accent: '#14b8a6',
    label: 'Direction',
    footer: 'A smarter way to learn',
  },
]

export function MissionVision() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Why Synapse
        </span>

        <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Built with purpose.
          <br />
          Designed for growth.
        </h2>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Synapse is more than a collection of notes. It is a structured space
          for turning what you learn into knowledge you can actually use.
        </p>
      </motion.div>

      {/* Mission + Vision cards */}
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {missionVision.map((item, i) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: item.accent }}
              />

              {/* Header */}
              <div className="relative flex items-start justify-between">
                <span
                  className="flex size-12 items-center justify-center rounded-xl border border-border bg-secondary"
                  style={{ color: item.accent }}
                >
                  <Icon className="size-6" />
                </span>

                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              {/* Content */}
              <div className="relative">
                <span className="mt-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </span>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Topics */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="relative mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <span
                  className="font-medium"
                  style={{ color: item.accent }}
                >
                  {item.footer}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { domains } from '@/lib/site-data'
import { Reveal } from './reveal'

export function Categories() {
  return (
    <section id="domains" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Domains
        </span>
        <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Four pillars of engineering
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Every note lives inside a structured domain so your knowledge compounds
          instead of scattering across tabs and screenshots.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {domains.map((domain, i) => {
          const Icon = domain.icon
          return (
            <motion.div
              key={domain.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/${domain.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: domain.accent }}
                />
                <div className="relative flex items-start justify-between">
                  <span
                    className="flex size-12 items-center justify-center rounded-xl border border-border bg-secondary"
                    style={{ color: domain.accent }}
                  >
                    <Icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>

                <h3 className="relative mt-5 text-xl font-semibold tracking-tight">
                  {domain.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {domain.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {domain.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {domain.notes}
                  </span>
                  notes archived
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Bookmark, Clock } from 'lucide-react'
import { featuredNotes } from '@/lib/site-data'
import { Reveal } from './reveal'

export function FeaturedNotes() {
  return (
    <section id="notes" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Featured
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            Recently refined notes
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Deep dives polished from raw notes into reference-grade explanations.
          </p>
        </div>
        <Link
          href="/blog"
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Browse all notes
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredNotes.map((note, i) => {
          const Icon = note.icon
          return (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="rounded-md bg-secondary/60 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                  {note.domain}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-balance">
                {note.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {note.readTime} · {note.updated}
                </span>
                <Bookmark className="size-4 transition-colors group-hover:text-primary" />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

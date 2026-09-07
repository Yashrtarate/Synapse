'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CornerDownLeft, FileText, Hash, Search } from 'lucide-react'
import { featuredNotes, domains } from '@/lib/site-data'
import { Reveal } from './reveal'

type Result = { title: string; meta: string; type: 'note' | 'topic' }

const allResults: Result[] = [
  ...featuredNotes.map((n) => ({
    title: n.title,
    meta: n.domain,
    type: 'note' as const,
  })),
  ...domains.flatMap((d) =>
    d.topics.map((t) => ({ title: t, meta: d.title, type: 'topic' as const })),
  ),
]

const suggestions = ['React', 'RAG', 'Dynamic Programming', 'PostgreSQL', 'Auth']

export function SearchSection() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return allResults.slice(0, 5)
    return allResults
      .filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 6)
  }, [query])

  return (
    <section
      id="search"
      className="relative scroll-mt-24 overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Instant search
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            Find anything in milliseconds
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Full-text search across every note, snippet and topic — no folder
            digging required.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="glass-strong overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <Search className="size-5 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notes, snippets and topics..."
                className="flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Search the knowledge base"
              />
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                ⌘K
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              <AnimatePresence mode="popLayout">
                {results.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-3 py-8 text-center text-sm text-muted-foreground"
                  >
                    No results for &ldquo;{query}&rdquo;
                  </motion.p>
                ) : (
                  results.map((r) => (
                    <motion.button
                      key={`${r.type}-${r.title}`}
                      layout
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-secondary"
                    >
                      <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground">
                        {r.type === 'note' ? (
                          <FileText className="size-4" />
                        ) : (
                          <Hash className="size-4" />
                        )}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-medium">
                          {r.title}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {r.meta}
                        </span>
                      </span>
                      <CornerDownLeft className="size-4 text-muted-foreground/50" />
                    </motion.button>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

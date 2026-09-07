'use client'
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Bookmark,
  Check,
  Copy,
  FileCode2,
  Sparkles,
  Star,
} from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'

const easeOut = [0.16, 1, 0.3, 1] as const

const codeLines = [
  { t: 'export', c: 'text-[var(--chart-4)]', rest: ' async function ', fn: 'getContext' },
  { t: 'const', c: 'text-[var(--chart-1)]', rest: ' chunks = await ', fn: 'embed(query)' },
  { t: 'return', c: 'text-[var(--chart-4)]', rest: ' rank(chunks, ', fn: 'topK)' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute -top-20 right-10 size-[420px] rounded-full bg-[var(--chart-2)]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="flex size-1.5 rounded-full bg-accent" />
            Your personal engineering knowledge base
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
            className="mt-6 text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            The second brain for{' '}
            <span className="text-gradient">serious developers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Capture notes, code snippets, diagrams and roadmaps across Frontend,
            Backend, Algorithms and AI — beautifully organized, instantly
            searchable, and always within reach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'group rounded-xl text-base',
              )}
            >
              Explore the knowledge base
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#roadmap"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'rounded-xl border-border bg-secondary/40 text-base',
              )}
            >
              View learning roadmap
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Star className="size-4 text-[var(--chart-4)]" />
              450+ curated notes
            </span>
            <span className="flex items-center gap-2">
              <FileCode2 className="size-4 text-primary" />
              1,280+ snippets
            </span>
          </motion.div>
        </div>

        {/* Right: animated dashboard preview */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
            className="glass-strong relative rounded-2xl border border-border p-2 shadow-2xl shadow-black/50"
          >
            {/* window chrome */}
            <div className="flex items-center gap-2 px-3 py-2.5">
              <span className="size-3 rounded-full bg-[var(--chart-5)]/70" />
              <span className="size-3 rounded-full bg-[var(--chart-4)]/70" />
              <span className="size-3 rounded-full bg-[var(--chart-2)]/70" />
              <span className="ml-3 rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground">
                synapse / ai / rag-pipeline.md
              </span>
            </div>

            <div className="rounded-xl bg-background/60 p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[var(--chart-4)]/15 px-2 py-0.5 font-mono text-[11px] text-[var(--chart-4)]">
                  AI
                </span>
                <span className="text-sm font-medium">
                  Building a RAG Pipeline
                </span>
              </div>

              {/* fake code block */}
              <div className="mt-4 rounded-lg border border-border bg-card/80 p-4 font-mono text-[12px] leading-6">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="flex gap-3"
                  >
                    <span className="select-none text-muted-foreground/40">
                      {i + 1}
                    </span>
                    <span>
                      <span className={line.c}>{line.t}</span>
                      <span className="text-muted-foreground">{line.rest}</span>
                      <span className="text-primary">{line.fn}</span>
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* progress bars representing topics */}
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Chunking', w: '82%', c: 'bg-primary' },
                  { label: 'Embeddings', w: '64%', c: 'bg-[var(--chart-2)]' },
                  { label: 'Retrieval', w: '91%', c: 'bg-[var(--chart-3)]' },
                ].map((row, i) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="w-20 text-[11px] text-muted-foreground">
                      {row.label}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className={`h-full rounded-full ${row.c}`}
                        initial={{ width: 0 }}
                        animate={{ width: row.w }}
                        transition={{ duration: 1, delay: 0.9 + i * 0.15, ease: easeOut }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating card: copy snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.9, duration: 0.5 },
              scale: { delay: 0.9, duration: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="glass-strong absolute -left-6 top-24 hidden items-center gap-2 rounded-xl border border-border px-3 py-2 shadow-xl shadow-black/40 sm:flex"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-accent/15 text-accent">
              <Copy className="size-3.5" />
            </span>
            <div className="text-[11px] leading-tight">
              <p className="font-medium">Snippet copied</p>
              <p className="text-muted-foreground">useDebounce.ts</p>
            </div>
            <Check className="size-3.5 text-accent" />
          </motion.div>

          {/* Floating card: bookmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, 12, 0] }}
            transition={{
              opacity: { delay: 1.1, duration: 0.5 },
              scale: { delay: 1.1, duration: 0.5 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="glass-strong absolute -right-4 bottom-10 hidden items-center gap-2 rounded-xl border border-border px-3 py-2 shadow-xl shadow-black/40 sm:flex"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Bookmark className="size-3.5" />
            </span>
            <div className="text-[11px] leading-tight">
              <p className="font-medium">Bookmarked</p>
              <p className="text-muted-foreground">Graph traversal</p>
            </div>
          </motion.div>

          {/* Floating badge: AI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 1.3, duration: 0.5 },
              scale: { delay: 1.3, duration: 0.5 },
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -right-3 -top-3 hidden size-12 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-xl shadow-primary/20 sm:flex"
          >
            <Sparkles className="size-5" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

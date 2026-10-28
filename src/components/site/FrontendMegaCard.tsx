
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FrontendMegaCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  accent: string
  topics: string[]
}

export function FrontendMegaCard({
  title,
  description,
  href,
  icon: Icon,
  accent,
  topics,
}: FrontendMegaCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative flex h-full min-h-[145px] flex-col overflow-hidden rounded-xl border border-border bg-card/50 p-3 transition-colors duration-300 hover:border-primary/40 hover:bg-card"
      >
        {/* Hover accent glow */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: accent }}
        />

        {/* Subtle hover gradient */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${accent}0d, transparent 65%)`,
          }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary transition-transform duration-300 group-hover:scale-105"
            style={{ color: accent }}
          >
            <Icon className="size-[18px]" />
          </span>

          <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>

        <h3 className="relative mt-3 text-sm font-semibold tracking-tight">
          {title}
        </h3>

        <p className="relative mt-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="relative mt-auto flex flex-wrap gap-1 pt-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-border bg-secondary/60 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground transition-colors group-hover:text-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}

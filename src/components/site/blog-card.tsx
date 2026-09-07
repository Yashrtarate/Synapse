'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bookmark,
  Clock,
} from 'lucide-react'

type BlogCardProps = {
  post: any
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const Icon = post.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
          <Icon className="size-5" />
        </span>

        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <div className="relative mt-5">
        <span className="rounded-md bg-secondary/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {post.category}
        </span>
      </div>

      <h2 className="relative mt-4 text-xl font-semibold leading-snug tracking-tight">
        {post.title}
      </h2>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="rounded border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {post.readTime}
        </span>

        <span>{post.date}</span>

        <Bookmark className="size-4 transition-colors group-hover:text-primary" />
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0"
        aria-label={`Read ${post.title}`}
      />
    </motion.article>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Pencil } from 'lucide-react'
import { cn } from '@/lib/utils'

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'The architecture' },
  { id: 'indexing', label: 'Indexing documents' },
  { id: 'retrieval', label: 'Retrieval at query time' },
  { id: 'pitfalls', label: 'Common pitfalls' },
]

export function DocsToc() {
  const [active, setActive] = useState(toc[0].id)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto border-l border-border px-6 py-12 xl:block">
      {/* reading progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Reading progress</span>
          <span className="font-mono text-foreground">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <nav className="mt-4 space-y-1 border-l border-border">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              '-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground',
              active === item.id &&
                'border-primary font-medium text-foreground',
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-2 border-t border-border pt-6 text-sm">
        <a
          href="#"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Pencil className="size-4" /> Edit this note
        </a>
        <a
          href="https://github.com"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Code2 className="size-4" /> View source
        </a>
      </div>
    </aside>
  )
}

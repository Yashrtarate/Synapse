'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Bookmark, Boxes, ChevronRight, Clock, Search } from 'lucide-react'
import { bookmarks, docTree, recentNotes } from '@/lib/docs-data'
import { cn } from '@/lib/utils'

export function DocsSidebar({
  active,
  onSelect,
}: {
  active: string
  onSelect: (slug: string) => void
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({
    Frontend: true,
    Backend: true,
    DSA: false,
    AI: false,
  })

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-border bg-sidebar px-4 py-5 lg:block">
      <Link href="/" className="flex items-center gap-2.5 px-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Boxes className="size-5" />
        </span>
        <span className="text-[15px] font-semibold tracking-tight">Synapse</span>
      </Link>

      <button className="mt-5 flex w-full items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <Search className="size-4" />
        <span>Search docs</span>
        <kbd className="ml-auto rounded border border-border bg-background px-1.5 font-mono text-[10px]">
          ⌘ K
        </kbd>
      </button>

      <nav className="mt-6 space-y-1">
        {docTree.map((folder) => {
          const Icon = folder.icon
          const isOpen = open[folder.title]
          return (
            <div key={folder.title}>
              <button
                onClick={() =>
                  setOpen((p) => ({ ...p, [folder.title]: !p[folder.title] }))
                }
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Icon className="size-4 text-primary" />
                {folder.title}
                <ChevronRight
                  className={cn(
                    'ml-auto size-4 text-muted-foreground transition-transform',
                    isOpen && 'rotate-90',
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="ml-3 overflow-hidden border-l border-border"
                  >
                    {folder.items.map((item) => (
                      <li key={item.slug}>
                        <button
                          onClick={() => onSelect(item.slug)}
                          className={cn(
                            '-ml-px block w-full border-l border-transparent py-1.5 pl-4 text-left text-sm text-muted-foreground transition-colors hover:text-foreground',
                            active === item.slug &&
                              'border-primary font-medium text-foreground',
                          )}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </nav>

      <div className="mt-8 border-t border-border pt-5">
        <p className="flex items-center gap-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <Clock className="size-3.5" /> Recent
        </p>
        <ul className="mt-2 space-y-0.5">
          {recentNotes.map((n) => (
            <li key={n}>
              <button className="block w-full truncate rounded-md px-2 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {n}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="flex items-center gap-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <Bookmark className="size-3.5" /> Bookmarks
        </p>
        <ul className="mt-2 space-y-0.5">
          {bookmarks.map((n) => (
            <li key={n}>
              <button className="block w-full truncate rounded-md px-2 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {n}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

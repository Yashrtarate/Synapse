
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Boxes,
  Code2,
  Search,
  ChevronDown,
  ArrowUpRight,
  CodeXml,
  MessagesSquare,
  Blocks,
  BrainCircuit,
  X,
} from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { FrontendMegaCard } from './FrontendMegaCard'

const frontendTopics = [
  {
    title: 'Frontend',
    description:
      'JavaScript, React, Next.js, TypeScript and modern UI development.',
    href: '/frontend/roadmap',
    icon: CodeXml,
    accent: '#a78bfa',
    topics: ['React', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Interviews',
    description:
      'Technical questions, coding rounds and interview preparation.',
    href: '/frontend/interviews',
    icon: MessagesSquare,
    accent: '#34d399',
    topics: ['Coding', 'React', 'Mock Interviews'],
  },
  {
    title: 'System Design',
    description:
      'Frontend architecture, browser rendering and scalable UI systems.',
    href: '/frontend/system-design/roadmap',
    icon: Blocks,
    accent: '#fb923c',
    topics: ['Architecture', 'Caching', 'Performance'],
  },
  {
    title: 'Practice & Mastery',
    description:
      'Hands-on challenges, revision and progressive learning paths.',
    href: '/practice',
    icon: BrainCircuit,
    accent: '#60a5fa',
    topics: ['Challenges', 'Revision', 'Projects'],
  },
]

const cardStyles = {
  violet: {
    icon: 'bg-violet-500/15 text-violet-300',
    hover: 'hover:border-violet-400/40',
    label: 'text-violet-300',
  },
  emerald: {
    icon: 'bg-emerald-500/15 text-emerald-300',
    hover: 'hover:border-emerald-400/40',
    label: 'text-emerald-300',
  },
  orange: {
    icon: 'bg-orange-500/15 text-orange-300',
    hover: 'hover:border-orange-400/40',
    label: 'text-orange-300',
  },
  blue: {
    icon: 'bg-blue-500/15 text-blue-300',
    hover: 'hover:border-blue-400/40',
    label: 'text-blue-300',
  },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [frontendOpen, setFrontendOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFrontendOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFrontendOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const closeDropdown = () => setFrontendOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6"
      >
        <nav
          className={cn(
            'relative mt-4 flex w-full max-w-6xl items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-300',
            scrolled &&
              'glass-strong border-border shadow-2xl shadow-black/40',
            frontendOpen && 'border-border bg-background/95 shadow-2xl',
          )}
        >
          <Link
            href="/"
            onClick={closeDropdown}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Boxes className="size-5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Synapse
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isFrontend =
                link.label.toLowerCase() === 'frontend'

              if (isFrontend) {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      aria-expanded={frontendOpen}
                      aria-haspopup="true"
                      onClick={() => setFrontendOpen((open) => !open)}
                      className={cn(
                        'flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm transition-colors duration-200',
                        frontendOpen
                          ? 'bg-primary/10 text-foreground'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                      )}
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: frontendOpen ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                      >
                        <ChevronDown className="size-3.5" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {frontendOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.99 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                         className="absolute left-1/2 top-full z-50 mt-3 w-[min(560px,calc(100vw-24px))] -translate-x-1/2 origin-top"
                        >
                          <div className="overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-3.5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-4">
                            {/* Dropdown heading */}
                            <div className="mb-4 flex items-start justify-between gap-3">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <CodeXml className="size-4" />
                                  </span>
                                  <h3 className="text-base font-semibold tracking-tight">
                                    Explore Frontend
                                  </h3>
                                </div>
                                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                                  Learn, build and prepare for your next
                                  frontend engineering role.
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={closeDropdown}
                                aria-label="Close frontend menu"
                                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                              >
                                <X className="size-4" />
                              </button>
                            </div>

                            {/* Animated topic cards */}
                           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
  {frontendTopics.map((topic, index) => (
    <motion.div
      key={topic.title}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="min-w-0"
    >
      <FrontendMegaCard {...topic} />
    </motion.div>
  ))}
</div>

                            {/* Bottom callout */}
                            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                              <p className="text-xs text-muted-foreground">
                                Your next level starts with practice.
                              </p>
                              <Link
                                href="/practice"
                                onClick={closeDropdown}
                                className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary"
                              >
                                Start learning
                                <ArrowUpRight className="size-3.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeDropdown}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right-side actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/#search"
              onClick={closeDropdown}
              className="hidden items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:flex"
            >
              <Search className="size-3.5" />
              <span>Search</span>
              <kbd className="rounded border border-border bg-background px-1.5 font-mono text-[10px]">
                ⌘K
              </kbd>
            </Link>

            <a
              href="https://github.com/Yashrtarate"
              aria-label="GitHub"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'text-muted-foreground hover:text-foreground',
              )}
            >
              <Code2 className="size-4" />
            </a>

            <Link
              href="/contact"
              onClick={closeDropdown}
              className={cn(buttonVariants(), 'rounded-lg')}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Soft backdrop behind the open menu */}
      <AnimatePresence>
        {frontendOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDropdown}
            aria-hidden="true"
            className="fixed inset-0 z-40 hidden bg-background/10 backdrop-blur-[2px] md:block"
          />
        )}
      </AnimatePresence>
    </>
  )
}

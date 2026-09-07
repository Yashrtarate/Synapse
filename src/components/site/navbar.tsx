'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Boxes, Code2, Search } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-6"
    >
      <nav
        className={cn(
          'mt-4 flex w-full max-w-6xl items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-300',
          scrolled && 'glass-strong border-border shadow-2xl shadow-black/40',
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Boxes className="size-5" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Synapse
          </span>
          {/* <span className="ml-1 hidden rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
            v2.0
          </span> */}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/#search"
            className="hidden items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:flex"
          >
            <Search className="size-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-border bg-background px-1.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </a>
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
          <Link href="/contact" className={cn(buttonVariants(), 'rounded-lg')}>
            Contact Us
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

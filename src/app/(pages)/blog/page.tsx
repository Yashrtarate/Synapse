'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { BlogCard } from '@/components/site/blog-card'
import { blogPosts } from '@/lib/blog-data'

const categories = [
  'All',
  'Engineering',
  'Productivity',
  'Next.js',
  'Database',
  'Artificial Intelligence',
  'Programming',
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' ||
        post.category === activeCategory

      const search = query.toLowerCase().trim()

      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(search),
        )

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, query])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                <Sparkles className="size-3.5" />
                The Synapse Blog
              </span>

              <h1 className="mt-4 text-balance font-heading text-5xl font-semibold tracking-tight md:text-7xl">
                Ideas, engineering,
                <br />
                <span className="text-primary">and everything between.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Deep dives, practical engineering notes, development
                experiences, and lessons learned while building software.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search + filters */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                    activeCategory === category
                      ? 'border-primary/40 bg-primary/10 text-primary'
                      : 'border-border bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex w-full items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5 lg:max-w-xs">
              <Search className="size-4 text-muted-foreground" />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </section>

        {/* Blog posts */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Articles
              </span>

              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                Latest thoughts
              </h2>
            </div>

            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              {filteredPosts.length} articles
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card/50 py-20 text-center">
              <p className="text-sm text-muted-foreground">
                No articles found.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
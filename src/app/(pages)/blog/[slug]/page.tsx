import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowUpRight,
} from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { blogPosts } from '@/lib/blog-data'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params

  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  const Icon = post.icon

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Article hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute left-1/2 top-0 size-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to blog
            </Link>

            <div className="mt-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-primary">
                  <Icon className="size-3.5" />
                  {post.category}
                </span>

                <span className="text-xs text-muted-foreground">
                  {post.author}
                </span>
              </div>

              <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight md:text-6xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-6xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {post.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="mx-auto max-w-6xl px-6 py-20">
          <div className="space-y-8">
            {post.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="pt-8 font-heading text-2xl font-semibold tracking-tight md:text-3xl"
                  >
                    {block.text}
                  </h2>
                )
              }

              if (block.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className="text-base leading-8 text-muted-foreground md:text-lg"
                  >
                    {block.text}
                  </p>
                )
              }

              if (block.type === 'code') {
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-border bg-card/70"
                  >
                    <div className="flex items-center justify-between border-b border-border px-4 py-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {block.language}
                      </span>

                      <span className="size-2 rounded-full bg-primary/60" />
                    </div>

                    <pre className="overflow-x-auto p-5">
                      <code className="font-mono text-sm leading-7 text-foreground">
                        {block.code}
                      </code>
                    </pre>
                  </div>
                )
              }

              return null
            })}
          </div>

          {/* Article footer */}
          <div className="mt-16 border-t border-border pt-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-medium">Enjoyed this article?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Explore more ideas and engineering notes.
                </p>
              </div>

              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                More articles
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
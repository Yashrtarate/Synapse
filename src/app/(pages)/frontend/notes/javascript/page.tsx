'use client'

import { useState, useMemo } from 'react'
import { DocsSidebar } from '@/components/docs/docs-sidebar'
import { DocsContent } from '@/components/docs/docs-content'
import { DocsToc } from '@/components/docs/docs-toc'
import Link from 'next/link'
import { AnimatePresence, color, motion } from 'framer-motion'
import { bookmarks, docTree, recentNotes } from '@/lib/docs-data'
import { cn } from '@/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'
import CodeBlock from '@/components/code-block/CodeBlock'
import {
  Bookmark,
  Boxes,
  ChevronRight,
  ChevronDown,
  Clock,
  LayoutGrid,
  Search,
  Share2,
} from "lucide-react";
import { div } from 'motion/react-client'

type PropsData = {
  id: number,
  title: string,
  content: any
}
export default function DocsPage() {
  const [active, setActive] = useState(1)
  const topic = "Basics of Javascript"

  type SidebarItem = {
    id: number | string;
    title: string;
    content?: React.ReactNode;
    children?: SidebarItem[];
  };

  const sidebarData: SidebarItem[] = [
    {
      id:1,
      title:"Part 1 : JavaScript Fundamentals",
      children:[
        {
          id:1.1,
          title:"Phase 1 : Introduction",
          children:[
            {
          id:12.1,
          title:"What is Javascript",
          content:(
            <div className="pagehead">
              <h2>What is sj</h2>
            </div>
          )         
        },
        {
          id:12.1,
          title:"",
          content:""          
        },
          ]
          
        },
        {
          id:1.1,
          title:"Phase 2 : Introduction",
          children:[
            {
          id:12.1,
          title:"What is Javascript",
          content:(
            <div className="pagehead">
              <h2>What is sj</h2>
            </div>
          )         
        },
        {
          id:12.1,
          title:"",
          content:""          
        },
          ]
          
        },
      ]
    },
    {
      id:2,
      title:"Part 2 : Core JavaScript Internals",
      children:[
        {
          id:1.1,
          title:"Phase 1 : Introduction",
          children:[
            {
          id:12.1,
          title:"What is Javascript",
          content:(
            <div className="pagehead">
              <h2>What is sj</h2>
            </div>
          )         
        },
        {
          id:12.1,
          title:"",
          content:""          
        },
          ]
          
        },
        {
          id:1.1,
          title:"",
          content:""
          
        }
      ]
    }
  ]

  // const selectedNote = sidebarData.find((note) => note.id === active);

  const pathname = usePathname()
  const pathParts = pathname.split('/').filter(Boolean)

  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpanded((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };


  const findNote = (
    items: SidebarItem[],
    id: number
  ): SidebarItem | undefined => {
    for (const item of items) {
      if (item.id === id) return item;

      if (item.children) {
        const found = findNote(item.children, id);
        if (found) return found;
      }
    }

    return undefined;
  };

  const selectedNote = findNote(sidebarData, active);


  const renderSidebar = (
    items: SidebarItem[],
    level = 0
  ): React.ReactNode => {
    return (
      <ul
        className={
          level === 0
            ? "space-y-"
            : " mt-1 border-l border-border pl-3 space-y-1"
        }
      >
        {items.map((item) => {
          const hasChildren =
            item.children && item.children.length > 0;

          const isExpanded = expanded.includes(item.id);

          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  if (hasChildren) {
                    toggleExpand(item.id);
                  } else {
                    setActive(item.id);
                  }
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors",
                  active === item.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className='border-l border-transparent text-left text-sm text-muted-foreground transition-colors hover:text-foreground'>{item.title}</span>

                {hasChildren && (
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform",
                      isExpanded && "rotate-90"
                    )}
                  />
                )}
              </button>

              {hasChildren &&
                isExpanded &&
                renderSidebar(item.children!, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };


  const meta = useMemo(() => {
    return {
      readTime: Math.floor(Math.random() * 20) + 5, // 5-25 min
      updatedWeeks: Math.floor(Math.random() * 12) + 1, // 1-12 weeks
    };
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar  */}
        {/* <DocsSidebar active={active} onSelect={setActive} /> */}
        <aside className="sticky top-0 hidden h-screen w-75 shrink-0 overflow-y-auto border-r border-border bg-sidebar px-4 py-5 lg:block">
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
              ⌘&nbsp;K
            </kbd>
          </button>

          <aside className="w-75 border-r border-border py-3 pe-3">
            <h2 className="mb-4 flex w-75 items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium transition-colors hover:bg-secondary">
              <LayoutGrid className="size-4 text-primary" />
              <span>{topic}</span>
            </h2>

            {renderSidebar(sidebarData)}
          </aside>


        </aside>


        <main className="min-w-0 flex-1">
          {/* <DocsContent slug={active} /> */}

          <article className="mx-auto  px-15 py-12">
            {/* breadcrumb + meta */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <nav className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Link
                    href="/"
                    className="hover:text-foreground"
                  >
                    Home
                  </Link>

                  {pathParts.map((part, index) => {
                    const href = '/' + pathParts.slice(0, index + 1).join('/')

                    const isLast = index === pathParts.length - 1

                    return (
                      <div
                        key={href}
                        className="flex items-center gap-1"
                      >
                        <span>/</span>

                        {isLast ? (
                          <span className="font-medium text-foreground capitalize" style={{ color: "#17d0d8" }}>
                            {decodeURIComponent(part)}
                          </span>
                        ) : (
                          <Link
                            href={href}
                            className="capitalize hover:text-foreground"
                          >
                            {decodeURIComponent(part)}
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </nav>

              </div>

              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight">
                {selectedNote?.title}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {meta.readTime} min read
                </span>

                <span>
                  Updated {meta.updatedWeeks}{" "}
                  {meta.updatedWeeks === 1 ? "week" : "weeks"} ago
                </span>

                <div className="flex items-center gap-2">
                  <button
                    className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 transition-colors hover:text-foreground"
                    aria-label="Bookmark"
                  >
                    <Bookmark className="size-3.5" />
                    Save
                  </button>

                  <button
                    className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 transition-colors hover:text-foreground"
                    aria-label="Share"
                  >
                    <Share2 className="size-3.5" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="mt-10 space-y-10 text-[15px] leading-7 text-foreground/85">
              <section className="scroll-mt-24">
                <div style={{ whiteSpace: "pre-line" }}>{selectedNote?.content}</div>
              </section>
            </div>


          </article>


        </main>
        {/* <DocsToc /> */}
      </div>
    </>
  )
}

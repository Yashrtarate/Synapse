import Link from 'next/link'
import { Boxes, Code2, Send, Globe } from 'lucide-react'

const columns = [
  {
    title: 'Domains',
    links: ['Frontend', 'Backend', 'DSA', 'Artificial Intelligence'],
  },
  {
    title: 'Resources',
    links: ['Roadmap', 'Featured Notes', 'Snippets', 'Diagrams'],
  },
  {
    title: 'Platform',
    links: ['Documentation', 'Search', 'Bookmarks', 'Changelog'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Boxes className="size-5" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Synapse
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A premium second brain for developers. Capture, organize and
              retrieve everything you learn across the full engineering stack.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Code2, Send, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/docs"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Synapse. Built as a personal knowledge base.</p>
          <p className="font-mono text-xs">Crafted for developers, by a developer.</p>
        </div>
      </div>
    </footer>
  )
}

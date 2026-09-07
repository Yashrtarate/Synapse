'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

type Token = { text: string; cls?: string }

// Lightweight token coloring for a syntax-highlighted feel without a heavy dep.
const palette: Record<string, string> = {
  keyword: 'text-[var(--chart-4)]',
  fn: 'text-primary',
  str: 'text-accent',
  comment: 'text-muted-foreground/60 italic',
  num: 'text-[var(--chart-3)]',
  plain: 'text-foreground/90',
}

export type CodeLine = Token[]

export function CodeBlock({
  filename,
  language = 'ts',
  lines,
  raw,
}: {
  filename?: string
  language?: string
  lines: CodeLine[]
  raw: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(raw)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="group my-6 overflow-hidden rounded-xl border border-border bg-card/60">
      <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[var(--chart-5)]/60" />
            <span className="size-2.5 rounded-full bg-[var(--chart-4)]/60" />
            <span className="size-2.5 rounded-full bg-[var(--chart-2)]/60" />
          </span>
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            {filename ?? `snippet.${language}`}
          </span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-accent" /> Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-5 shrink-0 select-none text-right text-muted-foreground/40">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.length === 0 ? (
                  ' '
                ) : (
                  line.map((tok, j) => (
                    <span key={j} className={palette[tok.cls ?? 'plain']}>
                      {tok.text}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

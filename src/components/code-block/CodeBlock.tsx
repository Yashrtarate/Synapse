'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({
  code,
  fileName,
}: {
  code: string
  fileName?: string
}) {
  const [copied, setCopied] = useState(false)

  const lines = code.trim().split('\n')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 1800)
    } catch (err) {
      console.error(err)
    }
  }

  const highlight = (line: string) => {
    let html = line

    // Comments
    html = html.replace(
      /(\/\/.*)/g,
      '<span style="color:#8b949e">$1</span>'
    )

    // Strings
    html = html.replace(
      /(".*?"|'.*?'|`.*?`)/g,
      '<span style="color:#A5D6FF">$1</span>'
    )

    // Keywords
    html = html.replace(
      /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|switch|case|break|continue|await|async|try|catch|finally|new|class|extends|interface|type)\b/g,
      '<span style="color:#FF7B72;font-weight:600">$1</span>'
    )

    // Boolean & null
    html = html.replace(
      /\b(true|false|null|undefined)\b/g,
      '<span style="color:#79C0FF">$1</span>'
    )

    // Numbers
    html = html.replace(
      /\b(\d+)\b/g,
      '<span style="color:#79C0FF">$1</span>'
    )

    return html
  }

  return (
    <div
      className="my-8 overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: '#0D1117',
        border: '1px solid #30363D',
        boxShadow:
          '0 15px 40px rgba(0,0,0,.35), inset 0 1px rgba(255,255,255,.03)',
      }}
    >
      {/* Header */}
     <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/60" />
            <span className="size-2.5 rounded-full bg-yellow-400/60" />
            <span className="size-2.5 rounded-full bg-green-400/60" />
          </span>

          <span className="ml-2 font-mono text-xs text-muted-foreground">
            {fileName ?? `snippet.tsx`}
          </span>
        </div>

        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="size-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre
        style={{
          margin: 0,
          padding: '22px',
          overflowX: 'auto',
          fontSize: 14,
          lineHeight: '1.8',
          fontFamily:
            'JetBrains Mono, Fira Code, Consolas, Menlo, monospace',
          background: '#0D1117',
        }}
      >
        <code>
          {lines.map((line, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: 20,
                minHeight: 30,
              }}
            >
              <span
                style={{
                  width: 35,
                  textAlign: 'right',
                  color: '#6E7681',
                  userSelect: 'none',
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </span>

              <span
                style={{
                  color: '#E6EDF3',
                  whiteSpace: 'pre',
                  flex: 1,
                }}
                dangerouslySetInnerHTML={{
                  __html: highlight(line || ' '),
                }}
              />
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
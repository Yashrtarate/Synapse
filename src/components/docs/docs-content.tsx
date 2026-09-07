'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Clock,
  Lightbulb,
  Share2,
} from 'lucide-react'
import { docTree } from '@/lib/docs-data'
import { CodeBlock, type CodeLine } from './code-block'

const tags = ['RAG', 'LLMs', 'Vector Databases', 'Embeddings']

const embedCode: CodeLine[] = [
  [
    { text: 'import', cls: 'keyword' },
    { text: ' { embed } ' },
    { text: 'from', cls: 'keyword' },
    { text: ' ' },
    { text: "'ai'", cls: 'str' },
  ],
  [],
  [
    { text: 'export', cls: 'keyword' },
    { text: ' ' },
    { text: 'async', cls: 'keyword' },
    { text: ' ' },
    { text: 'function', cls: 'keyword' },
    { text: ' ' },
    { text: 'indexDocument', cls: 'fn' },
    { text: '(text: string) {' },
  ],
  [
    { text: '  const', cls: 'keyword' },
    { text: ' chunks = ' },
    { text: 'splitIntoChunks', cls: 'fn' },
    { text: '(text, ' },
    { text: '512', cls: 'num' },
    { text: ')' },
  ],
  [
    { text: '  const', cls: 'keyword' },
    { text: ' vectors = ' },
    { text: 'await', cls: 'keyword' },
    { text: ' ' },
    { text: 'embed', cls: 'fn' },
    { text: '({ model, values: chunks })' },
  ],
  [
    { text: '  return', cls: 'keyword' },
    { text: ' db.' },
    { text: 'upsert', cls: 'fn' },
    { text: '(vectors)' },
  ],
  [{ text: '}' }],
]

const embedRaw = `import { embed } from 'ai'

export async function indexDocument(text: string) {
  const chunks = splitIntoChunks(text, 512)
  const vectors = await embed({ model, values: chunks })
  return db.upsert(vectors)
}`

const retrieveCode: CodeLine[] = [
  [
    { text: '// retrieve the most relevant context for a query', cls: 'comment' },
  ],
  [
    { text: 'const', cls: 'keyword' },
    { text: ' results = ' },
    { text: 'await', cls: 'keyword' },
    { text: ' db.' },
    { text: 'query', cls: 'fn' },
    { text: '({' },
  ],
  [
    { text: '  vector: ' },
    { text: 'await', cls: 'keyword' },
    { text: ' ' },
    { text: 'embed', cls: 'fn' },
    { text: '(query),' },
  ],
  [
    { text: '  topK: ' },
    { text: '5', cls: 'num' },
    { text: ',' },
  ],
  [{ text: '})' }],
]

const retrieveRaw = `// retrieve the most relevant context for a query
const results = await db.query({
  vector: await embed(query),
  topK: 5,
})`

function findTitle(slug: string) {
  for (const folder of docTree) {
    const item = folder.items.find((i) => i.slug === slug)
    if (item) return { title: item.title, folder: folder.title }
  }
  return { title: 'RAG Pipelines', folder: 'AI' }
}

export function DocsContent({ slug }: { slug: string }) {
  const { folder } = findTitle(slug)

  return (
    <article className="mx-auto  px-15 py-12">
      {/* breadcrumb + meta */}
      <motion.div
        key={slug}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span>{folder}</span>
          <span>/</span>
          <span className="text-primary">RAG Pipelines</span>
        </div>

        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight">
          Building a RAG Pipeline From Scratch
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" /> 16 min read
          </span>
          <span>Updated 1 week ago</span>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 transition-colors hover:text-foreground"
              aria-label="Bookmark"
            >
              <Bookmark className="size-3.5" /> Save
            </button>
            <button
              className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 transition-colors hover:text-foreground"
              aria-label="Share"
            >
              <Share2 className="size-3.5" /> Share
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-foreground/85">
        <section id="overview" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
            Overview
          </h2>
          <p>
            Retrieval-Augmented Generation (RAG) grounds a language model in your
            own data. Instead of relying purely on what the model memorized
            during training, you retrieve relevant chunks of context at query
            time and feed them into the prompt. The result is accurate,
            up-to-date answers with citations you can trust.
          </p>
          <div className="mt-5 flex gap-3 rounded-xl border border-primary/25 bg-primary/5 p-4">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">Key idea:</span>{' '}
              retrieval quality dominates output quality. A great model with poor
              context will still hallucinate.
            </p>
          </div>
        </section>

        <section id="architecture" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
            The architecture
          </h2>
          <p>
            A RAG system has two phases: an offline indexing phase and an online
            retrieval phase. Documents flow through the pipeline below before a
            single query is ever asked.
          </p>

          {/* diagram */}
          <div className="my-6 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card/40 p-5 sm:grid-cols-4">
            {[
              { step: 'Document', sub: 'raw text' },
              { step: 'Chunk', sub: '512 tokens' },
              { step: 'Embed', sub: 'vectors' },
              { step: 'Store', sub: 'vector DB' },
            ].map((node, i) => (
              <div key={node.step} className="relative">
                <div className="flex flex-col items-center gap-1 rounded-xl border border-border bg-secondary/40 px-3 py-4 text-center">
                  <span className="text-sm font-semibold">{node.step}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {node.sub}
                  </span>
                </div>
                {i < 3 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-primary sm:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="indexing" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
            Indexing documents
          </h2>
          <p>
            First, split documents into overlapping chunks small enough to embed
            but large enough to retain meaning. Then embed each chunk and persist
            the vectors.
          </p>
          <CodeBlock filename="index.ts" lines={embedCode} raw={embedRaw} />
        </section>

        <section id="retrieval" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
            Retrieval at query time
          </h2>
          <p>
            When a user asks a question, embed the query with the same model and
            run a nearest-neighbor search. The top results become the context
            window for generation.
          </p>
          <CodeBlock
            filename="retrieve.ts"
            lines={retrieveCode}
            raw={retrieveRaw}
          />
        </section>

        <section id="pitfalls" className="scroll-mt-24">
          <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
            Common pitfalls
          </h2>
          <ul className="ml-4 list-disc space-y-2 marker:text-primary">
            <li>Chunks that are too large dilute the relevant signal.</li>
            <li>Mismatched embedding models between index and query time.</li>
            <li>No re-ranking step, so noisy results reach the model.</li>
            <li>Ignoring metadata filters that could narrow the search space.</li>
          </ul>
        </section>
      </div>

      {/* prev / next */}
      <div className="mt-14 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
        <button className="group flex flex-col items-start rounded-xl border border-border bg-card/40 p-4 text-left transition-colors hover:border-primary/40">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="size-3.5" /> Previous
          </span>
          <span className="mt-1 font-medium">LLMs</span>
        </button>
        <button className="group flex flex-col items-end rounded-xl border border-border bg-card/40 p-4 text-right transition-colors hover:border-primary/40">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Next <ArrowRight className="size-3.5" />
          </span>
          <span className="mt-1 font-medium">AI Agents</span>
        </button>
      </div>
    </article>
  )
}

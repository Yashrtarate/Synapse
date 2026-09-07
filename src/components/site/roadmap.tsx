'use client'

import { motion } from 'framer-motion'
import { roadmap } from '@/lib/site-data'
import { Reveal } from './reveal'

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative scroll-mt-24 border-y border-border bg-card/20 py-24"
    >
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Roadmap
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            A path from fundamentals to AI
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The exact sequence this knowledge base is built around — follow it
            end to end or jump straight to the phase you need.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-12">
          {/* vertical connecting line */}
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:block" />

          {roadmap.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative lg:col-span-12"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-lg shadow-black/30">
                    <Icon className="size-6" />
                  </div>
                  <div className="glass flex flex-1 flex-col gap-4 rounded-2xl border border-border p-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-xl">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {step.phase}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

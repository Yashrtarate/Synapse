
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export type RoadmapStep = {
  id: number;
  icon: LucideIcon;
  title: string;
  summary: string;
  link: string;
};

type RoadmapPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  roadmapData: RoadmapStep[];
};

export default function RoadmapPage({
  eyebrow,
  title,
  description,
  roadmapData,
}: RoadmapPageProps) {
  const steps = Array.isArray(roadmapData) ? roadmapData : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-25">
        <section
          id="roadmap"
          className="relative scroll-mt-24 border-y border-border bg-card/20 py-24"
        >
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>

              <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                {title}
              </h1>

              <p className="mt-4 text-pretty text-muted-foreground">
                {description}
              </p>
            </Reveal>

            <div className="relative mt-16 grid grid-cols-1 gap-y-10">
              <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:block" />

              {steps.length > 0 ? (
                steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={`${step.id}-${step.link}`}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.55,
                        delay: Math.min(index * 0.04, 0.2),
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative lg:col-span-12"
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                        <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-lg shadow-black/30">
                          <StepIcon className="size-6" />
                        </div>

                        <div className="glass flex flex-1 flex-col gap-4 rounded-2xl border border-border p-6 md:flex-row md:items-center md:justify-between">
                          <div className="max-w-xl">
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                              Phase: {step.id}
                            </span>

                            <h2 className="mt-1 text-xl font-semibold tracking-tight">
                              {step.title}
                            </h2>

                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {step.summary}
                            </p>
                          </div>

                          <Link
                            href={step.link}
                            className="shrink-0 self-start rounded-md border border-border bg-secondary/60 px-4 py-2 font-mono text-[11px] text-foreground transition-colors hover:bg-primary hover:text-black md:self-center"
                          >
                            Start Learning →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <p className="rounded-xl border border-border p-6 text-center text-sm text-muted-foreground">
                  No roadmap topics are configured for this page yet.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

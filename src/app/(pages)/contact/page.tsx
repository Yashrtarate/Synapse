'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Docker',
  'Jenkins',
  'Git',
]

const socialLinks = [
  {
    name: 'GitHub',
    username: 'Yashrtarate',
    href: 'https://github.com/Yashrtarate',
    icon: Code2,
  },
  {
    name: 'LinkedIn',
    username: 'Yash Tarate',
    href: 'https://linkedin.com/in/yashtarate',
    icon: ArrowUpRight,
  },
  {
    name: 'Twitter / X',
    username: '@Yashrtarate',
    href: 'https://x.com/Yashrtarate',
    icon: Mail,
  },
  {
    name: 'Email',
    username: 'yashrtarate@gmail.com',
    href: 'mailto:yashrtarate@gmail.com',
    icon: Mail,
  },
]

export default function ContactPage() {
  return (
   <>
   <Navbar/>
    <main className="relative min-h-screen overflow-hidden pt-25">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      <div className="pointer-events-none absolute left-1/2 top-[-200px] size-[650px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-[-150px] size-[500px] rounded-full bg-[var(--chart-2)]/5 blur-[140px]" />

     
      {/* Profile Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-center">
          
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative size-70">
              <div className="absolute inset-0 rounded-[1rem] bg-primary/20 blur-2xl" />

              <div className="relative h-full w-full overflow-hidden rounded-[1rem] border border-border bg-card">
                <Image
                  src="/YashTarate-Profile.png"
                  alt="Your name"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 font-mono text-xs text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              The person behind Synapse
            </span>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
              Hi, I'm
              <span className="text-gradient"> Yash Tarate.</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Full-stack developer & software engineer
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
              I'm a developer who enjoys building scalable applications,
              exploring new technologies and turning ideas into useful
              products. Synapse is my attempt to create a better system for
              storing and connecting the knowledge I collect while learning
              and building.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:yashrtarate@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Mail className="size-4" />
                Get in touch
              </a>

              <a
                href="https://github.com/Yashrtarate"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Code2 className="size-4" />
                Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section className="border-y border-border bg-card/20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                About me
              </span>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Building things,
                <br />
                learning constantly.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-muted-foreground">
              <p>
                I'm passionate about software engineering and enjoy working
                across the stack—from frontend interfaces and backend systems
                to databases, APIs, DevOps and system architecture.
              </p>

              <p>
                I believe the best developers aren't simply people who know a
                lot of technologies. They're people who can continuously learn,
                understand systems and apply what they know to real problems.
              </p>

              <p>
                That's one of the reasons I built Synapse: to make my own
                learning process more structured and reusable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Technologies
          </span>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Tools I work with
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.04,
              }}
              className="rounded-xl border border-border bg-card/50 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Social */}
      <section className="border-y border-border bg-card/20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Connect
            </span>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Find me online.
            </h2>

            <p className="mt-4 text-muted-foreground">
              I'm always interested in interesting projects, ideas and
              conversations around software engineering.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
            {socialLinks.map((link, index) => {
              const Icon = link.icon

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : 'noreferrer'
                  }
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>

                  <span className="flex-1">
                    <span className="block text-sm font-semibold">
                      {link.name}
                    </span>

                    <span className="mt-1 block font-mono text-xs text-muted-foreground">
                      {link.username}
                    </span>
                  </span>

                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location / Contact */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <MapPin className="size-5" />
        </div>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight">
          Let's build something useful.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          Have an interesting idea, collaboration opportunity or just want to
          talk about software engineering? Feel free to reach out.
        </p>

        <a
          href="mailto:yashrtarate@gmail.com"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          <Mail className="size-4" />
          Contact me
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Synapse.
          </p>

          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Back to Synapse
          </Link>
        </div>
      </footer>
    </main>
    <Footer/>
   </>
  )
}
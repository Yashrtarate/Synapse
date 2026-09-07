'use client'
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/site/reveal";
import { motion } from "framer-motion";
import {
  Computer,
  Network,
  Globe,
  Package,
  Wrench,
  Boxes,
  GitBranch,
  FileCode,
  Paintbrush,
  Palette,
  Layers,
  MonitorSmartphone,
  Wind,
  Sparkles,
  Move3D,
  Braces,
  FileJson,
  Atom,
  Database,
  Triangle,
  Gauge,
  Cloud,
  Shield,
  Puzzle,
  Accessibility,
  Smartphone,
  Workflow,
  Building2,
  TestTube2,
  Rocket,
  Bug,
  Icon,
} from "lucide-react";
import Link from "next/link";

export default function FrontendPage() {
  const roadmapData = [
    {
      id: 1,
      icon: Computer,
      title: "Basic of Computer",
      summary: "Learn computer fundamentals, hardware, software, operating systems, data representation, and program execution.",
      link: "/frontend/notes/basics-of-computer",
    },
    {
      id: 2,
      icon: Network,
      title: "Basic of Networking , Network (S.D) , Communication (S.D)",
      summary: "Understand networking concepts, IP addressing, protocols, OSI model, TCP/IP, and client-server architecture.",
      link: "/frontend/notes/basics-of-networking",
    },
    {
      id: 3,
      icon: Globe,
      title: "Basics of Internet , Browser  (S.D)",
      summary: "Learn how the Internet works, DNS, domains, hosting, browsers, HTTP/HTTPS, and the request-response cycle.",
      link: "/frontend/notes/basics-of-internet",
    },

    {
      id: 3333,
      icon: Globe,
      title: "Dev vs Prod",
      summary: "Learn how to work in developement for creating and testing  and then production for live",
      link: "/frontend/notes/developement-vs-production",
    },

    {
      id: 4444,
      icon: Wrench,
      title: "Linters",
      summary: "Write clean and consistent code using ESLint, Prettier, and coding standards.",
      link: "/frontend/notes/linter",
    },
    {
      id: 5,
      icon: Wrench,
      title: "Formatters",
      summary: "Write clean and consistent code using ESLint, Prettier, and coding standards.",
      link: "/frontend/notes/formatter",
    },
    {
      id: 66666,
      icon: Package,
      title: "Package Managers",
      summary: "Manage project dependencies using npm, Yarn, package.json, scripts, and package versions.",
      link: "/frontend/notes/package-manager",
    },
    {
      id: 6,
      icon: Boxes,
      title: "Module Bundlers",
      summary: "Bundle, optimize, and build applications using Vite, Webpack, Rollup, and Parcel.",
      link: "/frontend/note/module-bundler",
    },
    {
      id: 7,
      icon: GitBranch,
      title: "Version Control (Git)",
      summary: "Track changes, create branches, merge code, and collaborate using Git.",
      link: "/frontend/notes/git",
    },
    {
      id: 8,
      icon: FileCode,
      title: "GitHub",
      summary: "Host repositories, collaborate through pull requests, issues, and GitHub Actions.",
      link: "/frontend/notes/git",
    },
    {
      id: 9,
      icon: FileCode,
      title: "HTML",
      summary: "Build semantic web pages using HTML elements, forms, tables, multimedia, and accessibility.",
      link: "/frontend/notes/html",
    },
    {
      id: 10,
      icon: Paintbrush,
      title: "BEM",
      summary: "Organize CSS using the Block Element Modifier methodology for scalable projects.",
      link: "/frontend/notes/bem",
    },
    {
      id: 11,
      icon: Palette,
      title: "CSS",
      summary: "Style websites with selectors, layouts, Flexbox, Grid, animations, and responsive design.",
      link: "/frontend/notes/css",
    },
    {
      id: 12,
      icon: Layers,
      title: "SCSS",
      summary: "Write maintainable CSS using variables, nesting, mixins, functions, and partials.",
      link: "/frontend/stage-one/scss",
    },
    {
      id: 13,
      icon: MonitorSmartphone,
      title: "Bootstrap",
      summary: "Develop responsive websites quickly using Bootstrap's grid system and UI components.",
      link: "/frontend/stage-one/bootstrap",
    },
    {
      id: 14,
      icon: Wind,
      title: "Tailwind CSS",
      summary: "Create custom interfaces rapidly using utility-first CSS classes.",
      link: "/frontend/stage-one/tailwind-css",
    },
    {
      id: 15,
      icon: Sparkles,
      title: "GSAP",
      summary: "Build high-performance web animations and interactive effects using GSAP.",
      link: "/frontend/stage-one/gsap",
    },
    {
      id: 16,
      icon: Move3D,
      title: "Framer Motion",
      summary: "Create smooth React animations with gestures, transitions, and layout animations.",
      link: "/frontend/stage-one/framer-motion",
    },
    {
      id: 17,
      icon: Braces,
      title: "JavaScript",
      summary: "Master JavaScript fundamentals, ES6+, DOM, events, promises, async/await, and browser APIs.",
      link: "/frontend/stage-one/javascript",
    },
    {
      id: 18,
      icon: FileJson,
      title: "TypeScript",
      summary: "Write scalable JavaScript with types, interfaces, generics, and modern TypeScript features.",
      link: "/frontend/stage-one/typescript",
    },
    {
      id: 19,
      icon: Atom,
      title: "React",
      summary: "Build reusable UI components using React, Hooks, state management, and routing.",
      link: "/frontend/stage-one/react",
    },
    {
      id: 20,
      icon: Database,
      title: "State Management",
      summary: "Manage application state efficiently using Redux Toolkit, Context API, and Zustand.",
      link: "/frontend/stage-one/state-management",
    },
    {
      id: 21,
      icon: Triangle,
      title: "Next.js",
      summary: "Build production-ready React applications with App Router, SSR, SSG, and API Routes.",
      link: "/frontend/stage-one/nextjs",
    },
    {
      id: 22,
      icon: Gauge,
      title: "Performance Optimization",
      summary: "Optimize websites with lazy loading, code splitting, caching, and image optimization.",
      link: "/frontend/stage-one/performance-optimization",
    },
    {
      id: 23,
      icon: Cloud,
      title: "Web APIs",
      summary: "Communicate with backend services using Fetch API, REST APIs, GraphQL, and browser APIs.",
      link: "/frontend/stage-one/web-apis",
    },
    {
      id: 24,
      icon: Shield,
      title: "Web Security",
      summary: "Protect applications from XSS, CSRF, CORS, authentication, and common web vulnerabilities.",
      link: "/frontend/stage-one/web-security",
    },
    {
      id: 25,
      icon: Puzzle,
      title: "Web Components",
      summary: "Build reusable custom HTML elements using Shadow DOM and Custom Elements.",
      link: "/frontend/stage-one/web-components",
    },
    {
      id: 26,
      icon: Accessibility,
      title: "Web Accessibility",
      summary: "Create websites accessible to everyone using ARIA, semantic HTML, and WCAG standards.",
      link: "/frontend/stage-one/web-accessibility",
    },
    {
      id: 27,
      icon: Smartphone,
      title: "Progressive Web Apps",
      summary: "Build installable web applications with offline support, service workers, and push notifications.",
      link: "/frontend/stage-one/pwa",
    },
    {
      id: 28,
      icon: Workflow,
      title: "GraphQL",
      summary: "Query APIs efficiently using GraphQL queries, mutations, subscriptions, and schemas.",
      link: "/frontend/stage-one/graphql",
    },
    {
      id: 29,
      icon: Building2,
      title: "System Design",
      summary: "Learn scalable architecture, databases, caching, load balancing, and distributed systems.",
      link: "/frontend/stage-one/system-design",
    },
    {
      id: 30,
      icon: TestTube2,
      title: "Testing",
      summary: "Write reliable applications using unit, integration, and end-to-end testing.",
      link: "/frontend/stage-one/testing",
    },
    {
      id: 31,
      icon: Rocket,
      title: "Deployment",
      summary: "Deploy applications using Vercel, Netlify, Docker, CI/CD, and cloud platforms.",
      link: "/frontend/stage-one/deployment",
    },
    {
      id: 32,
      icon: Bug,
      title: "F12 & Debugging",
      summary: "Debug applications with Chrome DevTools, React DevTools, network tools, and performance profiling.",
      link: "/frontend/stage-one/debugging",
    },
  ];
  return (
    <>
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
                  Frontend Roadmap
                </span>
                <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  Become a Modern Frontend Developer
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground">
                  Follow a structured learning path from computer fundamentals to advanced
                  frontend development. Master HTML, CSS, JavaScript, React, Next.js,
                  TypeScript, performance optimization, deployment, and everything required
                  to build production-ready web applications.
                </p>
              </Reveal>

              <div className="relative mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-12">
                {/* vertical connecting line */}
                <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:block" />

                {roadmapData.map((step: any, i: number) => {
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
                              Phase : {step.id}
                            </span>
                            <h3 className="mt-1 text-xl font-semibold tracking-tight">
                              {step.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {step.summary}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">

                            <Link
                              href={step.link}
                              className="rounded-md border hover:bg-primary hover:text-black border-border bg-secondary/60 px-4 py-2 font-mono text-[11px] text-foreground"
                            >
                              Start Learning →

                            </Link>

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
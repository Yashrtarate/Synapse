
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
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
  CheckCircle2,
  Circle,
  BookOpen,
} from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

const stages = [
  {
    id: "01",
    title: "Computer, Networking & Internet Fundamentals",
    description:
      "Build a strong foundation in computers, networks, the Internet, browsers, and development environments before moving into frontend engineering.",
    topics: [
      {
        title: "Basic of Computer",
        slug: "basics-of-computer",
        icon: Computer,
        description:
          "Learn computer fundamentals, hardware, software, operating systems, data representation, memory, and program execution.",
        concepts: ["Hardware", "Operating systems", "Memory", "CPU", "Data representation"],
        link: "/frontend/notes/basics-of-computer",
      },
      {
        title: "Basic of Networking, Network (S.D), Communication (S.D)",
        slug: "basics-of-networking",
        icon: Network,
        description:
          "Understand how devices communicate and how data travels between clients, servers, and networks.",
        concepts: ["OSI model", "TCP/IP", "IP addressing", "DNS", "TLS/HTTPS"],
        link: "/frontend/notes/basics-of-networking",
      },
      {
        title: "Basics of Internet & Browser (S.D)",
        slug: "basics-of-internet",
        icon: Globe,
        description:
          "Learn how the Internet works, how browsers request resources, and how websites are delivered to users.",
        concepts: ["HTTP/HTTPS", "DNS", "Domains", "Hosting", "Request-response"],
        link: "/frontend/notes/basics-of-internet",
      },
      {
        title: "Development vs Production",
        slug: "development-vs-production",
        icon: Globe,
        description:
          "Understand development and production environments, configuration, builds, testing, and live application releases.",
        concepts: ["Environment variables", "Builds", "Debugging", "Production", "Configuration"],
        link: "/frontend/notes/developement-vs-production",
      },
    ],
  },
  {
    id: "02",
    title: "Developer Tools & Workflow",
    description:
      "Learn the tools used to manage dependencies, maintain code quality, bundle applications, and collaborate with other developers.",
    topics: [
      {
        title: "Linters",
        slug: "linter",
        icon: Wrench,
        description:
          "Identify potential bugs and maintain consistent code quality using linting rules and automated checks.",
        concepts: ["ESLint", "Rules", "Code quality", "Static analysis"],
        link: "/frontend/notes/linter",
      },
      {
        title: "Formatters",
        slug: "formatter",
        icon: Wrench,
        description:
          "Keep source code consistently formatted with automated formatting tools and shared team conventions.",
        concepts: ["Prettier", "Formatting", "Editor settings", "Team conventions"],
        link: "/frontend/notes/formatter",
      },
      {
        title: "Package Managers",
        slug: "package-manager",
        icon: Package,
        description:
          "Install and manage project dependencies, scripts, package versions, and lockfiles.",
        concepts: ["npm", "Yarn", "package.json", "Lockfiles", "Scripts"],
        link: "/frontend/notes/package-manager",
      },
      {
        title: "Module Bundlers",
        slug: "module-bundler",
        icon: Boxes,
        description:
          "Understand how modules and assets are transformed and bundled for development and production.",
        concepts: ["Vite", "Webpack", "Rollup", "Parcel", "Tree shaking"],
        link: "/frontend/note/module-bundler",
      },
      {
        title: "Version Control (Git)",
        slug: "git",
        icon: GitBranch,
        description:
          "Track code changes, work with branches, resolve conflicts, and manage development history.",
        concepts: ["Commits", "Branches", "Merge", "Rebase", "Conflicts"],
        link: "/frontend/notes/git",
      },
      {
        title: "GitHub",
        slug: "github",
        icon: FileCode,
        description:
          "Collaborate on repositories, review code, track issues, and manage contributions through pull requests.",
        concepts: ["Repositories", "Pull requests", "Code reviews", "Issues", "Actions"],
        link: "/frontend/notes/git",
      },
    ],
  },
  {
    id: "03",
    title: "HTML, CSS & UI Styling",
    description:
      "Learn to structure web pages, create maintainable styles, and build responsive interfaces with modern styling tools.",
    topics: [
      {
        title: "HTML",
        slug: "html",
        icon: FileCode,
        description:
          "Build semantic web pages using HTML elements, forms, tables, multimedia, and accessible document structure.",
        concepts: ["Semantic HTML", "Forms", "DOM structure", "SEO", "Accessibility"],
        link: "/frontend/notes/html",
      },
      {
        title: "BEM",
        slug: "bem",
        icon: Paintbrush,
        description:
          "Organize CSS class names with Block Element Modifier for predictable and maintainable styling.",
        concepts: ["Blocks", "Elements", "Modifiers", "Naming conventions"],
        link: "/frontend/notes/bem",
      },
      {
        title: "CSS",
        slug: "css",
        icon: Palette,
        description:
          "Master styling fundamentals, layout systems, responsive design, transitions, and animations.",
        concepts: ["Box model", "Flexbox", "Grid", "Responsive design", "Animations"],
        link: "/frontend/notes/css",
      },
      {
        title: "SCSS",
        slug: "scss",
        icon: Layers,
        description:
          "Write maintainable styles using variables, nesting, mixins, functions, partials, and reusable patterns.",
        concepts: ["Variables", "Mixins", "Nesting", "Functions", "Partials"],
        link: "/frontend/notes/scss",
      },
      {
        title: "Bootstrap",
        slug: "bootstrap",
        icon: MonitorSmartphone,
        description:
          "Build responsive layouts quickly with Bootstrap's grid, utilities, and prebuilt interface components.",
        concepts: ["Grid system", "Breakpoints", "Utilities", "Components"],
        link: "/frontend/notes/bootstrap",
      },
      {
        title: "Tailwind CSS",
        slug: "tailwind-css",
        icon: Wind,
        description:
          "Build responsive interfaces using utility-first styling, responsive variants, and reusable design patterns.",
        concepts: ["Utility classes", "Responsive variants", "Themes", "Custom configuration"],
        link: "/frontend/notes/tailwind-css",
      },
    ],
  },
  {
    id: "04",
    title: "JavaScript, TypeScript & Animations",
    description:
      "Learn programming fundamentals, type-safe development, and animation tools for building rich interactive experiences.",
    topics: [
      {
        title: "GSAP",
        slug: "gsap",
        icon: Sparkles,
        description:
          "Create advanced web animations, timelines, scroll effects, and high-performance interactive experiences.",
        concepts: ["Tweens", "Timelines", "ScrollTrigger", "Easing"],
        link: "/frontend/notes/gsap",
      },
      {
        title: "Framer Motion",
        slug: "framer-motion",
        icon: Move3D,
        description:
          "Build animated React interfaces using transitions, gestures, variants, and layout animations.",
        concepts: ["Variants", "Transitions", "Gestures", "Layout animations"],
        link: "/frontend/notes/framer-motion",
      },
      {
        title: "JavaScript",
        slug: "javascript",
        icon: Braces,
        description:
          "Master the language behind interactive websites, from core fundamentals to asynchronous programming and browser events.",
        concepts: ["Closures", "Promises", "Async/await", "DOM", "Event loop"],
        link: "/frontend/notes/javascript",
      },
      {
        title: "TypeScript",
        slug: "typescript",
        icon: FileJson,
        description:
          "Write safer and more maintainable JavaScript with types, interfaces, generics, and type narrowing.",
        concepts: ["Types", "Interfaces", "Generics", "Unions", "Type narrowing"],
        link: "/frontend/notes/typescript",
      },
    ],
  },
  {
    id: "05",
    title: "React & Modern Frontend Frameworks",
    description:
      "Build component-driven applications, manage application state, and develop production-ready web experiences.",
    topics: [
      {
        title: "React",
        slug: "react",
        icon: Atom,
        description:
          "Build reusable user interfaces using components, props, Hooks, state, effects, and rendering patterns.",
        concepts: ["Components", "Hooks", "Props", "State", "Rendering"],
        link: "/frontend/notes/react",
      },
      {
        title: "State Management",
        slug: "state-management",
        icon: Database,
        description:
          "Manage shared application state and coordinate data across complex component trees.",
        concepts: ["Context API", "Redux Toolkit", "Zustand", "Reducers", "Selectors"],
        link: "/frontend/notes/state-management",
      },
      {
        title: "Next.js",
        slug: "nextjs",
        icon: Triangle,
        description:
          "Build production-ready React applications using routing, server rendering, server components, and static generation.",
        concepts: ["App Router", "SSR", "SSG", "Server Components", "API routes"],
        link: "/frontend/notes/nextjs",
      },
      {
        title: "GraphQL",
        slug: "graphql",
        icon: Workflow,
        description:
          "Query APIs through a typed schema and request the data required by each interface.",
        concepts: ["Queries", "Mutations", "Schemas", "Resolvers", "Subscriptions"],
        link: "/frontend/notes/graphql",
      },
    ],
  },
  {
    id: "06",
    title: "Advanced Frontend Engineering",
    description:
      "Improve performance, integrate web platform capabilities, secure applications, and build inclusive experiences.",
    topics: [
      {
        title: "Performance Optimization",
        slug: "performance-optimization",
        icon: Gauge,
        description:
          "Improve loading speed, rendering efficiency, and responsiveness in real-world frontend applications.",
        concepts: ["Code splitting", "Lazy loading", "Caching", "Core Web Vitals", "Memoization"],
        link: "/frontend/notes/performance-optimization",
      },
      {
        title: "Web APIs",
        slug: "web-apis",
        icon: Cloud,
        description:
          "Connect frontend applications to backend services and use browser capabilities effectively.",
        concepts: ["Fetch API", "REST", "GraphQL", "Storage APIs", "Intersection Observer"],
        link: "/frontend/notes/web-apis",
      },
      {
        title: "Web Security",
        slug: "web-security",
        icon: Shield,
        description:
          "Protect application data, sessions, and users from common browser and web application vulnerabilities.",
        concepts: ["XSS", "CSRF", "CORS", "CSP", "Authentication"],
        link: "/frontend/notes/web-security",
      },
      {
        title: "Web Components",
        slug: "web-components",
        icon: Puzzle,
        description:
          "Build reusable browser-native elements using custom elements and encapsulated component structures.",
        concepts: ["Custom Elements", "Shadow DOM", "HTML Templates", "Custom Events"],
        link: "/frontend/notes/web-components",
      },
      {
        title: "Web Accessibility",
        slug: "web-accessibility",
        icon: Accessibility,
        description:
          "Build inclusive interfaces that work with keyboards, assistive technology, and different user needs.",
        concepts: ["WCAG", "ARIA", "Keyboard navigation", "Focus management"],
        link: "/frontend/notes/web-accessibility",
      },
      {
        title: "Progressive Web Apps",
        slug: "pwa",
        icon: Smartphone,
        description:
          "Build installable web applications with offline support and resilient loading experiences.",
        concepts: ["Service workers", "Offline caching", "Web manifest", "Push notifications"],
        link: "/frontend/notes/pwa",
      },
      {
        title: "System Design",
        slug: "system-design",
        icon: Building2,
        description:
          "Understand frontend architecture, data flow, caching, scalability, and the trade-offs behind large applications.",
        concepts: ["HLD", "LLD", "Architecture", "Caching", "Scalability"],
        link: "/frontend/notes/system-design",
      },
      {
        title: "Testing",
        slug: "testing",
        icon: TestTube2,
        description:
          "Verify components, application behavior, integrations, and complete user journeys.",
        concepts: ["Unit testing", "Integration testing", "Jest", "React Testing Library", "E2E"],
        link: "/frontend/notes/testing",
      },
      {
        title: "Deployment",
        slug: "deployment",
        icon: Rocket,
        description:
          "Prepare, build, and release frontend applications through hosting platforms and automated pipelines.",
        concepts: ["Builds", "CI/CD", "Vercel", "Netlify", "Rollbacks"],
        link: "/frontend/notes/deployment",
      },
      {
        title: "F12 & Debugging",
        slug: "debugging",
        icon: Bug,
        description:
          "Investigate UI bugs, network requests, runtime errors, and performance issues with browser developer tools.",
        concepts: ["Chrome DevTools", "Network panel", "React DevTools", "Breakpoints", "Profiling"],
        link: "/frontend/notes/debugging",
      },
    ],
  },
];

const allTopics = stages.flatMap((stage) => stage.topics);

export default function FrontendRoadmapPage() {
  const [completed, setCompleted] = useState<string[]>([]);

  const toggleComplete = (slug: string) => {
    setCompleted((previous) =>
      previous.includes(slug)
        ? previous.filter((item) => item !== slug)
        : [...previous, slug],
    );
  };

  const progress = Math.round((completed.length / allTopics.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="overflow-hidden pt-28">
        {/* Hero */}
        <section className="relative px-6 pb-16 pt-12">
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <Reveal className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
              <BookOpen className="size-3.5" />
              SYNAPSE LEARNING PATH
            </span>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Frontend
              <span className="block text-primary">Development Roadmap</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
              Follow a structured learning path from computer fundamentals
              to modern frontend engineering. Learn HTML, CSS, JavaScript,
              TypeScript, React, Next.js, performance optimization, testing,
              system design, and deployment.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-lg border border-border bg-card/60 px-3 py-2">
                {stages.length} learning stages
              </span>
              <span className="rounded-lg border border-border bg-card/60 px-3 py-2">
                {allTopics.length} topics
              </span>
              <span className="rounded-lg border border-border bg-card/60 px-3 py-2">
                Beginner → Advanced
              </span>
            </div>
          </Reveal>
        </section>

        {/* Progress */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Your learning progress</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Mark topics complete as you learn them.
                </p>
              </div>

              <span className="font-mono text-sm text-primary">
                {completed.length}/{allTopics.length} · {progress}%
              </span>
            </div>

            <div
              className="mt-4 h-2 overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-label="Frontend roadmap completion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <motion.div
                className="h-full rounded-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </section>

        {/* Nested roadmap timeline — same structure as System Design */}
        <section
          id="roadmap"
          className="relative border-y border-border bg-card/20 py-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

          <div className="relative mx-auto max-w-5xl px-6">
            <Reveal className="mb-12 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                The learning path
              </span>

              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Learn in the right sequence
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Start with the fundamentals, progress through frontend tools
                and frameworks, then master advanced engineering concepts.
              </p>
            </Reveal>

            <div className="relative space-y-12">
              {stages.map((stage, stageIndex) => (
                <motion.section
                  key={stage.id}
                  id={`stage-${stage.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.05,
                  }}
                  className="relative"
                >
                  {/* Stage heading */}
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-card text-primary">
                      <span className="font-mono text-sm font-semibold">
                        {stage.id}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {stage.title}
                      </h3>

                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Nested topics connected by a vertical line */}
                  <div className="ml-3 space-y-3 border-l border-border pl-5 sm:ml-6 sm:pl-7">
                    {stage.topics.map((topic, topicIndex) => {
                      const TopicIcon = topic.icon;
                      const isCompleted = completed.includes(topic.slug);

                      return (
                        <motion.article
                          key={topic.slug}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-30px" }}
                          transition={{
                            duration: 0.35,
                            delay: topicIndex * 0.045,
                          }}
                          className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
                        >
                          <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                          <div className="relative flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:p-5">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                              <TopicIcon className="size-5" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="text-sm font-semibold sm:text-base">
                                  {topic.title}
                                </h4>

                                {isCompleted && (
                                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400">
                                    <CheckCircle2 className="size-3.5" />
                                    Completed
                                  </span>
                                )}
                              </div>

                              <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                {topic.description}
                              </p>

                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {topic.concepts.map((concept) => (
                                  <span
                                    key={concept}
                                    className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                                  >
                                    {concept}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-4 flex flex-wrap items-center gap-3">
                                <Link
                                  href={topic.link}
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary"
                                >
                                  Start Learning
                                  <ArrowUpRight className="size-3.5" />
                                </Link>

                                <button
                                  type="button"
                                  onClick={() => toggleComplete(topic.slug)}
                                  aria-pressed={isCompleted}
                                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                                  ) : (
                                    <Circle className="size-3.5" />
                                  )}
                                  {isCompleted ? "Completed" : "Mark complete"}
                                </button>
                              </div>
                            </div>

                            <span className="hidden shrink-0 font-mono text-[10px] text-muted-foreground sm:block">
                              {stage.id}.{String(topicIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>

                  {stageIndex < stages.length - 1 && (
                    <div className="ml-8 mt-5 flex items-center gap-2 text-xs text-muted-foreground sm:ml-11">
                      <ArrowDown className="size-3.5" />
                      Continue to the next stage
                    </div>
                  )}
                </motion.section>
              ))}
            </div>

            {/* Final milestone */}
            <Reveal className="mt-16">
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      Final milestone
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      Become a production-ready frontend developer.
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      Combine your knowledge through real-world projects,
                      testing, performance improvements, debugging, and
                      frontend system design practice.
                    </p>
                  </div>

                  <Link
                    href="/frontend/notes/system-design"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Explore System Design
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

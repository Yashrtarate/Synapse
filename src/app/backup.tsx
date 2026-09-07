"use client";

import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Code2,
  FileCode2,
  Folder,
  Home,
  Image,
  Search,
  Settings,
  Terminal,
  X,
} from "lucide-react";

const navigation = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: ["Introduction", "Setup", "Project Structure"],
  },
  {
    title: "JavaScript",
    icon: Code2,
    items: ["Variables", "Functions", "ES6", "Async/Await"],
  },
  {
    title: "React",
    icon: Code2,
    items: ["Components", "Props", "State", "Hooks", "createRoot"],
  },
  {
    title: "Next.js",
    icon: FileCode2,
    items: ["App Router", "Server Components", "API Routes", "Middleware"],
  },
  {
    title: "DevOps",
    icon: Terminal,
    items: ["Docker", "Jenkins", "AWS", "Nginx"],
  },
];

const content = {
  Introduction: {
    category: "Getting Started",
    title: "Introduction",
    description:
      "Welcome to your personal developer knowledge dashboard.",
  },

  Setup: {
    category: "Getting Started",
    title: "Project Setup",
    description:
      "Learn how to configure and organize your development environment.",
  },

  State: {
    category: "React",
    title: "React State",
    description:
      "Understanding state and how React components manage changing data.",
  },

  Hooks: {
    category: "React",
    title: "React Hooks",
    description:
      "A practical guide to using React Hooks in modern applications.",
  },

  Components: {
    category: "React",
    title: "React Components",
    description:
      "Learn how to create reusable and maintainable React components.",
  },

  Props: {
    category: "React",
    title: "React Props",
    description:
      "Props allow components to receive data from their parent components.",
  },

  Variables: {
    category: "JavaScript",
    title: "JavaScript Variables",
    description:
      "Learn how let, const and variable scope work in JavaScript.",
  },

  Functions: {
    category: "JavaScript",
    title: "JavaScript Functions",
    description:
      "Functions allow you to create reusable blocks of JavaScript logic.",
  },

  ES6: {
    category: "JavaScript",
    title: "ES6",
    description:
      "Modern JavaScript features introduced with ECMAScript 2015.",
  },

  Docker: {
    category: "DevOps",
    title: "Docker",
    description:
      "Containerize your applications and create consistent environments.",
  },

  Jenkins: {
    category: "DevOps",
    title: "Jenkins",
    description:
      "Automate your CI/CD pipelines using Jenkins.",
  },
};

type ContentKey = keyof typeof content;

export default function HomePage() {
  const [selected, setSelected] = useState<ContentKey>("State");
  const [search, setSearch] = useState("");
  const [openSections, setOpenSections] = useState<string[]>([
    "Getting Started",
    "JavaScript",
    "React",
    "Next.js",
    "DevOps",
  ]);

  const current = content[selected];

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200">
      {/* TOP HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-slate-800 bg-[#0a0f1c]/95 backdrop-blur">
        <div className="flex h-full items-center">
          {/* Logo */}
          <div className="flex h-full w-72 items-center gap-3 border-r border-slate-800 px-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
              <BookOpen size={20} />
            </div>

            <span className="text-lg font-semibold text-white">
              Knowledge Hub
            </span>
          </div>

          {/* Search */}
          <div className="flex flex-1 items-center px-8">
            <div className="relative w-full max-w-2xl">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search notes, topics, or anything..."
                className="w-full rounded-lg border border-slate-800 bg-[#111827] py-2.5 pl-11 pr-10 text-sm outline-none transition focus:border-blue-500"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Header buttons */}
          <div className="flex items-center gap-3 px-6">
            <button className="rounded-lg border border-slate-800 bg-[#111827] p-2 hover:bg-slate-800">
              <Settings size={18} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold">
              N
            </div>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-16 w-72 overflow-y-auto border-r border-slate-800 bg-[#0b1220]">
        <div className="p-4">
          {/* Home */}
          <button
            onClick={() => setSelected("Introduction")}
            className="mb-4 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <Home size={18} />
            Home
          </button>

          {/* Navigation */}
          <div className="space-y-4">
            {navigation.map((section) => {
              const Icon = section.icon;
              const isOpen = openSections.includes(section.title);

              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={17} />
                      {section.title}
                    </span>

                    {isOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="ml-4 mt-1 border-l border-slate-800 pl-3">
                      {section.items.map((item) => {
                        const exists = item in content;

                        return (
                          <button
                            key={item}
                            disabled={!exists}
                            onClick={() => {
                              if (exists) {
                                setSelected(item as ContentKey);
                              }
                            }}
                            className={`mb-1 flex w-full items-center rounded-md px-3 py-2 text-left text-sm transition ${
                              selected === item
                                ? "bg-blue-600/20 text-blue-400"
                                : exists
                                ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                                : "cursor-not-allowed text-slate-700"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Resources */}
          <div className="mt-8 border-t border-slate-800 pt-5">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Resources
            </p>

            <button className="mt-3 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
              <Folder size={17} />
              Files
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
              <Image size={17} />
              Images
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-72 pt-16">
        <div className="mx-auto flex max-w-7xl">
          {/* Article */}
          <article className="min-w-0 flex-1 px-12 py-10">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
              <span>{current.category}</span>
              <ChevronRight size={15} />
              <span className="text-slate-300">{current.title}</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <Code2 size={28} />
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white">
                  {current.title}
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-slate-400">
                {current.description}
              </p>

              <div className="mt-5 flex gap-2">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                  {current.category}
                </span>

                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Beginner
                </span>
              </div>
            </div>

            {/* Section */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                What is {current.title}?
              </h2>

              <p className="leading-8 text-slate-400">
                This is your personal developer knowledge base. You can store
                explanations, code examples, images, commands, architecture
                notes and anything else that helps you learn and build
                projects.
              </p>
            </section>

            {/* Key Points */}
            <section className="mb-10 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
              <h3 className="mb-4 flex items-center gap-3 font-semibold text-blue-400">
                💡 Key Points
              </h3>

              <ul className="space-y-2 text-sm leading-7 text-slate-400">
                <li>• Store important concepts in one place.</li>
                <li>• Add code examples beside explanations.</li>
                <li>• Organize everything using categories.</li>
                <li>• Quickly search your entire knowledge base.</li>
              </ul>
            </section>

            {/* Example */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Example
              </h2>

              <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0d1524]">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <span className="text-xs text-slate-500">tsx</span>

                  <button className="text-xs text-slate-400 hover:text-white">
                    Copy
                  </button>
                </div>

                <pre className="overflow-x-auto p-6 text-sm leading-7">
                  <code>
                    <span className="text-purple-400">
                      import
                    </span>{" "}
                    <span className="text-slate-300">
                      {"{ useState }"}
                    </span>{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">
                      &apos;react&apos;
                    </span>
                    {"\n\n"}
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-yellow-300">Counter</span>
                    {"() {"}
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">const</span>{" "}
                    [count, setCount] ={" "}
                    <span className="text-yellow-300">useState</span>(0);
                    {"\n\n"}
                    {"  "}
                    <span className="text-purple-400">return</span> (
                    {"\n"}
                    {"    "}
                    <span className="text-blue-400">
                      &lt;button
                    </span>
                    {"\n"}
                    {"      onClick={() =&gt; setCount(count + 1)}"}
                    {"\n"}
                    {"    "}
                    <span className="text-blue-400">
                      &gt;
                    </span>
                    {"\n"}
                    {"      Count: "}
                    {"{count}"}
                    {"\n"}
                    {"    "}
                    <span className="text-blue-400">
                      &lt;/button&gt;
                    </span>
                    {"\n"}
                    {"  );"}
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </section>

            {/* Notes */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Important Notes
              </h2>

              <div className="rounded-xl border border-slate-800 bg-[#111827] p-6">
                <p className="leading-7 text-slate-400">
                  You can eventually make this entire dashboard data-driven.
                  Instead of changing the source code every time you want a
                  new note, you will be able to create a new document from the
                  dashboard.
                </p>
              </div>
            </section>
          </article>

          {/* RIGHT TOC */}
          <aside className="hidden w-64 shrink-0 border-l border-slate-800 px-6 py-10 xl:block">
            <h3 className="mb-5 font-semibold text-white">
              Table of Contents
            </h3>

            <div className="space-y-3 border-l border-slate-800 pl-4 text-sm">
              <button className="block text-left text-blue-400">
                What is {current.title}?
              </button>

              <button className="block text-left text-slate-500 hover:text-white">
                Key Points
              </button>

              <button className="block text-left text-slate-500 hover:text-white">
                Example
              </button>

              <button className="block text-left text-slate-500 hover:text-white">
                Important Notes
              </button>
            </div>

            {/* Related */}
            <div className="mt-10">
              <h3 className="mb-4 font-semibold text-white">
                Related Topics
              </h3>

              <div className="space-y-3 text-sm">
                <button className="block text-blue-400 hover:text-blue-300">
                  → React Components
                </button>

                <button className="block text-blue-400 hover:text-blue-300">
                  → React Props
                </button>

                <button className="block text-blue-400 hover:text-blue-300">
                  → React Hooks
                </button>

                <button className="block text-blue-400 hover:text-blue-300">
                  → React Lifecycle
                </button>
              </div>
            </div>

            {/* Quick Note */}
            <div className="mt-10 rounded-xl border border-slate-800 bg-[#111827] p-5">
              <h3 className="mb-3 font-semibold text-white">
                📝 Quick Note
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Add your own notes, code snippets, images and explanations
                here.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
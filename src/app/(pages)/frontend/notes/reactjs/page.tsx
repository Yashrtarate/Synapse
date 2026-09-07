'use client'

import { useState, useMemo } from 'react'
import { DocsSidebar } from '@/components/docs/docs-sidebar'
import { DocsContent } from '@/components/docs/docs-content'
import { DocsToc } from '@/components/docs/docs-toc'
import Link from 'next/link'
import { AnimatePresence, color, motion } from 'framer-motion'
import { bookmarks, docTree, recentNotes } from '@/lib/docs-data'
import { cn } from '@/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'
import CodeBlock from '@/components/code-block/CodeBlock'
import {
  Bookmark,
  Boxes,
  ChevronRight,
  ChevronDown,
  Clock,
  LayoutGrid,
  Search,
  Share2,
} from "lucide-react";

type PropsData = {
  id: number,
  title: string,
  content: any
}
export default function DocsPage() {
  const [active, setActive] = useState(1)
  const topic = "Basics of React.js"

type SidebarItem = {
  id: number;
  title: string;
  content?: React.ReactNode;
  children?: SidebarItem[];
};

const sidebarData: SidebarItem[] = [


  {
    id: 11.5,
    title: 'What is Reactjs',
    content: (
      <div className="pagehead">
        <h2>What is Reactjs?</h2>
        <p>Reactjs is component based javascript library used for creating dynamic and interactive user interfaces</p>
        <p>Specially reactjs used for creating fast and scalable single page applications</p>
        <p>React uses reusable components that are used to improve the code organization and readability</p>
        <p>React improves the performace by adding the feature of vritual dom</p>
        <br />

        <h2>Why use reactjs</h2>
        <p>Before reactjs developers creates websites using traditional methods with html , css ,js</p>
        <ul>
          <li>Heavy DOM manipulation</li>
          <li>Hard to read and understand</li>
          <li>not sacalable applications</li>
          <li>problem of code reusability</li>
        </ul>
        <p>Reactjs resolves this all problems with the features of</p>
        <ul>
          <li>using JSX</li>
          <li>Virtual DOM</li>
          <li>component based architecture</li>
          <li>Single Page application</li>
        </ul>

        <br />

        <h2>History</h2>
        <p>React js was created by "Jorden Walk" software engineer at facebook. Facebook first implemented react in Facebook news feed in 2011</p>

        <br />

        <h2>Version</h2>
        <p>Current React js has react19 feature  that improves the react from all directions</p>
        <ul>
          <li>React compiler</li>
          <li>form actions</li>
          <li>server side components</li>
          <li>ref as props</li>
          <li>improve metadata</li>
          <li>improves asset loading </li>
        </ul>

        <br />

        <h2>Advantages</h2>
        <ul>
          <li>Single page application</li>
          <li>Uses virtual dom that improves the performace</li>
          <li>reusable components</li>
        </ul>
        <br />

      <h2>Disadvantages</h2>
      <ul>
        <li>It is only react library for routing ,state management we have to depends on other packages</li>
        <li>Not good for SEO</li>
        <li> coding might become comples due to JSX</li>
      </ul>
      <br />

      <h2>use cases</h2>
      <ul>
        <li>Websites applications</li>
        <li>Ecommerse websites</li>
        <li>chat applications</li>
        <li>Dashboards</li>
      </ul>
      <br />

      <h2>Installation</h2>
      <h3>2. using react app</h3>
      <pre>{`npx create-react-app my-app`}</pre>
      <br />

      <h3>1. using vite</h3>
      <pre>{`npm create vite@latest my-app`}</pre>

      <br />

      <h2>File/Folder structure</h2>
      <p>In react app structure 3 files are more importants</p>
      <ul>
        <li>index.html</li>
        <li>main.tsx</li>
        <li>app.tsx</li>
      </ul>
      <br />

      </div>
    ),
  },

  {
  id: 11.6,
  title: "React.js vs Next.js",
  content: (
    <div className="pagehead">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Feature</th>
            <th>React.js</th>
            <th>Next.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type</td>
            <td>Library</td>
            <td>Framework</td>
          </tr>
          <tr>
            <td>Developed By</td>
            <td>Facebook (Meta)</td>
            <td>Vercel</td>
          </tr>
          <tr>
            <td>SEO</td>
            <td>Poor</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>Rendering</td>
            <td>CSR</td>
            <td>CSR, SSR, SSG, ISR</td>
          </tr>
          <tr>
            <td>Routing</td>
            <td>Manual (React Router)</td>
            <td>File-based Routing</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>Depends on Implementation</td>
            <td>Optimized by Default</td>
          </tr>
          <tr>
            <td>Image Optimization</td>
            <td>External Libraries</td>
            <td>Built-in (`next/image`)</td>
          </tr>
          <tr>
            <td>API Routes</td>
            <td>Not Available</td>
            <td>Built-in</td>
          </tr>
          <tr>
            <td>Code Splitting</td>
            <td>Manual</td>
            <td>Automatic</td>
          </tr>
          <tr>
            <td>Data Fetching</td>
            <td>Axios / Fetch</td>
            <td>Fetch, Server Components</td>
          </tr>
          <tr>
            <td>Static Site Generation (SSG)</td>
            <td>Not Available</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Incremental Static Regeneration (ISR)</td>
            <td>Not Available</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Server-Side Rendering (SSR)</td>
            <td>Not Available</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Deployment</td>
            <td>Any Hosting</td>
            <td>Optimized for Vercel</td>
          </tr>
          <tr>
            <td>Best For</td>
            <td>SPA, Dashboard</td>
            <td>SEO Websites, Blogs, E-commerce</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
},
{
  id: 11.7,
  title: "Rendering and Re-rendering",
  content: (
    <div className="pagehead">
      <h2>Rendering</h2>

      <p>
        Rendering is the process of converting JSX and React components into
        HTML that the browser can understand and display on the screen.
      </p>

      <h3>Rendering Execution Process</h3>

      <ul>
        <li>React calls the component function.</li>
        <li>The component returns JSX.</li>
        <li>JSX is converted into React elements (Virtual DOM).</li>
        <li>React compares the Virtual DOM with the previous Virtual DOM (Diffing).</li>
        <li>Only the changed parts are updated in the real DOM, and the browser repaints the UI.</li>
      </ul>

      <h2>Re-rendering</h2>

      <p>
        Re-rendering is the process where React executes a component again to
        update the UI whenever its data changes.
      </p>

      <h3>When Does Re-rendering Happen?</h3>

      <ul>
        <li>State changes using <code>setState()</code> or <code>useState()</code>.</li>
        <li>Props received from the parent component change.</li>
        <li>Context value changes.</li>
        <li>The parent component re-renders.</li>
        <li>A force update is triggered.</li>
      </ul>

      <h3>Re-rendering Process</h3>

      <ul>
        <li>React detects a state or prop change.</li>
        <li>The affected component function executes again.</li>
        <li>A new Virtual DOM is created.</li>
        <li>React compares it with the previous Virtual DOM.</li>
        <li>Only the modified DOM elements are updated.</li>
      </ul>

      <h3>Note</h3>

      <p>
        React does <strong>not</strong> recreate the entire webpage during
        re-rendering. It updates only the parts that have changed, making React
        applications fast and efficient.
      </p>

      <h2>Types of Rending </h2>
      <ul>
        <li>CSR</li>
        <li>SSR</li>
        <li>ISR</li>
        <li>SSG</li>
      </ul>
    </div>
  ),
},{
  id: 11.8,
  title: "How React Works (CSR)",
  content: (
    <div className="pagehead">
      <h2>How React Works</h2>

      <p>
        React is a JavaScript library used to build interactive user interfaces.
        It works by creating a Virtual DOM, comparing changes efficiently, and
        updating only the required parts of the real DOM. The complete lifecycle
        can be divided into two phases:
      </p>

      <ol>
        <li><strong>Development to Production</strong></li>
        <li><strong>What happens when a user opens a React website</strong></li>
      </ol>

      <hr />

      <h2>Phase 1: Development to Production</h2>

      <h3>Step 1: Writing the Code</h3>

      <p>
        The developer writes React code using JSX, components, hooks, CSS,
        images, and JavaScript.
      </p>

      <pre>
{`function App() {
  return <h1>Hello React</h1>;
}`}
      </pre>

      <p>
        Browsers cannot understand JSX directly, so it must be converted into
        normal JavaScript.
      </p>

      <hr />

      <h3>Step 2: Development Server Starts</h3>

      <p>
        Running <code>npm run dev</code> starts a development server
        (Vite/CRA/Next.js).
      </p>

      <p>The development server provides:</p>

      <ul>
        <li>Hot Module Replacement (HMR)</li>
        <li>Error Overlay</li>
        <li>Fast Refresh</li>
        <li>Automatic Compilation</li>
      </ul>

      <hr />

      <h3>Step 3: JSX Compilation</h3>

      <p>
        Babel (or SWC in newer tools) converts JSX into JavaScript function
        calls.
      </p>

      <pre>
{`<h1>Hello</h1>`}
      </pre>

      <p>becomes</p>

      <pre>
{`React.createElement("h1", null, "Hello")`}
      </pre>

      <p>
        This JavaScript can now be executed by every modern browser.
      </p>

      <hr />

      <h3>Step 4: Bundling</h3>

      <p>
        A bundler such as Vite, Webpack, Parcel, or Turbopack collects all
        JavaScript, CSS, images, fonts, and other assets into optimized bundles.
      </p>

      <p>Example:</p>

      <ul>
        <li>App.jsx</li>
        <li>Navbar.jsx</li>
        <li>Home.jsx</li>
        <li>style.css</li>
      </ul>

      <p>becomes</p>

      <ul>
        <li>main.js</li>
        <li>style.css</li>
      </ul>

      <hr />

      <h3>Step 5: Optimization</h3>

      <p>Before deployment, React applications are optimized.</p>

      <ul>
        <li>Minification removes unnecessary spaces.</li>
        <li>Tree Shaking removes unused code.</li>
        <li>Code Splitting creates smaller bundles.</li>
        <li>Compression reduces file size.</li>
        <li>Images are optimized.</li>
        <li>CSS is minimized.</li>
      </ul>

      <hr />

      <h3>Step 6: Production Build</h3>

      <p>
        Running <code>npm run build</code> creates the production-ready files.
      </p>

      <p>Example output:</p>

      <pre>
{`dist/
 ├── index.html
 ├── assets/
 │    ├── main.js
 │    ├── vendor.js
 │    ├── style.css
 │    └── logo.png`}
      </pre>

      <p>
        These are static files that can be deployed to any web server.
      </p>

      <hr />

      <h3>Step 7: Deployment</h3>

      <p>The build folder is uploaded to hosting platforms like:</p>

      <ul>
        <li>Vercel</li>
        <li>Netlify</li>
        <li>AWS</li>
        <li>Firebase Hosting</li>
        <li>Nginx Server</li>
      </ul>

      <p>
        After deployment, the React application is available on the internet.
      </p>

      <hr />

      <h2>Phase 2: What Happens When a User Opens a React Website?</h2>

      <h3>Step 1: User Enters URL</h3>

      <p>
        The user types a website address like:
      </p>

      <pre>
{`https://example.com`}
      </pre>

      <hr />

      <h3>Step 2: DNS Lookup</h3>

      <p>
        The browser asks the DNS server for the IP address of the website.
      </p>

      <pre>
{`example.com
      ↓
DNS Server
      ↓
104.xx.xx.xx`}
      </pre>

      <hr />

      <h3>Step 3: Browser Sends HTTP Request</h3>

      <p>
        The browser sends an HTTP/HTTPS request to the web server.
      </p>

      <pre>
{`GET / HTTP/1.1`}
      </pre>

      <hr />

      <h3>Step 4: Server Responds</h3>

      <p>
        The server returns:
      </p>

      <ul>
        <li>index.html</li>
        <li>CSS files</li>
        <li>JavaScript bundles</li>
        <li>Images</li>
      </ul>

      <hr />

      <h3>Step 5: Browser Parses HTML</h3>

      <p>
        The browser reads <code>index.html</code>.
      </p>

      <pre>
{`<div id="root"></div>`}
      </pre>

      <p>
        Initially, the page contains almost no visible content.
      </p>

      <hr />

      <h3>Step 6: JavaScript Downloads</h3>

      <p>
        The browser downloads the bundled JavaScript file.
      </p>

      <pre>
{`main.js`}
      </pre>

      <p>
        Without JavaScript, a normal React application cannot display its UI.
      </p>

      <hr />

      <h3>Step 7: React Starts</h3>

      <p>
        The JavaScript executes and React starts running.
      </p>

      <pre>
{`createRoot(document.getElementById("root"))
.render(<App />);`}
      </pre>

      <hr />

      <h3>Step 8: Component Execution</h3>

      <p>
        React calls every component function.
      </p>

      <pre>
{`App()
Navbar()
Home()
Footer()`}
      </pre>

      <p>
        Every component returns JSX.
      </p>

      <hr />

      <h3>Step 9: Virtual DOM Creation</h3>

      <p>
        React converts JSX into a Virtual DOM (a lightweight JavaScript
        representation of the UI).
      </p>

      <pre>
{`Virtual DOM
App
 ├── Navbar
 ├── Home
 └── Footer`}
      </pre>

      <hr />

      <h3>Step 10: Real DOM Rendering</h3>

      <p>
        React creates actual HTML elements and inserts them into the browser's
        DOM.
      </p>

      <p>
        The webpage is now visible to the user.
      </p>

      <hr />

      <h3>Step 11: User Interaction</h3>

      <p>
        The user clicks buttons, fills forms, or types into inputs.
      </p>

      <pre>
{`Button Click
↓
State Changes`}
      </pre>

      <hr />

      <h3>Step 12: Re-rendering</h3>

      <p>
        React executes the affected component again.
      </p>

      <ul>
        <li>Creates a new Virtual DOM.</li>
        <li>Compares it with the previous Virtual DOM.</li>
        <li>Finds only the changed nodes.</li>
        <li>Updates only those nodes in the real DOM.</li>
      </ul>

      <p>
        This process is called <strong>Reconciliation</strong>.
      </p>

      <hr />

      <h3>Step 13: Browser Paint</h3>

      <p>
        The browser repaints only the updated elements instead of reloading the
        whole page, making React applications very fast.
      </p>

      <hr />

      <h2>Complete Flow Diagram</h2>

      <pre>
{`Developer
    │
    ▼
Write JSX + Components
    │
    ▼
Babel/SWC Compiles JSX
    │
    ▼
Bundler Creates Bundles
    │
    ▼
Production Build
    │
    ▼
Deploy to Server
    │
    ▼
──────────────────────────────────
User Opens Website
    │
    ▼
DNS Lookup
    │
    ▼
HTTP Request
    │
    ▼
Server Returns HTML + CSS + JS
    │
    ▼
Browser Downloads JS
    │
    ▼
React Starts
    │
    ▼
Components Execute
    │
    ▼
Virtual DOM Created
    │
    ▼
Real DOM Rendered
    │
    ▼
User Interaction
    │
    ▼
State Changes
    │
    ▼
New Virtual DOM
    │
    ▼
Diffing & Reconciliation
    │
    ▼
Only Changed DOM Updates
    │
    ▼
Browser Repaints UI`}
      </pre>

      <h2>Key Points</h2>

      <ul>
        <li>React code is never sent to the browser as JSX.</li>
        <li>JSX is compiled into JavaScript before deployment.</li>
        <li>The browser downloads JavaScript bundles after loading HTML.</li>
        <li>React creates a Virtual DOM in memory.</li>
        <li>Only changed elements are updated using Diffing and Reconciliation.</li>
        <li>React provides a Single Page Application (SPA) experience by updating the UI without reloading the entire page.</li>
      </ul>
    </div>
  ),
},
{
  id: 11.9,
  title: "How React Works (SSR)",
  content: (
    <div className="pagehead">

      <h2>How React Works with Server-Side Rendering (SSR)</h2>

      <p>
        In Server-Side Rendering (SSR), React components are executed on the
        server first. The server generates the HTML and sends it to the browser.
        The browser displays the page immediately, then downloads JavaScript and
        React hydrates the page to make it interactive.
      </p>

      <hr />

      <h2>Phase 1: Development to Production</h2>

      <h3>Step 1: Writing the Code</h3>

      <p>
        Developers create React components using JSX.
      </p>

      <pre>
{`function App() {
  return <h1>Welcome</h1>;
}`}
      </pre>

      <hr />

      <h3>Step 2: Create a Node.js Server</h3>

      <p>
        Unlike CSR, SSR requires a backend server such as Express.js or Fastify.
      </p>

      <pre>
{`Browser
    │
    ▼
Node.js Server
    │
    ▼
React Application`}
      </pre>

      <hr />

      <h3>Step 3: JSX Compilation</h3>

      <p>
        Babel or SWC compiles JSX into JavaScript.
      </p>

      <pre>
{`<h1>Hello</h1>

↓

React.createElement("h1", null, "Hello")`}
      </pre>

      <hr />

      <h3>Step 4: React Server Rendering</h3>

      <p>
        React executes components on the server using
        <code>renderToString()</code> or
        <code>renderToPipeableStream()</code>.
      </p>

      <pre>
{`renderToString(<App />)`}
      </pre>

      <p>
        React converts all components into HTML before sending them to the
        browser.
      </p>

      <hr />

      <h3>Step 5: Production Build</h3>

      <p>
        JavaScript bundles, CSS, and server files are created for deployment.
      </p>

      <hr />

      <h3>Step 6: Deployment</h3>

      <p>
        The React application and Node.js server are deployed to a hosting
        platform.
      </p>

      <ul>
        <li>AWS</li>
        <li>DigitalOcean</li>
        <li>Render</li>
        <li>Railway</li>
        <li>Vercel (for frameworks)</li>
      </ul>

      <hr />

      <h2>Phase 2: What Happens When a User Opens the Website?</h2>

      <h3>Step 1: User Enters URL</h3>

      <pre>
{`https://example.com`}
      </pre>

      <hr />

      <h3>Step 2: DNS Lookup</h3>

      <pre>
{`example.com
      ↓
DNS
      ↓
Server IP`}
      </pre>

      <hr />

      <h3>Step 3: Browser Sends Request</h3>

      <pre>
{`GET / HTTP/1.1`}
      </pre>

      <hr />

      <h3>Step 4: Server Executes React</h3>

      <p>
        Instead of sending an empty HTML page, the server executes every React
        component.
      </p>

      <pre>
{`App()
Navbar()
Home()
Footer()`}
      </pre>

      <hr />

      <h3>Step 5: Virtual DOM Creation</h3>

      <p>
        React creates a Virtual DOM on the server.
      </p>

      <pre>
{`Virtual DOM
App
 ├── Navbar
 ├── Home
 └── Footer`}
      </pre>

      <hr />

      <h3>Step 6: Convert Virtual DOM to HTML</h3>

      <p>
        React converts the Virtual DOM into an HTML string using
        <code>renderToString()</code>.
      </p>

      <pre>
{`<div id="root">
  <h1>Welcome</h1>
</div>`}
      </pre>

      <hr />

      <h3>Step 7: Server Sends Complete HTML</h3>

      <p>
        The browser receives a fully rendered page instead of an empty
        <code>div</code>.
      </p>

      <hr />

      <h3>Step 8: Browser Displays the Page</h3>

      <p>
        The page becomes visible immediately because HTML already contains the
        content.
      </p>

      <hr />

      <h3>Step 9: Browser Downloads JavaScript</h3>

      <pre>
{`main.js`}
      </pre>

      <p>
        The page is visible, but interactive features are not ready yet.
      </p>

      <hr />

      <h3>Step 10: Hydration</h3>

      <p>
        React runs <code>hydrateRoot()</code> to attach event listeners to the
        existing HTML instead of creating it again.
      </p>

      <pre>
{`hydrateRoot(
 document.getElementById("root"),
 <App />
);`}
      </pre>

      <hr />

      <h3>Step 11: User Interaction</h3>

      <p>
        Buttons, forms, and links become interactive after hydration.
      </p>

      <pre>
{`Button Click
      ↓
State Changes`}
      </pre>

      <hr />

      <h3>Step 12: Re-rendering</h3>

      <p>
        From this point onward, React behaves like CSR.
      </p>

      <ul>
        <li>Component executes again.</li>
        <li>New Virtual DOM is created.</li>
        <li>Diffing compares old and new Virtual DOM.</li>
        <li>Only changed elements are updated.</li>
      </ul>

      <hr />

      <h2>Complete Flow Diagram</h2>

      <pre>
{`Developer
      │
      ▼
Write Components
      │
      ▼
Compile JSX
      │
      ▼
Deploy Server + React
──────────────────────────────
User Opens Website
      │
      ▼
DNS Lookup
      │
      ▼
HTTP Request
      │
      ▼
Node.js Server
      │
      ▼
React Executes Components
      │
      ▼
Virtual DOM
      │
      ▼
renderToString()
      │
      ▼
HTML Generated
      │
      ▼
Browser Displays Page
      │
      ▼
Download JavaScript
      │
      ▼
Hydration
      │
      ▼
Interactive Website
      │
      ▼
State Changes
      │
      ▼
Re-render
      │
      ▼
Diffing
      │
      ▼
Real DOM Update`}
      </pre>

      <h2>Key Points</h2>

      <ul>
        <li>React components execute on the server before the page is sent.</li>
        <li>The browser receives complete HTML instead of an empty root element.</li>
        <li>The page is visible before JavaScript finishes downloading.</li>
        <li>Hydration attaches event listeners to the existing HTML.</li>
        <li>After hydration, React behaves the same as a CSR application.</li>
        <li>SSR improves SEO and initial page load performance.</li>
      </ul>

    </div>
  ),
},
{
  id: 11.10,
  title: "createRoot()",
  content: (
    <div className="pagehead">
      <h2>What is createRoot()</h2>
      <p>createRoot is react 18 utility function that used to create a rendering container that allows react component to display inside the browser node</p>
      <p>it creates root and connect reat application with html dom</p>
      <br />

       <h2>Syntax</h2>

      <pre>
{`import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<App />);`}
      </pre>

      <h2>
        Working flow
      </h2>
      <ul>
        <li>index.html</li>
        <li>{`<div id="root"></div>`}</li>
        <li>main.tsx</li>
        <li>creates root and connect to html dom</li>
        <li>renders app</li>
      </ul>

    </div>
  )
},
{
  id: 11.11,
  title: "ES6 for React",
  content: (
    <div className="pagehead">

      <p>
        React heavily relies on modern JavaScript (ES6+). Understanding these
        features makes writing React applications easier and more readable.
      </p>

      <hr />

      <h2>1. Classes</h2>

      <p>
        Classes are blueprints for creating objects. Earlier versions of React
        used class components, but today function components are preferred.
      </p>

      <pre>
{`class Person {
  constructor(name) {
    this.name = name;
  }
}`}
      </pre>

      <hr />

      <h2>2. Objects</h2>

      <p>
        Objects store data as key-value pairs. React commonly uses objects for
        props, state, and API responses.
      </p>

      <pre>
{`const user = {
  name: "John",
  age: 25
};`}
      </pre>

      <hr />

      <h2>3. Arrow Functions</h2>

      <p>
        Arrow functions provide a shorter syntax for writing functions and are
        widely used in React components and event handlers.
      </p>

      <pre>
{`const greet = () => {
  return "Hello";
};`}
      </pre>

      <hr />

      <h2>4. Variables (let & const)</h2>

      <p>
        <code>let</code> is used for variables whose values can change, while
        <code>const</code> is used for variables whose reference should not
        change.
      </p>

      <pre>
{`let count = 0;
const name = "React";`}
      </pre>

      <hr />

      <h2>5. Destructuring</h2>

      <p>
        Destructuring extracts values from objects or arrays. It is commonly
        used for props and state.
      </p>

      <pre>
{`const user = {
  name: "John",
  age: 25
};

const { name, age } = user;`}
      </pre>

      <hr />

      <h2>6. Props</h2>

      <p>
        Props (Properties) are used to pass data from a parent component to a
        child component.
      </p>

      <pre>
{`function Welcome({ name }) {
  return <h1>Hello {name}</h1>;
}`}
      </pre>

      <hr />

      <h2>7. Spread Operator (...)</h2>

      <p>
        The spread operator copies or merges arrays and objects without
        modifying the original data.
      </p>

      <pre>
{`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

const user = {
  name: "John"
};

const updatedUser = {
  ...user,
  age: 25
};`}
      </pre>

      <hr />

      <h2>8. Rest Operator (...)</h2>

      <p>
        The rest operator collects multiple values into a single array or object.
      </p>

      <pre>
{`function sum(...numbers) {
  return numbers;
}`}
      </pre>

      <hr />

      <h2>9. Modules</h2>

      <p>
        Modules allow code to be split into multiple files using
        <code>export</code> and <code>import</code>.
      </p>

      <pre>
{`// user.js
export const name = "John";

// App.jsx
import { name } from "./user";`}
      </pre>

      <hr />

      <h2>10. Ternary Operator</h2>

      <p>
        The ternary operator is a short form of an if-else statement and is
        commonly used for conditional rendering.
      </p>

      <pre>
{`const message =
  isLoggedIn ? "Welcome" : "Login";`}
      </pre>

      <hr />

      <h2>11. Template Literals</h2>

      <p>
        Template literals allow variables and expressions to be embedded inside
        strings using backticks.
      </p>

      <pre>
{`const name = "John";

const message =
  \`Hello \${name}\`;`}
      </pre>

      <hr />

      <h2>12. Array Methods</h2>

      <h3>forEach()</h3>

      <p>
        Executes a function for every array element. It does not return a new
        array.
      </p>

      <pre>
{`numbers.forEach(num => {
  console.log(num);
});`}
      </pre>

      <h3>map()</h3>

      <p>
        Creates a new array by transforming each element. It is the most used
        array method in React for rendering lists.
      </p>

      <pre>
{`const squares =
numbers.map(num => num * num);`}
      </pre>

      <h3>filter()</h3>

      <p>
        Returns a new array containing only the elements that satisfy a
        condition.
      </p>

      <pre>
{`const adults =
users.filter(user => user.age >= 18);`}
      </pre>

      <h3>reduce()</h3>

      <p>
        Reduces an array into a single value such as a sum, average, or object.
      </p>

      <pre>
{`const total =
numbers.reduce(
  (sum, num) => sum + num,
  0
);`}
      </pre>

      <hr />

      <h2>Summary</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Purpose in React</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Classes</td>
            <td>Old way of creating React components.</td>
          </tr>
          <tr>
            <td>Objects</td>
            <td>Store props, state, and data.</td>
          </tr>
          <tr>
            <td>Arrow Functions</td>
            <td>Shorter function syntax.</td>
          </tr>
          <tr>
            <td>let / const</td>
            <td>Declare variables.</td>
          </tr>
          <tr>
            <td>Destructuring</td>
            <td>Extract values from objects or arrays.</td>
          </tr>
          <tr>
            <td>Props</td>
            <td>Pass data between components.</td>
          </tr>
          <tr>
            <td>Spread</td>
            <td>Copy or merge arrays and objects.</td>
          </tr>
          <tr>
            <td>Rest</td>
            <td>Collect remaining values.</td>
          </tr>
          <tr>
            <td>Modules</td>
            <td>Import and export code between files.</td>
          </tr>
          <tr>
            <td>Ternary</td>
            <td>Conditional rendering.</td>
          </tr>
          <tr>
            <td>Template Literals</td>
            <td>Create dynamic strings.</td>
          </tr>
          <tr>
            <td>Array Methods</td>
            <td>Render and manipulate lists efficiently.</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
},
{
  id: 11.12,
  title: "Single Page Application (SPA)",
  content: (
    <div className="pagehead">

      <h2>What is a Single Page Application (SPA)?</h2>

      <p>
        A <strong>Single Page Application (SPA)</strong> is a web application
        that loads a single HTML page only once. After the initial load,
        navigation between pages happens using JavaScript without reloading the
        entire webpage.
      </p>

      <hr />

      <h2>How SPA Works</h2>

      <ol>
        <li>User opens the website.</li>
        <li>The browser downloads <code>index.html</code>, CSS, and JavaScript.</li>
        <li>React renders the requested page.</li>
        <li>When the user navigates, React updates only the required components.</li>
        <li>The browser does not perform a full page refresh.</li>
      </ol>

      <pre>
{`User Opens Website
        │
        ▼
Downloads index.html + JS
        │
        ▼
React Starts
        │
        ▼
Home Page
        │
        ▼
User Clicks "About"
        │
        ▼
React Router Changes Component
        │
        ▼
About Page
(No Page Reload)`}
      </pre>

      <hr />

      <h2>Example</h2>

      <pre>
{`Home
   │
   ├── About
   ├── Contact
   └── Services`}
      </pre>

      <p>
        In a React SPA, clicking these links changes only the displayed
        component instead of requesting a new HTML page from the server.
      </p>

     

    </div>
  ),
},
{
  id: 11.13,
  title: "Components",
  content: (
    <div className="pagehead">
      <h2>what is Components</h2>
      <p>Reactjs is component based js library which are used to create reusable compoents by creating once and used many time by just calling them</p>
      <p>Components are the reusable piece of code that are written once and used by calling it </p>
      <p>A complete application is build by creating multiple components</p>
      <br />

      <h2>Why we need</h2>
      <p>In traditional way when we create pages using html ,css js , </p>
      <ul>
        <li>code becomes bulky </li>
        <li>hard to read and maintain</li>
        <li>need to do heavy dom manipulation</li>
        <li>and navigation is also hard</li>
      </ul>
      <p>But after using the components</p>
      <ul>
        <li>page become lightweight and easy to maintain</li>
        <li>improves code readability</li>
        <li>navigation become faster</li>
      </ul>

      <br />

      <h2>Types</h2>
      <ul>
        <li>Class components</li>
        <li>Functional components</li>
      </ul>

      <br />
      <h2>Rules</h2>
      <ul>
        <li>Always use camalCase to write components name</li>
        <li>name should be same as filename</li>
        <li>always returns jsx or tsx</li>
        <li>component must be pure</li>
      </ul>
      <h2>example</h2>
      <CodeBlock code={
`
import react from "react";

export default function AboutPage(){
return(
<>
<h2>About</h2>
</>
),
}
`
      }/>
    </div>
  )
},
{
  id:11.14,
  title:"What is pure components",
  content:(
    <div className="pagehead">
      <h2>Pure Components</h2>
      <ul>
        <li>components that give same result every time when we give same input</li>
        <li>It avoids re-rendering when state or props is not changed</li>
        <li>It serves as a performance optimization technique by reducing unnecessary updates in the component tree.</li>
      </ul>
    </div>
  )
},
{
  id: 11.15,
  title: "JSX (JavaScript XML)",
  content: (
    <div className="pagehead">
      <h2>What is JSX?</h2>

<p>
  JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to
  write HTML-like code inside JavaScript. It makes React code easier to read
  and write.
</p>

<h2>Why is JSX Used?</h2>

<ul>
  <li>Write UI using HTML-like syntax.</li>
  <li>Makes code more readable.</li>
  <li>Allows JavaScript expressions inside HTML.</li>
  <li>Helps create reusable React components.</li>
</ul>

<h2>Example</h2>

<pre>
{`function App() {
  return <h1>Hello React</h1>;
}`}
</pre>

<h2>How JSX Works</h2>

<p>
  Browsers cannot understand JSX directly. Babel converts JSX into
  <code>React.createElement()</code>, and React uses it to create the Virtual
  DOM.
</p>

<pre>
{`JSX
   ↓
Babel
   ↓
React.createElement()
   ↓
Virtual DOM
   ↓
Real DOM`}
</pre>

<h2>Rules of JSX</h2>

<ul>
  <li>Return only one parent element.</li>
  <li>Close all tags.</li>
  <li>Use <code>className</code> instead of <code>class</code>.</li>
  <li>Use <code>htmlFor</code> instead of <code>for</code>.</li>
  <li>Use camelCase attributes like <code>onClick</code>.</li>
  <li>Use curly braces <code>{}</code> for JavaScript expressions.</li>
</ul>
    </div>
  ),
},
{
  id:11.16,
  title:"jsx Fragment",
  content:(
    <div className="pagehead">
     <h2>What is Fragment?</h2>

<p>
  A Fragment allows you to group multiple JSX elements without adding an extra
  HTML element to the DOM.
</p>

<h2>Why Use Fragment?</h2>

<ul>
  <li>Avoid unnecessary <code>&lt;div&gt;</code> elements.</li>
  <li>Keep the DOM clean.</li>
</ul>

<h2>Syntax</h2>

<pre>
{`<>
  <h1>React</h1>
  <p>Learning Fragment</p>
</>`}
</pre>

<h2>Key Point</h2>

<p>
  Use <code>&lt;&gt;&lt;/&gt;</code> in most cases. Use
  <code>React.Fragment</code> only when you need to pass a
  <code>key</code>.
</p>
    </div>
  )
},
{
  id: 11.17,
  title: "dangerouslySetInnerHTML",
  content: (
    <div className="pagehead">

      <h2>What is dangerouslySetInnerHTML?</h2>

      <p>
        <code>dangerouslySetInnerHTML</code> is a React property used to render
        raw HTML inside a component. It is similar to JavaScript's
        <code>innerHTML</code>.
      </p>

      <hr />

      <h2>Why is it Used?</h2>

      <ul>
        <li>Display HTML received from an API or database.</li>
        <li>Render blog content or CMS content.</li>
        <li>Display formatted HTML without manually creating JSX.</li>
      </ul>

      <hr />

      <h2>Syntax</h2>

      <pre>
{`<div
  dangerouslySetInnerHTML={{
    __html: "<h1>Hello React</h1>"
  }}
></div>`}
      </pre>

      <hr />

      <h2>Example</h2>

      <pre>
{`function App() {
  const html = "<h2>Welcome to React</h2>";

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  );
}`}
      </pre>

      <hr />

      <h2>Why is it Called "Dangerously"?</h2>

      <p>
        React normally escapes HTML to prevent <strong>XSS (Cross-Site Scripting)</strong>
        attacks. Using <code>dangerouslySetInnerHTML</code> bypasses this
        protection and renders the HTML directly.
      </p>

      <p>
        If the HTML comes from an untrusted source, malicious JavaScript can be
        executed in the browser.
      </p>

      <hr />

      <h2>Key Points</h2>

      <ul>
        <li>Used to render raw HTML.</li>
        <li>Works like JavaScript's <code>innerHTML</code>.</li>
        <li>Accepts an object with the <code>__html</code> property.</li>
        <li>Use only with trusted or sanitized HTML.</li>
        <li>Avoid using it unless necessary.</li>
      </ul>

    </div>
  ),
},
{
  id: 11.18,
  title: "React State",
  content: (
    <div className="pagehead">

      <h2>What is State?</h2>

      <p>
        <strong>State</strong> is a built-in React object used to store data that
        can change over time. When state changes, React automatically updates
        the UI by re-rendering the component.
      </p>

      <hr />

      <h2>Why Do We Need State?</h2>

      <p>
        JavaScript variables can store data, but changing their value does not
        update the UI. React state notifies React when data changes, causing the
        component to re-render.
      </p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>JavaScript Variable</th>
            <th>React State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stores data.</td>
            <td>Stores data.</td>
          </tr>
          <tr>
            <td>UI does not update automatically.</td>
            <td>UI updates automatically.</td>
          </tr>
          <tr>
            <td>React doesn't track changes.</td>
            <td>React tracks changes.</td>
          </tr>
        </tbody>
      </table>

<br />
      <h2>Syntax</h2>

      <pre>
{`const [state, setState] = useState(initialValue);`}
      </pre>

      <p>Example:</p>

      <pre>
{`const [count, setCount] = useState(0);`}
      </pre>

      <ul>
        <li><strong>count</strong> → Current state value.</li>
        <li><strong>setCount()</strong> → Updates the state.</li>
        <li><strong>0</strong> → Initial value.</li>
      </ul>

      <hr />

      <h2>When Does State Re-render?</h2>

      <p>
        React re-renders the component whenever the state is updated using its
        setter function.
      </p>

      <pre>
{`setCount(count + 1);`}
      </pre>

      <p>Flow:</p>

      <pre>
{`State Changes
      │
      ▼
Component Re-renders
      │
      ▼
New Virtual DOM
      │
      ▼
Diffing
      │
      ▼
Real DOM Updates`}
      </pre>

      <hr />

      <h2>Rules of State</h2>

      <ul>
        <li>Always use the setter function to update state.</li>
        <li>Never modify state directly.</li>
        <li>State updates are asynchronous.</li>
        <li>State is preserved between re-renders.</li>
        <li>Each component has its own state.</li>
      </ul>

      <p><strong>❌ Wrong</strong></p>

      <pre>
{`count = count + 1;`}
      </pre>

      <p><strong>✅ Correct</strong></p>

      <pre>
{`setCount(count + 1);`}
      </pre>

      <hr />

      <h2>Local State vs Global State</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Local State</th>
            <th>Global State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Belongs to one component.</td>
            <td>Shared across multiple components.</td>
          </tr>
          <tr>
            <td>Created using <code>useState()</code>.</td>
            <td>Managed using Context API, Redux, Zustand, etc.</td>
          </tr>
          <tr>
            <td>Used for component-specific data.</td>
            <td>Used for shared application data.</td>
          </tr>
          <tr>
            <td>Example: Counter, Input Value.</td>
            <td>Example: User Login, Theme, Cart.</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Examples</h2>

      <p><strong>Local State</strong></p>

      <pre>
{`const [count, setCount] = useState(0);`}
      </pre>

      <p><strong>Global State</strong></p>

      <pre>
{`const user = useContext(UserContext);

// or

const cart = useSelector(state => state.cart);`}
      </pre>

      <hr />

      <h2>Key Points</h2>

      <ul>
        <li>State stores data that can change.</li>
        <li>State changes automatically update the UI.</li>
        <li>Always update state using its setter function.</li>
        <li>Each component has its own local state.</li>
        <li>Use global state when multiple components need the same data.</li>
      </ul>

    </div>
  ),
},
{
  id:11.19,
  title:"props",
  content:(
    <div className="pagehead">
     <h2>What is props?</h2>

<p>
  Props (Properties) are used to pass data from a parent component to a child component. They make components reusable by allowing different data to be passed to the same component.
</p>

<h2>Why are Props Used?</h2>

<ul>
  <li>Pass data from parent to child.</li>
  <li>Make components reusable.</li>
  <li>Customize component behavior without changing its code.</li>
</ul>

<h2>Syntax</h2>

<pre>
{`
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Welcome name="John" />;
}
`}
</pre>

<br />

<pre>
{
  `
  Parent Component
      │
      ▼
 Pass Props
      │
      ▼
Child Component
      │
      ▼
Display Data
  `
}
</pre>

<br />

<h2>Rules</h2>
<ul>
  <li>Props stand for Properties.</li>
  <li>Used to pass data between components.</li>
  <li>Props flow only from parent to child (one-way data flow).</li>
  <li>Props are read-only (immutable).</li>
  <li>A child component cannot modify its props.</li>
</ul>
    </div>
  )
},
{
  id: 11.20,
  title: "Children Props",
  content: (
    <div className="pagehead">

      <h2>What is Children Prop?</h2>

      <p>
        <strong>children</strong> is a special React prop that represents the
        content placed between a component's opening and closing tags.
      </p>

      <hr />

      <h2>Why is it Used?</h2>

      <ul>
        <li>Create reusable wrapper components.</li>
        <li>Pass JSX, text, or other components.</li>
        <li>Build layouts, cards, modals, and containers.</li>
      </ul>

      <hr />

      <h2>Syntax</h2>

      <pre>
{`function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}`}
      </pre>

      <hr />

      <h2>Example</h2>

      <pre>
{`function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>React</h2>
      <p>Learning Children Props</p>
    </Card>
  );
}`}
      </pre>

      <p>Output:</p>

      <pre>
{`+----------------------+
| React                |
| Learning Children... |
+----------------------+`}
      </pre>

      <hr />

      <h2>Flow</h2>

      <pre>
{`Parent Component
      │
      ▼
<Card>
  JSX
</Card>
      │
      ▼
children prop
      │
      ▼
Child Component
      │
      ▼
Render {children}`}
      </pre>

      <hr />

      <h2>Key Points</h2>

      <ul>
        <li><code>children</code> is a built-in React prop.</li>
        <li>It contains everything between a component's opening and closing tags.</li>
        <li>It can be text, JSX, elements, or other React components.</li>
        <li>Commonly used to create reusable wrapper components.</li>
      </ul>

    </div>
  )
},
];

  // const selectedNote = sidebarData.find((note) => note.id === active);

  const pathname = usePathname()
  const pathParts = pathname.split('/').filter(Boolean)

  const [expanded, setExpanded] = useState<number[]>([]);

const toggleExpand = (id: number) => {
  setExpanded((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};


const findNote = (
  items: SidebarItem[],
  id: number
): SidebarItem | undefined => {
  for (const item of items) {
    if (item.id === id) return item;

    if (item.children) {
      const found = findNote(item.children, id);
      if (found) return found;
    }
  }

  return undefined;
};

const selectedNote = findNote(sidebarData, active);


const renderSidebar = (
  items: SidebarItem[],
  level = 0
): React.ReactNode => {
  return (
    <ul
      className={
        level === 0
          ? "space-y-2"
          : "ml-5 mt-1 border-l border-border pl-3 space-y-1"
      }
    >
      {items.map((item) => {
        const hasChildren =
          item.children && item.children.length > 0;

        const isExpanded = expanded.includes(item.id);

        return (
          <li key={item.id}>
            <button
              onClick={() => {
                if (hasChildren) {
                  toggleExpand(item.id);
                } else {
                  setActive(item.id);
                }
              }}
              className={cn(
                "flex  items-center justify-between rounded-md px-3 py-2 text-left transition-colors",
                active === item.id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className=" border-l border-transparent text-left text-sm text-muted-foreground transition-colors hover:text-foreground">{item.title}</span>

              {hasChildren && (
                <ChevronRight
                  className={cn(
                    "size-4 transition-transform",
                    isExpanded && "rotate-90"
                  )}
                />
              )}
            </button>

            {hasChildren &&
              isExpanded &&
              renderSidebar(item.children!, level + 1)}
          </li>
        );
      })}
    </ul>
  );
};


  const meta = useMemo(() => {
    return {
      readTime: Math.floor(Math.random() * 20) + 5, // 5-25 min
      updatedWeeks: Math.floor(Math.random() * 12) + 1, // 1-12 weeks
    };  
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar  */}
        {/* <DocsSidebar active={active} onSelect={setActive} /> */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-border bg-sidebar px-3 py-5 lg:block">
          <Link href="/" className="flex items-center gap-2.5 px-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Boxes className="size-5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Synapse</span>
          </Link>

          <button className="mt-5 flex w-full items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <Search className="size-4" />
            <span>Search docs</span>
            <kbd className="ml-auto rounded border border-border bg-background px-1.5 font-mono text-[10px]">
              ⌘&nbsp;K
            </kbd>
          </button>

         <aside className="  border-border py-6">
  <h2 className="mb-4 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium transition-colors hover:bg-secondary">
    <LayoutGrid className="size-4 text-primary" />
    <span>{topic}</span>
  </h2>

  {renderSidebar(sidebarData)}
</aside>


        </aside>


        <main className="min-w-0 flex-1">
          {/* <DocsContent slug={active} /> */}

          <article className="mx-auto  px-15 py-12">
            {/* breadcrumb + meta */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <nav className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Link
                    href="/"
                    className="hover:text-foreground"
                  >
                    Home
                  </Link>

                  {pathParts.map((part, index) => {
                    const href = '/' + pathParts.slice(0, index + 1).join('/')

                    const isLast = index === pathParts.length - 1

                    return (
                      <div
                        key={href}
                        className="flex items-center gap-1"
                      >
                        <span>/</span>

                        {isLast ? (
                          <span className="font-medium text-foreground capitalize" style={{ color: "#17d0d8" }}>
                            {decodeURIComponent(part)}
                          </span>
                        ) : (
                          <Link
                            href={href}
                            className="capitalize hover:text-foreground"
                          >
                            {decodeURIComponent(part)}
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </nav>

              </div>

              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight">
                {selectedNote?.title}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {meta.readTime} min read
                </span>

                <span>
                  Updated {meta.updatedWeeks}{" "}
                  {meta.updatedWeeks === 1 ? "week" : "weeks"} ago
                </span>

                <div className="flex items-center gap-2">
                  <button
                    className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 transition-colors hover:text-foreground"
                    aria-label="Bookmark"
                  >
                    <Bookmark className="size-3.5" />
                    Save
                  </button>

                  <button
                    className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 transition-colors hover:text-foreground"
                    aria-label="Share"
                  >
                    <Share2 className="size-3.5" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="mt-10 space-y-10 text-[15px] leading-7 text-foreground/85">
              <section className="scroll-mt-24">
                <div style={{ whiteSpace: "pre-line" }}>{selectedNote?.content}</div>
              </section>
            </div>


          </article>


        </main>
        {/* <DocsToc /> */}
      </div>
    </>
  )
}

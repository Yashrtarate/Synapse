/* eslint-disable react/no-unescaped-entities */
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
  const topic = "State Management"

  type SidebarItem = {
    id: number;
    title: string;
    content?: React.ReactNode;
    children?: SidebarItem[];
  };

  const sidebarData: SidebarItem[] = [
{
  id: 1,
  title: "State Fundamentals",
  children: [
    {
      id: 1.1,
      title: "What is State",
      content: (
        <div className="pagehead">
          <h2>What is State?</h2>

          <p>
           State is a build-in javascript object used to store data that belongs to a specific component and changes over time.
          </p>

          <p>
            whenever a component's state changes, React automatically re-renders that component to update the user interface (UI)
          </p>

          <h3>Example</h3>

          <pre>
{`
const [count, setCount] = useState(0);
`}
          </pre>

          <p>Here:</p>

          <ul>
            <li><strong>count</strong> → current state value</li>
            <li><strong>setCount</strong> → function used to update the state</li>
            <li><strong>0</strong> → initial state value</li>
          </ul>
          <br />

          <h3>Common Examples of State</h3>
          <ul>
            <li>Counter value</li>
            <li>Input field value</li>
            <li>Modal open/close status</li>
            <li>Selected product</li>
            <li>Shopping cart items</li>
            <li>Logged-in user</li>
            <li>Loading status</li>
          </ul>
          <br />

          <h3>Simple Mental Model</h3>
          <pre>
{`
State
  ↓
Changes over time
  ↓
React detects the update
  ↓
Component renders again
  ↓
UI shows the new state
`}
          </pre>
        </div>
      )
    },
    {
      id: 1.2,
      title: "State vs Props vs Variables",
      content: (
        <div className="pagehead">
          <h2>State vs Props vs Variables</h2>

          <p>
            State, props, and normal JavaScript variables all store
            values, but they behave differently in React.
          </p>

          <h3>1. State</h3>

          <p>
            State is the container to store the data of any react component. It can change over
            time and state updates can cause the component to re-render.
            (it is like local storage for specific component)
          </p>

          <pre>
{`
const [count, setCount] = useState(0);

setCount(10);
`}
          </pre>

          <h3>2. Props</h3>

          <p>
            Props is a js object that helps to send the data from parent to child component and whever parent changes the props value children got re-renders (Props is read-only)
          </p>

          <pre>
{`
function Parent() {
  return <Child name="Yash" />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}
`}
          </pre>

          <p>
            Props are read-only from the child's point of view.
            The child should not directly modify them.
          </p>

          <h3>3. Normal Variables</h3>

          <p>
            Js variable is storage used to store for temporary data. and on changing the variable value react does not re-renders the component. (It wiped out and recreated on every single re-render)
          </p>

          <pre>
{`
let count = 0;

count++;
`}
          </pre>

          <p>
            Changing this variable does not tell React to render the
            component again.
          </p>
        </div>
      )
    },
     {
      id:1.3,
      title:"State Management Decision Tree",
      content:(
        <div className="pagehead">
          <h2>Learn the State Management Decision Tree</h2>
          <p>This is probably more valuable than memorizing Redux APIs.</p>
          <br /><br />
          <p>1. When you need some data, ask:</p>
          <pre>
Do I need this data?
        ↓
Can I calculate it from existing data?
        ↓
YES → Don't create separate state
          </pre>

           <br /><br />
          <p>2. Then:</p>
          <pre>
Is it needed by only one component?
        ↓
YES
        ↓
useState / useReducer
          </pre>


           <br /><br />
          <p>3. If multiple nearby components need it:</p>
          <pre>
Can I move state to their common parent?
        ↓
YES
        ↓
Lift state up
          </pre>



           <br /><br />
          <p>4. If many distant components need it:</p>
          <pre>
Context / Zustand / Redux
          </pre>


           <br /><br />
          <p>5. If it comes from backend:</p>
          <pre>
TanStack Query / server-state solution
          </pre>
        </div>
      )
    },
    {
      id: 1.4,
      title: "State Snapshot",
      content: (
        <div className="pagehead">
          <h2>State Snapshot</h2>

          <p>
            In React, state behaves like a snapshot for each render.
          </p>

          <p>
            This means that the state value inside a particular render
            does not immediately change when we call the state setter.
          </p>

          <h3>Example</h3>

          <pre>
{`
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(count);

    setCount(count + 1);

    console.log(count);
  };

  return (
    <button onClick={handleClick}>
      {count}
    </button>
  );
}
`}
          </pre>

          <p>
            If the current state is <strong>0</strong>, both console
            statements can print:
          </p>

          <pre>
{`
0
0
`}
          </pre>

          <p>
            This happens because the current render has its own snapshot
            of the state.
          </p>
          <br />

          <h2>What happens?</h2>

          <pre>
{`
Render 1
count = 0
   ↓
setCount(1)
   ↓
React schedules an update
   ↓
Render 2
count = 1
`}
          </pre>

          <p>
            So calling the setter does not change the state value inside
            the currently running render. The updated value is available
            in the next render.
          </p>

          <br />

          <h2>Why does this happen?</h2>
          <h3>🚶‍♂️ Step-by-Step Execution of your code</h3>
          <p>Let’s trace exactly what happens when count is 0 and you trigger handleClick:</p>
          <br />
          <ol>
            <li>1. The Snapshot: React renders the component with count = 0. The handleClick function is created, and it &quot;remembers&quot; that count is 0 for this specific render.</li>
            <li>2. The Click: You click the button, triggering handleClick()</li>
            <li>3. The State Request: setCount(count + 1) is executed. Because count is 0 in this snapshot, this translates to setCount(0 + 1).
              <em>Crucial note: This does not change the count variable immediately. It simply tells React: "Hey, on the next render, please make count equal to 1."</em>
            </li>
            <li>4. The Log: console.log(count) executes. Since count is still locked at 0 for the current snapshot, it prints 0 to the console.</li>
            <li>5. The Re-render:The function finishes executing. React notices a state update was requested, triggers a re-render,takes a new snapshot,and now count becomes 1.</li>
          </ol>
        </div>
      )
    },
    {
      id: 1.5,
      title: "Immutability",
      content: (
        <div className="pagehead">
          <h2>Immutability</h2>

          <p>
            In React, we should not directly modify objects or arrays
            stored in state.
          </p>
          <p>
            Instead, create a new object or array and pass it to the
            state setter.
          </p>
          <br />

          <h2>Never Modify State Directly (Immutability)</h2>
          <p>State variables should be treated as read-only. Never change a state variable directly. Always use its setter function.</p>
            <h3>Why?</h3>

          <p>
            React state should be treated as immutable. For objects and arrays,
            create a new reference instead of modifying the existing one.
          </p>

          <p>Conceptually:</p>

          <pre>
            {
              `
Old State

user ───────────→ Object A
`
            }
          </pre>

          <p>Direct Mutation:</p>

          <pre>
            {
              `
user ───────────→ Object A
                     ↑
                same reference
`
            }
          </pre>

          <p>Immutable Update:</p>

          <pre>
            {
              `
Old State ──────→ Object A

New State ──────→ Object B

Different reference
`
            }
          </pre>



          <br />
          <h2>Object State</h2>

          <p>
            Suppose we have:
          </p>

          <pre>
{`
const [user, setUser] = useState({
  name: "Yash",
  age: 25
});
`}
          </pre>

          <h3>❌ Don't modify state directly</h3>

          <pre>
{`
user.age = 26;
`}
          </pre>

          <p>
            This directly changes the existing object.
          </p>

          <h3>✅ Create a new object</h3>

          <pre>
{`
setUser({
  ...user,
  age: 26
});
`}
          </pre>
          <br />
          <h2>Array State</h2>

          <p>
            The same rule applies to arrays.
          </p>

          <h3>❌ Don't do this</h3>

          <pre>
{`
items.push(newItem);

setItems(items);
`}
          </pre>

          <h3>✅ Do this</h3>

          <pre>
{`
setItems([
  ...items,
  newItem
]);
`}
          </pre>
          <br />
          <h2>Why is immutability important?</h2>

          <ul>
            <li>It makes state changes predictable.</li>
            <li>It avoids accidentally modifying existing state.</li>
            <li>It makes reference comparison easier.</li>
            <li>It works well with React's rendering model.</li>
            <li>It makes debugging easier.</li>
          </ul>
          <br />

          <h2>Simple Rule</h2>

          <pre>
{`
Don't modify the old state.

Old state
   ↓
Create new value
   ↓
setState(newValue)
`}
          </pre>
        </div>
      )
    },
    {
      id: 1.6,
      title: "Functional Updates",
      content: (
        <div className="pagehead">
          <h2>Functional Updates</h2>

          <p>
            A functional update is useful when the new state depends on
            the previous state.
          </p>

          <h3>Example</h3>

          <pre>
{`
setCount(prev => prev + 1);
`}
          </pre>

          <p>
            Here <strong>prev</strong> represents the previous state
            value.
          </p>

          <h3>Why do we need it?</h3>

          <p>
            Consider this:
          </p>

          <pre>
{`
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
`}
          </pre>

          <p>
            All three updates are based on the same state value from the
            current render.
          </p>

          <p>
            If the current count is 0, they are effectively all asking
            React to set the value to 1.
          </p>

          <h3>Using Functional Updates</h3>

          <pre>
{`
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
`}
          </pre>

          <p>
            Now each update uses the result from the previous update.
          </p>

          <pre>
{`
0
 ↓
1
 ↓
2
 ↓
3
`}
          </pre>

          <h3>Another Example</h3>

          <pre>
{`
setItems(prevItems => [
  ...prevItems,
  newItem
]);
`}
          </pre>

          <p>
            This is useful when adding an item to an existing array
            because the new array depends on the previous array.
          </p>

          <h3>When should you use it?</h3>

          <ul>
            <li>When the next state depends on the previous state.</li>
            <li>When multiple updates may happen together.</li>
            <li>When updating counters.</li>
            <li>When adding or removing items from arrays.</li>
          </ul>

          <h3>Interview Answer</h3>

          <p>
            Functional updates are used when the next state depends on
            the previous state. Instead of using the current state value
            directly, we pass a function to the setter.
          </p>
        </div>
      )
    },
    {
      id: 1.7,
      title: "Batching",
      content: (
        <div className="pagehead">
          <h2>Batching</h2>

          <p>
            React can group multiple state updates together and process
            them as part of the same render.
          </p>

          <h3>Example</h3>

          <pre>
{`
function handleClick() {
  setFirstName("Yash");
  setLastName("Tarate");
  setAge(25);
}
`}
          </pre>

          <p>
            React can batch these updates instead of rendering the
            component separately for every state update.
          </p>

          <h3>Simple Flow</h3>

          <pre>
{`
setFirstName()
      ↓
setLastName()
      ↓
setAge()
      ↓
React batches updates
      ↓
Component renders
`}
          </pre>

          <p>
            Batching helps React avoid unnecessary rendering work.
          </p>

          <h3>Batching with Functional Updates</h3>

          <pre>
{`
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
`}
          </pre>

          <p>
            These updates can be batched, while each functional updater
            still receives the appropriate previous value.
          </p>

          <pre>
{`
0
 ↓
+1
 ↓
1
 ↓
+1
 ↓
2
 ↓
+1
 ↓
3
`}
          </pre>

          <p>
            Final value:
          </p>

          <pre>
{`
3
`}
          </pre>

          <h3>Interview Question</h3>

          <p>
            <strong>Q: What is batching in React?</strong>
          </p>

          <p>
            Batching means React groups multiple state updates together
            and processes them in a way that can reduce unnecessary
            renders.
          </p>
        </div>
      )
    }
  ]
},
{
  id: 2,
  title: "Types of State",
  children: [
    {
      id: 2.1,
      title: "Local State",
      content: (
        <div className="pagehead">
          <h2>1. What is Local State?</h2>

         <p>Local state is data managed completely inside a single component.</p>
          <p>It is not shared with any other parts of the application.</p>
          <p>Tools : useState , useReducer</p>
       

          <pre>
{`const [isOpen, setIsOpen] = useState(false);`}
          </pre>

          <p>For example:</p>

          <pre>
{`Modal open/close
Dropdown open/close
Input value
Counter
Selected tab`}
          </pre>

          <br />

          <h2>2. Example</h2>

          <pre>
{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}
          </pre>

          <p>
            Here, <b>count</b> is local state because only the Counter
            component needs it.
          </p>

          <br />

          <h2>3. When to use Local State?</h2>

          <pre>
{`Use local state when:
- We use it when the data is only needed inside that component.
- Only one component needs the data
- The state is related to UI
- There is no need to share it with other components`}
          </pre>

          
        </div>
      ),
    },
    {
      id: 2.2,
      title: "Shared State",
      content: (
        <div className="pagehead">
          <h2>1. What is Shared State?</h2>

          <p>
            Shared state is state that needs to be used by multiple components.
          </p>

          <p>
            If two or more components need the same data, we can share that
            state between them.
          </p>
          <p>Pattern: Lifting State Up</p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`Parent
 ├── Header
 └── ProductList`}
          </pre>

          <p>
            Suppose the selected product is needed by both Header and
            ProductList.
          </p>

          <p>
            Instead of keeping the state inside one child, we can move it to
            their common parent.
          </p>

          <pre>
{`Parent
 └── selectedProduct

     ├── Header
     └── ProductList`}
          </pre>

          <br />

          <h2>3. How can we share state?</h2>

          <pre>
{`1. Lift state up
2. Context API
3. Redux / Redux Toolkit
4. Zustand
5. Other state management libraries`}
          </pre>

          <br />

          <h2>4. Example</h2>

          <pre>
{`function Parent() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header user={user} />
      <Profile user={user} />
    </>
  );
}`}
          </pre>

          <p>
            Here, the Parent owns the state and passes it to multiple
            components.
          </p>

         
        </div>
      ),
    },

    {
      id: 2.3,
      title: "Global State",
      content: (
        <div className="pagehead">
          <h2>1. What is Global State?</h2>

          <p>
            Global state is state that can be accessed by many parts of the
            application.
          </p>

          <p>
            Instead of passing the state through many components, we keep it
            in a central place.
          </p>
          <p>Tools: React Context API, Redux Toolkit, Zustand, Recoil, MobX</p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`Application
     |
     └── Global Store
           |
     ----------------
     |      |       |
   Header  Cart   Profile`}
          </pre>

          <p>Common examples:</p>

          <pre>
{`Logged-in user
Authentication state
Cart
Theme
Application preferences
Permissions`}
          </pre>

          <br />

          <h2>3. Common Tools</h2>

          <pre>
{`Context API
Redux Toolkit
Zustand
Jotai
Recoil`}
          </pre>

          <br />

          <h2>4. Global State vs Shared State</h2>

          <p>
            Shared state does not always need a global store.
          </p>

          <pre>
{`Shared State
    ↓
Can be handled by lifting state up

Global State
    ↓
Usually available from a central store
    ↓
Useful when many unrelated components need it`}
          </pre>

         
        </div>
      ),
    },

    {
      id: 2.4,
      title: "Server State",
      content: (
        <div className="pagehead">
          <h2>1. What is Server State?</h2>

          <p>
            Server state is data that comes from an external server or API.
          </p>

          <p>For example:</p>

          <pre>
{`Users
Products
Orders
Posts
API responses`}
          </pre>

          <br />

          <h2>2. Imagine</h2>

          <pre>
{`Products from API`}
          </pre>

          <p>You could put them in Redux:</p>

          <pre>
{`Redux
 └── products`}
          </pre>

          <p>But then you have to think about:</p>

          <pre>
{`loading
error
cache
refetch
stale data
retry
pagination
deduplication`}
          </pre>

          <p>
            That's why server-state libraries exist.
          </p>

          <pre>
{`For example: TanStack Query`}
          </pre>

          <br />

          <h2>3. Example</h2>

          <pre>
{`const { data, isLoading, error } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts
});`}
          </pre>

          <p>
            The library can help manage the API data along with loading,
            errors, caching, refetching and stale data.
          </p>

          <br />

          <h2>Interview Answer</h2>

          <p>
            Server state is data that comes from a server and is usually
            shared, cached, updated, and synchronized with the backend.
            Libraries like TanStack Query help manage this state.
          </p>
        </div>
      ),
    },
    {
      id: 2.5,
      title: "Server State vs Client State",
      content: (
        <div className="pagehead">
          <h2>1. Imagine</h2>

          <pre>
{`Products from API`}
          </pre>

          <p>You could put them in Redux:</p>

          <pre>
{`Redux
 └── products`}
          </pre>

          <p>But then you have to think about:</p>

          <pre>
{`loading
error
cache
refetch
stale data
retry
pagination
deduplication`}
          </pre>

          <p>
            That's why server-state libraries exist.
          </p>

          <pre>
{`For example: TanStack Query`}
          </pre>

          <br />

          <h2>2. Conceptually:</h2>

          <pre>
{`Client State
----------------
Modal
Theme
Selected tab
Cart UI
Sidebar


Server State
----------------
Users
Products
Orders
Posts
API responses`}
          </pre>

          <br />

          <h2>3. Main Difference</h2>

          <pre>
{`Client State
    ↓
Created and controlled by the frontend


Server State
    ↓
Comes from the backend/server
    ↓
Can become stale
    ↓
Needs fetching, caching and refetching`}
          </pre>

          <br />

          <h2>4. Simple Example</h2>

          <pre>
{`Client State:

isModalOpen
selectedTab
theme


Server State:

products
users
orders`}
          </pre>

          
        </div>
      ),
    },
    {
      id: 2.6,
      title: "URL State",
      content: (
        <div className="pagehead">
          <h2>1. What is URL State?</h2>

          <p>
            URL state is state stored in the URL.
          </p>

          <p>
            It is useful when the state should be shareable through a URL or
            should remain available when the page is refreshed.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`/products?search=phone
/products?page=2
/products?category=laptop
/products?sort=price`}
          </pre>

          <br />

          <h2>3. Common URL State</h2>

          <pre>
{`Search
Filters
Pagination
Sorting
Selected category
Tabs`}
          </pre>

          <br />

          <h2>4. Example</h2>

          <pre>
{`/products?category=mobile&page=2`}
          </pre>

          <p>
            Now the URL contains the category and page information.
          </p>

          <p>
            If we share this URL with someone, they can open the same filtered
            page.
          </p>

          <br />

          <h2>5. Why use URL State?</h2>

          <pre>
{`Shareable
Bookmarkable
Refresh friendly
Browser back/forward works
Useful for filters and search`}
          </pre>


        </div>
      ),
    },
    {
      id: 2.7,
      title: "Form State",
      content: (
        <div className="pagehead">
          <h2>1. What is Form State?</h2>

          <p>
            Form state is the data and status related to a form.
          </p>

          <p>For example:</p>

          <pre>
{`Input values
Validation errors
Touched fields
Loading state
Submit state
Success / error state`}
          </pre>

          <br />

          <h2>2. Simple Example</h2>

          <pre>
{`const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`}
          </pre>

          <p>
            Here, <b>email</b> is part of the form state.
          </p>

          <br />

          <h2>3. Form State can become complex</h2>

          <pre>
{`Form
 |
 ├── values
 ├── errors
 ├── touched
 ├── dirty
 ├── submitting
 └── validation`}
          </pre>

          <p>
            For large forms, libraries can help manage this state.
          </p>

          <pre>
{`React Hook Form
Formik`}
          </pre>

          <br />

          <h2>4. Example</h2>

          <pre>
{`Login Form

email
password
errors
isSubmitting`}
          </pre>

        </div>
      ),
    },
  ],
},

{
  id: 3,
  title: "React State Management",
  children: [
    {
      id: 3.1,
      title: "useState",
      content: (
        <div className="pagehead">
          <h2>1. What is useState?</h2>

          <p>
            <b>useState</b> is a React Hook used to create and manage state
            inside a functional component.
          </p>

          <pre>
{`const [count, setCount] = useState(0);`}
          </pre>

          <p>It gives us two things:</p>

          <pre>
{`count
    ↓
Current state value

setCount
    ↓
Function used to update the state`}
          </pre>

          <br />

          <h2>2. Example</h2>

          <pre>
{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`}
          </pre>

          <p>
            When <b>setCount</b> is called, React schedules a new render with
            the updated state.
          </p>

          <br />

          <h2>3. Functional Update</h2>

          <p>
            When the new state depends on the previous state, use the functional
            form.
          </p>

          <pre>
{`setCount(prev => prev + 1);`}
          </pre>

          <p>This is especially useful when multiple updates happen together.</p>

          <br />

          <h2>4. What can we store?</h2>

          <pre>
{`String
Number
Boolean
Array
Object
null
Any JavaScript value`}
          </pre>
        </div>
      ),
    },

    {
      id: 3.2,
      title: "useReducer",
      content: (
        <div className="pagehead">
          <h2>1. What is useReducer?</h2>

          <p>
            <b>useReducer</b> is a React Hook used to manage state using a
            reducer function.
          </p>

          <p>
            It is useful when state logic becomes more complex or when
            multiple state updates are related to each other.
          </p>

          <br />

          <h2>2. Basic Structure</h2>

          <pre>
{`const [state, dispatch] = useReducer(reducer, initialState);`}
          </pre>

          <p>It has three important parts:</p>

          <pre>
{`State
  ↓
Current data

Action
  ↓
What happened

Reducer
  ↓
Decides how state changes`}
          </pre>

          <br />

          <h2>3. Example</h2>

          <pre>
{`const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}`}
          </pre>

          <br />

          <h2>4. Dispatch an Action</h2>

          <pre>
{`dispatch({ type: "increment" });`}
          </pre>

          <p>The flow is:</p>

          <pre>
{`User Action
    ↓
dispatch()
    ↓
Reducer
    ↓
New State
    ↓
Component Re-renders`}
          </pre>

          <br />

          <h2>5. useState vs useReducer</h2>

          <pre>
{`useState
    ↓
Simple state
Simple updates


useReducer
    ↓
Complex state
Multiple related updates
Centralized state logic`}
          </pre>
        </div>
      ),
    },

    {
      id: 3.3,
      title: "Lifting State Up",
      content: (
        <div className="pagehead">
          <h2>1. What is Lifting State Up?</h2>

          <p>
            Lifting state up means moving state from a child component to
            their closest common parent.
          </p>

          <p>
            We do this when multiple components need to use or update the same
            state.
          </p>

          <br />
 <h2>2. Simple rule to remember</h2>
          <pre>
            {
              `
Two or more components need the same state
                ↓
Find their closest common parent
                ↓
Move the state to that parent
                ↓
Pass state down through props
                ↓
Pass handlers down to update the state
`
            }
          </pre>

          <br />

          <h2>3. Before Lifting State</h2>

          <pre>
{`Parent
 ├── Component A
 │     └── state
 │
 └── Component B`}
          </pre>

          <p>
            Component B cannot directly access the state inside Component A.
          </p>

          <br />

          <h2>4. After Lifting State</h2>

          <pre>
{`Parent
 ├── shared state
 │
 ├── Component A
 │
 └── Component B`}
          </pre>

          <p>
            Now the Parent owns the state and can pass the data and update
            functions to both components.
          </p>

          <br />

          <h2>5. Example</h2>

          <pre>
{`function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} />
      <Button setCount={setCount} />
    </>
  );
}`}
          </pre>

          <p>
            The state is moved to the common parent because both child
            components need it.
          </p>

          <br />

          <h2>6. Why do we lift state?</h2>

          <pre>
{`Multiple components need the same state
              ↓
Move state to common parent
              ↓
Pass data using props
              ↓
Keep one source of truth`}
          </pre>

          
        </div>
      ),
    },
    {
      id: 3.4,
      title: "Prop Drilling",
      content: (
        <div className="pagehead">
          <h2>1. What is Prop Drilling?</h2>

          <p>
            Prop drilling happens when we pass data through multiple
            components even though some of those components do not actually
            need the data.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`App
 ↓
Parent
 ↓
Middle
 ↓
Child`}
          </pre>

          <p>
            Suppose the Child needs the user data.
          </p>

          <pre>
{`App
 ↓ user
Parent
 ↓ user
Middle
 ↓ user
Child`}
          </pre>

          <p>
            Parent and Middle may not need the user data, but they still have
            to pass it down.
          </p>

          <br />

          <h2>3. Example</h2>

          <pre>
{`function App() {
  const user = {
    name: "Yash"
  };

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Middle user={user} />;
}

function Middle({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>{user.name}</p>;
}`}
          </pre>

          <br />

          <h2>4. Problem with Prop Drilling</h2>

          <pre>
{`Too many props
     ↓
Harder to maintain
     ↓
Components become tightly connected
     ↓
Changes become difficult`}
          </pre>

          <br />

          <h2>5. How can we avoid it?</h2>

          <pre>
{`Context API
Redux Toolkit
Zustand
Other state management solutions`}
          </pre>

          <p>
            But prop drilling is not always bad. For a small component tree,
            passing props directly can be simpler and easier to understand.
          </p>
          <br />

          <img alt="prop drilling" className="img-fluid" src="https://www.tutorialspoint.com/assets/questions/media/1205779-1732623269.jpg"></img>
        </div>
      ),
    },
    {
      id: 3.5,
      title: "Context API",
      content: (
        <div className="pagehead">
          <h2>1. What is Context API?</h2>

          <p>
            Context API allows us to share data between components without
            passing props manually through every level.
          </p>

          <p>It is built into React.</p>

          <br />

          <h2>2. Imagine</h2>

          <pre>
{`Without Context

App
 ↓ user
Parent
 ↓ user
Middle
 ↓ user
Child`}
          </pre>

          <p>With Context:</p>

          <pre>
{`UserContext
     ↓
-----------------
|       |       |
Header  Profile  Child`}
          </pre>

          <br />

          <h2>3. Basic Flow</h2>

          <pre>
{`createContext()
      ↓
Provider
      ↓
useContext()
      ↓
Component gets the value`}
          </pre>

          <br />

          <h2>4. Example</h2>

          <pre>
{`const UserContext = createContext(null);

function App() {
  const user = {
    name: "Yash"
  };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}`}
          </pre>

          <br />

          <h2>5. Reading the Context</h2>

          <pre>
{`function Profile() {
  const user = useContext(UserContext);

  return <p>{user.name}</p>;
}`}
          </pre>

          <p>
            Profile can access the user without receiving it through props from
            every parent component.
          </p>

          <br />

          <h2>6. Common Use Cases</h2>

          <pre>
{`Theme
Authentication user
Language
Application settings
Permissions`}
          </pre>

          <br />

          <h2>7. Context API is not always Global State Management</h2>

          <p>
            Context provides a way to pass values through the component tree.
            It does not automatically provide features like Redux middleware,
            server-state caching, or advanced state management.
          </p>
          <br />

          <h2>8. Problems with Context API </h2>
          <ul>
            <li>1. Unnecessary Re-renders (The Performance Trap)</li>
          <li>2. Breaking Component Reusability</li>
          <li>3. "Provider Hell" (Deeply Nested Boilerplate)</li>
          </ul>
          
        </div>
      ),
    },

    {
      id: 3.6,
      title: "Derived State",
      content: (
        <div className="pagehead">
          <h2>1. What is Derived State?</h2>

          <p>
            Derived state is a value that can be calculated from existing
            state or props.
          </p>

          <p>
            If we can calculate a value from existing data, we usually do not
            need to store that calculated value separately in state.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`const [items, setItems] = useState([
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 2000 }
]);`}
          </pre>

          <p>
            We can calculate the total instead of creating another
            <b> total</b> state.
          </p>

          <pre>
{`const total = items.reduce(
  (sum, item) => sum + item.price,
  0
);`}
          </pre>

          <br />

          <h2>3. Avoid Unnecessary State</h2>

          <pre>
{`❌ Avoid

const [total, setTotal] = useState(0);


Because total can be calculated from:

items
  ↓
reduce()
  ↓
total`}
          </pre>

          <p>Instead:</p>

          <pre>
{`const total = items.reduce(
  (sum, item) => sum + item.price,
  0
);`}
          </pre>

          <br />

          <h2>4. Another Example</h2>

          <pre>
{`const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const fullName = firstName + " " + lastName;`}
          </pre>

          <p>
            <b>fullName</b> is derived from firstName and lastName.
          </p>

          <br />

          <h2>5. Why avoid unnecessary derived state?</h2>

          <pre>
{`Extra state
    ↓
Extra update logic
    ↓
Possible inconsistent data
    ↓
More code`}
          </pre>

          <p>
            Keeping only the original source of truth makes the state easier to
            understand and maintain.
          </p>

          <br />

          <h2>6. When can we use useMemo?</h2>

          <p>
            If the calculation is expensive, we can consider using
            <b> useMemo</b> to avoid recalculating it unnecessarily.
          </p>

          <pre>
{`const filteredProducts = useMemo(() => {
  return products.filter(
    product => product.category === category
  );
}, [products, category]);`}
          </pre>

          <p>
            But useMemo should not be added automatically for every derived
            value. For simple calculations, normal JavaScript is usually
            enough.
          </p>

          
        </div>
      ),
    },
  ],
},
{
      id:4,
      title:"Redux / Redux Toolkit",
      children:[
        {
          id:4.1,
          title:"What is Redux",
          content:(
            <div className="pagehead">
              <h2>What is Redux?</h2>
              <p>Redux is the (Global) state management library. used to manage the state of entire application globally by keeping the shared application states in one predictable place called the store.</p>

              <p>Or</p>
              <p>Redux is an open-source JavaScript library used for managing and centralizing an application's global state</p>
              <p>It acts as a predictable state container, ensuring that your data stays synchronized and organized across your entire web application, regardless of whether you are building with React, Angular, or another framework.</p>
              

              <br />

              <h3>Instead of :</h3>
              <pre>{`Component A ──props──> Component B ──props──> Component C`}</pre>
              <h3>components can communicate through a centralized store:</h3>
              <pre>
Redux Store  <br />
/     |      \<br />
↓     ↓       ↓<br />
Header   Cart    Checkout<br />

              </pre>
            </div>
          )
        },
        {
          id:4.2,
          title:"What is Redux Toolkit?",
          content:(
            <div className="pagehead">
              <h2>What is Redux Toolkit(RTK)?</h2>
              <p>Historically, developers used plain Redux.</p>
              <p>Plain Redux required a lot of boilerplate.</p>
              <p>You had to create:</p>
<pre>
Action Types<br />
Actions<br />
Action Creators<br />
Reducers<br />
Store<br />
Middleware<br />
</pre>
<p>For something as simple as incrementing a counter.</p>
<p>Redux Toolkit was created to simplify this.</p>
<p>Redux Toolkit is the official recommended way of writing Redux logic.</p>
              <br />
<pre>
Redux
   ↓
core state-management concept/library

Redux Toolkit
   ↓
modern, easier way of using Redux
              </pre>
            </div>
          )
        },
        {
          id:4.3,
          title:"Why do we need Redux",
          content:(
            <div className="pagehead">
              <h2>Why do we need Redux?</h2>
              <p>In React, We normally start with local state</p>
              <pre>
                {
                  `
const [count, setCount] = useState(0);
                  `
                }
              </pre>
              <p>This is perfect when the state belongs to one component.</p>
              <p>For Example:</p>
              <pre>
Counter <br />
 ├── count <br />
 └── setCount() <br />
              </pre>
              <br />
              <p>But imagine an e-commerce application:</p>
<pre>
App <br />
│ <br />
├── Header <br />
│   └── Cart count <br />
│ <br />
├── ProductPage <br />
│   └── Add to cart <br />
│ <br />
├── CartPage <br />
│   └── Cart products <br />
│ <br />
├── CheckoutPage <br />
│   └── Cart total <br />
│ <br />
└── Sidebar <br />
    └── User information <br />
</pre>
<p>Now cart is required by many unrelated components.</p>
<p>You could lift the state to App and pass it through props:</p>
<pre>
App <br />
  cart <br />
   │ <br />
   ├───────────────┐ <br />
   ↓               ↓ <br />
Header          ProductPage <br />
   ↓               ↓ <br />
CartCount       Product <br />
                   ↓ <br />
                AddToCart <br />
</pre>
<p>Eventually this can become difficult to manage.</p>
<p>This is where global state management becomes useful.</p>
            </div>
          )
        },
        {
          id:4.4,
          title:"What problems it solves",
          content:(
            <div className="pagehead">
              <h2>Why Do We Use It?</h2>
              <p>In a standard React application, data flows downward from parent to child via props. As applications grow, this introduces severe maintenance bottlenecks that Redux is designed to solve:</p>

              <ul>
                <li>1. &quot;Prop Drilling&quot;</li>
                <li>2. Sharing state between distant components</li>
                <li>3. Updating shared state from different places</li>
                <li>4. State becomes difficult to understand</li>
                <li>5. Debugging state changes</li>
              </ul>
            </div>
          )
        },
        {
          id:4.5,
          title:"Redux Features",
          content:(
            <div className="pagehead">
              <h2>What are the Features of using Redux?</h2>
              <h3>1. Single Source of Truth: </h3>
              <p>The entire global state of your application is stored in a single JavaScript object tree inside a centralized &quot;Store." This makes it incredibly easy to track, inspect, and snapshot your app's data at any given moment.</p>
              <br />

              <h3>2. State is Read-Only</h3>
              <p>ou cannot directly modify or overwrite the state. The only way to change the data is to dispatch an Action (a plain JavaScript object describing what happened). This guarantees that components cannot accidentally mutate data behind your back.</p>
              <br />

              <h3>3. Changes via Pure Functions:</h3>
              <p>To specify how the state tree is transformed by actions, you write Reducers. Reducers are pure functions that take the previous state and an action, and return a brand-new state object without modifying the old one.</p>
              <br />
              <h3>4. Time-Travel Debugging</h3>
              <p>Because every change is a discrete, recorded action, the official Redux DevTools extension allows you to physically undo, redo, rewind, and fast-forward through your application's state history to see exactly when and how a bug occurred.</p>
            </div>
          )
        },
        
         {
          id:4.6,
          title:"Redux Toolkit architecture",
          content:(
            <div className="pagehead">
              <h2>Redux Toolkit architecture</h2>
              <br />
<img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" alt="Redux Toolkit architecture" className='img-fluid' />
<br />
<pre>
                         REACT APP <br/>
                            │ <br/>
                       {`<Provider>`} <br/>
                            │ <br/>
                            ↓ <br/>
                      REDUX STORE <br/>
                            │ <br/>
          ┌─────────────────┼─────────────────┐ <br/>
          ↓                 ↓                 ↓ <br/>
      authSlice         cartSlice        productSlice <br/>
          │                 │                 │ <br/>
          ↓                 ↓                 ↓ <br/>
       reducer           reducer           reducer <br/>
          │                 │                 │ <br/>
          └─────────────────┼─────────────────┘ <br/>
                            │ <br/>
                            ↓ <br/>
                         STATE <br/>
</pre>

            </div>
          )
        },
        {
          id:4.7,
          title:"Redux Toolkit Flow",
          content:(
            <div className="pagehead">
              <h2>Redux Toolkit architecture</h2>
<pre>
  USER ACTION <br/>
    ↓ <br/>
COMPONENT <br/>
    ↓ <br/>
dispatch(action) <br/>
    ↓ <br/>
ACTION <br/>
    ↓ <br/>
REDUCER <br/>
    ↓ <br/>
STORE UPDATED <br/>
    ↓ <br/>
useSelector <br/>
    ↓ <br/>
COMPONENT RE-RENDERS <br/>
    ↓ <br/>
UPDATED UI <br/>
</pre>

            </div>
          )
        },
        {
          id:4.8,
          title:"Install Redux Toolkit",
          content:(
            <div className="pagehead">
              <h2>Install Redux Toolkit</h2>
<pre>
 npm install @reduxjs/toolkit react-redux
</pre>

<br />

<h3>1. @reduxjs/toolkit</h3>
<p>Contains Redux functionality such as:</p>
<ul>
  <li>configureStore</li>
  <li>createSlice</li>
  <li>createAsyncThunk</li>
</ul>

<br />

<h3>2. react-redux</h3>
<p>Connects Redux with React.</p>
<ul>
  <li>Provider</li>
  <li>useSelector</li>
  <li>useDispatch</li>
</ul>

            </div>
          )
        },
         {
          id:12.8,
          title:"Redux Toolkit Folder Structure",
          content:(
            <div className="pagehead">
              <h2>Install Redux Toolkit</h2>
<pre>
src/ <br />
│ <br />
├── app/ <br />
│   └── store.js <br />
│ <br />
├── features/ <br />
│   │ <br />
│   ├── counter/ <br />
│   │   └── counterSlice.js <br />
│   │ <br />
│   ├── auth/ <br />
│   │   └── authSlice.js <br />
│   │ <br />
│   └── cart/ <br />
│       └── cartSlice.js <br />
│ <br />
├── components/ <br />
│ <br />
├── pages/ <br />
│ <br />
└── App.jsx <br />
</pre>



            </div>
          )
        },
         {
          id:12.9,
          title:"Core Redux Toolkit concepts",
          content:(
            <div className="pagehead">
              <h2>Core Redux Toolkit concepts</h2>
<p>You mainly need to understand these:</p>
<ul>
  <li>1. Store</li>
  <li>2. Slice</li>
  <li>3. State</li>
  <li>4. Reducer</li>
  <li>5. Action</li>
  <li>6. Dispatch</li>
  <li>7. Selector</li>
  <li>8. Provider</li>
</ul>
<p>Later:</p>
<ul>
  <li>9. createAsyncThunk</li>
  <li>10. extraReducers</li>
  <li>11. Middleware</li>
  <li>12. RTK Query</li>
</ul>
<p>Don't jump into async Redux until the first eight are clear.</p>
            </div>
          )
        },
        {
  id: 44,
  title: "Redux",
  children: [
    {
      id: 44.1,
      title: "1. State",
      content: (
       <div className="pagehead">
        <h2>What is the Redux State</h2>
        <p>The actual data currently sitting inside your store at any given millisecond</p>
        <p>State in Redux is read-only; you can never change it directly.</p>
        <p>isLoggedIn: true, cartItems: []</p>
       </div>
      ),
    },

    {
      id: 44.2,
      title: "2. Store",
      content: (
        <div className="pagehead">
          <h2>What is the Redux Store?</h2>

          <p>
            The Redux store is the central place where the application's Redux
            state is stored.
          </p>
          <p>A single JavaScript object that holds the complete, global state of your application.</p>

          <pre>
{`Redux Store
     |
     ├── user
     ├── cart
     ├── products
     └── settings`}
          </pre>

          <p>
            Components can read data from the store and dispatch actions to
            update it.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
});`}
          </pre>

          <p>
            Here, each reducer manages a part of the Redux state.
          </p>

          <br />

          <h2>3. Store Responsibilities</h2>

          <pre>
{`Stores application state
       ↓
Provides state to the application
       ↓
Receives dispatched actions
       ↓
Runs reducers
       ↓
Updates the state`}
          </pre>

          <br />

          <h2>4. Important</h2>
          <p>
            In Redux, we normally create one store for the application.
            Different features are separated using reducers or slices.
          </p>
        </div>
      ),
    },
    {
      id:44.3,
      title:"3. Slice",
      content:(
        <div className="pagehead">
          <h2>What is the Redux Slice?</h2>
<p>A slice represents one feature/domain of your Redux state.</p>
<p>For example:</p>
<pre>
Store <br />
│<br />
├── auth<br />
├── cart<br />
├── products<br />
└── theme<br />
</pre>
<p>You would usually create:</p>
<pre>
authSlice.js<br />
cartSlice.js<br />
productSlice.js<br />
themeSlice.js<br />
</pre>
        </div>
      )
    },

    {
      id: 44.4,
      title: "4. Action",
      content: (
        <div className="pagehead">
          <h2>What is an Action?</h2>

          <p>
            An action is a JavaScript object that describes what happened.
          </p>

          <p>
            It tells Redux what kind of state change we want to perform.
          </p>

          <br />

          <h2>2. Basic Action</h2>

          <pre>
{`{
  type: "cart/addItem"
}`}
          </pre>

          <p>
            The <b>type</b> property describes the action.
          </p>

          <br />

          <h2>3. Action with Data</h2>

          <pre>
{`{
  type: "cart/addItem",
  payload: {
    id: 101,
    name: "Laptop"
  }
}`}
          </pre>

          <p>
            The <b>payload</b> contains the data required to update the state.
          </p>

          <br />

          <h2>4. Example with Redux Toolkit</h2>

          <pre>
{`dispatch(
  addItem({
    id: 101,
    name: "Laptop"
  })
);`}
          </pre>

          <p>
            Here, <b>addItem</b> creates an action and dispatch sends it to
            Redux.
          </p>

          <br />

          <h2>5. Think of an Action as</h2>

          <pre>
{`Action
   ↓
"What happened?"`}
          </pre>

          <pre>
{`LOGIN_SUCCESS
ADD_TO_CART
REMOVE_FROM_CART
LOGOUT
UPDATE_PROFILE`}
          </pre>
        </div>
      ),
    },
    {
      id: 44.5,
      title: "5. Reducer",
      content: (
        <div className="pagehead">
          <h2>What is a Reducer?</h2>

          <p>
            A reducer is a function that decides how the Redux state should
            change when an action is dispatched.
          </p>

          <p>Pure functions that take the current state and the action you dispatched, and calculate a brand-new state based on those inputs.</p>
          <pre>
{`Action
  ↓
Reducer
  ↓
New State`}
          </pre>

          <br />

          <h2>2. Example</h2>

          <pre>
{`const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment(state) {
      state.value += 1;
    }
  }
});`}
          </pre>

          <p>
            The reducer defines what should happen when the
            <b> increment</b> action is dispatched.
          </p>

          <br />

          <h2>3. Reducer receives</h2>

          <pre>
{`state
  +
action
  ↓
reducer
  ↓
updated state`}
          </pre>

          <br />

          <h2>4. Important Rule</h2>

          <p>
            Reducers should be predictable and should not perform side effects
            such as API calls.
          </p>

          <pre>
{`Reducer
  ↓
Calculate next state

Not:

Reducer
  ↓
API call
  ↓
Random side effect`}
          </pre>

          <br />

          <h2>5. Redux Toolkit Note</h2>

          <p>
            In Redux Toolkit, we can write code that looks like we are mutating
            state:
          </p>

          <pre>
{`state.value += 1`}
          </pre>

          <p>
            Redux Toolkit uses Immer internally to safely produce the next
            immutable state.
          </p>

        </div>
      ),
    },
    {
      id: 44.6,
      title: "6. Dispatch",
      content: (
        <div className="pagehead">
          <h2>1. What is redux Dispatch?</h2>

          <p>
            <b>dispatch</b> is the function used to send an action to the Redux
            store.
          </p>
          <p>A built-in Redux function used to trigger an action.</p>

          <pre>
{`dispatch(action)
      ↓
Redux Store
      ↓
Reducer
      ↓
New State`}
          </pre>

          <br />

          <h2>2. Example</h2>

          <pre>
{`dispatch({
  type: "counter/increment"
});`}
          </pre>

          <p>
            The action is sent to Redux, and the appropriate reducer handles
            it.
          </p>

          <br />

          <h2>3. Redux Toolkit Example</h2>

          <pre>
{`dispatch(
  addItem({
    id: 101,
    name: "Laptop"
  })
);`}
          </pre>

          <br />

          <h2>4. Simple Way to Remember</h2>

          <pre>
{`Action
"What happened?"

      ↓

Dispatch
"Send it to Redux"

      ↓

Reducer
"What should the new state be?"`}
          </pre>

        </div>
      ),
    },
    {
      id: 44.7,
      title: "7. Selector",
      content: (
        <div className="pagehead">
          <h2>1. What is a Redux Selector?</h2>

          <p>
            A selector is a function used to read a specific piece of data from
            the Redux store.
          </p>

          <pre>
{`Redux Store
     |
     ├── user
     ├── cart
     └── products

Selector
     ↓
Read only what we need`}
          </pre>

          <br />

          <h2>2. Example</h2>

          <pre>
{`const cartItems = useSelector(
  state => state.cart.items
);`}
          </pre>

          <p>
            Here, we are selecting only the <b>items</b> from the cart state.
          </p>

          <br />

          <h2>3. Why use Selectors?</h2>

          <pre>
{`Store has lots of data
       ↓
Component needs only some data
       ↓
Selector gets that data`}
          </pre>

          <p>
            This keeps components focused on the state they actually need.
          </p>

          <br />

          <h2>4. Example Selector Function</h2>

          <pre>
{`const selectCartItems = state => state.cart.items;

const items = useSelector(selectCartItems);`}
          </pre>

          <br />

          <h2>5. Selectors and Performance</h2>

          <p>
            Components using <b>useSelector</b> subscribe to the selected
            Redux state. If the selected result changes, the component can
            re-render.
          </p>

          <p>
            This is why selectors should be designed carefully, especially
            when calculating derived data.
          </p>
        </div>
      ),
    },

    {
      id: 44.8,
      title: "8. Provider",
      content: (
        <div className="pagehead">
          <h2>1. What is Redux Provider?</h2>

          <p>
            The Redux <b>Provider</b> makes the Redux store available to React
            components in the component tree.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>`}
          </pre>

          <p>
            The <b>store</b> is passed to the Provider.
          </p>

          <br />

          <h2>3. What happens?</h2>

          <pre>
{`Provider
   ↓
Makes Redux Store available
   ↓
React Components
   ↓
useSelector / useDispatch`}
          </pre>

          <br />

          <h2>4. Without Provider</h2>

          <p>
            Components using Redux hooks need to be inside the Provider.
          </p>

          <pre>
{`<Provider store={store}>
   ↓
<Component />
   ↓
useSelector()
useDispatch()`}
          </pre>

          <p>
            If a component is outside the Provider, Redux hooks cannot access
            the Redux store through the React-Redux context.
          </p>

          <br />

          <h2>5. In Next.js</h2>

          <p>
            In a Next.js application, we usually create a client-side Redux
            Provider component and wrap the part of the application that needs
            access to Redux.
          </p>
        </div>
      ),
    },
    {
      id: 44.9,
      title: "Data Flow",
      content: (
        <div className="pagehead">
          <h2>1. Redux Data Flow</h2>

          <p>
            Redux follows a predictable one-way data flow.
          </p>

          <pre>
{`Component
    ↓
dispatch(action)
    ↓
Redux Store
    ↓
Reducer
    ↓
New State
    ↓
Store Updated
    ↓
Selector
    ↓
Component Re-renders`}
          </pre>

          <br />

          <h2>2. Complete Example</h2>

          <pre>
{`User clicks "Add to Cart"
          ↓
Component dispatches action
          ↓
dispatch(addItem(product))
          ↓
Redux Store receives action
          ↓
Reducer handles action
          ↓
Cart state is updated
          ↓
useSelector reads updated cart
          ↓
Component re-renders`}
          </pre>

          <br />

          <h2>3. Think of Redux Like This</h2>

          <pre>
{`Component
    |
    | dispatch
    ↓
  Action
    |
    ↓
 Reducer
    |
    ↓
  Store
    |
    | selector
    ↓
Component`}
          </pre>
        </div>
      ),
    },
  ],
},
{
  id: 5,
  title: "Redux Toolkit",
  children: [
    {
      id: 5.1,
      title: "configureStore",
      content: (
        <div className="pagehead">
          <h2>1. What is configureStore?</h2>

          <p>
            <b>configureStore</b> is a Redux Toolkit function used to create
            and configure the Redux store.
          </p>

          <p>
            It makes Redux store setup simpler than the older Redux approach.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  }
});`}
          </pre>

          <br />

          <h2>3. What does it configure?</h2>

          <pre>
{`configureStore()
      ↓
Redux Store
      |
      ├── Reducers
      ├── Middleware
      └── DevTools support`}
          </pre>

          <p>
            Redux Toolkit also adds useful middleware by default, including
            checks that help detect common mistakes during development.
          </p>

          <br />

          <h2>4. Example with Provider</h2>

          <pre>
{`const store = configureStore({
  reducer: {
    user: userReducer
  }
});


<Provider store={store}>
  <App />
</Provider>`}
          </pre>

          <br />

          <h2>5. Interview Answer</h2>

          <p>
            configureStore is a Redux Toolkit function used to create the Redux
            store. It simplifies store configuration and automatically sets up
            useful middleware and Redux DevTools integration.
          </p>
        </div>
      ),
    },

    {
      id: 5.2,
      title: "createSlice",
      content: (
        <div className="pagehead">
          <h2>1. What is createSlice?</h2>

          <p>
            <b>createSlice</b> is a Redux Toolkit function used to create a
            slice of Redux state.
          </p>

          <p>
            It combines the state, reducers and generated action creators in
            one place.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment(state) {
      state.value += 1;
    },

    decrement(state) {
      state.value -= 1;
    }
  }
});`}
          </pre>

          <br />

          <h2>3. What does createSlice give us?</h2>

          <pre>
{`createSlice
    |
    ├── State
    ├── Reducers
    └── Action Creators`}
          </pre>

          <br />

          <h2>4. Export Actions</h2>

          <pre>
{`export const {
  increment,
  decrement
} = counterSlice.actions;`}
          </pre>

          <br />

          <h2>5. Export Reducer</h2>

          <pre>
{`export default counterSlice.reducer;`}
          </pre>

          <br />

          <h2>6. Dispatch</h2>

          <pre>
{`dispatch(increment());

dispatch(decrement());`}
          </pre>

          <br />

          <h2>7. Why is createSlice useful?</h2>

          <pre>
{`Older Redux
    ↓
Action types
Action creators
Reducers
More boilerplate


Redux Toolkit
    ↓
createSlice
    ↓
Less boilerplate`}
          </pre>

          <br />

          <h2>Interview Answer</h2>

          <p>
            createSlice is a Redux Toolkit API that creates a slice containing
            the initial state, reducers and automatically generated action
            creators. It significantly reduces Redux boilerplate.
          </p>
        </div>
      ),
    },

    {
      id: 5.3,
      title: "Immer",
      content: (
        <div className="pagehead">
          <h2>1. What is Immer?</h2>

          <p>
            Redux state should be updated immutably.
          </p>

          <p>
            Redux Toolkit uses <b>Immer</b> internally, which allows us to write
            code that looks like direct mutation inside reducers.
          </p>

          <br />

          <h2>2. Without Immer</h2>

          <pre>
{`return {
  ...state,
  count: state.count + 1
};`}
          </pre>

          <br />

          <h2>3. With Redux Toolkit</h2>

          <pre>
{`state.count += 1;`}
          </pre>

          <p>
            This looks like mutation, but Immer creates the updated immutable
            state behind the scenes.
          </p>

          <br />

          <h2>4. Example with Array</h2>

          <pre>
{`state.items.push(action.payload);`}
          </pre>

          <p>
            In normal React state, directly mutating an array like this would
            be a problem. Inside a Redux Toolkit reducer, Immer handles the
            immutable update for us.
          </p>

          <br />

          <h2>5. Think of it like</h2>

          <pre>
{`You write:

state.user.name = "Yash";


Immer internally creates:

New Immutable State
        ↓
Old State remains unchanged`}
          </pre>

          <br />

          <h2>6. Important</h2>

          <p>
            Immer does not mean that Redux state is actually mutated. It
            provides a convenient way to write update logic while producing
            immutable state updates.
          </p>

          <br />

          <h2>Interview Answer</h2>

          <p>
            Redux Toolkit uses Immer internally to simplify immutable state
            updates. It allows us to write mutation-like code inside reducers,
            while Immer produces the next immutable state.
          </p>
        </div>
      ),
    },

    {
      id: 5.4,
      title: "createAsyncThunk",
      content: (
        <div className="pagehead">
          <h2>1. What is createAsyncThunk?</h2>

          <p>
            <b>createAsyncThunk</b> is a Redux Toolkit API used to handle
            asynchronous operations such as API calls.
          </p>

          <br />

          <h2>2. Example</h2>

          <pre>
{`export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("/api/users");

    return response.json();
  }
);`}
          </pre>

          <br />

          <h2>3. Async Lifecycle</h2>

          <p>
            createAsyncThunk automatically creates three action states:
          </p>

          <pre>
{`fetchUsers.pending
        ↓
API request running


fetchUsers.fulfilled
        ↓
API request successful


fetchUsers.rejected
        ↓
API request failed`}
          </pre>

          <br />

          <h2>4. Why is this useful?</h2>

          <pre>
{`API Call
   ↓
Loading
   ↓
Success / Error
   ↓
Update Redux State`}
          </pre>

          <p>
            We can use these states to show loading indicators, display errors
            and store the API response.
          </p>

          <br />

          <h2>5. Example</h2>

          <pre>
{`extraReducers: builder => {
  builder
    .addCase(fetchUsers.pending, state => {
      state.loading = true;
    })

    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })

    .addCase(fetchUsers.rejected, state => {
      state.loading = false;
      state.error = true;
    });
}`}
          </pre>

          <br />

          <h2>6. Interview Answer</h2>

          <p>
            createAsyncThunk is used to handle asynchronous operations in
            Redux Toolkit. It automatically generates pending, fulfilled and
            rejected actions that can be handled in reducers.
          </p>
        </div>
      ),
    },

    {
      id: 5.5,
      title: "extraReducers",
      content: (
        <div className="pagehead">
          <h2>1. What is extraReducers?</h2>

          <p>
            <b>extraReducers</b> allows a slice to respond to actions that were
            created outside its own reducers.
          </p>

          <br />

          <h2>2. Why do we need it?</h2>

          <p>
            A common example is handling the lifecycle actions generated by
            <b> createAsyncThunk</b>.
          </p>

          <pre>
{`createAsyncThunk
      ↓
pending
fulfilled
rejected
      ↓
extraReducers
      ↓
Update state`}
          </pre>

          <br />

          <h2>3. Example</h2>

          <pre>
{`const usersSlice = createSlice({
  name: "users",

  initialState: {
    users: [],
    loading: false,
    error: null
  },

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, state => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  }
});`}
          </pre>

          <br />

          <h2>4. reducers vs extraReducers</h2>

          <pre>
{`reducers
    ↓
Actions created by the slice


extraReducers
    ↓
Handles external actions
    ↓
createAsyncThunk
Other slices
Other Redux actions`}
          </pre>

          <br />

          <h2>Interview Answer</h2>

          <p>
            extraReducers allows a Redux Toolkit slice to respond to actions
            that are not defined inside its reducers. It is commonly used to
            handle createAsyncThunk lifecycle actions.
          </p>
        </div>
      ),
    },

    {
      id: 5.6,
      title: "Middleware",
      content: (
        <div className="pagehead">
          <h2>1. What is Middleware?</h2>

          <p>
            Redux middleware allows us to run additional logic between
            dispatching an action and the reducer receiving it.
          </p>

          <pre>
{`Component
    ↓
dispatch(action)
    ↓
Middleware
    ↓
Reducer
    ↓
Store Updated`}
          </pre>

          <br />

          <h2>2. Why do we need Middleware?</h2>

          <p>Middleware can be used for things like:</p>

          <pre>
{`Logging
API calls
Authentication logic
Analytics
Side effects
Handling async actions`}
          </pre>

          <br />

          <h2>3. Common Redux Middleware</h2>

          <pre>
{`Redux Thunk
Redux Saga
Custom Middleware`}
          </pre>

          <p>
            Redux Toolkit also includes useful middleware by default when
            using configureStore.
          </p>

          <br />

          <h2>4. Middleware Flow</h2>

          <pre>
{`Action
  ↓
Middleware
  ↓
Can inspect / modify / handle
  ↓
Reducer
  ↓
New State`}
          </pre>

          <br />

          <h2>5. Simple Example</h2>

          <pre>
{`const logger = store => next => action => {
  console.log("Action:", action);

  return next(action);
};`}
          </pre>

          <p>
            <b>next(action)</b> passes the action to the next middleware or
            eventually to the reducer.
          </p>

          <br />

          <h2>6. Interview Answer</h2>

          <p>
            Redux middleware provides a place to run logic between dispatching
            an action and the reducer handling it. It is commonly used for
            logging, async operations, analytics and other side effects.
          </p>
        </div>
      ),
    },

    {
      id: 5.7,
      title: "Selectors",
      content: (
        <div className="pagehead">
          <h2>1. What are Selectors?</h2>

          <p>
            Selectors are functions used to read or derive specific data from
            the Redux store.
          </p>

          <br />

          <h2>2. Simple Selector</h2>

          <pre>
{`const selectUsers = state => state.users.users;`}
          </pre>

          <p>Then inside a component:</p>

          <pre>
{`const users = useSelector(selectUsers);`}
          </pre>

          <br />

          <h2>3. Why use Selectors?</h2>

          <pre>
{`Redux Store
     ↓
Large amount of state
     ↓
Selector
     ↓
Only required data
     ↓
Component`}
          </pre>

          <p>
            Selectors keep state access consistent and make components easier
            to understand.
          </p>

          <br />

          <h2>4. Derived Selector</h2>

          <p>
            A selector can also calculate data from the Redux state.
          </p>

          <pre>
{`const selectCompletedTodos = state =>
  state.todos.items.filter(
    todo => todo.completed
  );`}
          </pre>

          <br />

          <h2>5. Memoized Selectors</h2>

          <p>
            If a selector performs an expensive calculation, a memoized
            selector can help avoid unnecessary recalculations.
          </p>

          <pre>
{`Input State
    ↓
Selector
    ↓
Derived Data`}
          </pre>

          <p>
            Redux Toolkit commonly works with <b>Reselect</b> for creating
            memoized selectors.
          </p>

          <br />

          <h2>6. Interview Answer</h2>

          <p>
            Selectors are functions used to read or derive data from the Redux
            store. They help keep state access organized and can be memoized
            when derived calculations are expensive.
          </p>
        </div>
      ),
    },

    {
      id: 5.8,
      title: "RTK Query",
      content: (
        <div className="pagehead">
          <h2>1. What is RTK Query?</h2>

          <p>
            <b>RTK Query</b> is a data fetching and caching solution included
            with Redux Toolkit.
          </p>

          <p>
            It is designed mainly for managing server state and API requests.
          </p>

          <br />

          <h2>2. What problem does it solve?</h2>

          <p>
            Without a data-fetching library, we often have to manually manage:
          </p>

          <pre>
{`Loading
Error
API response
Caching
Refetching
Request status
Invalidating old data`}
          </pre>

          <p>
            RTK Query provides many of these features for us.
          </p>

          <br />

          <h2>3. Basic Flow</h2>

          <pre>
{`Component
    ↓
RTK Query Hook
    ↓
API Request
    ↓
Cache
    ↓
Component receives data`}
          </pre>

          <br />

          <h2>4. Example</h2>

          <pre>
{`const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api"
  }),

  endpoints: builder => ({
    getUsers: builder.query({
      query: () => "/users"
    })
  })
});`}
          </pre>

          <br />

          <h2>5. Generated Hook</h2>

          <pre>
{`export const {
  useGetUsersQuery
} = api;`}
          </pre>

          <p>Then inside the component:</p>

          <pre>
{`const {
  data,
  isLoading,
  error
} = useGetUsersQuery();`}
          </pre>

          <br />

          <h2>6. What RTK Query handles?</h2>

          <pre>
{`Fetching
Caching
Loading state
Error state
Refetching
Cache invalidation
Request deduplication`}
          </pre>

          <br />

          <h2>7. RTK Query vs createAsyncThunk</h2>

          <pre>
{`createAsyncThunk
        ↓
You manage:
loading
success
error
state updates
caching logic


RTK Query
        ↓
Provides:
fetching
caching
loading
error
refetching
cache invalidation`}
          </pre>

          <p>
            If the main requirement is fetching and caching server data, RTK
            Query can reduce the amount of manual Redux code.
          </p>

          <br />

          <h2>8. Interview Answer</h2>

          <p>
            RTK Query is a data-fetching and caching solution provided by
            Redux Toolkit. It helps manage server state by handling API
            requests, caching, loading, errors, refetching and cache
            invalidation.
          </p>
        </div>
      ),
    },
  ],
},
 ]
    },
    {
      id:66,
      title:"Other Solutions ",
      children:[
        {
          id:66.1,
          title:"Context API",
          content:(
            <div className="pagehead">

            </div>
          )
        },
        {
          id:66.2,
          title:"Zustand",
          content:(
            <div className="pagehead">

            </div>
          )
        },
        {
          id:66.3,
          title:"TanStack Query",
          content:(
            <div className="pagehead">

            </div>
          )
        },
      ]
    },
    {
  id: 6,
  title: "Complete Redux Toolkit Examples",
  children: [
    {
      id: 6.1,
      title: "Simple Client-Side Redux Toolkit Example",
      content: (
        <div className="pagehead">

          <h2>1. What are we building?</h2>

          <p>
            We will create a simple shopping cart using Redux Toolkit.
          </p>

          <p>
            This example does not call any API. Everything is handled on the
            client side.
          </p>

          <pre>
{`Products
   ↓
Add to Cart
   ↓
Redux Store
   ↓
Cart
   ↓
Increase / Decrease / Remove`}
          </pre>

          <br />

          <h2>2. Install Redux Toolkit</h2>

          <pre>
{`npm install @reduxjs/toolkit react-redux`}
          </pre>

          <br />

          <h2>3. Folder Structure</h2>

          <pre>
{`src/
│
├── app/
│   └── store.js
│
├── features/
│   └── cart/
│       └── cartSlice.js
│
├── components/
│   ├── ProductCard.jsx
│   └── Cart.jsx
│
├── data/
│   └── products.js
│
├── App.jsx
└── main.jsx`}
          </pre>

          <br />

          <h2>4. Product Data</h2>

          <p>src/data/products.js</p>

          <pre>
{`export const products = [
  {
    id: 1,
    name: "iPhone",
    price: 70000
  },
  {
    id: 2,
    name: "MacBook",
    price: 95000
  },
  {
    id: 3,
    name: "AirPods",
    price: 25000
  }
];`}
          </pre>

          <br />

          <h2>5. Create Cart Slice</h2>

          <p>src/features/cart/cartSlice.js</p>

          <pre>
{`import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      const product = action.payload;

      const existingItem = state.items.find(
        item => item.id === product.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          ...product,
          quantity: 1
        });

      }
    },

    increaseQuantity: (state, action) => {

      const item = state.items.find(
        item => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {

      const item = state.items.find(
        item => item.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {

        item.quantity -= 1;

      } else {

        state.items = state.items.filter(
          item => item.id !== action.payload
        );

      }
    },

    removeFromCart: (state, action) => {

      state.items = state.items.filter(
        item => item.id !== action.payload
      );

    },

    clearCart: state => {
      state.items = [];
    }

  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;`}
          </pre>

          <br />

          <h2>6. Create Redux Store</h2>

          <p>src/app/store.js</p>

          <pre>
{`import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({

  reducer: {
    cart: cartReducer
  }

});`}
          </pre>

          <p>Our Redux state now looks like:</p>

          <pre>
{`{
  cart: {
    items: []
  }
}`}
          </pre>

          <br />

          <h2>7. Connect Redux with React</h2>

          <p>src/main.jsx</p>

          <pre>
{`import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <Provider store={store}>
    <App />
  </Provider>

);`}
          </pre>

          <br />

          <h2>8. Product Component</h2>

          <p>src/components/ProductCard.jsx</p>

          <pre>
{`import { useDispatch } from "react-redux";

import {
  addToCart
} from "../features/cart/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  return (
    <div>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;`}
          </pre>

          <br />

          <h2>9. Cart Component</h2>

          <p>src/components/Cart.jsx</p>

          <pre>
{`import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../features/cart/cartSlice";

function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h2>Cart</h2>

      {cartItems.map(item => (

        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>
            ₹{item.price}
          </p>

          <button
            onClick={() =>
              dispatch(
                decreaseQuantity(item.id)
              )
            }
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              dispatch(
                increaseQuantity(item.id)
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                removeFromCart(item.id)
              )
            }
          >
            Remove
          </button>

        </div>

      ))}

      <h3>
        Total: ₹{totalPrice}
      </h3>

      <button
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

    </div>
  );
}

export default Cart;`}
          </pre>

          <br />

          <h2>10. App Component</h2>

          <p>src/App.jsx</p>

          <pre>
{`import { products } from "./data/products";

import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {

  return (
    <>

      <h1>My Store</h1>

      <h2>Products</h2>

      {products.map(product => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

      <hr />

      <Cart />

    </>
  );
}

export default App;`}
          </pre>

          <br />

          <h2>11. Complete Flow</h2>

          <pre>
{`User clicks "Add to Cart"
        ↓
ProductCard
        ↓
dispatch(addToCart(product))
        ↓
Action
        ↓
cartReducer
        ↓
Redux Store Updated
        ↓
useSelector()
        ↓
Cart Component
        ↓
UI Re-renders`}
          </pre>

          <br />

          <h2>12. What is happening internally?</h2>

          <pre>
{`dispatch(
  addToCart(product)
);

        ↓

{
  type: "cart/addToCart",
  payload: product
}

        ↓

Reducer receives:

state
action

        ↓

state.items.push(...)

        ↓

Redux Store Updated

        ↓

useSelector()
gets new data

        ↓

Component Re-renders`}
          </pre>

          <br />

          <h2>13. What Redux Concepts are covered?</h2>

          <pre>
{`configureStore
createSlice
initialState
reducers
actions
payload
dispatch
useDispatch
useSelector
Provider
Immer
Redux Store`}
          </pre>

          <br />

          <h2>14. Interview Explanation</h2>

          <p>
            In this example, the cart is client-side state. Products are
            already available in the application, and Redux Toolkit manages
            the cart state.
          </p>

          <p>
            Components dispatch actions such as addToCart or removeFromCart.
            The slice reducer updates the Redux state, and components using
            useSelector receive the updated state.
          </p>

        </div>
      ),
    },

    {
      id: 6.2,
      title: "Asynchronous Redux Toolkit Example",
      content: (
        <div className="pagehead">

          <h2>1. What are we building?</h2>

          <p>
            Now we will fetch products from an API and store the response in
            Redux.
          </p>

          <p>
            This is different from the previous example because the data comes
            from a server.
          </p>

          <pre>
{`Component
    ↓
dispatch(fetchProducts())
    ↓
API Request
    ↓
pending
    ↓
API Response
    ↓
fulfilled / rejected
    ↓
Redux State
    ↓
Component`}
          </pre>

          <br />

          <h2>2. Folder Structure</h2>

          <pre>
{`src/
│
├── app/
│   └── store.js
│
├── features/
│   └── products/
│       └── productsSlice.js
│
├── components/
│   └── Products.jsx
│
├── App.jsx
└── main.jsx`}
          </pre>

          <br />

          <h2>3. Install Redux Toolkit</h2>

          <pre>
{`npm install @reduxjs/toolkit react-redux`}
          </pre>

          <br />

          <h2>4. Create Async Thunk</h2>

          <p>src/features/products/productsSlice.js</p>

          <pre>
{`import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";`}
          </pre>

          <br />

          <h2>5. API Request</h2>

          <pre>
{`export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",

  async () => {

    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }
);`}
          </pre>

          <p>
            createAsyncThunk handles the asynchronous operation and generates
            lifecycle actions automatically.
          </p>

          <br />

          <h2>6. Async Lifecycle</h2>

          <pre>
{`fetchProducts()
      ↓
pending
      ↓
API Request
      ↓
---------------------
↓                   ↓
fulfilled         rejected
↓                   ↓
Success             Error`}
          </pre>

          <br />

          <h2>7. Create Initial State</h2>

          <pre>
{`const initialState = {
  products: [],
  loading: false,
  error: null
};`}
          </pre>

          <p>
            We need these three values because an API request can be loading,
            successful or failed.
          </p>

          <br />

          <h2>8. Create Slice</h2>

          <pre>
{`const productsSlice = createSlice({

  name: "products",

  initialState,

  reducers: {},

  extraReducers: builder => {

    builder

      .addCase(
        fetchProducts.pending,
        state => {

          state.loading = true;
          state.error = null;

        }
      )

      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {

          state.loading = false;
          state.products = action.payload;

        }
      )

      .addCase(
        fetchProducts.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.error.message ||
            "Something went wrong";

        }
      );

  }

});

export default productsSlice.reducer;`}
          </pre>

          <br />

          <h2>9. Why extraReducers?</h2>

          <p>
            The actions pending, fulfilled and rejected are generated by
            createAsyncThunk.
          </p>

          <p>
            They are not created directly inside the slice's reducers, so we
            handle them using <b>extraReducers</b>.
          </p>

          <pre>
{`createAsyncThunk
       ↓
pending
fulfilled
rejected
       ↓
extraReducers
       ↓
Update Redux State`}
          </pre>

          <br />

          <h2>10. Create Redux Store</h2>

          <p>src/app/store.js</p>

          <pre>
{`import { configureStore } from "@reduxjs/toolkit";

import productsReducer
  from "../features/products/productsSlice";

export const store = configureStore({

  reducer: {

    products: productsReducer

  }

});`}
          </pre>

          <br />

          <h2>11. Redux State</h2>

          <p>
            Because we registered the reducer as <b>products</b>, the Redux
            state looks like:
          </p>

          <pre>
{`{
  products: {
    products: [],
    loading: false,
    error: null
  }
}`}
          </pre>

          <br />

          <h2>12. Connect Provider</h2>

          <p>src/main.jsx</p>

          <pre>
{`import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <Provider store={store}>
    <App />
  </Provider>

);`}
          </pre>

          <br />

          <h2>13. Products Component</h2>

          <p>src/components/Products.jsx</p>

          <pre>
{`import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchProducts
} from "../features/products/productsSlice";

import { useEffect } from "react";

function Products() {

  const dispatch = useDispatch();

  const {
    products,
    loading,
    error
  } = useSelector(
    state => state.products
  );

  useEffect(() => {

    dispatch(fetchProducts());

  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (

    <div>

      <h1>Products</h1>

      {products.map(product => (

        <div key={product.id}>

          <h3>
            {product.title}
          </h3>

          <p>
            ₹{product.price}
          </p>

        </div>

      ))}

    </div>

  );
}

export default Products;`}
          </pre>

          <br />

          <h2>14. App Component</h2>

          <p>src/App.jsx</p>

          <pre>
{`import Products from "./components/Products";

function App() {

  return (
    <main>

      <Products />

    </main>
  );
}

export default App;`}
          </pre>

          <br />

          <h2>15. Complete Async Flow</h2>

          <pre>
{`Component
    ↓
useEffect()
    ↓
dispatch(fetchProducts())
    ↓
createAsyncThunk
    ↓
API Request
    ↓
pending
    ↓
loading = true
    ↓
API Response
    ↓
-------------------------
↓                       ↓
fulfilled             rejected
↓                       ↓
products = data       error = message
loading = false       loading = false
    ↓                       ↓
Redux Store Updated
    ↓
useSelector()
    ↓
Component Re-renders`}
          </pre>

          <br />

          <h2>16. What happens during Loading?</h2>

          <pre>
{`Initial State:

products: []
loading: false
error: null


dispatch(fetchProducts())


        ↓


pending:

products: []
loading: true
error: null


        ↓


UI:

Loading...`}
          </pre>

          <br />

          <h2>17. What happens after Success?</h2>

          <pre>
{`API Response
     ↓
fulfilled
     ↓
action.payload
     ↓
state.products = action.payload
     ↓
loading = false
     ↓
UI shows products`}
          </pre>

          <br />

          <h2>18. What happens after Error?</h2>

          <pre>
{`API Request
     ↓
Error
     ↓
rejected
     ↓
state.error = message
     ↓
loading = false
     ↓
UI shows error`}
          </pre>

          <br />

          <h2>19. Simple Client State vs Async Redux</h2>

          <pre>
{`CLIENT-SIDE REDUX

UI
 ↓
dispatch(addToCart())
 ↓
Reducer
 ↓
Store
 ↓
UI


ASYNC REDUX

UI
 ↓
dispatch(fetchProducts())
 ↓
createAsyncThunk
 ↓
API
 ↓
pending
 ↓
fulfilled / rejected
 ↓
Reducer
 ↓
Store
 ↓
UI`}
          </pre>

          <br />

          <h2>20. Main Difference</h2>

          <pre>
{`Simple Client State
--------------------

No API
No network request
State exists in browser
createSlice is usually enough


Async Redux
--------------------

API / Server involved
Network request
Loading required
Error handling required
createAsyncThunk
extraReducers`}
          </pre>

          <br />

          <h2>21. Interview Answer</h2>

          <p>
            For simple client-side state like a cart or modal, Redux Toolkit's
            createSlice is usually enough. For asynchronous operations such as
            fetching data from an API, we can use createAsyncThunk and handle
            its pending, fulfilled and rejected states using extraReducers.
          </p>

          <br />

          <h2>22. Easy Formula to Remember</h2>

          <pre>
{`CLIENT STATE:

UI
 ↓
dispatch
 ↓
Slice Reducer
 ↓
Store
 ↓
UI


ASYNC STATE:

UI
 ↓
dispatch
 ↓
createAsyncThunk
 ↓
API
 ↓
pending
 ↓
fulfilled / rejected
 ↓
extraReducers
 ↓
Store
 ↓
UI`}
          </pre>

        </div>
      ),
    },
  ],
},
    {
      id:13,
      title:"Interview Questions",
      children:[
        {
          id:13.1,
          title:"Questions",
          content:(
        <div className="pagehead">
          <Link href="https://www.codebegun.com/interview/react/state-management" target='_blank'>Interview Questions</Link>
        </div>
          )
        },
         {
      id: 13.2,
      title: "If Context API Exists, Why Use Redux or Zustand?",
      content: (
        <div className="pagehead">
          <h2>Why not just use Context API?</h2>

          <p>
            Context API is useful when we want to share data between
            components without passing props manually.
          </p>

          <pre>
{`Context API
     ↓
Share values between components

Examples:
- Theme
- Language
- Logged-in user
- Simple application settings`}
          </pre>

          <p>
            But Context API does not provide features like a complete
            state-management library.
          </p>

          <h2>Redux / Redux Toolkit</h2>

          <pre>
{`Redux Toolkit
     ↓
Centralized state
     ↓
Actions
     ↓
Reducers
     ↓
Middleware
     ↓
DevTools
     ↓
Async logic
     ↓
Predictable state updates`}
          </pre>

          <p>
            Redux Toolkit is useful when the application has complex shared
            state and many components need to read and update that state.
          </p>

          <h2>Zustand</h2>

          <pre>
{`Zustand
     ↓
Simple global store
     ↓
Components subscribe to required state
     ↓
Less boilerplate than Redux`}
          </pre>

          <p>
            Zustand is useful when we need global state management but don't
            want the structure and boilerplate of Redux.
          </p>

          <h2>Important Interview Point</h2>

          <pre>
{`Context API ≠ Redux

Context API:
Mainly solves sharing data / avoiding prop drilling.

Redux Toolkit:
Full structured state-management solution.

Zustand:
Lightweight global state-management solution.`}
          </pre>

          <h2>Example</h2>

          <pre>
{`Small app:

Context API
   ↓
Theme
User
Language

Medium / complex app:

Redux Toolkit
   ↓
Auth
Cart
Products
Orders
User preferences
Complex async state

Simple global state:

Zustand
   ↓
Modal
Theme
Selected item
Filters
UI state`}
          </pre>

          <h2>Interview Answer</h2>

          <p>
            "Context API is mainly used to share data across components and
            avoid prop drilling. For simple global values, Context is enough.
            When the application has complex shared state, many state updates,
            async logic, middleware, debugging requirements, or predictable
            state transitions, Redux Toolkit can be a better choice. Zustand
            is another option when we want a simpler and lightweight global
            store with less boilerplate."
          </p>
        </div>
      )
    },

      ]
    }

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

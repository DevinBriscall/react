import React, { useState } from "react";

export default function ConceptsChecklist() {
	const [activeTab, setActiveTab] = useState("HTML"); // Track active tab

	return (
		<div className="container">
			{/* Tabs for each category */}
			<div className="tabs">
				{[
					"HTML",
					"CSS",
					"JavaScript",
					"React",
					"NextJS",
					"Git & GitHub",
					"General",
				].map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`tab-button ${activeTab === tab ? "active" : ""}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Content for each tab */}
			<div className="content">
				{activeTab === "HTML" && (
					<div className="explanation-box">
						<h3>HTML</h3>
						<ul>
							<li>
								<strong>Text</strong>: Use tags like <code>&lt;h1&gt;</code>,{" "}
								<code>&lt;p&gt;</code>, and <code>&lt;span&gt;</code> to
								structure text.
								<pre>
									{`<h1>Heading</h1>
<p>This is a paragraph.</p>
<span>Inline text</span>`}
								</pre>
							</li>
							<li>
								<strong>Images</strong>: Use the <code>&lt;img&gt;</code> tag
								with <code>src</code> and <code>alt</code> attributes.
								<pre>
									{`<img src="image.jpg" alt="Description of image" />`}
								</pre>
							</li>
							<li>
								<strong>Links</strong>: Use the <code>&lt;a&gt;</code> tag with{" "}
								<code>href</code> to create hyperlinks.
								<pre>{`<a href="https://example.com">Visit Example</a>`}</pre>
							</li>
							<li>
								<strong>Inputs & Forms</strong>: Use <code>&lt;input&gt;</code>,{" "}
								<code>&lt;textarea&gt;</code>, and <code>&lt;form&gt;</code>{" "}
								tags to create user inputs.
								<pre>
									{`<form>
  <input type="text" placeholder="Enter your name" />
  <textarea placeholder="Enter your message"></textarea>
  <button type="submit">Submit</button>
</form>`}
								</pre>
							</li>
							<li>
								<strong>JSX</strong>: HTML-like syntax used in React components.
								<pre>
									{`function App() {
  return <h1>Hello, World!</h1>;
}`}
								</pre>
							</li>
							<li>
								<strong>Font Awesome Icons</strong>: Use the Font Awesome
								library to add icons to your project.
								<pre>{`<FontAwesomeIcon icon={faArrowLeft}/>`}</pre>
							</li>
						</ul>
					</div>
				)}

				{activeTab === "CSS" && (
					<div className="explanation-box">
						<h3>CSS</h3>
						<ul>
							<li>
								<strong>Syntax</strong>: Learn how to write CSS rules using
								selectors and declarations.
								<pre>
									{`p {
  color: red;
  font-size: 16px;
}`}
								</pre>
							</li>
							<li>
								<strong>Selectors</strong>:
								<ul>
									<li>
										<strong>Element Selectors</strong>: Target HTML elements
										(e.g., <code>p &#123; color: red; &#125;</code>).
									</li>
									<li>
										<strong>Class Selector</strong>: Target elements with a
										specific class (e.g., <code>.my-class &#123; &#125;</code>).
										<pre>
											{`.my-class {
  background-color: yellow;
}`}
										</pre>
									</li>
									<li>
										<strong>ID Selector</strong>: Target a single element with a
										unique ID (e.g., <code>#my-id &#123; &#125;</code>).
										<pre>
											{`#my-id {
  font-weight: bold;
}`}
										</pre>
									</li>
									<li>
										<strong>Descendant Selector</strong>: Target nested elements
										(e.g., <code>div p &#123; &#125;</code>).
										<pre>
											{`div p {
  margin: 10px;
}`}
										</pre>
									</li>
									<li>
										<strong>Pseudo-selectors</strong>: Use <code>:hover</code>,{" "}
										<code>:focus</code>, etc., to style elements based on state.
										<pre>
											{`button:hover {
  background-color: blue;
}`}
										</pre>
									</li>
								</ul>
							</li>
							<li>
								<strong>Specificity</strong>: Understand how CSS determines
								which styles to apply when rules conflict.
								<pre>
									{`/* Specificity: ID > Class > Element */
#my-id { color: red; } /* Wins */
.my-class { color: blue; }
p { color: green; }`}
								</pre>
							</li>
							<li>
								<strong>The Box Model</strong>: Learn about <code>margin</code>,{" "}
								<code>padding</code>, <code>border</code>, and{" "}
								<code>content</code>.
								<pre>
									{`.box {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}`}
								</pre>
							</li>
							<li>
								<strong>Display Modes</strong>:
								<ul>
									<li>
										<strong>Block</strong>: Elements take up the full width
										(e.g., <code>div</code>).
										<pre>
											{`div {
  display: block;
}`}
										</pre>
									</li>
									<li>
										<strong>Flex</strong>: Use <code>display: flex</code> for
										flexible layouts.
										<pre>
											{`.container {
  display: flex;
  justify-content: center;
}`}
										</pre>
									</li>
									<li>
										<strong>Grid</strong>: Use <code>display: grid</code> for
										two-dimensional layouts.
										<pre>
											{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`}
										</pre>
									</li>
								</ul>
							</li>
							<li>
								<strong>Position</strong>:
								<ul>
									<li>
										<strong>Relative</strong>: Position relative to its normal
										position.
										<pre>
											{`.relative {
  position: relative;
  top: 10px;
}`}
										</pre>
									</li>
									<li>
										<strong>Absolute</strong>: Position relative to its nearest
										positioned ancestor.
										<pre>
											{`.absolute {
  position: absolute;
  top: 0;
  left: 0;
}`}
										</pre>
									</li>
									<li>
										<strong>Fixed</strong>: Position relative to the viewport.
										<pre>
											{`.fixed {
  position: fixed;
  top: 0;
}`}
										</pre>
									</li>
									<li>
										<strong>Sticky</strong>: Toggles between relative and fixed
										based on scroll position.
										<pre>
											{`.sticky {
  position: sticky;
  top: 0;
}`}
										</pre>
									</li>
								</ul>
							</li>
							<li>
								<strong>Media Queries</strong>: Use <code>@media</code> to apply
								styles based on screen size.
								<pre>
									{`@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}
								</pre>
							</li>
						</ul>
					</div>
				)}

				{activeTab === "JavaScript" && (
					<div className="explanation-box">
						<h3>JavaScript</h3>
						<ul>
							<li>
								<strong>Variables</strong>: Use <code>let</code>,{" "}
								<code>const</code>, and <code>var</code> to declare variables.
								<pre>
									{`let name = "John";
const age = 25;
var isStudent = true;`}
								</pre>
							</li>
							<li>
								<strong>Loops</strong>:
								<ul>
									<li>
										<strong>.map()</strong>: Transform arrays into new arrays.
										<pre>
											{`const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);`}
										</pre>
									</li>
									<li>
										<strong>.forEach()</strong>: Iterate over arrays without
										returning a new array.
										<pre>{`numbers.forEach(num => console.log(num));`}</pre>
									</li>
									<li>
										<strong>Traditional for loops</strong>: Use{" "}
										<code>for (let i = 0; i &lt; length; i++)</code>.
										<pre>
											{`for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}`}
										</pre>
									</li>
								</ul>
							</li>
							<li>
								<strong>Data Types</strong>: Learn about strings, numbers,
								booleans, objects, arrays, etc.
								<pre>
									{`const name = "John"; // String
const age = 25; // Number
const isStudent = true; // Boolean
const person = { name: "John", age: 25 }; // Object
const numbers = [1, 2, 3]; // Array`}
								</pre>
							</li>
							<li>
								<strong>Conditionals</strong>:
								<ul>
									<li>
										<strong>If/else</strong>: Execute code based on conditions.
										<pre>
											{`if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}
										</pre>
									</li>
									<li>
										<strong>Ternary operator</strong>: Shorthand for{" "}
										<code>if/else</code> (e.g.,{" "}
										<code>condition ? true : false</code>).
										<pre>{`const status = age > 18 ? "Adult" : "Minor";`}</pre>
									</li>
								</ul>
							</li>
							<li>
								<strong>Arrays</strong>: Store and manipulate lists of data.
								<pre>
									{`const fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // Add item
fruits.pop(); // Remove last item`}
								</pre>
							</li>
							<li>
								<strong>Objects</strong>: Store key-value pairs for structured
								data.
								<pre>
									{`const person = {
  name: "John",
  age: 25,
  isStudent: true
};
console.log(person.name); // Access property`}
								</pre>
							</li>
							<li>
								<strong>Functions</strong>: Reusable blocks of code.
								<pre>
									{`function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John"));`}
								</pre>
							</li>
							<li>
								<strong>Imports & Exports (ES6)</strong>: Use{" "}
								<code>import</code> and <code>export</code> to modularize code.
								<pre>
									{`// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math';
console.log(add(2, 3));`}
								</pre>
							</li>
							<li>
								<strong>Fetch API</strong>: Make HTTP requests to APIs.
								<pre>
									{`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`}
								</pre>
							</li>
						</ul>
					</div>
				)}

				{activeTab === "React" && (
					<div className="explanation-box">
						<h3>React</h3>
						<ul>
							<li>
								<strong>Components</strong>: Build reusable UI pieces.
								<pre>
									{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
								</pre>
							</li>
							<li>
								<strong>Props</strong>: Pass data between components.
								<pre>{`<Welcome name="John" />`}</pre>
							</li>
							<li>
								<strong>Conditional Rendering</strong>: Render components based
								on conditions.
								<pre>
									{`function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
}`}
								</pre>
							</li>
							<li>
								<strong>Rendering Lists with .map()</strong>: Use{" "}
								<code>.map()</code> to render lists of components.
								<pre>
									{`const numbers = [1, 2, 3];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);`}
								</pre>
							</li>
							<li>
								<strong>useState</strong>: Manage state in functional
								components.
								<pre>
									{`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}
								</pre>
							</li>
							<li>
								<strong>useEffect</strong>: Handle side effects like data
								fetching.
								<pre>
									{`useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);`}
								</pre>
							</li>
							<li>
								<strong>Event Binding</strong>: Use <code>onClick</code>,{" "}
								<code>onSubmit</code>, and <code>onChange</code> to handle
								events.
								<pre>
									{`function handleClick() {
  alert("Button clicked!");
}
<button onClick={handleClick}>Click me</button>`}
								</pre>
							</li>
							<li>
								<strong>Forms in React</strong>: Use onSubmit for form handling.
								<pre>
									{`import React from 'react';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access form data directly from the event target
    const formData = new FormData(event.target);
    const name = formData.get('name');

    // Do something with the form data, e.g., send it to an API
    console.log('Submitted name:', name);

    // Optionally, you can reset the form after submission
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name" // Add a name attribute to access the value in FormData
        defaultValue="" // Use defaultValue instead of value to make the input uncontrolled
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;`}
								</pre>
							</li>
							<li>
								<strong>Client-side Data Fetching</strong>: Fetch data in React
								components.
								<pre>
									{`function DataFetching() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return <div>{data ? data.message : "Loading..."}</div>;
}`}
								</pre>
							</li>
						</ul>
					</div>
				)}

				{activeTab === "NextJS" && (
					<div className="explanation-box">
						<h3>NextJS</h3>
						<ul>
							<li>
								<strong>Project Structure</strong>: Understand the folder and
								file structure of a NextJS app.
								<pre>
									{`pages/
  index.js
  about.js
  [slug].js
public/
  images/
  favicon.ico
styles/
  globals.css`}
								</pre>
							</li>
							<li>
								<strong>getServerSideProps</strong>: Fetch data on the server
								side.
								<pre>
									{`export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}`}
								</pre>
							</li>
							<li>
								<strong>Dynamic Routing</strong>: Create dynamic routes using{" "}
								<code>[slug].js</code>.
								<pre>
									{`// pages/[slug].js
export default function Page({ slug }) {
  return <h1>Slug: {slug}</h1>;
}

export async function getServerSideProps({ params }) {
  return { props: { slug: params.slug } };
}`}
								</pre>
							</li>
						</ul>
					</div>
				)}

				{activeTab === "Git & GitHub" && (
					<div className="explanation-box">
						<h3>Git & GitHub</h3>
						<ul>
							<li>
								<strong>VSCode GUI</strong>: Use the VSCode interface for Git
								operations.
							</li>
							<li>
								<strong>Staging Changes</strong>: Use <code>git add</code> to
								stage changes.
								<pre>{`git add .`}</pre>
							</li>
							<li>
								<strong>Committing Changes</strong>: Use <code>git commit</code>{" "}
								to save changes.
								<pre>{`git commit -m "Your commit message"`}</pre>
							</li>
							<li>
								<strong>Pushing Changes</strong>: Use <code>git push</code> to
								upload changes to GitHub.
								<pre>{`git push origin main`}</pre>
							</li>
							<li>
								<strong>Creating Branches</strong>: Use <code>git branch</code>{" "}
								to create new branches.
								<pre>{`git branch new-feature`}</pre>
							</li>
							<li>
								<strong>Pull Requests</strong>: Create PRs to merge branches.
							</li>
							<li>
								<strong>Switching Branches</strong>: Use{" "}
								<code>git checkout</code> to switch branches.
								<pre>{`git checkout new-feature`}</pre>
							</li>
							<li>
								<strong>Merging Branches</strong>: Use <code>git merge</code> to
								combine branches.
								<pre>{`git merge new-feature`}</pre>
							</li>
							<li>
								<strong>Merge Conflicts</strong>: Resolve conflicts when merging
								branches.
							</li>
						</ul>
					</div>
				)}

				{activeTab === "General" && (
					<div className="explanation-box">
						<h3>General</h3>
						<ul>
							<li>
								<strong>HTTP Methods</strong>: Learn about <code>GET</code>,{" "}
								<code>POST</code>, <code>DELETE</code>, and <code>PUT</code>.
								<pre>
									{`GET /users - Fetch all users
POST /users - Create a new user
PUT /users/1 - Update user with ID 1
DELETE /users/1 - Delete user with ID 1`}
								</pre>
							</li>
							<li>
								<strong>Postman</strong>: Use Postman to test APIs.
							</li>
							<li>
								<strong>VSCode</strong>: Learn keyboard shortcuts and
								extensions.
							</li>
							<li>
								<strong>Terminal Commands</strong>:
								<ul>
									<li>
										<code>cd</code>: Change directory.
										<pre>{`cd my-folder`}</pre>
									</li>
									<li>
										<code>ls</code>: List files in a directory.
										<pre>{`ls`}</pre>
									</li>
								</ul>
							</li>
							<li>
								<strong>npm</strong>: Use npm to manage packages.
								<pre>{`npm install react`}</pre>
							</li>
						</ul>
					</div>
				)}
			</div>

			{/* Styling */}
			<style jsx>{`
				.container {
					max-width: 1200px;
					margin: 0 auto;
					padding: 2rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1.5rem;
					font-family: Arial, sans-serif;
				}

				.tabs {
					display: flex;
					flex-wrap: wrap;
					gap: 0.5rem;
					margin-bottom: 1rem;
					justify-content: center;
				}

				.tab-button {
					padding: 0.5rem 1rem;
					background-color: #f0f0f0;
					border: none;
					border-radius: 4px;
					cursor: pointer;
					transition: background-color 0.3s ease;
					font-size: 0.9rem;
				}

				.tab-button.active {
					background-color: #0070f3;
					color: white;
				}

				.tab-button:hover {
					background-color: #005bb5;
					color: white;
				}

				.content {
					width: 100%;
					max-width: 800px;
				}

				.explanation-box {
					background-color: #f9f9f9;
					padding: 1.5rem;
					border-radius: 8px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}

				.explanation-box ul {
					list-style-type: disc;
					padding-left: 1.5rem;
				}

				.explanation-box li {
					margin-bottom: 0.5rem;
				}

				pre {
					background-color: #282c34;
					color: #abb2bf;
					padding: 1rem;
					border-radius: 4px;
					overflow-x: auto;
					font-family: "Courier New", Courier, monospace;
					margin: 1rem 0;
				}
			`}</style>
		</div>
	);
}

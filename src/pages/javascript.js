import React, { useState } from "react";

export default function JavaScriptFundamentals() {
	const [activeTab, setActiveTab] = useState("Variables"); // Track active tab
	const [count, setCount] = useState(0); // For interactive examples

	return (
		<div className="container">
			{/* Tabs for each JavaScript concept */}
			<div className="tabs">
				{["Variables", "Functions", "Arrays", "Objects", "Loops"].map((tab) => (
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
				{activeTab === "Variables" && (
					<div className="explanation-box">
						<h3>Variables</h3>
						<p>
							<strong>Variables</strong> are used to store data in JavaScript.
							You can declare variables using <code>let</code>,{" "}
							<code>const</code>, or <code>var</code>.
						</p>
						<pre>
							{`let name = "John"; // Mutable
const age = 25; // Immutable
var isOld = false; // Avoid using var`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>let</code> for values that change and{" "}
								<code>const</code> for values that don&apos;t.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Functions" && (
					<div className="explanation-box">
						<h3>Functions</h3>
						<p>
							<strong>Functions</strong> are reusable blocks of code that
							perform a specific task. They can be declared using the{" "}
							<code>function</code> keyword or as arrow functions.
						</p>
						<pre>
							{`// Function Declaration
function greet(name) {
	return "Hello, " + name;
}

// Arrow Function
const greet = (name) => "Hello, " + name;`}
						</pre>
					</div>
				)}

				{activeTab === "Arrays" && (
					<div className="explanation-box">
						<h3>Arrays</h3>
						<p>
							<strong>Arrays</strong> are used to store multiple values in a
							single variable. You can access and manipulate array elements
							using methods like <code>map</code>, <code>filter</code>, and{" "}
							<code>reduce</code>.
						</p>
						<pre>
							{`const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Apple

// Adding elements
fruits.push("Orange");

// Mapping over an array
const fruitList = fruits.map((fruit) => <li>{fruit}</li>);`}
						</pre>
						<div className="visual-cue">
							<p>
								Arrays are powerful for storing and manipulating lists of data.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Objects" && (
					<div className="explanation-box">
						<h3>Objects</h3>
						<p>
							<strong>Objects</strong> are collections of key-value pairs. They
							are used to store structured data and can be accessed using dot
							notation or bracket notation.
						</p>
						<pre>
							{`const person = {
	name: "John",
	age: 25,
	isEmployed: true,
};

// Accessing properties
console.log(person.name); // John

// Adding properties
person.job = "Developer";`}
						</pre>
						<div className="visual-cue">
							<p>
								Objects are great for organizing related data into a single
								structure.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Loops" && (
					<div className="explanation-box">
						<h3>Loops</h3>
						<p>
							<strong>Loops</strong> are used to repeat a block of code. Common
							loops in JavaScript include <code>for</code>, <code>while</code>,
							and <code>forEach</code>.
						</p>
						<pre>
							{`// For Loop
for (let i = 0; i < 5; i++) {
	console.log(i);
}

// While Loop
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}

// forEach Loop
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num));`}
						</pre>
						<div className="visual-cue">
							<p>
								Loops are essential for iterating over data structures like
								arrays and objects.
							</p>
						</div>
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

				.visual-cue {
					background-color: #e0f7fa;
					padding: 0.75rem;
					border-radius: 4px;
					margin-top: 1rem;
					text-align: center;
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

				.interactive-ui {
					text-align: center;
					margin-top: 2rem;
					padding: 1.5rem;
					border: 4px solid transparent;
					border-radius: 12px;
					background-color: #ffffff;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				}

				.button {
					padding: 10px 20px;
					font-size: 1rem;
					font-weight: bold;
					color: white;
					background-color: #0070f3;
					border: none;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s ease;
				}

				.button:hover {
					background-color: #005bb5;
				}
			`}</style>
		</div>
	);
}

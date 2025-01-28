import React, { useState } from "react";

export default function DebuggingTechniques() {
	const [activeTab, setActiveTab] = useState("Console Debugging"); // Track active tab

	return (
		<div className="container mx-auto p-8">
			{/* Tabs for each debugging technique */}
			<div className="flex flex-wrap gap-2 justify-center mb-4">
				{[
					"Console Debugging",
					"React DevTools",
					"Debugging Next.js",
					"Common JavaScript Errors",
				].map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 py-2 rounded-md transition-colors ${
							activeTab === tab
								? "bg-blue-600 text-white"
								: "bg-gray-200 hover:bg-gray-300"
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Content for each tab */}
			<div className="max-w-3xl mx-auto">
				{activeTab === "Console Debugging" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">Console Debugging</h3>
						<p className="mb-4">
							The <strong>console</strong> is one of the most powerful tools for
							debugging JavaScript applications. Use methods like{" "}
							<code>console.log()</code>, <code>console.error()</code>, and{" "}
							<code>console.warn()</code> to inspect values and track execution.
						</p>
						<pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
							{`// Example of console debugging
const user = { name: "John", age: 30 };
console.log("User:", user);
console.error("This is an error message");
console.warn("This is a warning message");`}
						</pre>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Use <code>console.table()</code> for arrays and objects to
								display data in a tabular format.
							</p>
						</div>
					</div>
				)}

				{activeTab === "React DevTools" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">React DevTools</h3>
						<p className="mb-4">
							<strong>React DevTools</strong> is a browser extension that allows
							you to inspect the React component tree, props, state, and hooks.
							It&apos;s essential for debugging React applications.
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li className="mb-2">
								Install the{" "}
								<a
									href="https://react.devtools"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									React DevTools extension
								</a>{" "}
								for Chrome or Firefox.
							</li>
							<li className="mb-2">
								Inspect component props, state, and hooks in the browser&apos;s
								developer tools.
							</li>
							<li className="mb-2">
								Use the <strong>Profiler</strong> to identify performance
								bottlenecks.
							</li>
						</ul>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								React DevTools is a must-have tool for debugging React
								applications.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Debugging Next.js" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">Debugging Next.js</h3>
						<p className="mb-4">
							Debugging Next.js applications involves understanding both client
							and server-side code. Use the following techniques:
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li className="mb-2">
								<strong>Server-Side Debugging:</strong> Use{" "}
								<code>console.log()</code> in API routes or{" "}
								<code>getServerSideProps</code> and check the terminal output.
							</li>
							<li className="mb-2">
								<strong>Client-Side Debugging:</strong> Use browser developer
								tools to debug client-side code.
							</li>
						</ul>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Next.js provides built-in support for debugging both client and
								server-side code.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Common JavaScript Errors" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">
							Common JavaScript Errors
						</h3>
						<p className="mb-4">
							Here are some common JavaScript errors and how to fix them:
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li className="mb-2">
								<strong>Undefined is not a function:</strong> Check if the
								function exists and is correctly defined.
							</li>
							<li className="mb-2">
								<strong>Cannot read property of undefined:</strong> Ensure the
								object is initialized before accessing its properties.
							</li>
							<li className="mb-2">
								<strong>Unexpected token:</strong> Check for syntax errors in
								your code.
							</li>
						</ul>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Always validate your code and use tools like ESLint to catch
								errors early.
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

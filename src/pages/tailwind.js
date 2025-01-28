import React, { useState } from "react";

export default function TailwindFundamentals() {
	const [activeTab, setActiveTab] = useState("Introduction"); // Track active tab

	return (
		<div className="container mx-auto p-8">
			{/* Tabs for each Tailwind CSS concept */}
			<div className="flex flex-wrap gap-2 justify-center mb-4">
				{[
					"Introduction",
					"Utility-First",
					"Responsive Design",
					"Customization",
					"Docs & Autocomplete", // New tab
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
				{activeTab === "Introduction" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">
							Introduction to Tailwind CSS
						</h3>
						<p className="mb-4">
							<strong>Tailwind CSS</strong> is a utility-first CSS framework
							that provides low-level utility classes to build designs directly
							in your markup. It allows for rapid UI development without writing
							custom CSS.
						</p>
						<pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
							{`<!-- Example of Tailwind CSS in action -->
<div class="bg-blue-500 text-white p-4 rounded-lg">
	Hello, Tailwind CSS!
</div>`}
						</pre>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Use utility classes like <code>bg-blue-500</code> and{" "}
								<code>text-white</code> to style elements directly.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Utility-First" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">Utility-First Approach</h3>
						<p className="mb-4">
							Tailwind CSS uses a <strong>utility-first</strong> approach,
							meaning you apply small, single-purpose classes directly in your
							HTML to style elements.
						</p>
						<pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
							{`<!-- Example of utility classes -->
<div class="flex justify-center items-center h-screen bg-gray-100">
	<div class="bg-white p-8 rounded-lg shadow-lg">
		<h1 class="text-2xl font-bold mb-4">Utility-First Design</h1>
		<p class="text-gray-700">This is a simple example of Tailwind CSS.</p>
	</div>
</div>`}
						</pre>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Combine utility classes like <code>flex</code>,{" "}
								<code>justify-center</code>, and <code>bg-white</code> to create
								complex layouts.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Responsive Design" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">Responsive Design</h3>
						<p className="mb-4">
							Tailwind CSS makes it easy to build responsive designs using
							<strong> breakpoint prefixes</strong>. You can apply styles
							conditionally based on screen size.
						</p>
						<pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
							{`<!-- Responsive design example -->
<div class="text-center sm:text-left md:text-right lg:text-center xl:text-justify">
	This text changes alignment based on screen size.
</div>`}
						</pre>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Use prefixes like <code>sm:</code>, <code>md:</code>, and{" "}
								<code>lg:</code> to control styles at different breakpoints.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Customization" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">Customization</h3>
						<p className="mb-4">
							Tailwind CSS is highly customizable. You can configure colors,
							fonts, breakpoints, and more in the{" "}
							<code>tailwind.config.js</code> file.
						</p>
						<pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
							{`// Example of customizing Tailwind CSS
module.exports = {
	theme: {
		extend: {
			colors: {
				'custom-blue': '#1fb6ff',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
};`}
						</pre>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Extend Tailwind&apos;s default configuration to match your
								design system.
							</p>
						</div>
					</div>
				)}

				{/* New Tab: Docs & Autocomplete */}
				{activeTab === "Docs & Autocomplete" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-2xl font-bold mb-4">
							Using Tailwind Docs & Autocomplete
						</h3>
						<p className="mb-4">
							Tailwind CSS provides excellent documentation and autocomplete
							support in modern code editors. Here&apos;s how to make the most
							of these tools:
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li className="mb-2">
								<strong>Tailwind Docs:</strong> The official{" "}
								<a
									href="https://tailwindcss.com/docs"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									Tailwind CSS documentation
								</a>{" "}
								is comprehensive and searchable. Use it to quickly find utility
								classes and their usage.
							</li>
							<li className="mb-2">
								<strong>Editor Autocomplete:</strong> If you&apos;re using VS
								Code, install the{" "}
								<a
									href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									Tailwind CSS IntelliSense extension
								</a>
								. It provides autocomplete suggestions for Tailwind classes as
								you type.
							</li>
							<li className="mb-2">
								<strong>Search for Classes:</strong> If you&apos;re unsure which
								class to use, type a keyword (e.g., &quot;flex&quot;) in the
								docs search bar or your editor&apos;s autocomplete to see
								relevant options.
							</li>
						</ul>
						<div className="bg-blue-50 p-4 rounded-md mt-4 text-center">
							<p>
								Leverage the docs and autocomplete to speed up your development
								workflow!
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

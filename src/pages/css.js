import React, { useState } from "react";

export default function CSSFundamentals() {
	const [activeTab, setActiveTab] = useState("Selectors"); // Track active tab

	return (
		<div className="container">
			{/* Tabs for each CSS concept */}
			<div className="tabs">
				{["Selectors", "Position", "Flexbox", "Grid"].map((tab) => (
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
				{activeTab === "Selectors" && (
					<div className="explanation-box">
						<h3>CSS Selectors</h3>
						<p>
							<strong>CSS Selectors</strong> are used to target HTML elements
							and apply styles. Common selectors include element selectors,
							class selectors, ID selectors, and pseudo-classes.
						</p>
						<pre>
							{`/* Element Selector */
p {
	color: blue;
}

/* Class Selector */
.text-center {
	text-align: center;
}

/* ID Selector */
#header {
	background-color: #333;
}

/* Pseudo-class */
a:hover {
	color: red;
}`}
						</pre>
						<div className="visual-cue">
							<p>
								Use the right selector to target elements efficiently and avoid
								overly specific rules.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Position" && (
					<div className="explanation-box">
						<h3>CSS Position</h3>
						<p>
							<strong>CSS Position</strong> determines how an element is
							positioned in the document. Here’s a detailed explanation of the
							five main position values:
						</p>

						<h4>
							1. Static (<code>position: static</code>)
						</h4>
						<p>
							- <strong>Default Behavior</strong>: Every element has{" "}
							<code>position: static</code> by default.
							<br />- <strong>How It Works</strong>: The element is positioned
							according to the normal flow of the document. It ignores{" "}
							<code>top</code>, <code>bottom</code>, <code>left</code>, and{" "}
							<code>right</code> properties.
							<br />- <strong>Use Case</strong>: Use this when you don’t need to
							change the element’s position.
						</p>
						<pre>
							{`.box {
	position: static; /* Default, no special positioning */
}`}
						</pre>

						<h4>
							2. Relative (<code>position: relative</code>)
						</h4>
						<p>
							- <strong>Behavior</strong>: The element is positioned relative to
							its normal position in the document flow.
							<br />- <strong>How It Works</strong>: You can use{" "}
							<code>top</code>, <code>bottom</code>, <code>left</code>, and{" "}
							<code>right</code> to offset the element from its original
							position. Other elements will not adjust to fill the gap left by
							the moved element.
							<br />- <strong>Use Case</strong>: Use this when you want to nudge
							an element slightly without affecting the layout of other
							elements.
						</p>
						<pre>
							{`.box {
	position: relative;
	top: 10px; /* Move 10px down from its original position */
	left: 20px; /* Move 20px right from its original position */
}`}
						</pre>

						<h4>
							3. Absolute (<code>position: absolute</code>)
						</h4>
						<p>
							- <strong>Behavior</strong>: The element is removed from the
							normal document flow and positioned relative to its nearest
							positioned ancestor (an ancestor with <code>position</code> set to{" "}
							<code>relative</code>, <code>absolute</code>, <code>fixed</code>,
							or <code>sticky</code>). If no such ancestor exists, it’s
							positioned relative to the <code>&lt;html&gt;</code> element.
							<br />- <strong>How It Works</strong>: Use <code>top</code>,{" "}
							<code>bottom</code>, <code>left</code>, and <code>right</code> to
							position the element. Other elements will behave as if the
							absolutely positioned element doesn’t exist.
							<br />- <strong>Use Case</strong>: Use this for overlays, modals,
							or elements that need to be placed precisely within a container.
						</p>
						<pre>
							{`.container {
	position: relative; /* Make this the reference point */
}

.box {
	position: absolute;
	top: 0; /* Stick to the top of the container */
	left: 0; /* Stick to the left of the container */
}`}
						</pre>

						<h4>
							4. Fixed (<code>position: fixed</code>)
						</h4>
						<p>
							- <strong>Behavior</strong>: The element is removed from the
							normal document flow and positioned relative to the viewport (the
							browser window). It stays in the same place even when the page is
							scrolled.
							<br />- <strong>How It Works</strong>: Use <code>top</code>,{" "}
							<code>bottom</code>, <code>left</code>, and <code>right</code> to
							position the element relative to the viewport.
							<br />- <strong>Use Case</strong>: Use this for sticky headers,
							footers, or elements that need to stay visible while scrolling.
						</p>
						<pre>
							{`.navbar {
	position: fixed;
	top: 0; /* Stick to the top of the viewport */
	left: 0; /* Stick to the left of the viewport */
	width: 100%; /* Span the entire width */
}`}
						</pre>

						<h4>
							5. Sticky (<code>position: sticky</code>)
						</h4>
						<p>
							- <strong>Behavior</strong>: The element is treated as{" "}
							<code>relative</code> until it crosses a specified threshold
							(e.g., <code>top: 0</code>), at which point it becomes{" "}
							<code>fixed</code>.
							<br />- <strong>How It Works</strong>: Use <code>top</code>,{" "}
							<code>bottom</code>, <code>left</code>, or <code>right</code> to
							define the threshold. The element will scroll normally until it
							reaches the threshold, then stick in place.
							<br />- <strong>Use Case</strong>: Use this for sticky headers,
							table headers, or sidebars that should stick after scrolling past
							a certain point.
						</p>
						<pre>
							{`.header {
	position: sticky;
	top: 0; /* Stick to the top of the viewport when scrolled */
}`}
						</pre>

						<div className="visual-cue">
							<p>
								Use <code>position</code> to control the layout and stacking of
								elements.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Flexbox" && (
					<div className="explanation-box">
						<h3>Flexbox</h3>
						<p>
							<strong>Flexbox</strong> is a layout model that allows you to
							design flexible and responsive layouts. It works with a container
							and its child items.
						</p>
						<pre>
							{`/* Flex Container */
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
}

/* Flex Items */
.item {
	flex: 1;
	background-color: #f0f0f0;
	padding: 10px;
}`}
						</pre>
						<div className="visual-cue">
							<p>
								Flexbox is perfect for creating one-dimensional layouts (rows or
								columns).
							</p>
						</div>
					</div>
				)}

				{activeTab === "Grid" && (
					<div className="explanation-box">
						<h3>CSS Grid</h3>
						<p>
							<strong>CSS Grid</strong> is a powerful layout system for creating
							two-dimensional layouts. It uses rows and columns to structure
							content.
						</p>
						<pre>
							{`/* Grid Container */
.container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
}

/* Grid Items */
.item {
	background-color: #f0f0f0;
	padding: 10px;
	text-align: center;
}`}
						</pre>
						<div className="visual-cue">
							<p>
								Grid is ideal for complex layouts that require precise control
								over rows and columns.
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
			`}</style>
		</div>
	);
}

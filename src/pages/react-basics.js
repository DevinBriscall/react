import React, { useState, useEffect } from "react";
import Balance from "@/components/Balance";
import Link from "next/link";

export default function Basics() {
	const [value, setValue] = useState(0);
	const [activeTab, setActiveTab] = useState("useState"); // Track active tab

	const colours = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"indigo",
		"violet",
	];

	useEffect(() => {
		if (value === 0) return;

		// Calculate the color index based on the current value
		const colorIndex = (value - 1) % colours.length;

		// Apply a colorful border effect to the interactive UI
		const interactiveUI = document.querySelector(".interactive-ui");
		if (interactiveUI) {
			interactiveUI.style.border = `4px solid ${colours[colorIndex]}`;
			interactiveUI.style.transition = "border 0.3s ease";
		}

		// Cleanup: Reset the border when the component unmounts
		return () => {
			if (interactiveUI) {
				interactiveUI.style.border = "4px solid transparent";
			}
		};
	}, [value]);

	return (
		<div className="container">
			{/* Tabs for each concept */}
			<div className="tabs">
				{[
					"useState",
					"useEffect",
					"map",
					"Conditional Rendering",
					"Components",
					"Styled JSX",
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
				{activeTab === "useState" && (
					<div className="explanation-box">
						<h3>useState</h3>
						<p>
							<strong>useState</strong> is a React hook that allows you to add
							state to functional components. In this example,{" "}
							<code>value</code> is the state variable, and{" "}
							<code>setValue</code> is the function used to update it.
						</p>
						<pre>
							{`const [value, setValue] = useState(0);

<button onClick={() => setValue(value + 1)}>
	Click me
</button>`}
						</pre>
						<div className="visual-cue">
							<p>
								Try clicking the button to see the <code>value</code> update!
							</p>
						</div>
					</div>
				)}

				{activeTab === "useEffect" && (
					<div className="explanation-box">
						<h3>useEffect</h3>
						<p>
							<strong>useEffect</strong> is a React hook that runs side effects
							after the component renders. In this example, it applies a
							colorful border effect to the interactive UI whenever the{" "}
							<code>value</code> changes.
						</p>
						<pre>
							{`useEffect(() => {
	if (value === 0) return;

	const colorIndex = (value - 1) % colours.length;
	const interactiveUI = document.querySelector(".interactive-ui");
	if (interactiveUI) {
		interactiveUI.style.border = \`4px solid \${colours[colorIndex]}\`;
		interactiveUI.style.transition = "border 0.3s ease";
	}

	return () => {
		if (interactiveUI) {
			interactiveUI.style.border = "4px solid transparent";
		}
	};
}, [value]);`}
						</pre>
						<div className="visual-cue">
							<p>Watch the border color change as you click the button!</p>
						</div>
					</div>
				)}

				{activeTab === "map" && (
					<div className="explanation-box">
						<h3>Array.map()</h3>
						<p>
							The <strong>map</strong> method is used to iterate over an array
							and render a list of elements. In this example, it renders a grid
							of colors from the <code>colours</code> array.
						</p>
						<pre>
							{`const colours = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"indigo",
	"violet",
];

{colours.map((colour, index) => (
	<div
		key={index}
		className="color-box"
		style={{ backgroundColor: colour }}
	>
		{colour}
	</div>
))}`}
						</pre>
						<div className="color-grid">
							{colours.map((colour, index) => (
								<div
									key={index}
									className="color-box"
									style={{ backgroundColor: colour }}
								>
									{colour}
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "Conditional Rendering" && (
					<div className="explanation-box">
						<h3>Conditional Rendering</h3>
						<p>
							<strong>Conditional rendering</strong> allows you to render
							different content based on certain conditions. In this example,
							the message changes depending on the value of <code>value</code>.
						</p>
						<pre>
							{`{value === 0 ? (
	<p>Click the button to increase the value.</p>
) : (
	<p>You're doing great! Keep clicking!</p>
)}
{value >= 10 && <p>Okay, please stop! That tickles! 😄</p>}`}
						</pre>
						<div className="message">
							{value === 0 ? (
								<p>
									Click the button to increase the value and see magic happen!
								</p>
							) : (
								<p>You&apos;re doing great! Keep clicking!</p>
							)}
							{value >= 10 && (
								<p className="tickle-message">
									Okay, please stop! That tickles! 😄
								</p>
							)}
						</div>
					</div>
				)}

				{activeTab === "Components" && (
					<div className="explanation-box">
						<h3>Component</h3>
						<p>
							<strong>Components</strong> are reusable pieces of UI. In this
							example, the <code>Balance</code> component is used to display the
							current <code>value</code> in a formatted way.
						</p>
						<pre>
							{`import Balance from "@/components/Balance";

<Balance balance={value} />`}
						</pre>
						<div className="balance-container">
							<h3>Balance Component:</h3>
							<Balance balance={value} />
						</div>
					</div>
				)}

				{activeTab === "Styled JSX" && (
					<div className="explanation-box">
						<h3>Styled JSX</h3>
						<p>
							<strong>Styled JSX</strong> is a CSS-in-JS solution for Next.js.
							It allows you to write scoped styles directly in your components.
						</p>
						<pre>
							{`<style jsx>{\`
	.container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		font-family: Arial, sans-serif;
	}
\`}</style>`}
						</pre>
						<div className="visual-cue">
							<a
								href={
									"https://github.com/DevinBriscall/react/blob/main/src/pages/react-basics.js"
								}
							>
								Check the styles applied to this page!
							</a>
						</div>
					</div>
				)}
			</div>

			{/* Interactive UI */}
			<div className="interactive-ui">
				<div className="value-display">
					<h2>Current Value: {value}</h2>
				</div>
				<button onClick={() => setValue(value + 1)} className="button">
					Click me
				</button>
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

				.color-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
					gap: 10px;
					margin-top: 10px;
				}

				.color-box {
					padding: 10px;
					color: white;
					font-weight: bold;
					text-align: center;
					border-radius: 5px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

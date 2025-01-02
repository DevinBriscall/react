import React, { useEffect } from "react";
import { useState } from "react";

//a component I created to represent the value as $00.00, this is a poor use of a component but an example of how a prop can control the component
import Balance from "@/components/Balance";

export default function Example() {
	// React "state" to keep track of how many times the button is clicked.
	// `value` holds the current count, and `setValue` is a function to update it.
	const [value, setValue] = useState(0);

	// An array of colors that we can cycle through.
	const colours = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"indigo",
		"violet",
	];

	// React "useEffect" runs after the component renders and whenever the `value` changes.
	// This hook is used to update the background color of the page.
	useEffect(() => {
		// If the value is 0, do nothing (exit early).
		if (value === 0) return;

		// Calculate the color index by cycling through the colours array.
		// (value - 1) ensures we start from the first color, and `%` loops through colors.
		const colorIndex = (value - 1) % colours.length;

		// Update the background color of the page to the selected color.
		document.body.style.backgroundColor = colours[colorIndex];

		// Cleanup (optional in this example): React would clean up the old effect before applying the new one.
	}, [value]); // Dependency array: This effect runs whenever `value` changes.

	return (
		<>
			<div className="container">
				{/* Display the current value */}
				<span>I&apos;ve been clicked {value} times</span>

				{/* Button to increase the value by 1 */}
				<button onClick={() => setValue(value + 1)} className="button">
					Click me
				</button>

				{/* Conditional rendering: Show a different message depending on the value */}
				{value === 0 ? (
					<span>Click the button to increase the value</span>
				) : (
					<span>You&apos;re doing great.</span>
				)}

				{/* Display a message if the value is 10 or more */}
				{value >= 10 && <span>okay please stop that tickles</span>}

				{/* Display the list of colors */}
				<ui>
					{colours.map((colour, index) => (
						// Loop through the colours array and render each color as a list item.
						<li key={index}>{colour}</li>
					))}
				</ui>
				<Balance balance={value} />
			</div>

			{/* Styling for this component */}
			<style jsx>{`
				.container {
					padding: 3rem;
					display: grid;
					gap: 4px;
				}
				.button {
					display: flex;
					background: gray;
					width: fit-content;
					padding: 4px 16px;
				}
				* {
					font-weight: bold;
				}
			`}</style>
		</>
	);
}

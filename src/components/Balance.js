import React from "react";

export default function Balance({ balance }) {
	return (
		<>
			<span className={`balance ${balance > 0 ? "positive" : "negative"}`}>
				${balance.toFixed(2)}
			</span>

			<style jsx>{`
				.balance {
					font-weight: bold;
					background-color: white;
					padding: 0.5rem;
					position: fixed;
					top: 3rem;
					right: 3rem;
					color: ${balance > 0 ? "#15803d" : "#dc2626"};
				}
				.positive {
					color: green;
				}
				.negative {
					color: red;
				}
			`}</style>
		</>
	);
}

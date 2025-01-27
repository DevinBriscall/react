import React, { useState } from "react";

export default function HTTPMethods() {
	const [activeTab, setActiveTab] = useState("GET"); // Track active tab

	return (
		<div className="container">
			{/* Tabs for each HTTP method */}
			<div className="tabs">
				{["GET", "POST", "PUT", "PATCH", "DELETE"].map((tab) => (
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
				{activeTab === "GET" && (
					<div className="explanation-box">
						<h3>GET</h3>
						<p>
							The <strong>GET</strong> method is used to retrieve data from a
							server. It is a read-only operation and should not have any side
							effects on the server.
						</p>
						<pre>
							{`fetch('https://api.example.com/data')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>GET</code> when you want to fetch data from an API.
							</p>
						</div>
					</div>
				)}

				{activeTab === "POST" && (
					<div className="explanation-box">
						<h3>POST</h3>
						<p>
							The <strong>POST</strong> method is used to send data to the
							server to create a new resource. It often results in a change in
							state or side effects on the server.
						</p>
						<pre>
							{`fetch('https://api.example.com/data', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		name: 'John Doe',
		email: 'john@example.com',
	}),
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>POST</code> when you want to create a new resource on
								the server.
							</p>
						</div>
					</div>
				)}

				{activeTab === "PUT" && (
					<div className="explanation-box">
						<h3>PUT</h3>
						<p>
							The <strong>PUT</strong> method is used to update an existing
							resource on the server. It replaces the entire resource with the
							new data provided.
						</p>
						<pre>
							{`fetch('https://api.example.com/data/1', {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		name: 'Jane Doe',
		email: 'jane@example.com',
	}),
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>PUT</code> when you want to update an entire resource
								on the server.
							</p>
						</div>
					</div>
				)}

				{activeTab === "PATCH" && (
					<div className="explanation-box">
						<h3>PATCH</h3>
						<p>
							The <strong>PATCH</strong> method is used to partially update an
							existing resource on the server. Unlike <code>PUT</code>, it only
							updates the fields that are provided in the request.
						</p>
						<pre>
							{`fetch('https://api.example.com/data/1', {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		email: 'jane.doe@example.com',
	}),
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>PATCH</code> when you want to update part of a
								resource on the server.
							</p>
						</div>
					</div>
				)}

				{activeTab === "DELETE" && (
					<div className="explanation-box">
						<h3>DELETE</h3>
						<p>
							The <strong>DELETE</strong> method is used to delete a resource
							from the server. It removes the specified resource.
						</p>
						<pre>
							{`fetch('https://api.example.com/data/1', {
	method: 'DELETE',
})
	.then(response => {
		if (response.ok) {
			console.log('Resource deleted successfully');
		}
	})
	.catch(error => console.error('Error:', error));`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>DELETE</code> when you want to remove a resource from
								the server.
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

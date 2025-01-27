import React, { useState } from "react";

export default function StrapiBasics() {
	const [activeTab, setActiveTab] = useState("Collections"); // Track active tab

	return (
		<div className="container">
			{/* Tabs for each Strapi concept */}
			<div className="tabs">
				{[
					"Collections",
					"Single Types",
					"Fetching Content",
					"Using Content",
					"Why Strapi", // New tab added here
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
				{activeTab === "Collections" && (
					<div className="explanation-box">
						<h3>Collections</h3>
						<p>
							<strong>Collections</strong> in Strapi are used to manage
							repeatable content types. For example, a collection for &quot;Blog
							Posts&quot; can store multiple posts, each with fields like title,
							content, and author.
						</p>
						<pre>
							{`// Example: Blog Post Collection
{
	"title": "My First Blog Post",
	"content": "This is the content of my first blog post.",
	"author": "John Doe"
}`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <strong>Collections</strong> when you need to manage
								multiple entries of the same type.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Single Types" && (
					<div className="explanation-box">
						<h3>Single Types</h3>
						<p>
							<strong>Single Types</strong> are used for unique content that
							doesn&apos;t repeat. For example, a &quot;Homepage&quot; or
							&quot;About Us&quot; page would be a single type.
						</p>
						<pre>
							{`// Example: Homepage Single Type
{
	"title": "Welcome to My Website",
	"description": "This is the homepage of my website.",
	"heroImage": "https://example.com/hero.jpg"
}`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <strong>Single Types</strong> for content that is unique and
								doesn&apos;t repeat.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Fetching Content" && (
					<div className="explanation-box">
						<h3>Fetching Content</h3>
						<p>
							To fetch content from Strapi, you can use the REST API or GraphQL
							API. Below is an example of fetching a list of blog posts using
							the REST API.
						</p>
						<pre>
							{`// Fetching Blog Posts from Strapi
fetch('http://localhost:1337/api/blog-posts')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));`}
						</pre>
						<div className="visual-cue">
							<p>
								Use the <code>fetch</code> API or a library like Axios to
								retrieve content from Strapi.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Using Content" && (
					<div className="explanation-box">
						<h3>Using Content</h3>
						<p>
							Once you fetch content from Strapi, you can use it in your React
							components. Below is an example of rendering a list of blog posts.
						</p>
						<pre>
							{`// Example: Rendering Blog Posts
const BlogPosts = ({ posts }) => {
	return (
		<div>
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.attributes.title}</h2>
					<p>{post.attributes.content}</p>
				</div>
			))}
		</div>
	);
};`}
						</pre>
						<div className="visual-cue">
							<p>
								Map over the fetched data and render it dynamically in your
								components.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Why Strapi" && (
					<div className="explanation-box">
						<h3>Why Strapi?</h3>
						<p>
							<strong>Strapi</strong> is a headless CMS that provides developers
							with a flexible and customizable way to manage content. Here are
							some reasons why you might choose Strapi:
						</p>
						<ul>
							<li>
								<strong>Open Source:</strong> Strapi is open-source, which means
								you can customize it to fit your needs.
							</li>
							<li>
								<strong>Self-Hosted:</strong> You can host Strapi on your own
								servers, giving you full control over your data.
							</li>
							<li>
								<strong>API-First:</strong> Strapi is designed to be API-first,
								making it easy to integrate with any front-end framework or
								platform.
							</li>
							<li>
								<strong>Extensible:</strong> With a plugin system, you can
								extend Strapi&apos;s functionality to suit your project&apos;s
								requirements.
							</li>
							<li>
								<strong>Developer-Friendly:</strong> Strapi provides a modern
								developer experience with support for REST and GraphQL APIs.
							</li>
						</ul>
						<div className="visual-cue">
							<p>
								Choose <strong>Strapi</strong> for a flexible, customizable, and
								developer-friendly CMS solution.
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

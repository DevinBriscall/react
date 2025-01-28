import React, { useState } from "react";

export default function GitFundamentals() {
	const [activeTab, setActiveTab] = useState("Basics"); // Track active tab

	return (
		<div className="container">
			{/* Tabs for each Git/GitHub concept */}
			<div className="tabs">
				{["Basics", "Branching", "Commits", "Remote", "Pull Requests"].map(
					(tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`tab-button ${activeTab === tab ? "active" : ""}`}
						>
							{tab}
						</button>
					)
				)}
			</div>

			{/* Content for each tab */}
			<div className="content">
				{activeTab === "Basics" && (
					<div className="explanation-box">
						<h3>Git Basics</h3>
						<p>
							<strong>Git</strong> is a distributed version control system used
							to track changes in source code. Here are some basic commands:
						</p>
						<pre>
							{`# Initialize a new Git repository
git init

# Clone an existing repository
git clone <repository-url>

# Check the status of your working directory
git status

# Add files to the staging area
git add <file-name>

# Commit changes with a message
git commit -m "Your commit message"`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>git init</code> to start tracking changes in a new
								project.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Branching" && (
					<div className="explanation-box">
						<h3>Branching</h3>
						<p>
							<strong>Branches</strong> allow you to work on different versions
							of your project simultaneously. The default branch is usually
							called <code>main</code> or <code>master</code>.
						</p>
						<pre>
							{`# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# List all branches
git branch

# Delete a branch
git branch -d <branch-name>`}
						</pre>
						<div className="visual-cue">
							<p>
								Branches are useful for isolating new features or bug fixes.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Commits" && (
					<div className="explanation-box">
						<h3>Commits</h3>
						<p>
							<strong>Commits</strong> are snapshots of your project at a
							specific point in time. Each commit has a unique hash and a
							message describing the changes.
						</p>
						<pre>
							{`# Stage all changes
git add .

# Commit with a message
git commit -m "Add new feature"

# View commit history
git log

# Amend the last commit
git commit --amend -m "Updated commit message"`}
						</pre>
						<div className="visual-cue">
							<p>
								Write clear and concise commit messages to describe your
								changes.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Remote" && (
					<div className="explanation-box">
						<h3>Remote Repositories</h3>
						<p>
							<strong>Remote repositories</strong> are versions of your project
							hosted on platforms like GitHub. You can push and pull changes to
							synchronize your local and remote repositories.
						</p>
						<pre>
							{`# Add a remote repository
git remote add origin <repository-url>

# Push changes to a remote branch
git push origin <branch-name>

# Pull changes from a remote branch
git pull origin <branch-name>

# View remote repositories
git remote -v`}
						</pre>
						<div className="visual-cue">
							<p>
								Use <code>git push</code> and <code>git pull</code> to
								collaborate with others.
							</p>
						</div>
					</div>
				)}

				{activeTab === "Pull Requests" && (
					<div className="explanation-box">
						<h3>Pull Requests</h3>
						<p>
							<strong>Pull Requests (PRs)</strong> are used to propose changes
							to a repository on GitHub. They allow for code review and
							discussion before merging.
						</p>
						<pre>
							{`# Create a new branch for your changes
git checkout -b feature-branch

# Make changes and commit them
git add .
git commit -m "Add new feature"

# Push the branch to GitHub
git push origin feature-branch

# Open a Pull Request on GitHub
# After review, merge the PR into the main branch`}
						</pre>
						<div className="visual-cue">
							<p>
								Pull Requests are essential for collaborative development on
								GitHub.
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

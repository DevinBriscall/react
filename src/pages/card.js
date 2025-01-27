import React from "react";

export default function CardBuilderTutorial() {
	return (
		<div className="p-6 space-y-12">
			{/* Step 1 */}
			<section className="space-y-4">
				<h2 className="text-xl font-bold">Step 1: Basic Card Structure</h2>
				<p>
					Create a basic structure for the card using a <code>&lt;div&gt;</code>{" "}
					with a border, padding, and slight shadow.
				</p>
				<div className="card border rounded-lg shadow-md p-4 w-80 mx-auto">
					<p>Card content goes here...</p>
				</div>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`<div class="card">
  <!-- Content will go here -->
</div>`}
				</pre>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`.card {
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}`}
				</pre>
			</section>

			{/* Step 2 */}
			<section className="space-y-4">
				<h2 className="text-xl font-bold">Step 2: Add Image Section</h2>
				<p>
					Insert the image as the first child of the card. Use <code>img</code>{" "}
					with
					<code>width: 100%</code> to make it fully responsive.
				</p>
				<div className="card border rounded-lg shadow-md p-4 w-80 mx-auto">
					<img
						src="/images/penguin.jpeg"
						alt="Penguins"
						className="w-full h-auto rounded-t-lg"
					/>
				</div>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`<div class="card">
  <img src="penguins.jpg" alt="Penguins" class="card-image" />
</div>`}
				</pre>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`.card-image {
  width: 100%;
  height: auto;
}`}
				</pre>
			</section>

			{/* Step 3 */}
			<section className="space-y-4">
				<h2 className="text-xl font-bold">Step 3: Add Metadata</h2>
				<p>
					Add a row below the image for metadata, including the username and
					icons. Use Flexbox to space the elements.
				</p>
				<div className="card border rounded-lg shadow-md p-4 w-80 mx-auto">
					<img
						src="/images/penguin.jpeg"
						alt="Penguins"
						className="w-full h-auto rounded-t-lg"
					/>
					<div className="flex justify-between items-center p-4">
						<span className="text-sm text-gray-600">posted by: USERNAME</span>
						<div className="flex space-x-2">
							<span>❤️</span>
							<span>❤️</span>
							<span>❤️</span>
						</div>
					</div>
				</div>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`<div class="card">
  <img src="penguins.jpg" alt="Penguins" class="card-image" />
  <div class="metadata">
    <span>posted by: USERNAME</span>
    <div class="icons">
      <span>❤️</span>
      <span>❤️</span>
      <span>❤️</span>
    </div>
  </div>
</div>`}
				</pre>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`.metadata {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}`}
				</pre>
			</section>

			{/* Step 4 */}
			<section className="space-y-4">
				<h2 className="text-xl font-bold">Step 4: Add Title and Description</h2>
				<p>
					Below the metadata, add a card title and a description using standard
					HTML tags.
				</p>
				<div className="card border rounded-lg shadow-md p-4 w-80 mx-auto">
					<img
						src="/images/penguin.jpeg"
						alt="Penguins"
						className="w-full h-auto rounded-t-lg"
					/>
					<div className="flex justify-between items-center p-4">
						<span className="text-sm text-gray-600">posted by: USERNAME</span>
						<div className="flex space-x-2">
							<span>❤️</span>
							<span>❤️</span>
							<span>❤️</span>
						</div>
					</div>
					<div className="p-4">
						<h3 className="text-lg font-bold">Card Title</h3>
						<p className="text-sm text-gray-700 mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`<div class="card">
  <img src="penguins.jpg" alt="Penguins" class="card-image" />
  <div class="metadata">
    <!-- Metadata content -->
  </div>
  <div class="content">
    <h3>Card Title</h3>
    <p>Card description...</p>
  </div>
</div>`}
				</pre>
			</section>

			{/* Step 5 */}
			<section className="space-y-4">
				<h2 className="text-xl font-bold">Step 5: Add Tags</h2>
				<p>
					Finally, add tags below the description using Flexbox for a row
					layout.
				</p>
				<div className="card border rounded-lg shadow-md p-4 w-80 mx-auto">
					<img
						src="/images/penguin.jpeg"
						alt="Penguins"
						className="w-full h-auto rounded-t-lg"
					/>
					<div className="flex justify-between items-center p-4">
						<span className="text-sm text-gray-600">posted by: USERNAME</span>
						<div className="flex space-x-2">
							<span>❤️</span>
							<span>❤️</span>
							<span>❤️</span>
						</div>
					</div>
					<div className="p-4">
						<h3 className="text-lg font-bold">Card Title</h3>
						<p className="text-sm text-gray-700 mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="flex flex-wrap gap-2 p-4">
						<span className="bg-green-200 text-green-700 px-2 py-1 rounded">
							tag
						</span>
						<span className="bg-green-200 text-green-700 px-2 py-1 rounded">
							tag with long name
						</span>
						<span className="bg-green-200 text-green-700 px-2 py-1 rounded">
							another tag
						</span>
					</div>
				</div>
				<pre className="bg-gray-100 p-4 rounded-lg">
					{`<div class="tags">
  <span>tag</span>
  <span>tag with long name</span>
  <span>another tag</span>
</div>`}
				</pre>
			</section>
		</div>
	);
}

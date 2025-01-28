import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 font-sans">
			{/* Header */}
			<header className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-900 mb-2">
					Welcome to the Developer Hub
				</h1>
				<p className="text-lg text-gray-600">
					Explore the following topics to enhance your skills:
				</p>
			</header>

			{/* Card Container */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
				{/* Civiconnect Checklist */}
				<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200">
					<Link href="/civiconnect-checklist" className="cursor-pointer">
						<h2 className="text-xl font-semibold text-blue-600 mb-3">
							Civiconnect Concepts Checklist
						</h2>
						<p className="text-gray-600">
							A quick reference for each topic listed here:
						</p>
					</Link>
					<a
						href="/concepts-checklist-v2.pdf"
						download="Civiconnect_Checklist.pdf"
						className="mt-4 inline-block text-blue-500 hover:text-blue-700 underline"
					>
						Download Checklist PDF
					</a>
				</div>

				{/* Flex Card */}
				<Link
					href="/flex-card"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">Flex</h2>
					<p className="text-gray-600">
						Learn how to create flexible and responsive layouts using CSS
						Flexbox.
					</p>
				</Link>

				{/* Data Fetching */}
				<Link
					href="/data-fetching"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">
						Client vs. Server Data Fetching
					</h2>
					<p className="text-gray-600">
						Understand how to fetch and manage data in your applications using
						modern techniques.
					</p>
				</Link>

				{/* HTTP */}
				<Link
					href="/http"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">HTTP</h2>
					<p className="text-gray-600">
						Dive into the fundamentals of HTTP requests and error codes.
					</p>
				</Link>

				{/* JavaScript Basics */}
				<Link
					href="/javascript"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">
						JavaScript Basics
					</h2>
					<p className="text-gray-600">
						Get started with JavaScript, the programming language of the Web
					</p>
				</Link>

				{/* CSS Basics */}
				<Link
					href="/css"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">
						CSS Basics
					</h2>
					<p className="text-gray-600">Get started with CSS.</p>
				</Link>

				{/* React Basics */}
				<Link
					href="/react-basics"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">
						React Basics
					</h2>
					<p className="text-gray-600">
						Get started with React, the popular JavaScript library for building
						user interfaces.
					</p>
				</Link>

				{/* git */}
				<Link
					href="/git"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">Git</h2>
					<p className="text-gray-600">An intro to version control.</p>
				</Link>

				{/* Strapi */}
				<Link
					href="/strapi"
					className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
				>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">Strapi</h2>
					<p className="text-gray-600">
						Discover how to use Strapi, the open-source headless CMS, to manage
						your content.
					</p>
				</Link>
			</div>
		</div>
	);
}

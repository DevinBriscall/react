import React, { useState, useEffect } from "react";

export default function ClientVsServer({ dataFromStrapi }) {
	const [clientSideData, setClientSideData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Client-side fetching
	useEffect(() => {
		async function fetchClientSideData() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				); // Fetch from JSONPlaceholder API
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				setClientSideData(data);
			} catch (error) {
				console.error("Failed to fetch client-side data:", error);
				setError("Failed to fetch client-side data. Please try again.");
			} finally {
				setLoading(false);
			}
		}

		fetchClientSideData();
	}, []);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold text-center mb-6">
				Client vs Server-Side Fetching
			</h1>

			{/* Responsive Table */}
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border border-gray-300">
					<thead>
						<tr className="bg-gray-100">
							<th className="border border-gray-300 p-4 text-lg">
								Client-Side Fetching
							</th>
							<th className="border border-gray-300 p-4 text-lg">
								Server-Side Fetching
							</th>
						</tr>
					</thead>
					<tbody>
						{/* Row 1: Data Loading Visualization */}
						<tr>
							<td className="border border-gray-300 p-4 align-top">
								<p>
									<em>
										<strong>(Refresh the page rapidly)</strong> Notice how the
										data takes a moment to load after the page refreshes.
									</em>
									This happens because the data is fetched in the browser after
									the page renders.
								</p>
								{loading ? (
									<p>Loading data...</p>
								) : error ? (
									<p className="text-red-500">{error}</p>
								) : (
									clientSideData?.map((user) => (
										<p key={user.id}>
											{user.name}: {user.email}
										</p>
									))
								)}
								<div className="bg-red-500 h-16 mt-4"></div>
							</td>

							<td className="border border-gray-300 p-4 align-top">
								<p>
									<em>Data is already loaded when the page is served.</em> There
									is no content shift, and the page appears fully rendered to
									the user immediately.
								</p>
								{dataFromStrapi.map((user) => (
									<p key={user.id}>
										{user.name}: {user.email}
									</p>
								))}
								<div className="bg-red-500 h-16 mt-4"></div>
							</td>
						</tr>

						{/* Row 2: When is data fetched? */}
						<tr>
							<td className="border border-gray-300 p-4">
								<strong>When is data fetched?</strong>
								<p>After the page renders in the browser (client-side).</p>
								<pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
									{`useEffect(() => {
  async function fetchClientSideData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      const data = await response.json();
      setClientSideData(data);
    } catch (error) {
      console.error("Failed to fetch client-side data:", error);
      setError("Failed to fetch client-side data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  fetchClientSideData();
}, []);`}
								</pre>
							</td>
							<td className="border border-gray-300 p-4">
								<strong>When is data fetched?</strong>
								<p>Before the page is rendered on the server.</p>
								<pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
									{`export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const data = await response.json();
    return { props: { dataFromStrapi: data } };
  } catch (error) {
    console.error("Failed to fetch server-side data:", error);
    return { props: { dataFromStrapi: [] } };
  }
}`}
								</pre>
							</td>
						</tr>

						{/* Row 3: Performance Impact */}
						<tr>
							<td className="border border-gray-300 p-4">
								<strong>Performance Impact</strong>
								<p>Can cause layout shift and delay in displaying content.</p>
								<p className="text-sm text-gray-600">
									Example: If the data takes 1 second to load, the user will see
									a loading spinner or blank space during that time.
								</p>
							</td>
							<td className="border border-gray-300 p-4">
								<strong>Performance Impact</strong>
								<p>Data is immediately available, reducing layout shifts.</p>
								<p className="text-sm text-gray-600">
									Example: The page is fully rendered with data before it
									reaches the user&apos;s browser.
								</p>
							</td>
						</tr>

						{/* Row 4: Use Cases */}
						<tr>
							<td className="border border-gray-300 p-4">
								<strong>Use Case</strong>
								<p>Good for dynamic content that updates frequently.</p>
								<p className="text-sm text-gray-600">
									Example: A live dashboard that fetches real-time data every
									few seconds.
								</p>
							</td>
							<td className="border border-gray-300 p-4">
								<strong>Use Case</strong>
								<p>
									Best for SEO and initial page loads with static-like data.
								</p>
								<p className="text-sm text-gray-600">
									Example: A blog post or product page where the content
									doesn&apos;t change often.
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

// Server-side fetching for comparison
export async function getServerSideProps() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		// Pass the data to the page component via props
		return {
			props: {
				dataFromStrapi: data || [], // Ensuring there's always an array
			},
		};
	} catch (error) {
		console.error("Failed to fetch server-side data:", error);

		// Optionally return an error prop or empty array
		return {
			props: {
				dataFromStrapi: [],
			},
		};
	}
}

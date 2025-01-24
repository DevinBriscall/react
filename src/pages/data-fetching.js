import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";

export default function ClientVsServer({ serverSideData }) {
	const [clientSideData, setClientSideData] = useState(null);

	// Client-side fetching
	useEffect(() => {
		async function fetchClientSideData() {
			try {
				const response = await fetch("/mockData.json"); // Fetch from mock JSON
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				setClientSideData(data.data);
			} catch (error) {
				console.error("Failed to fetch mock data:", error);
			}
		}

		fetchClientSideData();
	}, []);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold text-center mb-6">
				Client vs Server-Side Fetching
			</h1>

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
					<tr>
						<td className="border border-gray-300 p-4 align-top">
							<p>
								<em>
									Notice how the data takes a moment to load after the page
									refreshes.
								</em>
								This happens because the data is fetched in the browser after
								the page renders.
							</p>
							{clientSideData ? (
								clientSideData.map((item) => (
									<p key={item.id}>
										{item.name}: {item.age}
									</p>
								))
							) : (
								<p>Loading data...</p>
							)}
							<div className="bg-red-500 h-16 mt-4"></div>
						</td>

						<td className="border border-gray-300 p-4 align-top">
							<p>
								<em>Data is already loaded when the page is served.</em> There
								is no content shift, and the page appears fully rendered to the
								user immediately.
							</p>
							{serverSideData.map((item) => (
								<p key={item.id}>
									{item.name}: {item.age}
								</p>
							))}
							<div className="bg-red-500 h-16 mt-4"></div>
						</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-4">
							<strong>When is data fetched?</strong>
							<p>After the page renders in the browser (client-side).</p>
						</td>
						<td className="border border-gray-300 p-4">
							<strong>When is data fetched?</strong>
							<p>Before the page is rendered on the server.</p>
						</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-4">
							<strong>Performance Impact</strong>
							<p>Can cause layout shift and delay in displaying content.</p>
						</td>
						<td className="border border-gray-300 p-4">
							<strong>Performance Impact</strong>
							<p>Data is immediately available, reducing layout shifts.</p>
						</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-4">
							<strong>Use Case</strong>
							<p>Good for dynamic content that updates frequently.</p>
						</td>
						<td className="border border-gray-300 p-4">
							<strong>Use Case</strong>
							<p>Best for SEO and initial page loads with static-like data.</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

// Server-side fetching for comparison
export async function getServerSideProps() {
	try {
		// Path to the mock data file
		const filePath = path.join(process.cwd(), "public", "mockData.json");

		// Read and parse the file
		const jsonData = fs.readFileSync(filePath, "utf8");
		const data = JSON.parse(jsonData);

		return {
			props: {
				serverSideData: data.data || [],
			},
		};
	} catch (error) {
		console.error("Failed to fetch mock data:", error);
		return { props: { serverSideData: [] } };
	}
}

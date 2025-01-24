import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<div className="border-b font-bold h-[60px] px-4 flex justify-between items-center">
			<Link href={"/"}>React Examples</Link>
			<div className="flex gap-2 text-blue-500 transition-all duration-300">
				<Link href={"/react-basics"} className="hover:underline">
					React Basics
				</Link>
				<Link href={"/data-fetching"} className="hover:underline">
					Data Fetching
				</Link>
			</div>
		</div>
	);
}

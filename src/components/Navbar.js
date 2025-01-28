import {
	faGithubSquare,
	faLine,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<div className="border-b sticky top-0 z-50 bg-white font-bold h-[60px] px-4 flex justify-between items-center">
			<Link href={"/"}>React Examples</Link>
			<div className="flex items-center gap-2 transition-all duration-300">
				<span>Devin Briscall:</span>
				<a
					href={"https://github.com/DevinBriscall"}
					target="_blank"
					className="hover:text-blue-500 flex items-center transition-all duration-300"
				>
					<FontAwesomeIcon icon={faGithubSquare} className="w-7 h-7" />
				</a>
				<a
					href={"https://www.linkedin.com/in/devin-briscall-933843271/"}
					target="_blank"
					className="hover:text-blue-500 flex items-center transition-all duration-300"
				>
					<FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
				</a>
			</div>
		</div>
	);
}

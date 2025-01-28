import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function App({ Component, pageProps }) {
	const [showBanner, setShowBanner] = useState(false);
	const ERRORMESSAGE = "";
	return (
		<>
			{showBanner && (
				<div className="bg-red-500 p-4 flex justify-between items-center">
					<span>{ERRORMESSAGE}</span>
					<FontAwesomeIcon
						icon={faClose}
						onClick={() => setShowBanner(false)}
						className="hover:cursor-pointer"
					/>
				</div>
			)}
			<Navbar />
			<div className="min-h-[calc(100vh-60px)]">
				<Component {...pageProps} />
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

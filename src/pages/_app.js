import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
	return (
		<>
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

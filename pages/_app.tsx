import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";

const componentVariants = {
	hidden: { opacity: 0.6 },
	visible: { opacity: 1 },
};

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<motion.div
			className="bimg"
			variants={componentVariants}
			initial="hidden"
			animate="visible"
			key={router.route}
		>
			<Head>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta name="theme-color" content="#374151" />
			</Head>
			<Component {...pageProps} />
		</motion.div>
	);
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
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
			<Component {...pageProps} />
		</motion.div>
	);
}

export default MyApp;

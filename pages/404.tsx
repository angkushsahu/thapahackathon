import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { motion } from "framer-motion";
import Meta from "../components/meta";
import Image from "next/image";

const headerVariant = {
	hidden: { scale: 1.4 },
	visible: { scale: 1, transition: { type: "spring", duration: 0.8, stiffness: 120 } },
};
const paragraphVariant = {
	visible: {
		y: [0, 40, 0],
		transition: { type: "spring", delay: 1, duration: 0.8, stiffness: 120 },
	},
};
const pointingVariant = {
	hidden: { y: 0 },
	visible: {
		y: [0, 200, 0],
		transition: { type: "tween", duration: 1, repeat: Infinity },
	},
};
const buttonVariant = {
	whileHover: {
		scale: [1, 1.2, 1.1],
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.2 },
	},
};

const Error: NextPage = () => {
	const router: NextRouter = useRouter();

	return (
		<div>
			<Meta title="Error - Devstack" />
			<section className="py-10 px-4 sm:px-12 flex flex-col items-center justify-center h-screen">
				<motion.h1
					className="uppercase font-extrabold text-6xl sm:text-9xl tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-800"
					variants={headerVariant}
					initial="hidden"
					animate="visible"
				>
					ERROR
				</motion.h1>
				<div className="absolute -z-10 opacity-50">
					<Image src="/images/error.png" alt="error" width="474" height="434" />
				</div>
				<motion.p
					className="description mt-6 font-bold text-center"
					variants={paragraphVariant}
					animate="visible"
				>
					This page does not exist, click the button below to go back to home 👇
				</motion.p>
				<motion.button
					type="button"
					onClick={() => router.replace("/")}
					className="mt-14 px-6 py-3 bg-gradient-to-br from-red-800 to-red-600 transition-colors text-white rounded mx-auto block shadow-xl"
					variants={buttonVariant}
					whileHover="whileHover"
				>
					Back to Home
				</motion.button>
			</section>
		</div>
	);
};

export default Error;

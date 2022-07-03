import type { NextPage } from "next";
import BaseLayout from "../components/baseLayout";
import Meta from "../components/meta";
import { NextRouter, useRouter } from "next/router";
import { motion } from "framer-motion";

const sectionVariant = {
	hidden: { opacity: 0, x: "-100vw" },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", duration: 0.6 },
	},
};
const titleVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8, stiffness: 120 } },
};
const descriptionVariant = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8, stiffness: 120 } },
};
const buttonVariant = {
	whileHover: {
		scale: [1, 1.2, 1.1],
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.2 },
	},
};

const Home: NextPage = () => {
	const router: NextRouter = useRouter();

	return (
		<BaseLayout>
			<Meta title="Home - Devstack" />
			<motion.section
				className="backImage px-4 py-8 sm:px-12 text-white min-h-[92vh] flex flex-col justify-center origin-left"
				variants={sectionVariant}
				initial="hidden"
				animate="visible"
			>
				<motion.h1
					className="title"
					variants={titleVariant}
					initial="hidden"
					animate="visible"
				>
					DEVSTACK
				</motion.h1>
				<motion.p
					className="description max-w-[60ch] mt-8 mb-4"
					variants={descriptionVariant}
					initial="hidden"
					animate="visible"
				>
					Start your <span className="font-semibold">"FULL STACK WEB DEVELOPMENT"</span>{" "}
					journey with me 🔥. Explore all the necessary courses to start with on this
					website.
				</motion.p>
				<motion.p
					className="description max-w-[60ch]"
					variants={descriptionVariant}
					initial="hidden"
					animate="visible"
				>
					Here, you will learn a number of stacks from basic level 😢 to intermediate /
					advanced level 😎. All the courses which are included in this website are from
					free resources 🤑 such as youtube and their official documentations.
				</motion.p>
				<motion.p
					className="description max-w-[60ch] mt-4 mb-8"
					variants={descriptionVariant}
					initial="hidden"
					animate="visible"
				>
					Click on the button below to checkout all the available courses. 👇
				</motion.p>
				<motion.button
					type="button"
					className="w-fit px-4 py-2 rounded bg-blue-600 transition-colors hover:bg-blue-700 text-white"
					onClick={() => router.push("/courses")}
					variants={buttonVariant}
					whileHover="whileHover"
				>
					Explore all courses
				</motion.button>
			</motion.section>
		</BaseLayout>
	);
};

export default Home;

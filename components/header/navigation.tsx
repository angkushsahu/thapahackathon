import { FC, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

const topVariants = {
	hidden: { y: -100, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 120 } },
	whileHover: {
		scale: [1, 1.2, 1.1],
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.2 },
	},
};

const bottomVariants = {
	hidden: { y: 100, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 120 } },
	whileHover: {
		scale: [1, 1.2, 1.1],
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.2 },
	},
};

const linkVariants = {
	whileHover: {
		scale: [1, 1.2, 1.1],
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.2 },
	},
};

const Navigation: FC = () => {
	const router: NextRouter = useRouter();
	const [transformValue, setTransformValue] = useState<string>("-100vw");

	const matchParams: Function = (path: string) => {
		if (path === router.asPath) {
			return "border-b-2 text-blue-300";
		}
		return "";
	};

	return (
		<>
			<nav className="hidden sm:flex gap-8">
				<motion.span
					onClick={() => router.push("/")}
					className={
						`cursor-pointer hover:text-blue-300 border-blue-300 ` + matchParams("/")
					}
					variants={topVariants}
					initial="hidden"
					animate="visible"
					whileHover="whileHover"
				>
					Home
				</motion.span>
				<motion.span
					onClick={() => router.push("/about")}
					className={
						`cursor-pointer hover:text-blue-300 border-blue-300 ` +
						matchParams("/about")
					}
					variants={bottomVariants}
					initial="hidden"
					animate="visible"
					whileHover="whileHover"
				>
					About
				</motion.span>
				<motion.span
					onClick={() => router.push("/courses")}
					className={
						`cursor-pointer hover:text-blue-300 border-blue-300 ` +
						matchParams("/courses")
					}
					variants={topVariants}
					initial="hidden"
					animate="visible"
					whileHover="whileHover"
				>
					Courses
				</motion.span>
			</nav>
			<div className="flex items-center justify-center sm:hidden">
				<Image
					src="/icons/hamburger.svg"
					alt="hamburger"
					height="30"
					width="30"
					className="filter invert cursor-pointer"
					onClick={() => setTransformValue("0")}
				/>
			</div>
			<nav
				className="absolute inset-0 bg-gray-700 z-10 flex flex-col items-center pb-4 pt-8 sm:hidden transition-transform"
				style={{ transform: `translateX(${transformValue})` }}
			>
				<Image
					src="/icons/cancel.svg"
					alt="cancel"
					height="20"
					width="20"
					className="filter invert cursor-pointer"
					onClick={() => setTransformValue("-100vw")}
				/>
				<motion.span
					className="h-12 w-full flex items-center justify-center mt-4 cursor-pointer"
					onClick={() => router.push("/")}
					variants={linkVariants}
					whileHover="whileHover"
				>
					Home
				</motion.span>
				<motion.span
					className="h-12 w-full flex items-center justify-center cursor-pointer"
					onClick={() => router.push("/about")}
					variants={linkVariants}
					whileHover="whileHover"
				>
					About
				</motion.span>
				<motion.span
					className="h-12 w-full flex items-center justify-center cursor-pointer"
					onClick={() => router.push("/courses")}
					variants={linkVariants}
					whileHover="whileHover"
				>
					Courses
				</motion.span>
			</nav>
		</>
	);
};

export default Navigation;

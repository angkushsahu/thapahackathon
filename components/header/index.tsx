import { FC } from "react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { motion } from "framer-motion";
import Navigation from "./navigation";

const logoVariants = {
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 120 } },
};

const Header: FC = () => {
	const router: NextRouter = useRouter();

	return (
		<header className="flex items-center justify-between px-4 sm:px-12 py-4 bg-gray-700">
			<motion.div
				className="flex gap-2 cursor-pointer"
				variants={logoVariants}
				initial="hidden"
				animate="visible"
				onClick={() => router.push("/")}
			>
				<Image
					src="/images/logo.png"
					alt="logo"
					width="32"
					height="32"
					className="shadow-lg shadow-white rounded-full"
				/>
				<h1 className="text-xl font-bold">DEVSTACK</h1>
			</motion.div>
			<Navigation />
		</header>
	);
};

export default Header;

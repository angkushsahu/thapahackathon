import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import BaseLayout from "../components/baseLayout";
import CourseList from "../components/courseList";
import Meta from "../components/meta";

const headerVariants = {
	hidden: { opacity: 0, y: -40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", duration: 0.8, stiffness: 120 },
	},
};

const inputVariants = {
	hidden: { opacity: 0, scale: 0.4 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { type: "spring", duration: 0.8, stiffness: 120 },
	},
};

const Courses: NextPage = () => {
	const [searchText, setSearchText] = useState<string>("");

	return (
		<BaseLayout>
			<Meta title="Courses - Devstack" />
			<div className="backImage px-6 py-12 sm:px-12">
				<motion.h1
					className="title text-center mt-8"
					variants={headerVariants}
					initial="hidden"
					animate="visible"
				>
					All Courses
				</motion.h1>
				<motion.input
					type="text"
					className="border-none outline-none px-4 py-2 mx-auto block w-250px sm:w-[300px] bg-slate-800 rounded my-8"
					value={searchText}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
					placeholder="Search . . . ."
					variants={inputVariants}
					initial="hidden"
					animate="visible"
				/>
				<CourseList searchText={searchText} />
			</div>
		</BaseLayout>
	);
};

export default Courses;

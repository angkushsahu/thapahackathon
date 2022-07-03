import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import courseList, { courseInterface } from "../utils/courseArray";

export interface CourseListInterface {
	searchText: string;
}

const buttonVariant = {
	whileHover: {
		scale: [1, 1.2, 1.1],
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.2 },
	},
};

const CourseList: FC<CourseListInterface> = ({ searchText }) => {
	const [courses, setCourses] = useState<courseInterface[]>(courseList);

	useEffect(() => {
		const newCourseList: courseInterface[] = courses.filter(
			course => course.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0,
		);

		if (!searchText.length || !newCourseList.length) {
			setCourses(courseList);
			return;
		} else if (newCourseList.length) {
			setCourses(newCourseList);
		}
	}, [searchText, courses]);

	return (
		<section className="flex flex-wrap items-center justify-evenly gap-8 mb-12">
			{courses.map((course, idx) => (
				<motion.article
					key={idx}
					className="bg-gray-700 w-[300px] sm:w-[320px] my-6 shadow-gray-700 shadow-md rounded"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						duration: 0.8,
						stiffness: 120,
						delay: idx * 0.2,
					}}
				>
					<div className="w-full">
						<Image
							src={`/images/languages/${course.image.src}`}
							alt={course.image.src.slice(0, course.image.src.indexOf(".png"))}
							width={course.image.width || 320}
							height={course.image.height || 320}
							className="rounded"
						/>
					</div>
					<div className="px-6 py-8">
						<h1 className="title text-gray-300 mb-4 text-center">{course.title}</h1>
						<motion.a
							href={course?.links.youtube}
							target="_blank"
							rel="noopener noreferrer"
							type="button"
							className="mt-10 text-center px-4 py-3 text-white bg-red-550 hover:bg-red-551 transition-colors rounded w-5/6 mx-auto block"
							variants={buttonVariant}
							whileHover="whileHover"
						>
							Visit Youtube
						</motion.a>
						<motion.a
							href={course?.links.docs}
							target="_blank"
							rel="noopener noreferrer"
							type="button"
							className="mt-6 text-center px-4 py-3 text-white bg-blue-600 transition-colors hover:bg-blue-700 rounded w-5/6 mx-auto block"
							variants={buttonVariant}
							whileHover="whileHover"
						>
							Visit Documentation
						</motion.a>
					</div>
				</motion.article>
			))}
		</section>
	);
};

export default CourseList;

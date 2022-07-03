import { NextPage } from "next";
import { motion } from "framer-motion";
import BaseLayout from "../components/baseLayout";
import Meta from "../components/meta";

const titleVariants = {
	hidden: { opacity: 0, x: -60 },
	visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.2, stiffness: 120 } },
};
const descriptionVariants = {
	hidden: { opacity: 0, x: -40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", delay: 0.2, duration: 0.8, stiffness: 120 },
	},
};

const About: NextPage = () => {
	return (
		<BaseLayout>
			<Meta title="About - Devstack" />
			<main className="backImage container mx-auto px-4 py-12 sm:px-12 flex flex-col gap-14">
				<section className="sm:max-w-[60ch] sm:mr-auto mt-8" id="about-website">
					<motion.h1
						className="title"
						variants={titleVariants}
						initial="hidden"
						animate="visible"
					>
						About the website
					</motion.h1>
					<motion.p
						className="description mt-6"
						variants={descriptionVariants}
						initial="hidden"
						animate="visible"
					>
						This installable website contains necessary lessons for becoming a full –
						stack developer inspired by free videos created by Thapa Technical You-tube
						channel and official documentation for each individual framework. Visitors
						can navigate to the courses tab where they will be offered a number of
						courses to choose from and once the user chooses a particular course, he can
						have the option to understand the working of the framework / library. A
						small description is framed aiming the basic introduction to the framework
						and the rest of the knowledge could be achieved either by clicking on the
						“Visit you-tube” button which will redirect the user to the dedicated
						you-tube playlist / video or by clicking on the” Visit documentation” button
						which will redirect the user to the official documentation of the particular
						framework.
					</motion.p>
				</section>
				<section className="sm:max-w-[60ch] sm:ml-auto" id="how-to-use-website">
					<motion.h1
						className="title"
						variants={titleVariants}
						initial="hidden"
						animate="visible"
					>
						How to use the website
					</motion.h1>
					<motion.p
						className="description mt-6"
						variants={descriptionVariants}
						initial="hidden"
						animate="visible"
					>
						Click on the “Courses” link on the navigation bar above, this will take you
						to a page containing all the courses offered on this website. From this
						page, you can choose any particular course to get started with. Then Click
						on the “Visit Course” button to access the course description, link to
						you-tube and link to official docs. Feel free to choose any of the options
						depending upon your choice of learning. If you are a video person, you can
						choose to learn from you-tube where Thapa Technical has done an incredible
						job to teach as neatly and deeply as possible, or, if you are a person who
						loves to read, you can learn from the documentations offered.
					</motion.p>
				</section>
				<section className="mb-12" id="a-little-glimpse">
					<h1 className="title text-center">A little glimpse of the website</h1>
					<iframe
						src="https://res.cloudinary.com/dvhucdquc/video/upload/v1656858814/hackathon/hackathon_bwbmwv.mp4"
						frameBorder="0"
						title="Video tutorial"
						className="mx-auto mt-10 w-[260px] h-[150px] sm:w-[500px] sm:h-[316px] lg:w-[900px] lg:h-[500px]"
						allowFullScreen={true}
					></iframe>
				</section>
			</main>
		</BaseLayout>
	);
};

export default About;

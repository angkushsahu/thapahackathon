import { FC } from "react";
import Head from "next/head";

export interface MetaProps {
	title: string;
}

const Meta: FC<MetaProps> = ({ title }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="description"
					content="Hey there, this is a free website created for stacking up all free resources from youtube and official docs so the users don't have to go anywhere else because they will be getting everything in one place, that is, this website. This is a small step towards building a strong future in the world of coding."
				/>
				<meta name="robots" content="INDEX, FOLLOW" />
				<meta
					name="keyword"
					content="courses, html, css, sass, javascript, typescript, react, next, node, express, mongodb, mongoose, vercel, thapa, firebase, firestore, online, course"
				/>
				<title>{title}</title>
			</Head>
		</>
	);
};

export default Meta;

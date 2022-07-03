import { FC } from "react";
import FooterLinkItems from "./footerLinkItems";

export interface LinkItems {
	link: string;
	imageName: string;
	alt: string;
}

const LinkItemsArr: LinkItems[] = [
	{ link: "https://github.com/angkushsahu", imageName: "github", alt: "github" },
	{
		link: "https://www.linkedin.com/in/angkush-sahu-0409311bb/",
		imageName: "linkedin",
		alt: "linked in",
	},
	{ link: "https://angkush.vercel.app/", imageName: "portfolio", alt: "portfolio" },
];

const Footer: FC = () => {
	return (
		<footer className="bg-gray-700 p-8 text-center">
			<div className="group relative mx-auto">
				<span className="absolute left-1/2 bottom-8 -translate-x-1/2 shadow-xl bg-gray-800 py-1 px-4 w-fit rounded scale-0 transition-transform group-hover:scale-100">
					Don't forget to drop a star at the repo ! ⭐
				</span>
				<a
					href="https://github.com/angkushsahu/thapahackathon"
					target="_blank"
					rel="noopener noreferrer"
					className="font-semibold hover:text-blue-300 transition-colors ease-in-out duration-150"
				>
					View Source Code
				</a>
			</div>
			<div className="mx-auto w-full mt-4 flex items-center justify-center gap-2">
				{LinkItemsArr.map((linkItem, idx) => (
					<FooterLinkItems
						key={idx}
						link={linkItem.link}
						imageName={linkItem.imageName}
						alt={linkItem.alt}
					/>
				))}
			</div>
			<p className="mt-12 font-semibold">@ Thapa Technical Codefest</p>
		</footer>
	);
};

export default Footer;

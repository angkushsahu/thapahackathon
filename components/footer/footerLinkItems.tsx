import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkItems } from ".";

const iconLinkVariants = {
	whileHover: {
		rotate: 360,
		transition: { duration: 0.4 },
	},
};

const FooterLinkItems: FC<LinkItems> = ({ link, imageName, alt }) => {
	return (
		<>
			<motion.a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				variants={iconLinkVariants}
				whileHover="whileHover"
			>
				<Image
					src={`/icons/${imageName}.svg`}
					alt={alt}
					height="30"
					width="40"
					className="filter invert"
				/>
			</motion.a>
		</>
	);
};

export default FooterLinkItems;

import { FC, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export interface BaseLayoutProps {
	children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default BaseLayout;

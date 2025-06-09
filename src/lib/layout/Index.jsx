import FooterPublic from "./Footer";
import Header from "./Header";

const PublicLayout = ({ children }) => {
	return (
		<div className="flex w-full justify-center">
			<div className="relative w-full">
				<Header />
				{children}
				<FooterPublic />
			</div>
		</div>
	);
};

export default PublicLayout;

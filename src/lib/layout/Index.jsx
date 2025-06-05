import Header from "./Header";

const PublicLayout = ({ children }) => {
	return (
		<div className="flex w-full justify-center">
			<div className="relative w-full pt-16">
				<Header />
				{children}
			</div>
		</div>
	);
};

export default PublicLayout;

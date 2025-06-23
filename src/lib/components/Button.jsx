const Button = ({
	className = "",
	isLoading = false,
	disabled = false,
	onClick = () => {},
	children,
	size = "medium", // small, medium, large
	isPrimary = true,
}) => {
	const sizeDataClass = {
		small: "h-10",
		medium: "h-12",
		large: "h-[60px]",
	};

	const handleClick = (e) => {
		if (e && typeof e.stopPropagation === "function") {
			e.stopPropagation();
		}
		if (!isLoading && !disabled) {
			onClick(e);
		}
	};

	const getButtonClasses = () => {
		const isDisabled = disabled || isLoading;

		if (isDisabled) {
			return "text-white bg-primary/50 cursor-not-allowed";
		}

		return isPrimary
			? "text-[#FCFCFD] bg-primary hover:bg-primary/90 cursor-pointer"
			: "border border-primary bg-white text-primary cursor-pointer";
	};

	return (
		<button
			className={`min-w-24 ${className} ${
				sizeDataClass[size]
			} ${getButtonClasses()} font-bold rounded-lg text-nowrap text-sm flex px-4 items-center justify-center transition-colors duration-200`}
			disabled={disabled || isLoading}
			onClick={handleClick}
		>
			{isLoading ? (
				<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
			) : (
				children
			)}
		</button>
	);
};

export default Button;

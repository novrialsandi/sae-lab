"use client";

import Button from "@/lib/components/Button";
import { icons } from "../icons/iconSvg";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const HeaderPublic = () => {
	const pathname = usePathname();

	const tNavbar = useTranslations("navbar");
	const tServices = useTranslations("services");

	const [isScroll, setIsScroll] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const menus = [
		{ key: "about", href: "/" },
		{
			key: "services",
			href: "/",
			subMenu: {
				items: [
					"translation",
					"proofreading",
					"swornTranslation",
					"transcription",
					"captionInstagram",
					"englishCourse",
					"bipaClass",
					"subtitling",
					"typing",
					"formatting",
					"pptLayouting",
				].map((key) => ({
					key,
					title: tServices(`items.${key}.title`),
					description: tServices(`items.${key}.description`),
					href: `/service/${
						key === "swornTranslation"
							? "sworn-translation"
							: key === "captionInstagram"
							? "instagram-caption"
							: key === "pptLayouting"
							? "PPT-layouting"
							: key === "bipaClass"
							? "BIPA-class"
							: key
					}`,
				})),
			},
		},
		{ key: "contact", href: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleMouseEnter = (index) => {
		if (menus[index].subMenu) {
			setActiveDropdown(index);
		}
	};

	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	return (
		<nav
			className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white ease-in-out flex justify-center items-center"
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex justify-between w-full  max-w-[1440px] items-center px-6 py-4 relative">
				<Link href={"/"}>{icons.iconLogo}</Link>

				<div className="flex gap-8 relative">
					{menus.map((val, index) => (
						<div
							key={index}
							className="relative"
							onMouseEnter={() => handleMouseEnter(index)}
						>
							<Link
								href={val.href}
								className={`cursor-pointer ${
									`/${pathname.split("/")[2]}` === val.href
										? "text-primary font-bold"
										: isScroll || activeDropdown === index
										? "text-gray-800 hover:text-primary"
										: "hover:text-primary"
								} ${val.subMenu ? "flex items-center gap-1" : ""}`}
							>
								{tNavbar(`menu.${val.key}`)}
								{val.subMenu && (
									<ChevronDown
										className={`w-4 h-4 transition-transform ${
											activeDropdown === index ? "rotate-180" : ""
										}`}
									/>
								)}
							</Link>
						</div>
					))}
				</div>

				<div>{icons.iconLogo}</div>
			</div>

			{/* Full-width dropdown */}
			{activeDropdown !== null && menus[activeDropdown].subMenu && (
				<div
					className={`absolute left-0 w-full transition-all ease-in-out transform z-50 ${
						activeDropdown !== null
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-2"
					} ${isScroll ? "bg-white shadow-md border-t" : "bg-white shadow-md"}`}
					style={{ top: "100%" }}
					onMouseLeave={() => setActiveDropdown(null)}
				>
					<div className="container max-w-[1440px] mx-auto px-6 py-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{menus[activeDropdown].subMenu.items.map((subItem, subIndex) => (
								<Link
									key={subIndex}
									href={subItem.href}
									className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
								>
									<div className="flex items-start gap-3">
										<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13 10V3L4 14h7v7l9-11h-7z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
												{subItem.title}
											</h3>
											<p className="text-sm text-gray-500 mt-1 leading-relaxed">
												{subItem.description}
											</p>
										</div>
									</div>
								</Link>
							))}
						</div>

						<div className="mt-8 pt-6 border-t border-gray-200">
							<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
								<div>
									<h4 className="font-semibold text-gray-900">
										Need a custom solution?
									</h4>
									<p className="text-sm text-gray-500">
										Let's discuss your specific requirements
									</p>
								</div>
								<button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default HeaderPublic;

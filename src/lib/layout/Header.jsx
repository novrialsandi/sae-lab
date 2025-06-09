"use client";

import Button from "@/lib/components/Button";
import { icons } from "../icons/iconSvg";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "../components/Dropdown";

const HeaderPublic = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const router = useRouter();

	const tNavbar = useTranslations("navbar");
	const tServices = useTranslations("services");

	const [isScroll, setIsScroll] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const menus = [
		{ key: "about", href: "/about" },
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
					img: `/header/${key}.png`,
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
		} else {
			setActiveDropdown(null);
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
				<Link className="w-64" href={"/"}>
					{icons.iconLogo}
				</Link>

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

				<div className="flex gap-4 w-64 justify-end">
					<Dropdown
						popupZIndexClass="z-50"
						onStateChange={(e) => {
							const newPathname = pathname.replace(`/${locale}`, `/${e}`);
							router.push(newPathname);
						}}
						defaultValue={locale}
						width=""
						popupTopPosition={50}
						size="small"
						items={[
							{
								label: "🇮🇩 ID",
								value: "id",
							},
							{
								label: "🇬🇧 EN",
								value: "en",
							},
						]}
					/>
					<Button size="small" className="p-3 rounded-lg">
						{tNavbar("cta.consultation")}
					</Button>
				</div>
			</div>

			{/* Full-width dropdown */}
			{activeDropdown !== null && menus[activeDropdown].subMenu && (
				<div
					className={`absolute left-0 bg-from-bot w-full transition-all ease-in-out transform z-40 ${
						activeDropdown !== null
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-2"
					} ${isScroll ? "bg-white shadow-md" : "bg-white shadow-md"}`}
					style={{ top: "100%" }}
					onMouseLeave={() => setActiveDropdown(null)}
				>
					<div className="container max-w-[1440px]  flex gap-4 justify-between mx-auto px-6 py-8">
						<div className="space-y-2">
							<div className="text-xl font-semibold">{tServices("title")}</div>
							<div>{tServices("subtitle")}</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-4">
							{menus[activeDropdown].subMenu.items.map((subItem, subIndex) => (
								<Link
									key={subIndex}
									href={subItem.href}
									className="group block p-3 hover:bg-from-bot transition duration-300 rounded-lg  border border-neutral-100"
								>
									<div className="flex items-center w-full  gap-3">
										<div className="w-8 h-8">
											<img src={subItem.img} alt="" />
										</div>
										<div>
											<h3 className="font-semibold text-nowrap ">
												{subItem.title}
											</h3>
											{/* <p className="text-sm text-gray-500 mt-1 leading-relaxed">
												{subItem.description}
											</p> */}
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default HeaderPublic;

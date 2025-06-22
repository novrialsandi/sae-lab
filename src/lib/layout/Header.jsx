"use client";

import Button from "@/lib/components/Button";
import { icons } from "../icons/iconSvg";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "../components/Dropdown";
import {
	EnglishCourseIcon,
	ProofreadingIcon,
	SwornTranslationIcon,
	TranscriptionIcon,
	TranslationIcon,
	BIPAClassIcon,
	CaptionInstagramIcon,
	FormattingIcon,
	PPTLayoutingIcon,
	SubtitlingIcon,
	TypingIcon,
} from "@/lib/components/Icons";

const HeaderPublic = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const router = useRouter();

	const tNavbar = useTranslations("navbar");
	const tServices = useTranslations("services");

	const [isScroll, setIsScroll] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

	const serviceIcons = (
		key,
		defaultColor = "#A7CED5",
		hoverColor = "#407C89"
	) => {
		const size = 40;

		const IconComponentMap = {
			translation: TranslationIcon,
			proofreading: ProofreadingIcon,
			swornTranslation: SwornTranslationIcon,
			transcription: TranscriptionIcon,
			captionInstagram: CaptionInstagramIcon,
			englishCourse: EnglishCourseIcon,
			bipaClass: BIPAClassIcon,
			subtitling: SubtitlingIcon,
			typing: TypingIcon,
			formatting: FormattingIcon,
			pptLayouting: PPTLayoutingIcon,
		};

		const Icon = IconComponentMap[key];

		return (
			<span className="relative w-[40px] h-[40px]">
				<Icon
					size={size}
					color={defaultColor}
					className="absolute top-0 left-0 group-hover:opacity-0 "
				/>
				<Icon
					size={size}
					color={hoverColor}
					className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 "
				/>
			</span>
		);
	};

	const menus = [
		{ key: "home", href: "/" },
		{ key: "about", href: "/about" },
		{
			key: "services",
			href: "/services",
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
					img: key,
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
		{ key: "faq", href: "/faq" },
	];

	// Helper function to check if current path matches menu item
	const isActiveMenu = (menuHref) => {
		// Remove locale from pathname for comparison
		const cleanPathname = pathname.replace(`/${locale}`, "") || "/";

		// For home route
		if (menuHref === "/") {
			return cleanPathname === "/";
		}

		// For other routes
		return cleanPathname === menuHref;
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Close mobile menu when window is resized to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsMobileMenuOpen(false);
				setActiveMobileDropdown(null);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
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

	const toggleMobileDropdown = (index) => {
		setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
	};

	return (
		<>
			<nav
				className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white ease-in-out flex justify-center items-center"
				onMouseLeave={handleMouseLeave}
			>
				<div className="flex justify-between w-full max-w-[1440px] items-center px-4 sm:px-6 py-4 relative">
					{/* Logo */}
					<Link className="w-32 sm:w-40 lg:w-72 flex-shrink-0" href={"/"}>
						{icons.iconLogo}
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex gap-8 relative">
						{menus.map((val, index) => (
							<div
								key={index}
								className="relative"
								onMouseEnter={() => handleMouseEnter(index)}
							>
								<Link
									href={val.href}
									className={`cursor-pointer ${
										isActiveMenu(val.href)
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

					{/* Desktop CTA */}
					<div className="hidden lg:flex gap-4 w-72 justify-end">
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
						<Button size="small" className="rounded-lg">
							{tNavbar("cta.consultation")}
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="lg:hidden flex items-center gap-3">
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
									label: "🇮🇩",
									value: "id",
								},
								{
									label: "🇬🇧",
									value: "en",
								},
							]}
						/>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Desktop Full-width dropdown */}
				{activeDropdown !== null && menus[activeDropdown].subMenu && (
					<div
						className={`hidden lg:block absolute left-0 bg-from-bot w-full transition-all ease-in-out transform z-40 ${
							activeDropdown !== null
								? "opacity-100 translate-y-0"
								: "opacity-0 -translate-y-2"
						} ${isScroll ? "bg-white shadow-md" : "bg-white shadow-md"}`}
						style={{ top: "100%" }}
						onMouseLeave={() => setActiveDropdown(null)}
					>
						<div className="container max-w-[1440px] flex gap-4 justify-between mx-auto px-6 py-8">
							<div className="space-y-2">
								<div className="text-xl font-semibold">
									{tServices("title")}
								</div>
								<div>{tServices("subtitle")}</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-4">
								{menus[activeDropdown].subMenu.items.map(
									(subItem, subIndex) => (
										<Link
											key={subIndex}
											href={subItem.href}
											className="group block p-3 hover:bg-from-bot transition duration-300 rounded-lg border border-neutral-100"
										>
											<div className="flex items-center w-full gap-3">
												{serviceIcons(subItem.img)}
												<div>
													<h3 className="font-semibold text-nowrap">
														{subItem.title}
													</h3>
												</div>
											</div>
										</Link>
									)
								)}
							</div>
						</div>
					</div>
				)}
			</nav>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
					<div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
						<div className="flex flex-col h-full">
							{/* Mobile Menu Header */}
							<div className="flex items-center justify-between p-4 border-b border-gray-200">
								<div className="w-24 h-6">{icons.iconLogo}</div>
								<button
									onClick={() => setIsMobileMenuOpen(false)}
									className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
								>
									<X className="w-5 h-5" />
								</button>
							</div>

							{/* Mobile Menu Items */}
							<div className="flex-1 overflow-y-auto">
								<div className="p-4 space-y-1">
									{menus.map((val, index) => (
										<div key={index}>
											{val.subMenu ? (
												<div>
													<button
														onClick={() => toggleMobileDropdown(index)}
														className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
													>
														<span className="font-medium">
															{tNavbar(`menu.${val.key}`)}
														</span>
														<ChevronDown
															className={`w-4 h-4 transition-transform ${
																activeMobileDropdown === index
																	? "rotate-180"
																	: ""
															}`}
														/>
													</button>

													{/* Mobile Services Dropdown */}
													{activeMobileDropdown === index && (
														<div className="mt-2 space-y-1 pl-4">
															{val.subMenu.items.map((subItem, subIndex) => (
																<Link
																	key={subIndex}
																	href={subItem.href}
																	className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
																	onClick={() => setIsMobileMenuOpen(false)}
																>
																	{serviceIcons(subItem.img)}
																	<div className="flex-1 min-w-0">
																		<h3 className="font-medium text-sm">
																			{subItem.title}
																		</h3>
																		<p className="text-xs text-gray-500 truncate">
																			{subItem.description}
																		</p>
																	</div>
																</Link>
															))}
														</div>
													)}
												</div>
											) : (
												<Link
													href={val.href}
													className={`block p-3 font-medium hover:bg-gray-50 rounded-lg transition-colors ${
														isActiveMenu(val.href)
															? "text-primary font-bold bg-primary/10"
															: ""
													}`}
													onClick={() => setIsMobileMenuOpen(false)}
												>
													{tNavbar(`menu.${val.key}`)}
												</Link>
											)}
										</div>
									))}
								</div>
							</div>

							{/* Mobile CTA */}
							<div className="p-4 border-t border-gray-200">
								<Button
									size="small"
									className="w-full rounded-lg"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{tNavbar("cta.consultation")}
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default HeaderPublic;

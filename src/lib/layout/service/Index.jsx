"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname, useRouter } from "next/navigation";
import FAQ from "@/lib/components/Reuse/FAQ";
import Dropdown from "@/lib/components/Dropdown";
import Star from "@/lib/components/Star";

const LayoutServiceComponent = ({ children }) => {
	const tServices = useTranslations("services");
	const pathname = usePathname();
	const router = useRouter();

	const menus = [
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
	}));

	// Function to check if current path is active
	const isActive = (href) => {
		const cleanPathname = pathname.replace(/^\/[a-z]{2}/, "");
		return cleanPathname === href;
	};

	// Get current active service for dropdown default value
	const getCurrentService = () => {
		const cleanPathname = pathname.replace(/^\/[a-z]{2}/, "");
		const currentService = menus.find((menu) => menu.href === cleanPathname);
		return currentService ? currentService.key : menus[0].key; // Default to first service if none found
	};

	// Handle dropdown selection change
	const handleDropdownChange = (selectedValue) => {
		const selectedService = menus.find((menu) => menu.key === selectedValue);
		if (selectedService) {
			router.push(selectedService.href);
		}
	};

	return (
		<>
			<div className="w-full flex flex-col gap-8 items-center md:justify-center min-h-svh py-24">
				<div className="flex flex-col gap-4 justify-center items-center">
					<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
						<Star size="size-5" color="#74B2BC" />
						{tServices("title")}
					</div>
					<div className="text-neutral-900 text-3xl text-center font-semibold">
						{tServices("explore")}
					</div>
					<div className="text-neutral-500 text-center">
						{tServices("subtitle")}
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col md:flex-row gap-8"
				>
					<div className="p-4 hidden px-6 md:flex flex-col gap-4 rounded-2xl border bg-white border-neutral-200 shadow-md">
						{menus.map((val, index) => {
							const active = isActive(val.href);
							return (
								<Link key={index} href={val.href} className="">
									<motion.div
										className={`p-2 rounded-lg cursor-pointer font-semibold transition-all duration-200 ${
											active
												? "bg-[#74B2BC] text-neutral-50"
												: "text-neutral-700 hover:bg-gray-50"
										}`}
										whileHover={{ scale: active ? 1 : 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										{val.title}
									</motion.div>
								</Link>
							);
						})}
					</div>
					{/* Mobile Dropdown */}
					<div className="block md:hidden">
						<Dropdown
							defaultValue={getCurrentService()}
							items={menus.map((item) => ({
								label: item.title,
								value: item.key,
							}))}
							onStateChange={handleDropdownChange}
						/>
					</div>
					{/* Content Area */}
					<div className="flex-1">{children}</div>
				</motion.div>
			</div>
			<FAQ />
		</>
	);
};

export default LayoutServiceComponent;

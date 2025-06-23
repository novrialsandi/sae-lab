import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const HeroAbout = () => {
	const t = useTranslations("heroAbout");
	const aboutProject = t.raw("stats");

	return (
		<div className="w-full flex flex-col items-center justify-center bg-from-top min-h-svh py-12 sm:py-16 md:py-20 lg:py-24 pt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex md:flex-col flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:justify-around"
			>
				<div className="max-w-full lg:max-w-[533px] flex flex-col justify-between gap-6 sm:gap-8 order-2 lg:order-1">
					<div className="space-y-3 sm:space-y-4">
						<div className="text-neutral-700 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-center md:text-start">
							{t("title")}
						</div>
						<div className="text-base text-neutral-500 sm:text-lg text-center md:text-start leading-relaxed">
							{t("description")}
						</div>
					</div>
					<div className="flex justify-between gap-4 sm:gap-2">
						{aboutProject.map((val, index) => (
							<div
								key={index}
								className="flex flex-col gap-1 text-center sm:text-left"
							>
								<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-none">
									{val.value}
								</div>
								<div className="text-sm sm:text-base lg:text-lg text-neutral-600">
									{val.label}
								</div>
							</div>
						))}
					</div>
				</div>
				<motion.div
					className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-1 lg:order-2"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<img
						src="/about/hero.png"
						alt="About illustration"
						className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default HeroAbout;

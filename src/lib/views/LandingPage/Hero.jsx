import Button from "@/lib/components/Button";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("hero");

	return (
		<div className="w-full flex overflow-hidden flex-col items-center bg-from-top min-h-svh md:pt-16 pt-6">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full relative max-w-[1440px] px-4 flex flex-col justify-between h-full flex-1"
			>
				{/* Text Section */}
				<div className="flex justify-center items-center flex-1">
					<div className="max-w-[750px] w-full z-10 flex flex-col gap-6 text-center items-center py-8">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
							{t("headline_part1")}{" "}
							<span className="text-[#35656F]">{t("highlight1")}</span>{" "}
							{t("headline_part2")}{" "}
							<span className="text-[#35656F]">{t("highlight2")}</span>.
						</h1>
						<p className="text-base sm:text-lg text-[#697586] max-w-[600px]">
							{t("description")}
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href={"/contact"}>
								<Button size="small">{t("contactButton")}</Button>
							</Link>
							<Link href={"/service/translation"}>
								<Button size="small" isPrimary={false}>
									{t("servicesButton")}
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Image Section - Always at bottom */}
				<motion.div
					className="w-full flex items-end justify-center mt-auto"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<img
						src="/hero.png"
						alt="Hero illustration"
						className="w-[150%] max-w-none sm:w-full object-bottom"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;

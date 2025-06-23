import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const WhyUs = () => {
	const t = useTranslations("whyUs");

	const whyDetail = t.raw("reasons");

	return (
		<div className="w-full relative flex flex-col items-center justify-center py-8 min-h-svh">
			<Star size="size-12" className="absolute top-[18%] right-[20%]" />
			<Star size="size-16" className="absolute  top-[28%] left-[20%]" />
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="w-full z-10 max-w-[1440px]  px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between"
				>
					<div className="flex flex-col items-center gap-12">
						<div className="flex flex-col items-center gap-4">
							<div className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
								{t("title")}
							</div>
							<div className="text-base sm:text-lg text-center text-neutral-500">
								{t("subtitle")}
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{whyDetail.map((val, index) => {
								return (
									<div
										key={index}
										className="border space-y-8 bg-white border-neutral-300 hover:bg-from-bot hover:scale-105 duration transition md:p-8 p-4 rounded-2xl"
									>
										<img src={val.img} alt="" />
										<div className="space-y-4">
											<div className="text-xl font-semibold">{val.title}</div>
											<div className="text-[#7D7987]">{val.subtitle}</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default WhyUs;

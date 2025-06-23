import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const ConsultNow = () => {
	const t = useTranslations("consultNow");

	return (
		<div className="w-full relative flex bg-[#F5F9FA] items-center justify-center min-h-svh py-8 md:py-24">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="w-full z-10 max-w-[1440px]  px-4 sm:px-6 flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 lg:items-start items-center lg:justify-evenly"
				>
					<div className="max-w-[494px] flex flex-col gap-6 lg:items-start items-center">
						<div className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug lg:text-start text-center">
							{t("heading")}
						</div>
						<div className="md:text-xl text-base text-neutral-500 lg:text-start text-center">
							{t("description")}
						</div>
						<Link href={"/contact"}>
							<Button size="small">{t("button")}</Button>
						</Link>
					</div>
					<div className="flex relative">
						<img src="/about/Grup.png" alt="" className="" />
						<img
							src="/about/frame.png"
							alt=""
							className="absolute hidden md:block -bottom-7 -left-7"
						/>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default ConsultNow;

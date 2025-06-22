import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Button from "../Button";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const t = useTranslations("faq");

	const rawItems = t.raw("items");

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full flex flex-col items-center justify-center min-h-svh py-16 pt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col gap-8 lg:gap-12 justify-center items-center"
			>
				{/* Left side - Header */}
				<div className="max-w-[500px] flex flex-col lg:justify-start justify-center items-center gap-4">
					<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
						<Star size="size-5" color="#74B2BC" />
						FAQ
					</div>
					<div className="text-2xl text-center sm:text-3xl lg:text-4xl text-[#2f555d] font-semibold">
						{t("title")}
					</div>
					<div className="text-lg lg:text-start text-center text-neutral-500">
						{t("desc")}
					</div>
				</div>

				{/* Right side - FAQ Items */}
				<motion.div
					className="w-full max-w-[710px] flex flex-col gap-4"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					{rawItems.map((item, index) => (
						<motion.div
							key={index}
							className="bg-white rounded-2xl shadow-sm border border-[#E9F2F5] overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full p-6 text-left flex justify-between items-center hover:bg-[#F8FCFD] transition-colors duration-200 group"
							>
								<h3 className="text-lg font-medium text-[#2f555d] pr-4">
									{item.question}
								</h3>
								<motion.div
									className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
									initial={false}
									animate={{
										scale: openIndex === index ? 1.1 : 1,
									}}
									transition={{ duration: 0.2, ease: "easeInOut" }}
								>
									<AnimatePresence mode="wait">
										{openIndex === index ? (
											<motion.div
												key="minus"
												initial={{ opacity: 0, rotate: -90 }}
												animate={{ opacity: 1, rotate: 0 }}
												exit={{ opacity: 0, rotate: 90 }}
												transition={{ duration: 0.2 }}
											>
												<Minus
													size={20}
													className="text-[#74B2BC] group-hover:text-[#2f555d] transition-colors duration-200"
												/>
											</motion.div>
										) : (
											<motion.div
												key="plus"
												initial={{ opacity: 0, rotate: 90 }}
												animate={{ opacity: 1, rotate: 0 }}
												exit={{ opacity: 0, rotate: -90 }}
												transition={{ duration: 0.2 }}
											>
												<Plus
													size={20}
													className="text-[#74B2BC] group-hover:text-[#2f555d] transition-colors duration-200"
												/>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</button>

							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{
											duration: 0.3,
											ease: "easeInOut",
											opacity: { duration: 0.2 },
										}}
										className="overflow-hidden"
									>
										<div className="px-6 pb-6">
											<div className="pt-2 border-t border-[#E9F2F5]">
												<p className="text-neutral-600 leading-relaxed mt-4">
													{item.answer}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default FAQ;

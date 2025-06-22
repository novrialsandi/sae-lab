import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Button from "../Button";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const faq = [
		{
			question: "Bagaimana cara memulai konsultasi?",
			answer:
				"Cukup hubungi kami melalui WhatsApp atau email. Kami akan mengatur jadwal konsultasi sesuai kenyamanan Anda—tanpa perlu isi formulir rumit.",
		},
		{
			question: "Berapa lama proses pengerjaan biasanya?",
			answer:
				"Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk proyek sederhana biasanya 2-4 minggu, sedangkan proyek besar bisa memakan waktu 2-6 bulan. Kami akan memberikan estimasi waktu yang jelas setelah konsultasi awal.",
		},
		{
			question: "Layanan apa saja yang disediakan SAE?",
			answer:
				"SAE menyediakan berbagai layanan termasuk konsultasi teknik, desain struktural, analisis kekuatan material, perencanaan konstruksi, dan supervisi proyek. Kami juga melayani audit teknis dan sertifikasi keamanan.",
		},
		{
			question: "Apakah ada garansi untuk layanan yang diberikan?",
			answer:
				"Ya, kami memberikan garansi untuk semua layanan konsultasi dan desain. Periode garansi disesuaikan dengan jenis layanan dan akan dijelaskan dalam kontrak kerja sama.",
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full flex flex-col items-center justify-center min-h-svh py-16">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between lg:items-start items-center"
			>
				{/* Left side - Header */}
				<div className="max-w-[500px] flex flex-col lg:justify-start lg:items-start justify-center items-center gap-4">
					<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
						<Star size="size-5" color="#74B2BC" />
						FAQ
					</div>
					<div className="text-2xl sm:text-3xl lg:text-4xl text-[#2f555d] font-semibold">
						Frequently Asked Questions
					</div>
					<div className="text-lg lg:text-start text-center text-neutral-500">
						Jika ada pertanyaan yang ingin Anda ajukan, kami akan menjawab semua
						pertanyaan Anda.
					</div>
					<Button isPrimary={false} size="small" className="w-fit">
						Lihat Selengkapnya
					</Button>
				</div>

				{/* Right side - FAQ Items */}
				<motion.div
					className="w-full max-w-[710px] flex flex-col gap-4"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					{faq.map((item, index) => (
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

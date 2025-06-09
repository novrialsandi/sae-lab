import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroAbout = () => {
	const aboutProject = [
		{ label: "Pengalaman", value: "+9 Tahun" },
		{ label: "Proyek Selesai", value: "1400" },
		{ label: "Review Faswork", value: "4.9/5" },
	];

	return (
		<div className="w-full flex flex-col items-center justify-center bg-from-top min-h-svh">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between"
			>
				<div className="w-full lg:w-1/2 flex flex-col justify-around gap-6 order-2 lg:order-1">
					<div className="space-y-2">
						<div className="text-5xl font-semibold">Tentang Kami</div>
						<div className="text-lg text-justify">
							SAE adalah tempat yang tepat untuk memenuhi segala kebutuhan
							penulisan Anda. Kami menyebutnya “rumah” karena di sini Anda tidak
							hanya memesan lewat formulir, tetapi juga bisa berdiskusi langsung
							dengan linguist kami. Kami menghargai setiap waktu Anda dengan
							memberikan respons yang cepat dan hasil kerja yang dikirim tepat
							waktu.
						</div>
					</div>
					<div className="flex justify-between">
						{aboutProject.map((val, index) => (
							<div key={index} className="flex flex-col gap-1">
								<div className="md:text-5xl text-4xl font-semibold text-primary">
									{val.value}
								</div>
								<div className="text-lg text-neutral-600">{val.label}</div>
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
						className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default HeroAbout;

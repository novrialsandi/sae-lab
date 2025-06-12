import { motion, AnimatePresence } from "framer-motion";

const ConsultNow = () => {
	return (
		<div className="w-full relative flex flex-col items-center justify-center min-h-screen py-8 md:py-24">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="w-full z-10 max-w-[1440px]  px-4 sm:px-6 flex flex-col md:flex-row gap-8 lg:gap-12 lg:justify-between"
				>
					<div className="max-w-[494px] space-y-6">
						<div className="font-semibold text-5xl leading-snug">
							Siap Membuat Tulisanmu Lebih Bermakna?
						</div>
						<div className="text-xl text-neutral-500">
							Konsultasikan kebutuhanmu sekarang dan rasakan pengalaman layanan
							yang personal dan tepat waktu.Kami di sini untuk membantumu
							menulis dengan lebih baik — dari awal hingga akhir.
						</div>
					</div>
					<div className="flex">
						<img src="/about/Grup.png" alt="" />
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default ConsultNow;

import Button from "@/lib/components/Button";
import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
	return (
		<div className="w-full flex flex-col items-center justify-end bg-from-top min-h-svh pt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col gap-8 lg:gap-12 justify-center items-center"
			>
				<div className="max-w-[750px] flex flex-col gap-6 text-center items-center">
					<div className="text-5xl font-semibold">
						Solusi <span className="text-[#35656F]">bahasa</span> terbaik,
						dikerjakan <span className="text-[#35656F]">sepenuh hati</span>.{" "}
					</div>
					<div className="text-lg text-[#697586]">
						Kami menawarkan konsultasi langsung antar personal. Komunikasi dua
						arah ini menjadikan setiap proses lebih personal. Kami juga
						menghargai waktumu dengan selalu merespons cepat dan tepat waktu.
					</div>

					<div className="flex gap-4">
						<Button size="small">Hubungi Kami</Button>
						<Button size="small" isPrimary={false}>
							Lihat Layanan
						</Button>
					</div>
				</div>
				<motion.div
					className="w-full  flex items-center justify-center lg:justify-end order-1 lg:order-2"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<img
						src="/hero.png"
						alt="Hero illustration"
						className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;

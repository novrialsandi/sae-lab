import Button from "@/lib/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="w-full flex overflow-hidden flex-col items-center bg-from-top h-svh pt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full relative max-w-[1440px] px-4 sm:px-6 flex flex-col gap-10 lg:gap-12 justify-between h-full items-center"
			>
				{/* Text Section */}
				<div className="max-w-[750px] w-full z-10 flex flex-col gap-6 text-center items-center">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
						Solusi <span className="text-[#35656F]">bahasa</span> terbaik,
						dikerjakan <span className="text-[#35656F]">sepenuh hati</span>.
					</h1>
					<p className="text-base sm:text-lg text-[#697586] max-w-[600px]">
						Kami menawarkan konsultasi langsung antar personal. Komunikasi dua
						arah ini menjadikan setiap proses lebih personal. Kami juga
						menghargai waktumu dengan selalu merespons cepat dan tepat waktu.
					</p>
					<div className="flex flex-wrap justify-center lg:justify-start gap-4">
						<Button size="small">Hubungi Kami</Button>
						<Button size="small" isPrimary={false}>
							Lihat Layanan
						</Button>
					</div>
				</div>

				{/* Image Section */}
				<motion.div
					className="w-full flex items-center justify-center"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<img
						src="/hero.png"
						alt="Hero illustration"
						className="w-full h-auto object-contain"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;

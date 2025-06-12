import Button from "@/lib/components/Button";
import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";

const Detail = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center bg-[#CFE3E8] min-h-svh pt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col gap-8 lg:gap-12 justify-center items-center"
			>
				<div className="max-w-[500px] flex flex-col gap-8">
					<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
						<Star size="size-5" color="#74B2BC" />
						Tentang Kami
					</div>
					<div className="text-4xl text-[#2f555d] font-medium">
						Temukan linguis profesional dengan respon cepat{" "}
					</div>
					<div className="text-lg text-neutral-600">
						Semua linguis kami adalah penutur asli yang menerjemahkan ke bahasa
						ibu masing-masing dan tinggal di negara asal masing-masing. Setiap
						linguis memiliki kualifikasi yang sangat baik di bidang
						penerjemahan.
					</div>
					<Button isPrimary={false} size="small" className="w-fit">
						Tentang Kami
					</Button>
				</div>
				<motion.div
					className="w-full  flex items-center justify-center"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<div className="w-full max-h-[500px] h-full">
						<div className="w-1/2 rounded-2xl relative bg-[#A7CED5]"></div>
						<div className="w-1/2"></div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Detail;

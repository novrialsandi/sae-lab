import Button from "@/lib/components/Button";
import {
	CourseSmall,
	ProofreadingSmall,
	SwormSmall,
	TranscriptSmall,
	TranslationSmall,
} from "@/lib/components/Icons";
import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";

const Detail = () => {
	const services = [
		{
			label: "Translation",
			logo: <TranslationSmall />,
		},
		{
			label: "Proofreading",
			logo: <ProofreadingSmall />,
		},
		{
			label: "Sworn Translation",
			logo: <SwormSmall />,
		},
		{
			label: "Transkripsi",
			logo: <TranscriptSmall />,
		},
		{
			label: "English Course",
			logo: <CourseSmall />,
		},
		{
			label: "+ 6 Lainnya",
			logo: "",
		},
	];
	return (
		<div className="w-full flex flex-col items-center justify-center bg-[#CFE3E8] min-h-svh">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex gap-8 lg:gap-12 justify-around items-center"
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
					className="w-[700px] gap-4 flex "
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<div className="w-1/2 h-[484px] relative p-8 rounded-2xl overflow-hidden bg-[#A7CED5] flex flex-col justify-between items-center">
						<div className="absolute rounded-full -top-10 -left-8  z-0 size-28 bg-[#74B2BC] "></div>
						<div className="absolute rounded-full -bottom-10 -right-10  z-0 size-28 bg-[#74B2BC] "></div>
						<div className="flex flex-wrap justify-center gap-3 z-10">
							{services.map((val, index) => {
								return (
									<div
										key={index}
										className="bg-[#CFE3E8] flex items-center gap-1 text-sm font-semibold text-[#407C89] rounded-lg p-2"
									>
										<span>{val?.logo}</span>
										<div>{val.label}</div>
									</div>
								);
							})}
						</div>
						<img src="/service.png" alt="" />
					</div>
					<div className="w-1/2 flex flex-col space-y-4">
						<div className="w-full flex p-8 justify-between rounded-2xl relative bg-[#A7CED5]">
							<div className="text-[#2F555D] flex flex-col justify-between font-semibold text-3xl">
								<div>9 Tahun</div>
								<div>Pengalaman</div>
							</div>
							<img src="/target.png" alt="" />
						</div>
						<div className="w-full h-full gap-4 p-8 flex flex-col items-center justify-between rounded-2xl relative bg-[#A7CED5]">
							<div>
								<img src="/user.png" alt="" />
							</div>
							<div className="font-semibold text-xl text-[#407C89]">
								Project Selesai
							</div>
							<div className="font-extrabold text-6xl text-[#35656F]">
								1400+
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Detail;

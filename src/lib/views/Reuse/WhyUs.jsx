import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";

const WhyUs = () => {
	const whyDetail = [
		{
			title: "Profesional & Berpengalaman",
			subtitle:
				"Tim kami terdiri dari linguist profesional dengan latar belakang akademik yang linear.",
			img: "/reuse/businessman.png",
		},
		{
			title: "Akurasi & Kualitas Tinggi",
			subtitle:
				"Kami menjamin terjemahan yang akurat, natural, dan sesuai konteks.",
			img: "/reuse/arrows.png",
		},
		{
			title: "Layanan Cepat & Tepat Waktu",
			subtitle:
				"Kami berkomitmen memberikan hasil tepat waktu tanpa mengurangi kualitas.",
			img: "/reuse/schedule.png",
		},
	];

	return (
		<div className="w-full relative flex flex-col items-center justify-center min-h-screen py-8 md:py-24">
			<Star size="size-12" className="absolute top-[18%] right-[20%]" />
			<Star size="size-16" className="absolute  top-[28%] left-[20%]" />
			<Star size="size-16" className="absolute  bottom-[5%] right-[40%]" />
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
							<div className="text-4xl font-semibold">Why SAE?</div>
							<div className="text-lg text-neutral-500">
								SAE adalah tempat yang tepat untuk memenuhi segala kebutuhan
								penulisan Anda.
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{whyDetail.map((val, index) => {
								return (
									<div
										key={index}
										className="border space-y-8 border-neutral-300 bg-from-bot p-8 rounded-2xl"
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

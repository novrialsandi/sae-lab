import { motion, AnimatePresence } from "framer-motion";

const ConsultNow = () => {
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
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="w-full z-10 max-w-[1440px]  px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between"
				>
					<div className="flex gap-8">
						<div className="max-w-[494px] space-y-6">
							<div className="font-semibold text-5xl">
								Siap Membuat Tulisanmu Lebih Bermakna?
							</div>
							<div className="text-xl text-neutral-500">
								Konsultasikan kebutuhanmu sekarang dan rasakan pengalaman
								layanan yang personal dan tepat waktu.Kami di sini untuk
								membantumu menulis dengan lebih baik — dari awal hingga akhir.
							</div>
						</div>
						<div className="flex">
							<div className="">
								<img src="/about/Frame2.png" alt="" />
								<img src="/about/Frame3.png" alt="" />
							</div>
							<img
								className="object-contain w-full "
								src="/about/Frame1.png"
								alt=""
							/>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default ConsultNow;

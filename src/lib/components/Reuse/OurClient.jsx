import Star from "@/lib/components/Star";
import { motion, AnimatePresence } from "framer-motion";

const OurClient = () => {
	const whyDetail = [
		{
			img: "/reuse/businessman.png",
		},
		{
			img: "/reuse/arrows.png",
		},
		{
			img: "/reuse/schedule.png",
		},
		{
			img: "/reuse/businessman.png",
		},
		{
			img: "/reuse/arrows.png",
		},
		{
			img: "/reuse/schedule.png",
		},
		{
			img: "/reuse/arrows.png",
		},
		{
			img: "/reuse/schedule.png",
		},
	];

	return (
		<div className="w-full relative flex bg-[#F5F9FA] flex-col items-center justify-center min-h-screen py-8 md:py-24">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="w-full z-10 max-w-[1440px]  px-4 sm:px-6 flex flex-col  gap-8 lg:gap-12 "
				>
					<div className="text-center text-4xl font-semibold">Our Client</div>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{whyDetail.map((val, index) => {
							return (
								<div
									key={index}
									className="border border-neutral-200 hover:shadow-lg rounded-2xl overflow-hidden outer"
								>
									<div className="p-8 grayscale aspect-square hover:bg-from-bot  hover:grayscale-0">
										<img src={val.img} alt="" />
									</div>
								</div>
							);
						})}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default OurClient;

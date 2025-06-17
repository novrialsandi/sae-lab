import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import { Pagination } from "swiper/modules";

const Services = () => {
	return (
		<>
			<div className="w-full relative flex flex-col items-center justify-center py-8 md:py-40">
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="w-full z-10 max-w-[1440px]  px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between"
					>
						<Swiper
							slidesPerView={3}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
						>
							<SwiperSlide>Slide 1</SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
							<SwiperSlide>Slide 4</SwiperSlide>
							<SwiperSlide>Slide 5</SwiperSlide>
							<SwiperSlide>Slide 6</SwiperSlide>
							<SwiperSlide>Slide 7</SwiperSlide>
							<SwiperSlide>Slide 8</SwiperSlide>
							<SwiperSlide>Slide 9</SwiperSlide>
						</Swiper>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
};

export default Services;

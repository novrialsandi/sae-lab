import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Pagination, Navigation } from "swiper/modules";
import {
	EnglishCourseIcon,
	ProofreadingIcon,
	SwornTranslationIcon,
	TranscriptionIcon,
	TranslationIcon,
	BIPAClassIcon,
	CaptionInstagramIcon,
	FormattingIcon,
	PPTLayoutingIcon,
	SubtitlingIcon,
	TypingIcon,
} from "@/lib/components/Icons";
import Button from "@/lib/components/Button";
import Star from "@/lib/components/Star";

const Services = () => {
	const swiperRef = useRef(null);

	const tServices = useTranslations("services");

	const serviceIcons = (
		key,
		defaultColor = "#A7CED5",
		hoverColor = "#407C89"
	) => {
		const size = 40;

		const IconComponentMap = {
			translation: TranslationIcon,
			proofreading: ProofreadingIcon,
			swornTranslation: SwornTranslationIcon,
			transcription: TranscriptionIcon,
			captionInstagram: CaptionInstagramIcon,
			englishCourse: EnglishCourseIcon,
			bipaClass: BIPAClassIcon,
			subtitling: SubtitlingIcon,
			typing: TypingIcon,
			formatting: FormattingIcon,
			pptLayouting: PPTLayoutingIcon,
		};

		const Icon = IconComponentMap[key];

		return (
			<span className="relative w-[40px] h-[40px]">
				<Icon
					size={size}
					color={defaultColor}
					className="absolute top-0 left-0 group-hover:opacity-0 "
				/>
				<Icon
					size={size}
					color={hoverColor}
					className="absolute top-0 left-0 opacity-0 group-hover:opacity-100"
				/>
			</span>
		);
	};

	const menus = [
		"translation",
		"proofreading",
		"swornTranslation",
		"transcription",
		"captionInstagram",
		"englishCourse",
		"bipaClass",
		"subtitling",
		"typing",
		"formatting",
		"pptLayouting",
	].map((key) => ({
		key,
		title: tServices(`items.${key}.title`),
		description: tServices(`items.${key}.description`),
		price: tServices(`items.${key}.price`),
		img: key,
		href: `/service/${
			key === "swornTranslation"
				? "sworn-translation"
				: key === "captionInstagram"
				? "instagram-caption"
				: key === "pptLayouting"
				? "PPT-layouting"
				: key === "bipaClass"
				? "BIPA-class"
				: key
		}`,
	}));

	return (
		<>
			<div className="w-full min-h-svh relative flex flex-col items-center justify-center py-8">
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="w-full z-10 max-w-[1440px] sm:px-10 px-4 flex flex-col gap-8 justify-center items-center"
					>
						<div className="flex flex-col items-center gap-4">
							<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
								<Star size="size-5" color="#74B2BC" />
								{tServices("title")}
							</div>
							<div className="font-semibold text-2xl sm:text-3xl lg:text-4xl  text-[#2f555d]">
								{tServices("select")}
							</div>
						</div>
						<div className="relative w-full">
							{/* Custom Navigation Buttons */}
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className="sm:block absolute hidden cursor-pointer hover:shadow-[0_0_4px_rgba(16,185,129,0.4)] -left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 border border-gray-200 -ml-4 md:-ml-6"
								aria-label="Previous slide"
							>
								<ChevronLeft className="w-4 h-4 text-gray-600" />
							</button>

							<button
								onClick={() => swiperRef.current?.slideNext()}
								className="sm:block absolute hidden cursor-pointer hover:shadow-[0_0_4px_rgba(16,185,129,0.4)] -right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 border border-gray-200 -mr-4 md:-mr-6"
								aria-label="Next slide"
							>
								<ChevronRight className="w-4 h-4 text-gray-600" />
							</button>

							<Swiper
								onSwiper={(swiper) => {
									swiperRef.current = swiper;
								}}
								slidesPerView={1}
								spaceBetween={20}
								loop={true}
								loopAdditionalSlides={2}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination, Navigation]}
								breakpoints={{
									// Mobile (sm)
									640: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									// Tablet (md)
									768: {
										slidesPerView: 2,
										spaceBetween: 24,
									},
									// Large tablet (lg)
									1024: {
										slidesPerView: 3,
										spaceBetween: 28,
									},
									// Desktop (xl)
									1280: {
										slidesPerView: 4,
										spaceBetween: 30,
									},
								}}
								className="overflow-visible custom-swiper"
								style={{
									paddingLeft: "16px",
									paddingRight: "16px",
								}}
							>
								{menus.map((subItem, subIndex) => {
									const formatPriceText = (text) => {
										const regex = /(Rp\s?[0-9.,]+)/;
										const match = text.match(regex);

										if (!match) return text;

										const [matchedRp] = match;
										const parts = text.split(regex);

										return (
											<>
												{parts[0]}
												<span className="font-bold text-[16px] text-[#407C89]">
													{matchedRp}
												</span>
												{parts[2]}
											</>
										);
									};
									return (
										<SwiperSlide key={subIndex} className="h-auto my-12 ">
											<div className="group flex flex-col justify-between shadow-md relative p-4 hover:bg-from-bot rounded-lg h-[352px]">
												<div className="absolute -top-8 rounded-full flex w-fit bg-white border border-neutral-300 p-2">
													{serviceIcons(subItem.img)}
												</div>
												<div className="space-y-4">
													<h3 className="font-semibold mt-8 text-2xl text-[#364152] leading-tight">
														{subItem.title}
													</h3>
													<div className="text-[#4B5565] line-clamp-4">
														{subItem.description}
													</div>
												</div>
												<div className="text-[#697586] text-sm">
													{formatPriceText(subItem.price)}
												</div>
												<Link href={subItem.href} className="w-full">
													<Button
														size="small"
														isPrimary={false}
														className="w-full group-hover:hidden"
													>
														{tServices("button")}
													</Button>
													<Button
														size="small"
														isPrimary={true}
														className="w-full hidden group-hover:block"
													>
														{tServices("button")}
													</Button>
												</Link>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
						<Link href={"/service/translation"}>
							<Button size="small"> {tServices("all")}</Button>
						</Link>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
};

export default Services;

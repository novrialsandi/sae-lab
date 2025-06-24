import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
import Star from "@/lib/components/Star";
import { review } from "@/lib/constant";

const MarqueeReview = () => {
	const t = useTranslations("marqueeReview");

	return (
		<div className="w-full relative flex bg-[#F5F9FA] flex-col items-center justify-center  py-8 md:py-24">
			<div className="flex flex-col items-center gap-4 pb-10">
				<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
					<Star size="size-5" color="#74B2BC" />
					{t("label")}
				</div>
				<div className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center text-[#2f555d]  px-2">
					{t("heading")}
				</div>
			</div>
			<Marquee>
				<div className="flex gap-6 p-3">
					{review.slice(0, 10).map((val, index) => (
						<div
							key={index}
							className="flex p-4 gap-4 w-80 rounded-2xl bg-white border border-neutral-200 shadow-md "
						>
							<img src={val.img} alt="" className="aspect-square size-12" />

							<div className="flex flex-col gap-1 w-full">
								<div className="flex w-full justify-between">
									<div className="font-bold text-neutral-600">{val.name}</div>
									<div className="text-sm text-neutral-500">{val.date}</div>
								</div>
								<div className="text-neutral-700 line-clamp-4 text-sm md:text-base">
									{val.comment}
								</div>
							</div>
						</div>
					))}
				</div>
			</Marquee>
			<Marquee direction="right">
				<div className="flex gap-6 p-3">
					{review.slice(10, 17).map((val, index) => (
						<div
							key={index}
							className="flex p-4 gap-4 w-80 rounded-2xl bg-white border border-neutral-200 shadow-md "
						>
							<img src={val.img} alt="" className="aspect-square size-12" />

							<div className="flex flex-col gap-1 w-full">
								<div className="flex w-full justify-between ">
									<div className="font-bold text-neutral-600">{val.name}</div>
									<div className="text-sm text-neutral-500">{val.date}</div>
								</div>
								<div className="text-neutral-700 line-clamp-4 text-sm md:text-base">
									{val.comment}
								</div>
							</div>
						</div>
					))}
				</div>
			</Marquee>
		</div>
	);
};

export default MarqueeReview;

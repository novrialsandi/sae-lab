import React from "react";
import Marquee from "react-fast-marquee";
import Star from "../Star";
import { useTranslations } from "next-intl";

const MarqueeCient = () => {
	const t = useTranslations("marqueeClient");

	const companyLogos = Array.from(
		{ length: 19 },
		(_, index) => `/client-logo/logo${index + 1}.png`
	);

	return (
		<div className="w-full relative flex bg-[#F5F9FA] flex-col items-center justify-center min-h-screen py-8 md:py-24">
			<div className="flex flex-col items-center gap-4 pb-10">
				<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit">
					<Star size="size-5" color="#74B2BC" />
					{t("label")}
				</div>
				<div className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center text-[#2f555d]">
					{t("heading")}
				</div>
			</div>
			<Marquee>
				<div className="flex gap-6 p-3">
					{companyLogos.slice(0, 10).map((val, index) => (
						<div
							key={index}
							className=" bg-white shadow-md aspect-square hover:bg-from-bot flex rounded-2xl items-center justify-center border border-neutral-200 lg:size-64 md:size-48 size-32 p-4 hover:bg-left-bottom"
						>
							<img src={val} alt="" />
						</div>
					))}
				</div>
			</Marquee>
			<Marquee direction="right">
				<div className="flex gap-6 p-3">
					{companyLogos.slice(10, 19).map((val, index) => (
						<div
							key={index}
							className=" bg-white shadow-md aspect-square hover:bg-from-bot flex rounded-2xl items-center justify-center border border-neutral-200 lg:size-64 md:size-48 size-32 p-4 hover:bg-left-bottom"
						>
							<img src={val} alt="" />
						</div>
					))}
				</div>
			</Marquee>
		</div>
	);
};

export default MarqueeCient;

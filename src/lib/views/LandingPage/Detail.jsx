import { Link } from "@/i18n/navigation";
import Button from "@/lib/components/Button";
import {
	CourseSmall,
	ProofreadingSmall,
	SwormSmall,
	TranscriptSmall,
	TranslationSmall,
} from "@/lib/components/Icons";
import Star from "@/lib/components/Star";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Detail = () => {
	const t = useTranslations("detail");

	const services = t.raw("services").map((label, index) => {
		const icons = [
			<TranslationSmall />,
			<ProofreadingSmall />,
			<SwormSmall />,
			<TranscriptSmall />,
			"", // for "+7 More"
		];
		return {
			label,
			logo: icons[index] || "",
		};
	});

	return (
		<div className="w-full flex flex-col items-center justify-center bg-[#CFE3E8] min-h-svh py-8 lg:py-16">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8"
			>
				<div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-center justify-around">
					{/* Left content */}
					<div className="w-full xl:max-w-[500px] flex flex-col gap-6 lg:gap-8 text-center xl:text-left">
						<div className="bg-[#E9F2F5] flex gap-2 items-center rounded-2xl font-medium text-[#74B2BC] p-2 px-4 w-fit mx-auto xl:mx-0">
							<Star size="w-5 h-5" color="#74B2BC" />
							{t("sectionLabel")}
						</div>
						<div className="text-2xl sm:text-3xl lg:text-4xl text-[#2f555d] font-medium leading-tight">
							{t("heading")}
						</div>
						<div className="text-base lg:text-lg text-neutral-600 leading-relaxed">
							{t("description")}
						</div>
						<Link href={"/about"}>
							<Button
								isPrimary={false}
								size="small"
								className="w-fit mx-auto xl:mx-0"
							>
								{t("button")}
							</Button>
						</Link>
					</div>

					{/* Right content */}
					<motion.div
						className="w-full max-w-[700px]"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						{/* Mobile */}
						<div className="flex flex-col lg:hidden gap-4">
							<div className="w-full min-h-[300px] relative p-6 rounded-2xl overflow-hidden bg-[#A7CED5] flex flex-col justify-between items-center">
								<div className="absolute rounded-full -top-10 -left-8 z-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#74B2BC]"></div>
								<div className="absolute rounded-full -bottom-10 -right-10 z-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#74B2BC]"></div>
								<div className="flex flex-wrap justify-center gap-2 sm:gap-3 z-10 mb-4">
									{services.map((val, index) => (
										<div
											key={index}
											className="bg-[#CFE3E8] flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#407C89] rounded-lg p-2"
										>
											<span>{val.logo}</span>
											<div>{val.label}</div>
										</div>
									))}
								</div>
								<img src="/service.png" alt="service" className="size-28" />
							</div>

							{/* Cards */}
							<div className="flex gap-4">
								<div className="flex-1 p-4 sm:p-6 rounded-2xl bg-[#A7CED5] flex flex-col items-center text-center">
									<img src="/target.png" alt="experience" />
									<div className="text-[#2F555D] font-semibold text-lg sm:text-2xl">
										{t("experienceYears")}
									</div>
									<div className="text-[#2F555D] font-semibold text-sm sm:text-base">
										{t("experienceLabel")}
									</div>
								</div>
								<div className="flex-1 p-4 sm:p-6 rounded-2xl bg-[#A7CED5] flex flex-col items-center justify-center text-center">
									<img src="/user.png" alt="projects" />
									<div className="font-semibold text-sm sm:text-base text-[#407C89] mb-1">
										{t("projectLabel")}
									</div>
									<div className="font-extrabold text-2xl sm:text-3xl text-[#35656F]">
										{t("projectCount")}
									</div>
								</div>
							</div>
						</div>

						{/* Desktop */}
						<div className="hidden lg:flex gap-4">
							<div className="w-1/2 h-[484px] relative p-8 rounded-2xl overflow-hidden bg-[#A7CED5] flex flex-col justify-between items-center">
								<div className="absolute rounded-full -top-10 -left-8 z-0 w-28 h-28 bg-[#74B2BC]"></div>
								<div className="absolute rounded-full -bottom-10 -right-10 z-0 w-28 h-28 bg-[#74B2BC]"></div>
								<div className="flex flex-wrap justify-center gap-3 z-10">
									{services.map((val, index) => (
										<div
											key={index}
											className="bg-[#CFE3E8] flex items-center gap-1 text-sm font-semibold text-[#407C89] rounded-lg p-2"
										>
											<span>{val.logo}</span>
											<div>{val.label}</div>
										</div>
									))}
								</div>
								<img src="/service.png" alt="service" />
							</div>

							<div className="w-1/2 flex flex-col space-y-4">
								<div className="w-full flex p-8 justify-between items-center rounded-2xl bg-[#A7CED5]">
									<div className="text-[#2F555D] flex flex-col font-semibold text-3xl">
										<div>{t("experienceYears")}</div>
										<div>{t("experienceLabel")}</div>
									</div>
									<img src="/target.png" alt="experience" />
								</div>
								<div className="w-full h-full gap-4 p-8 flex flex-col items-center justify-between rounded-2xl bg-[#A7CED5]">
									<img src="/user.png" alt="projects" />
									<div className="font-semibold text-xl text-[#407C89] text-center">
										{t("projectLabel")}
									</div>
									<div className="font-extrabold text-6xl text-[#35656F]">
										{t("projectCount")}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Detail;

import React from "react";
import { icons } from "../icons/iconSvg";
import { Instagram, Mail, Phone, Map } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const FooterPublic = () => {
	const tServices = useTranslations("services");

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

	// Preformatted WhatsApp URL
	const whatsappUrl = `https://wa.me/6282137903311?text=${encodeURIComponent(
		`Hi! I'm interested in your service.\n\nCould you please provide more information and help me get started? Thank you!`
	)}`;

	return (
		<div className="w-full space-y-12 pt-12 pb-8 text-neutral-50 bg-primary flex flex-col items-center">
			<div className="w-full max-w-[1440px] px-6 flex flex-col md:flex-row md:justify-between gap-10">
				{/* Left section */}
				<div className="max-w-72 text-neutral-50 text-lg space-y-6">
					<div>{icons.iconLogoWhite}</div>

					<div className="flex gap-2">
						<Map className="min-w-5 min-h-5 mt-1 flex-none" />
						<div>
							Jalan Kaliurang KM 9,5, Sardonoharjo, Ngaglik, Sleman, Daerah
							Istimewa Yogyakarta
						</div>
					</div>

					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2"
					>
						<Phone className="min-w-5 min-h-5 mt-1 flex-none" />
						<div>+62 8213-7903-311 (Firosyan)</div>
					</a>

					<div className="flex gap-2">
						<Mail className="min-w-5 min-h-5 mt-1 flex-none" />
						<div>admin@saelab.id</div>
					</div>
				</div>

				{/* Right section */}
				{/* <div className="flex flex-row lg:w-1/2 w-full md:justify-between md:flex-nowrap flex-wrap gap-10 md:gap-20 text-neutral-50"> */}
				<div className="flex flex-row max-w-96 md:justify-between gap-10 md:gap-20 w-full text-neutral-50">
					<div className="space-y-6">
						<div className="text-lg font-bold">Company</div>
						<div className="flex flex-col gap-4">
							<Link href={"/about"}>About Us</Link>
							<Link href={"/service/translation"}>Service</Link>
							<Link href={"/contact"}>Contact</Link>
							<Link href={"/faq"}>FAQ</Link>
						</div>
					</div>

					<div className="space-y-6">
						<div className="text-lg font-bold">Follow Us</div>
						<div className="space-y-4">
							<a
								href="https://instagram.com/saelab.id"
								target="_blank"
								className="flex items-center gap-2 hover:text-white/80 transition"
								rel="noopener noreferrer"
							>
								<Instagram className="w-5 h-5" />
								Instagram
							</a>
							<a
								href="https://tiktok.com/@saelab.id"
								target="_blank"
								className="flex items-center gap-2 hover:text-white/80 transition"
								rel="noopener noreferrer"
							>
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
								</svg>
								TikTok
							</a>
						</div>
					</div>
					{/* Services
					<div className="space-y-6">
						<div className="text-lg font-bold">Services</div>
						<div className="flex md:flex-col lg:flex-row flex-row gap-10 lg:gap-20 md:gap-4">
							<div className="flex flex-col gap-4">
								{menus.slice(0, 6).map((menu) => (
									<Link key={menu.key} href={menu.href}>
										{menu.title}
									</Link>
								))}
							</div>
							<div className="flex flex-col gap-4">
								{menus.slice(6, 11).map((menu) => (
									<Link key={menu.key} href={menu.href}>
										{menu.title}
									</Link>
								))}
							</div>
						</div>
					</div> */}
				</div>
			</div>

			{/* Copyright */}
			<div className="max-w-[1440px] text-sm px-6 w-full space-y-6">
				<div className="border-t border-neutral-50 w-full" />
				<div className="text-center md:text-start">
					© 2025 SAE. All rights reserved
				</div>
			</div>
		</div>
	);
};

export default FooterPublic;

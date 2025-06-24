"use client";

import React from "react";
import { icons } from "../icons/iconSvg";
import { Instagram, Mail, Phone, Map } from "lucide-react";
import { Link } from "@/i18n/navigation";

const FooterPublic = () => {
	const handleConsultation = () => {
		// Format WhatsApp message
		const message = `Hi! I'm interested in your service.

Could you please provide more information and help me get started? Thank you!`;

		// WhatsApp number
		const whatsappNumber = "6282137903311"; // +62 8213-7903-311 formatted

		// Create WhatsApp URL
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
			message
		)}`;

		// Open WhatsApp
		window.open(whatsappUrl, "_blank");
	};

	return (
		<div className="w-full space-y-12 pt-12 pb-8 text-neutral-50  bg-primary flex flex-col items-center">
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
					<button className="flex gap-2" onClick={handleConsultation}>
						<Phone className="min-w-5 min-h-5 mt-1 flex-none" />
						<div>+62 8213-7903-311 (Firosyan)</div>
					</button>
					<div className="flex gap-2">
						<Mail className="min-w-5 min-h-5 mt-1 flex-none" />
						<div>admin@saelab.id</div>
					</div>
				</div>

				{/* Right section */}
				<div className="flex flex-row max-w-96 md:justify-between gap-10 md:gap-20 w-full text-neutral-50">
					<div className="space-y-6">
						<div className="text-lg font-bold">Company</div>
						<div className=" flex flex-col gap-4">
							<Link href={"/about"}>About Us</Link>
							<Link href={"/service/translation"}>Service</Link>
							<Link href={"/contact"}>Contact</Link>
						</div>
					</div>
					<div className="space-y-6">
						<div className="text-lg font-bold">Follow Us</div>
						<div className="space-y-4">
							<a
								href="https://instagram.com/saelab.id"
								target="_blank"
								className="flex items-center gap-2 hover:text-white/80 transition"
							>
								<Instagram className="w-5 h-5" />
								Instagram
							</a>
							<a
								href="https://tiktok.com/@saelab.id"
								target="_blank"
								className="flex items-center gap-2 hover:text-white/80 transition"
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

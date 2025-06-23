"use client";

import React, { useState } from "react";
import Button from "@/lib/components/Button";
import TextInput from "@/lib/components/TextInput";
import TextArea from "@/lib/components/TextArea";
import Dropdown from "@/lib/components/Dropdown";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const ContactComponent = () => {
	const tContact = useTranslations("contact");
	const tServices = useTranslations("services");

	// Form state
	const [formData, setFormData] = useState({
		name: "",
		service: "",
		description: "",
	});

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
	}));

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = () => {
		// Get service title
		const selectedService = menus.find((menu) => menu.key === formData.service);
		const serviceTitle = selectedService
			? selectedService.title
			: formData.service;

		// Format WhatsApp message
		const message = `Hi! I'm interested in your services.

*Name:* ${formData.name}
*Service:* ${serviceTitle}
*Description:* ${formData.description}

Please let me know how we can proceed. Thank you!`;

		// WhatsApp number (remove spaces and format)
		const whatsappNumber = "6282137903311"; // +62 8213-7903-311 formatted

		// Create WhatsApp URL
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
			message
		)}`;

		// Open WhatsApp
		window.open(whatsappUrl, "_blank");
	};

	return (
		<div className="w-full flex flex-col items-center justify-center min-h-svh py-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between"
			>
				<div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 order-2 lg:order-1">
					<div className="space-y-2 text-center lg:text-left">
						<div className="text-3xl sm:text-4xl font-semibold text-neutral-800">
							{tContact("title")}
						</div>
						<div className="text-neutral-600 text-sm sm:text-base">
							{tContact("description")}
						</div>
					</div>
					<div className="p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-md rounded-2xl border border-neutral-200">
						<TextInput
							size="small"
							label={tContact("form.nameLabel")}
							placeholder={tContact("form.namePlaceholder")}
							value={formData.name}
							onChange={(e) => handleInputChange("name", e.target.value)}
						/>
						<Dropdown
							popupTopPosition={50}
							size="small"
							items={menus.map((item) => ({
								label: item.title,
								value: item.key,
							}))}
							label={tContact("form.serviceLabel")}
							placeholder={tContact("form.servicePlaceholder")}
							value={formData.service}
							onStateChange={(value) => handleInputChange("service", value)}
						/>
						<TextArea
							label={tContact("form.descriptionLabel")}
							placeholder={tContact("form.descriptionPlaceholder")}
							value={formData.description}
							onChange={(e) => handleInputChange("description", e.target.value)}
						/>
						<Button
							className="w-full rounded-md"
							onClick={handleSubmit}
							size="small"
							disabled={
								!formData.name.trim() ||
								!formData.service ||
								!formData.description.trim()
							}
						>
							{tContact("form.submitButton")}
						</Button>
					</div>
				</div>
				<motion.div
					className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-1 lg:order-2"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<img
						src="/contact.png"
						alt="Contact illustration"
						className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default ContactComponent;

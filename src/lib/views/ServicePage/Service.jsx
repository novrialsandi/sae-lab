import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

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

const Service = () => {
	const tServices = useTranslations("services");
	const pathname = usePathname();

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

	// Get icon component based on service key
	const getIcon = (key) => {
		const icons = {
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
		return icons[key];
	};

	// Find current service based on pathname
	const getCurrentService = () => {
		// Remove locale prefix if present
		const cleanPathname = pathname.replace(/^\/[a-z]{2}/, "");
		return menus.find((service) => service.href === cleanPathname);
	};

	const currentService = getCurrentService();

	// WhatsApp consultation handler
	const handleConsultation = () => {
		if (!currentService) return;

		// Format WhatsApp message
		const message = `Hi! I'm interested in your *${currentService.title}* service.

*Service:* ${currentService.title}
*Price:* ${currentService.price}

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

	// If no matching service found, show default content
	if (!currentService) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="flex-1 p-8 bg-white rounded-2xl border border-neutral-200 shadow-md"
			>
				<div className="text-center py-12">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						{tServices("selectService")}
					</h2>
					<p className="text-gray-600">
						{tServices("selectServiceDescription")}
					</p>
				</div>
			</motion.div>
		);
	}

	const IconComponent = getIcon(currentService.key);

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
		<AnimatePresence mode="wait">
			<motion.div
				key={currentService.key}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -20 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="flex-1"
			>
				<div className="space-y-6">
					<div className="flex items-center gap-4">
						{IconComponent && (
							<div className="rounded-xl">
								<IconComponent className="w-8 h-8" />
							</div>
						)}

						<div className="text-3xl font-semibold text-neutral-800">
							{currentService.title}
						</div>
					</div>
					<img src="/image.png" alt="" className="w-full" />
					<div className="text-[#697586] text-sm">
						{currentService.description}
					</div>
					<div className="flex gap-4 items-center">
						<div className="text-[#697586] text-sm">
							{formatPriceText(currentService.price)}
						</div>
						<Button size="small" onClick={handleConsultation}>
							{tServices("consult")}
						</Button>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Service;

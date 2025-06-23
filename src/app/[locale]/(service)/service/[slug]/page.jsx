import ServicesComponent from "@/lib/views/ServicePage/Index";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
	const t = await getTranslations("services.items");
	const tSeo = await getTranslations("seo.service");
	const locale = await getLocale();
	const { slug } = await params;

	const slugToKeyMap = {
		translation: "translation",
		proofreading: "proofreading",
		"sworn-translation": "swornTranslation",
		transcription: "transcription",
		"instagram-caption": "captionInstagram",
		englishCourse: "englishCourse",
		"BIPA-class": "bipaClass",
		subtitling: "subtitling",
		typing: "typing",
		formatting: "formatting",
		"PPT-layouting": "pptLayouting",
	};

	const key = slugToKeyMap[slug];

	if (!key) {
		return {
			title: "Service Not Found - SAE",
			description: "The requested service could not be found.",
		};
	}

	const title = `${t(`${key}.title`)} - ${tSeo(`title`)} `;
	const description = t(`${key}.description`);
	const keywords = tSeo(`keywords`);

	return {
		title,
		description,
		keywords,
		metadataBase: new URL(`https://www.saelab.id`),
		openGraph: {
			type: "website",
			url: `https://www.saelab.id/${locale}/service/${slug}/`,
			title,
			description,
			images: [
				{
					url: "/meta.jpeg",
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/meta.jpeg"],
		},
	};
}

const ServiceSlugPage = () => {
	return <ServicesComponent />;
};

export default ServiceSlugPage;

import ContactComponent from "@/lib/views/ContactPage/Index";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("seo.contact");
	const locale = await getLocale();

	const title = t("title");
	const description = t("description");
	const keywords = t("keywords");

	return {
		title,
		description,
		metadataBase: new URL(`https://www.saelab.id`),
		openGraph: {
			type: "website",
			url: `https://www.saelab.id/${locale}/contact/`,
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
		keywords,
	};
}

const ContactPage = () => {
	return <ContactComponent />;
};

export default ContactPage;

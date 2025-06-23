import LandingComponent from "@/lib/views/LandingPage/Index";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("seo.home");
	const locale = await getLocale();

	const title = t("title");
	const description = t("description");
	const keywords = t("keywords");

	return {
		title,
		description,
		metadataBase: new URL(`https://www.saelab.id/${locale}`),
		openGraph: {
			type: "website",
			url: `https://www.saelab.id/${locale}/`,
			title,
			description,
			images: [
				{
					url: "/meta.png",
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/meta.png"],
		},
		keywords,
	};
}

const LandingPage = () => {
	return <LandingComponent />;
};

export default LandingPage;

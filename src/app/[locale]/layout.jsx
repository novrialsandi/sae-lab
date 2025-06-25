import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getTranslations } from "next-intl/server";
import { Manrope } from "next/font/google";
import Layout from "@/lib/layout/Index";

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
});

export default async function LocaleLayout({ children, params }) {
	const t = await getTranslations("seo.home");
	const tServices = await getTranslations("services");

	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: "Sae Lab",
		url: "https://www.saelab.id",
		logo: "https://www.saelab.id/meta.jpeg",
		image: "https://www.saelab.id/meta.jpeg",
		description: t("description"),
		telephone: "+62 821-3790-3311",
		email: "admin@saelab.id",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Jl. Kaliurang KM 9.5, Sardonoharjo, Ngaglik",
			addressLocality: "Sleman",
			postalCode: "55581",
			addressRegion: "Special Region of Yogyakarta",
			addressCountry: "ID",
		},
		openingHours: "Mo-Su 00:00-23:59",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: tServices("title"),
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.translation.title"),
						description: tServices("items.translation.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.proofreading.title"),
						description: tServices("items.proofreading.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.swornTranslation.title"),
						description: tServices("items.swornTranslation.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.transcription.title"),
						description: tServices("items.transcription.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.captionInstagram.title"),
						description: tServices("items.captionInstagram.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.englishCourse.title"),
						description: tServices("items.englishCourse.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.bipaClass.title"),
						description: tServices("items.bipaClass.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.subtitling.title"),
						description: tServices("items.subtitling.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.typing.title"),
						description: tServices("items.typing.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.formatting.title"),
						description: tServices("items.formatting.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: tServices("items.pptLayouting.title"),
						description: tServices("items.pptLayouting.description"),
					},
				},
			],
		},
		sameAs: [
			"https://www.instagram.com/saelab.id",
			"https://www.tiktok.com/@saelab.id",
		],
	};

	return (
		<html lang={locale}>
			<body className={`${manrope.className} antialiased`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<NextIntlClientProvider>
					<GoogleAnalytics gaId="G-SMBL1LGWTQ" />
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

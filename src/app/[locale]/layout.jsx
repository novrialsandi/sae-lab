import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Layout from "@/lib/layout/Index";
// import { GoogleAnalytics } from "@next/third-parties/google";

import { Manrope } from "next/font/google";

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
});

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className={`${manrope.className} antialiased`}>
				<NextIntlClientProvider>
					{/* <GoogleAnalytics gaId="G-920REJG2GY" /> */}
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

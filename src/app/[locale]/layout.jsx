import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Layout from "@/lib/layout/Index";

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider>
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

export default async function sitemap() {
	const locales = ["en", "id"];

	const baseUrl = "https://www.saelab.id";

	const staticPaths = ["/", "/about", "/contact", "/faq"];

	const serviceSlugs = [
		"translation",
		"proofreading",
		"sworn-translation",
		"transcription",
		"instagram-caption",
		"englishCourse",
		"BIPA-class",
		"subtitling",
		"typing",
		"formatting",
		"PPT-layouting",
	];
	const dynamicPaths = serviceSlugs.map((slug) => `/service/${slug}`);

	const allPaths = [...staticPaths, ...dynamicPaths];

	const sitemapEntries = allPaths.flatMap((path) => {
		return locales.map((locale) => {
			let priority = 0.8;
			if (path === "/") {
				priority = 1.0;
			} else if (["/about", "/contact", "/faq"].includes(path)) {
				priority = 0.7;
			}

			return {
				url: `${baseUrl}/${locale}${path === "/" ? "" : path}`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: priority,
			};
		});
	});

	return sitemapEntries;
}

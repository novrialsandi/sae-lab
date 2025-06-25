/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://www.saelab.id",
	generateRobotsTxt: true,
	changefreq: "weekly",
	priority: 0.7,
	trailingSlash: true,
	i18n: {
		locales: ["id", "en"], // sesuaikan dengan bahasa yang kamu dukung
		defaultLocale: "id",
	},
	additionalPaths: async (config) => {
		const locales = config.i18n?.locales || ["id"];

		// Static pages
		const staticPaths = ["/about", "/faq", "/contact"];

		// Service slugs (bisa diganti fetch dari API atau fs kalau perlu)
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

		const paths = [];

		for (const locale of locales) {
			// Static routes
			for (const path of staticPaths) {
				paths.push({
					loc: `/${locale}${path}`,
					changefreq: "weekly",
					priority: 0.7,
					lastmod: new Date().toISOString(),
				});
			}

			// Dynamic /service/[slug] routes
			for (const slug of serviceSlugs) {
				paths.push({
					loc: `/${locale}/service/${slug}`,
					changefreq: "weekly",
					priority: 0.7,
					lastmod: new Date().toISOString(),
				});
			}
		}

		return paths;
	},
};

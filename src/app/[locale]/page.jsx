import HomeComponent from "@/lib/views/HomeComponent";

export default function Home() {
	return <HomeComponent />;
}

// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/navigation";

// export default function HomePage() {
// 	const t = useTranslations("HomePage");
// 	return (
// 		<div>
// 			<h1>{t("title")}</h1>
// 			<Link href="/about">{t("about")}</Link>
// 		</div>
// 	);
// }

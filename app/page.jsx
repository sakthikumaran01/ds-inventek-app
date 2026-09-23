import HomePageClient from "@/components/clients/HomePageClient";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.home.title,
  description: content.meta.home.description,
  keywords: content.meta.home.keywords,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePageClient content={content} />;
}

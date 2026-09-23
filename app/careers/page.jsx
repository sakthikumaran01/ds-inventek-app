import CareersPageClient from "@/components/clients/CareersPageClient";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.careers.title,
  description: content.meta.careers.description,
  keywords: content.meta.careers.keywords,
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersPageClient content={content} />;
}

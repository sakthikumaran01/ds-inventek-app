import ServicesPageClient from "@/components/clients/ServicesPageClient";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.services.title,
  description: content.meta.services.description,
  keywords: content.meta.services.keywords,
};

export default function ServicesPage() {
  return <ServicesPageClient content={content} />;
}


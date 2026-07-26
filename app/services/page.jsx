import ServicesPageClient from "@/components/clients/ServicesPageClient";
import content from "@/data/content.json";
import { SITE_URL } from "@/lib/utils";
import { getBreadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: content.meta.services.title,
  description: content.meta.services.description,
  keywords: content.meta.services.keywords,
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesPageClient content={content} />
    </>
  );
}


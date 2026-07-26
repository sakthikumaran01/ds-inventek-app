import CoursesPageClient from "@/components/clients/CoursesPageClient";
import content from "@/data/content.json";
import { SITE_URL } from "@/lib/utils";
import { getBreadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: content.meta.courses.title,
  description: content.meta.courses.description,
  keywords: content.meta.courses.keywords,
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Courses", url: `${SITE_URL}/courses` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CoursesPageClient content={content} />
    </>
  );
}

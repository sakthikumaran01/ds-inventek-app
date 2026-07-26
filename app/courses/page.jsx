import CoursesPageClient from "@/components/clients/CoursesPageClient";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.courses.title,
  description: content.meta.courses.description,
  keywords: content.meta.courses.keywords,
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return <CoursesPageClient content={content} />;
}

import ContactPageClient from "@/components/clients/ContactPageClient";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.contact.title,
  description: content.meta.contact.description,
  keywords: content.meta.contact.keywords,
};

export default function ContactPage() {
  return <ContactPageClient content={content} />;
}

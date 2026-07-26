import content from "@/data/content.json";
import { SITE_URL } from "@/lib/utils";

const staticRoutes = ["", "/about", "/services", "/courses", "/careers", "/contact"];

export default function sitemap() {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const courseEntries = content.courses.list.map((course) => ({
    url: `${SITE_URL}/courses/${course.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceEntries = content.services.list.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...courseEntries, ...serviceEntries];
}

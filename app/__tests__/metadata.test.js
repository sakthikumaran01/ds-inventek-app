import { describe, it, expect } from "vitest";
import content from "@/data/content.json";

// Statically imports every page's metadata (or calls generateMetadata for
// the dynamic routes) and asserts every resulting <title> is unique —
// regression test for the home/careers pages that used to silently fall
// back to the root layout's generic title.
describe("page metadata", () => {
  it("every page (including every course and service slug) has a unique title", async () => {
    const titles = [];

    const staticPages = [
      import("../page.jsx"),
      import("../about/page.jsx"),
      import("../services/page.jsx"),
      import("../courses/page.jsx"),
      import("../courses/robotics-sports-training/page.jsx"),
      import("../careers/page.jsx"),
      import("../contact/page.jsx"),
    ];

    for (const modPromise of staticPages) {
      const mod = await modPromise;
      expect(mod.metadata?.title).toBeTruthy();
      titles.push(mod.metadata.title);
    }

    const courseModule = await import("../courses/[slug]/page.jsx");
    for (const course of content.courses.list) {
      const meta = await courseModule.generateMetadata({ params: { slug: course.id } });
      expect(meta.title).toBeTruthy();
      titles.push(meta.title);
    }

    const serviceModule = await import("../services/[slug]/page.jsx");
    for (const service of content.services.list) {
      const meta = await serviceModule.generateMetadata({ params: { slug: service.id } });
      expect(meta.title).toBeTruthy();
      titles.push(meta.title);
    }

    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it("every static page declares a canonical alternate", async () => {
    const staticPages = [
      import("../page.jsx"),
      import("../about/page.jsx"),
      import("../services/page.jsx"),
      import("../courses/page.jsx"),
      import("../courses/robotics-sports-training/page.jsx"),
      import("../careers/page.jsx"),
      import("../contact/page.jsx"),
    ];

    for (const modPromise of staticPages) {
      const mod = await modPromise;
      expect(mod.metadata?.alternates?.canonical).toBeTruthy();
    }
  });
});

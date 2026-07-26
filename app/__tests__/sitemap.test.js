import { describe, it, expect } from "vitest";
import sitemap from "../sitemap";
import content from "@/data/content.json";

describe("app/sitemap.js", () => {
  it("returns an array of entries", () => {
    const entries = sitemap();
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  it("includes an entry for every course slug in content.json", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const course of content.courses.list) {
      expect(urls.some((url) => url.endsWith(`/courses/${course.id}`))).toBe(true);
    }
  });

  it("includes an entry for every service slug in content.json", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const service of content.services.list) {
      expect(urls.some((url) => url.endsWith(`/services/${service.id}`))).toBe(true);
    }
  });

  it("includes the core static routes", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const route of ["/about", "/services", "/courses", "/careers", "/contact"]) {
      expect(urls.some((url) => url.endsWith(route))).toBe(true);
    }
  });
});

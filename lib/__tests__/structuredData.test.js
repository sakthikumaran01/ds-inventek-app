import { describe, it, expect } from "vitest";
import {
  getOrganizationJsonLd,
  getCourseJsonLd,
  getServiceJsonLd,
  getFaqJsonLd,
  getBreadcrumbJsonLd,
} from "../structuredData";
import content from "@/data/content.json";

function roundTrip(value) {
  return JSON.parse(JSON.stringify(value));
}

describe("structuredData", () => {
  it("getOrganizationJsonLd produces valid JSON with an Organization and a LocalBusiness per address", () => {
    const jsonLd = getOrganizationJsonLd(content.company);
    const parsed = roundTrip(jsonLd);

    expect(parsed["@context"]).toBe("https://schema.org");
    expect(Array.isArray(parsed["@graph"])).toBe(true);

    const org = parsed["@graph"].find((node) => node["@type"] === "Organization");
    expect(org.name).toBe(content.company.name);
    expect(org.email).toBe(content.company.email);
    expect(org.sameAs).toEqual(Object.values(content.company.socialLinks));

    const localBusinesses = parsed["@graph"].filter((node) => node["@type"] === "LocalBusiness");
    expect(localBusinesses.length).toBe(Object.keys(content.company.addresses).length);
  });

  it("does not fabricate a streetAddress for a placeholder address value", () => {
    const jsonLd = getOrganizationJsonLd(content.company);
    const chennai = jsonLd["@graph"].find((node) => node["@id"]?.endsWith("#chennai-centre"));
    // content.json's Chennai address is a "[coming soon]" placeholder today.
    if (content.company.addresses.chennai.value.trim().startsWith("[")) {
      expect(chennai.address.streetAddress).toBeUndefined();
    }
  });

  it("getCourseJsonLd produces valid JSON sourced from the course object, with no invented price", () => {
    const course = content.courses.list[0];
    const jsonLd = getCourseJsonLd(course);
    const parsed = roundTrip(jsonLd);

    expect(parsed["@type"]).toBe("Course");
    expect(parsed.name).toBe(course.name);
    expect(parsed.description).toBe(course.desc);
    expect(parsed.offers).toBeUndefined();
  });

  it("getServiceJsonLd produces valid JSON sourced from the service object", () => {
    const service = content.services.list[0];
    const jsonLd = getServiceJsonLd(service);
    const parsed = roundTrip(jsonLd);

    expect(parsed["@type"]).toBe("Service");
    expect(parsed.name).toBe(service.title);
    expect(parsed.description).toBe(service.desc);
  });

  it("getFaqJsonLd mirrors the visible FAQ list exactly", () => {
    const faqList = content.courses.faq.list;
    const jsonLd = getFaqJsonLd(faqList);
    const parsed = roundTrip(jsonLd);

    expect(parsed["@type"]).toBe("FAQPage");
    expect(parsed.mainEntity.length).toBe(faqList.length);
    faqList.forEach((faq, idx) => {
      expect(parsed.mainEntity[idx].name).toBe(faq.q);
      expect(parsed.mainEntity[idx].acceptedAnswer.text).toBe(faq.a);
    });
  });

  it("getBreadcrumbJsonLd produces a valid, correctly-ordered ListItem sequence", () => {
    const items = [
      { name: "Home", url: "https://dsinventek.com" },
      { name: "Courses", url: "https://dsinventek.com/courses" },
      { name: "Basic Electronics", url: "https://dsinventek.com/courses/basic-electronics" },
    ];
    const jsonLd = getBreadcrumbJsonLd(items);
    const parsed = roundTrip(jsonLd);

    expect(parsed["@type"]).toBe("BreadcrumbList");
    expect(parsed.itemListElement.length).toBe(3);
    expect(parsed.itemListElement[0].position).toBe(1);
    expect(parsed.itemListElement[2].position).toBe(3);
    expect(parsed.itemListElement[2].name).toBe("Basic Electronics");
  });
});

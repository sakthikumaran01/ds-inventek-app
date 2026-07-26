/**
 * JSON-LD structured-data builders. Every field is derived from the same
 * data (content.json, or a page's own already-rendered course/service
 * object) that the visible page uses — nothing here re-types a fact that
 * lives somewhere else.
 */
import { SITE_URL } from "./utils";

const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Parses a company.addresses.* entry into a schema.org PostalAddress,
 * using only the fields we actually have. Placeholder text (e.g.
 * "[Chennai Centre Address - coming soon]") is detected and omitted from
 * streetAddress rather than emitted as fake structured data.
 */
function toPostalAddress(address) {
  const postalCodeMatch = address.value.match(/(\d{6})/);
  const [localityRaw, ...regionParts] = address.city.split(",").map((s) => s.trim());

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: localityRaw,
    addressCountry: "IN",
  };

  if (regionParts.length > 0 && regionParts[0] !== "India") {
    postalAddress.addressRegion = regionParts[0];
  }

  const isPlaceholder = address.value.trim().startsWith("[");
  if (!isPlaceholder) {
    postalAddress.streetAddress = address.value.replace(/\n/g, ", ").trim();
  }
  if (postalCodeMatch) {
    postalAddress.postalCode = postalCodeMatch[1];
  }

  return postalAddress;
}

/**
 * Organization + one LocalBusiness node per branch, linked via
 * parentOrganization. Built entirely from data/content.json's `company`
 * block (the single source of truth for NAP data).
 */
export function getOrganizationJsonLd(company) {
  const organization = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: company.name,
    alternateName: "DS Robotics",
    url: SITE_URL,
    email: company.email,
    telephone: company.phone,
    logo: `${SITE_URL}/logo.png`,
    // Only confirmed profile URLs go here. company.socialLinks.instagram
    // and .whatsapp are still unverified (used only for the site's own
    // clickable icons) — add them here once confirmed real.
    sameAs: [company.socialLinks.linkedin, company.socialLinks.youtube],
  };

  const branches = Object.entries(company.addresses).map(([key, address]) => ({
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#${key}-centre`,
    name: `${company.name} — ${address.label}`,
    parentOrganization: { "@id": ORG_ID },
    telephone: company.phone,
    email: company.email,
    address: toPostalAddress(address),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [organization, ...branches],
  };
}

/**
 * Course JSON-LD. Deliberately has no `offers`/price — content.json has
 * no price field on any course, and this must not invent one.
 */
export function getCourseJsonLd(course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.desc,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "DS Inventek",
      sameAs: SITE_URL,
    },
  };
}

/** Service JSON-LD, sourced from the same service object the page renders. */
export function getServiceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "DS Inventek",
      sameAs: SITE_URL,
    },
    areaServed: "IN",
  };
}

/** FAQPage JSON-LD — must mirror a visibly-rendered FAQ list exactly. */
export function getFaqJsonLd(faqList) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** BreadcrumbList JSON-LD. `items` is [{ name, url }, ...] in order. */
export function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Shared utility functions for DS Inventek webapp.
 */

/**
 * Canonical production origin (no trailing slash). Single source of truth
 * for metadataBase, canonical URLs, sitemap/robots, and JSON-LD — override
 * via NEXT_PUBLIC_SITE_URL once a deployment's real domain differs.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dsinventek.com";

/**
 * Splits a newline-separated string into an array of lines.
 * Used for multi-line section titles stored in content.json.
 * @param {string} title
 * @returns {string[]}
 */
export function splitTitle(title) {
  return title.split("\n");
}

/**
 * Replaces the {year} placeholder in a string with the current full year.
 * @param {string} template
 * @returns {string}
 */
export function withCurrentYear(template) {
  return template.replace("{year}", new Date().getFullYear());
}

/**
 * Strips the course sub-title after " – " or " & " for compact display.
 * e.g. "Basic Electronics & Robotics Foundation" → "Basic Electronics"
 * @param {string} name
 * @returns {string}
 */
export function shortenCourseName(name) {
  return name.replace(/ – .*/, "").replace(/ & .*/, "");
}

/**
 * Derives a CSS level class name ("levelBeginner" | "levelIntermediate" | "levelAdvanced")
 * from a level string such as "Level 1" or "Level 2".
 * @param {string} level
 * @returns {"levelBeginner"|"levelIntermediate"|"levelAdvanced"}
 */
export function getLevelClass(level = "") {
  const l = level.toLowerCase();
  if (l.includes("1") || l.includes("beginner")) return "levelBeginner";
  if (l.includes("2") || l.includes("intermediate")) return "levelIntermediate";
  return "levelAdvanced";
}

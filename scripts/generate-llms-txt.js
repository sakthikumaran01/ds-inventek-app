#!/usr/bin/env node
/**
 * Regenerates public/llms.txt from data/content.json so the course/service
 * links can never drift out of sync with the real routes. Runs
 * automatically before every build (see package.json "prebuild").
 */
const fs = require("fs");
const path = require("path");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dsinventek.com";

const content = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data", "content.json"), "utf8")
);

const courseLines = content.courses.list
  .map((c) => `- [${c.name}](${SITE_URL}/courses/${c.id}): ${c.desc}`)
  .join("\n");

const serviceLines = content.services.list
  .map((s) => `- [${s.title}](${SITE_URL}/services/${s.id}): ${s.desc}`)
  .join("\n");

const output = `# ${content.company.name}

> ${content.meta.home.description}

${content.company.name} is a DPIIT-recognized robotics and AI education company based in Chennai and Puducherry, India, founded by combat-robotics World Champions (Games of the Future 2024, Kazan). It offers hands-on robotics courses for students, and turnkey robotics lab setup, curriculum, and faculty certification services for schools and colleges.

## Courses

${courseLines}

## Services

${serviceLines}

## Company

- [About](${SITE_URL}/about): Founders, mission, and track record.
- [Contact](${SITE_URL}/contact): ${content.company.email} · ${content.company.phone}
- [Careers](${SITE_URL}/careers): Open positions.
`;

const outPath = path.join(__dirname, "..", "public", "llms.txt");
fs.writeFileSync(outPath, output);
console.log(`Wrote ${outPath}`);

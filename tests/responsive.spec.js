import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "375px (small phone)", width: 375, height: 812 },
  { name: "768px (tablet)", width: 768, height: 1024 },
  { name: "1024px (small laptop)", width: 1024, height: 768 },
  { name: "1440px (desktop)", width: 1440, height: 900 },
  { name: "1920px (large monitor)", width: 1920, height: 1080 },
];

const PAGES = [
  { name: "homepage", path: "/" },
  { name: "course detail", path: "/courses/basic-electronics" },
  { name: "contact", path: "/contact" },
];

for (const page of PAGES) {
  for (const viewport of VIEWPORTS) {
    test(`${page.name} has no horizontal overflow at ${viewport.name}`, async ({
      page: browserPage,
    }) => {
      await browserPage.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      const { scrollWidth, clientWidth } = await browserPage.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(
        scrollWidth,
        `${page.name} at ${viewport.width}px: scrollWidth (${scrollWidth}) should not exceed clientWidth (${clientWidth})`
      ).toBeLessThanOrEqual(clientWidth);
    });
  }
}

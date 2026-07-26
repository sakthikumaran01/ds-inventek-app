import { describe, it, expect } from "vitest";
import robots from "../robots";

describe("app/robots.js", () => {
  it("never sets a blanket Disallow: / for the default user-agent", () => {
    const { rules } = robots();
    const defaultRule = rules.find((rule) => rule.userAgent === "*");

    expect(defaultRule).toBeDefined();
    expect(defaultRule.disallow).not.toBe("/");
    if (Array.isArray(defaultRule.disallow)) {
      expect(defaultRule.disallow).not.toContain("/");
    }
    expect(defaultRule.allow).toBe("/");
  });

  it("only disallows /api/ for the default user-agent", () => {
    const { rules } = robots();
    const defaultRule = rules.find((rule) => rule.userAgent === "*");
    expect(defaultRule.disallow).toBe("/api/");
  });

  it("references the sitemap", () => {
    const { sitemap } = robots();
    expect(sitemap).toMatch(/\/sitemap\.xml$/);
  });

  it("allows the named AI retrieval bots", () => {
    const { rules } = robots();
    const userAgents = rules.map((rule) => rule.userAgent);
    for (const bot of [
      "OAI-SearchBot",
      "ChatGPT-User",
      "Claude-SearchBot",
      "Claude-User",
      "PerplexityBot",
      "Perplexity-User",
    ]) {
      expect(userAgents).toContain(bot);
    }
  });
});

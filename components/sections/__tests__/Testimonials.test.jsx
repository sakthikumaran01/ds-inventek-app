import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials";
import content from "@/data/content.json";

describe("Testimonials", () => {
  it("renders the city/program separator as a single correct middle dot, not the mojibake 'Â·'", () => {
    render(<Testimonials />);

    const first = content.testimonials[0];
    const expectedMeta = `${first.city} · ${first.program}`;

    const matches = screen.getAllByText(expectedMeta);
    expect(matches.length).toBeGreaterThan(0);

    for (const el of matches) {
      expect(el.textContent).not.toContain("Â·");
      expect(el.textContent).toBe(expectedMeta);
    }
  });
});

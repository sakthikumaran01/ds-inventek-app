import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import content from "@/data/content.json";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/image", () => ({
  default: (props) => <img {...props} alt={props.alt} />,
}));

describe("Navbar", () => {
  it("renders every nav link from data/content.json without crashing", () => {
    render(<Navbar />);

    for (const link of content.navigation.navLinks) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href
      );
    }
  });
});

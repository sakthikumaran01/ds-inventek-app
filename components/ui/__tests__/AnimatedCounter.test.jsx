import { describe, it, expect, beforeEach } from "vitest";
import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AnimatedCounter from "../AnimatedCounter";

beforeEach(() => {
  global.__intersectionObserverInstances = [];
});

describe("AnimatedCounter", () => {
  it("starts at 0 before its viewport trigger fires", () => {
    render(<AnimatedCounter end={5000} suffix="+" />);
    expect(screen.getByText("0+")).toBeInTheDocument();
  });

  it("updates its displayed value once the IntersectionObserver reports the element in view", async () => {
    render(<AnimatedCounter end={5000} suffix="+" duration={0.05} />);

    expect(screen.getByText("0+")).toBeInTheDocument();

    const [observerInstance] = global.__intersectionObserverInstances;
    expect(observerInstance).toBeDefined();

    act(() => {
      observerInstance.callback([{ isIntersecting: true }]);
    });

    // The rAF-driven count-up runs outside of React's event system, so poll
    // (via waitFor, which wraps each check in act()) until it moves off 0.
    await waitFor(() => {
      expect(screen.queryByText("0+")).not.toBeInTheDocument();
    });
  });
});

"use client";

import { useState, useEffect } from "react";

/**
 * Tracks whether the page has scrolled past a threshold.
 * @param {number} threshold - Scroll distance in px before returning true. Default: 80.
 * @returns {boolean}
 */
export function useScrollPosition(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}

"use client";

import { useState, useEffect } from "react";

/**
 * True only on devices with a precise pointer (mouse/trackpad). Used to
 * skip Framer Motion `whileHover` setup entirely on touch devices, where
 * hover has no meaning and the spring calculation never visibly fires.
 * @returns {boolean}
 */
export function usePointerFine() {
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    setIsPointerFine(query.matches);

    const handleChange = (e) => setIsPointerFine(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return isPointerFine;
}

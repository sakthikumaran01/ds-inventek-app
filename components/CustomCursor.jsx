"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if it's a touch device or reduced motion is preferred
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setHidden(false);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "SELECT" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-card") ||
        target.closest('[role="button"]') ||
        target.classList.contains("clickable")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth trail effect using requestAnimationFrame
  useEffect(() => {
    if (hidden || !mounted) return;

    let animId;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16, // Trail speed factor
          y: prev.y + dy * 0.16,
        };
      });
      animId = requestAnimationFrame(updateTrail);
    };

    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [position, hidden, mounted]);

  if (hidden || !mounted) return null;

  return createPortal(
    <>
      {/* Inner Dot */}
      <div
        className={`${styles.cursorDot} ${hovered ? styles.cursorDotHovered : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Outer Ring */}
      <div
        className={`${styles.cursorRing} ${hovered ? styles.cursorRingHovered : ""}`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>,
    document.body
  );
}

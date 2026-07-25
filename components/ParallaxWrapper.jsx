"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Parallax wrapper component for scroll-based parallax effects
 * Wrap any element to give it parallax movement on scroll
 */
export default function ParallaxWrapper({ 
  children, 
  speed = 0.5,      // Parallax intensity (0 = none, 1 = full scroll distance)
  direction = "up", // "up" | "down" | "left" | "right"
  className = "",
  style = {}
}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate movement range based on speed
  const range = 100 * speed;
  
  // Create transform based on direction
  const yUp = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const yDown = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-range, range]);

  const transforms = {
    up: { y: yUp },
    down: { y: yDown },
    left: { x: xLeft },
    right: { x: xRight }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...transforms[direction],
        willChange: "transform"
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Parallax section with multiple layers
 */
export function ParallaxSection({ children, className = "" }) {
  return (
    <div className={`parallax-section ${className}`} style={{ position: "relative", overflow: "hidden" }}>
      {children}
    </div>
  );
}

/**
 * Floating element with continuous animation
 */
export function FloatingElement({ 
  children, 
  duration = 4, 
  distance = 15,
  delay = 0,
  className = "" 
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

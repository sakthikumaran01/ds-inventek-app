"use client";

import { useEffect, useRef, createContext, useContext } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

// Context for reduced motion preference
const MotionContext = createContext({ prefersReducedMotion: false });

/**
 * Enhanced ScrollReveal with Framer Motion
 * Automatically reveals .reveal-item elements with smooth animations
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // For elements that still use the CSS-based reveal system
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal-item").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

/**
 * Motion wrapper component for individual elements
 * Use this for fine-grained control over animations
 */
export function MotionReveal({ 
  children, 
  direction = "up", // "up" | "down" | "left" | "right" | "scale"
  delay = 0,
  duration = 0.6,
  distance = 40,
  className = "",
  once = true,
  threshold = 0.2,
  style = {}
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  const variants = {
    up: {
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -distance },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for animating multiple children in sequence
 */
export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  delayChildren = 0.1,
  className = "",
  style = {}
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger child - use inside StaggerContainer
 */
export function StaggerItem({ 
  children, 
  direction = "up",
  distance = 30,
  className = "",
  style = {}
}) {
  const directions = {
    up: { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={directions[direction]}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text reveal animation - animates text word by word
 */
export function TextReveal({ text, className = "", tag = "p", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(" ");
  
  const Tag = motion[tag] || motion.p;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

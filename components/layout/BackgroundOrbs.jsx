"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Enhanced background orbs with circuit-inspired glow paths
 * Creates ambient tech atmosphere
 */
export default function BackgroundOrbs() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-orbs" aria-hidden="true">
      {/* Primary gradient orbs */}
      <motion.div 
        className="orb orb-1"
        animate={reducedMotion ? {} : {
          x: [0, 30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="orb orb-2"
        animate={reducedMotion ? {} : {
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="orb orb-3"
        animate={reducedMotion ? {} : {
          x: [0, 20, 0],
          y: [0, -35, 0],
          scale: [1, 1.12, 1]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cyan accent orb for robotics feel */}
      <motion.div 
        className="orb orb-cyan"
        animate={reducedMotion ? {} : {
          x: [0, -40, 0],
          y: [0, 25, 0],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Circuit trace lines */}
      {!reducedMotion && (
        <svg className="circuit-traces" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="traceGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Horizontal trace */}
          <motion.path
            d="M0 300 Q200 280, 400 300 T800 280 T1200 300 T1600 280 L1920 300"
            stroke="url(#traceGrad1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Vertical trace */}
          <motion.path
            d="M1400 0 Q1420 200, 1400 400 T1420 800 L1400 1080"
            stroke="url(#traceGrad2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Diagonal trace */}
          <motion.path
            d="M0 800 L300 600 L500 650 L800 400 L1000 450"
            stroke="url(#traceGrad1)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </svg>
      )}

      {/* Floating particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={reducedMotion ? {} : {
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Tech grid overlay */}
      <div className="tech-grid" />
    </div>
  );
}

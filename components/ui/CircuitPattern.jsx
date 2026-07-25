"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./CircuitPattern.module.css";

/**
 * Animated circuit board pattern background
 * Creates a tech/robotics aesthetic with animated circuit traces
 */
export default function CircuitPattern({ 
  opacity = 0.08, 
  color = "#0ea5e9",
  animated = true 
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.circuitContainer} style={{ opacity }}>
      <svg 
        className={styles.circuitSvg}
        viewBox="0 0 400 400" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glow filter */}
          <filter id="circuitGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Animated gradient */}
          <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0">
              {animated && (
                <animate 
                  attributeName="offset" 
                  values="0;1" 
                  dur="3s" 
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="50%" stopColor={color} stopOpacity="1">
              {animated && (
                <animate 
                  attributeName="offset" 
                  values="0;1" 
                  dur="3s" 
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor={color} stopOpacity="0">
              {animated && (
                <animate 
                  attributeName="offset" 
                  values="0;1" 
                  dur="3s" 
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>
        </defs>

        {/* Circuit traces */}
        <g className={styles.traces} filter="url(#circuitGlow)">
          {/* Horizontal traces */}
          <motion.path
            d="M0 100 H150 L170 80 H250 L270 100 H400"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
          />
          <motion.path
            d="M0 200 H80 L100 220 H180 L200 200 H280 L300 180 H400"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M0 300 H120 L140 320 H220 L240 300 H320 L340 280 H400"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          />

          {/* Vertical traces */}
          <motion.path
            d="M100 0 V80 L80 100 V180 L100 200 V280 L120 300 V400"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M250 0 V60 L270 80 V140 L250 160 V240 L230 260 V400"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.path
            d="M350 0 V120 L330 140 V200 L350 220 V320 L370 340 V400"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
          />
        </g>

        {/* Circuit nodes/connection points */}
        <g className={styles.nodes}>
          {[
            [100, 100], [170, 80], [250, 100], 
            [100, 200], [200, 200], [300, 180],
            [140, 320], [240, 300], [340, 280],
            [80, 100], [100, 200], [120, 300],
            [270, 80], [250, 160], [230, 260],
            [330, 140], [350, 220], [370, 340]
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill={color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ 
                duration: 0.3, 
                delay: 1 + (i * 0.05),
                ease: "backOut"
              }}
            />
          ))}
        </g>

        {/* Pulsing energy dots (animated) */}
        {animated && (
          <g className={styles.energyDots}>
            <circle cx="0" cy="0" r="4" fill={color}>
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M0 100 H150 L170 80 H250 L270 100 H400"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="0" cy="0" r="3" fill={color}>
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M100 0 V80 L80 100 V180 L100 200 V280 L120 300 V400"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}
      </svg>

      {/* Additional grid pattern overlay */}
      <div className={styles.gridOverlay} />
    </div>
  );
}

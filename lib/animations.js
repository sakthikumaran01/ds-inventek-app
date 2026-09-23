/**
 * Framer Motion Animation Variants & Utilities
 * DS Inventek - Robotics Education Platform
 */

// ═══════════════════════════════════════════════════════════════════════════════
// EASING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],      // Apple-style smooth
  bouncy: [0.34, 1.56, 0.64, 1],          // Playful bounce
  snappy: [0.68, -0.55, 0.265, 1.55],     // Quick snap
  gentle: [0.4, 0, 0.2, 1],               // Material gentle
  sharp: [0.4, 0, 0.6, 1],                // Material sharp
};

// ═══════════════════════════════════════════════════════════════════════════════
// FADE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: easings.smooth } 
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easings.smooth } 
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easings.smooth } 
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: easings.smooth } 
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: easings.smooth } 
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// SCALE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: easings.bouncy } 
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: easings.smooth } 
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// STAGGER CONTAINERS
// ═══════════════════════════════════════════════════════════════════════════════
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

export const staggerContainerSlow = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// CARD VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════
export const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: easings.smooth 
    }
  }
};

export const cardHover = {
  scale: 1.02,
  y: -8,
  transition: { duration: 0.3, ease: easings.bouncy }
};

export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

// ═══════════════════════════════════════════════════════════════════════════════
// TEXT ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easings.smooth
    }
  })
};

export const letterReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.smooth }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// HERO ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const heroTitle = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: easings.smooth,
      delay: 0.2
    }
  }
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: easings.smooth,
      delay: 0.4
    }
  }
};

export const heroBadge = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: easings.bouncy,
      delay: 0.6
    }
  }
};

export const heroCta = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: easings.smooth,
      delay: 0.8
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE TRANSITIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easings.smooth }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: easings.smooth }
  }
};

export const pageSlide = {
  initial: { opacity: 0, x: 100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: easings.smooth }
  },
  exit: { 
    opacity: 0, 
    x: -100,
    transition: { duration: 0.3, ease: easings.smooth }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// MODAL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, delay: 0.1 }
  }
};

export const modalContent = {
  hidden: { 
    opacity: 0, 
    scale: 0.9, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: easings.bouncy 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 30,
    transition: { duration: 0.2 }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// NAVBAR ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const navLinkHover = {
  scale: 1.05,
  color: "#a78bfa",
  transition: { duration: 0.2 }
};

// ═══════════════════════════════════════════════════════════════════════════════
// STAT COUNTER ANIMATION HELPER
// ═══════════════════════════════════════════════════════════════════════════════
export const counterAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: easings.bouncy 
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// FLOATING / CONTINUOUS ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════
export const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
};

export const glowPulse = {
  boxShadow: [
    "0 0 20px rgba(124, 58, 237, 0.3)",
    "0 0 40px rgba(124, 58, 237, 0.6)",
    "0 0 20px rgba(124, 58, 237, 0.3)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Creates a stagger animation delay based on index
 */
export const getStaggerDelay = (index, baseDelay = 0.1) => ({
  transition: { delay: index * baseDelay }
});

/**
 * Creates viewport options for whileInView
 */
export const viewportOptions = {
  once: true,
  margin: "-100px"
};

/**
 * Respects user's reduced motion preference
 */
export const getReducedMotionVariants = (variants) => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } }
    };
  }
  return variants;
};

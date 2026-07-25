"use client";

import { motion } from "framer-motion";
import styles from "./PageHero.module.css";
import CircuitPattern from "./CircuitPattern";

export default function PageHero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <CircuitPattern opacity={0.06} />
      <div className="container">
        <motion.h1 
          id="hero-title" 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </motion.h1>
        <motion.p 
          id="hero-sub" 
          className={styles.heroSub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

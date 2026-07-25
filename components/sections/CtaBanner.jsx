"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CtaBanner.module.css";

export default function CtaBanner({
  title,
  subtitle,
  primaryText,
  primaryHref = "/courses",
  secondaryText,
  secondaryHref = "/contact",
  primaryBtnClass = "btn-white",
  secondaryBtnClass = "btn-ghost",
}) {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaInner}>
        <motion.h2 
          className={styles.ctaTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            className={styles.ctaSub}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div 
          className={styles.ctaBtns}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href={primaryHref} className={primaryBtnClass}>
            {primaryText}
          </Link>
          {secondaryText && (
            <Link href={secondaryHref} className={secondaryBtnClass}>
              {secondaryText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

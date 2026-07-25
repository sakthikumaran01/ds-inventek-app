"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";
import content from "@/data/content.json";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

function TestimonialCardContent({ t }) {
  return (
    <>
      <div className={styles.quoteIcon}>&ldquo;</div>
      <p className={styles.quoteText}>{t.quote}</p>
      <div className={styles.footerRow}>
        <div className={styles.avatar}>{t.name[0]}</div>
        <div>
          <h4 className={styles.name}>{t.name}</h4>
          <span className={styles.meta}>{t.city} Â· {t.program}</span>
        </div>
      </div>
    </>
  );
}

export default function Testimonials() {
  const testimonials = content.testimonials;
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <motion.div
          className="section-eyebrow"
          style={{ margin: "0 auto 1rem", justifyContent: "center" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {content.testimonialSection.eyebrow}
        </motion.div>
        <motion.h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {content.testimonialSection.title}
        </motion.h2>

        {/* Desktop: stagger grid (hidden on mobile via CSS) */}
        <motion.div
          className={`${styles.testimonialsGrid} ${styles.desktopGrid}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className={`glass-card ${styles.testimonialCard}`}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <TestimonialCardContent t={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: auto-scrolling marquee (hidden on desktop via CSS) */}
        <div className={styles.mobileMarquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {doubled.map((t, idx) => (
              <div key={idx} className={`glass-card ${styles.testimonialCard} ${styles.marqueeCard}`}>
                <TestimonialCardContent t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

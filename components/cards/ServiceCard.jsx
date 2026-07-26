"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";
import { usePointerFine } from "@/hooks/usePointerFine";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export default function ServiceCard({ icon, title, badge, desc, image, imageAlt, delay, id, features, ctaBadge, slug }) {
  const isPointerFine = usePointerFine();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: parseFloat(delay) || 0 }}
      whileHover={isPointerFine ? { y: -4 } : undefined}
      className={styles.cardWrapper}
    >
      <Link
        id={id}
        href={`/services/${slug || id}`}
        className={`glass-card ${styles.serviceCard}`}
      >
        <div className={styles.cardImageContainer}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.cardImage}
          />
          <div className={styles.cardIconBadge} aria-hidden="true">{icon}</div>
          <div className={styles.imageOverlay} />
        </div>
        <span className={styles.serviceBadge}>{badge}</span>
        <h3 className={styles.serviceTitle}>{title}</h3>
        {ctaBadge && <div className={styles.ctaBadge}>{ctaBadge}</div>}
        <p className={styles.serviceDesc}>{desc}</p>

        {features && features.length > 0 && (
          <div className={styles.featuresList}>
            {features.slice(0, 4).map((feature, fidx) => (
              <div key={fidx} className={styles.featureItem}>
                <span className={styles.featureBullet}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className={styles.serviceBtn}>
          <span>Learn More</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

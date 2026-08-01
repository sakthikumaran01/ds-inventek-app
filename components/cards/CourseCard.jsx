"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./CourseCard.module.css";
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

export default function CourseCard({
  name,
  level,
  duration,
  image,
  imageAlt,
  delay = 0,
  id,
  slug,
}) {
  const targetSlug = slug || id;
  const isPointerFine = usePointerFine();

  // Determine level styling
  const getLevelClass = () => {
    const levelLower = level.toLowerCase();
    if (levelLower.includes("1") || levelLower.includes("beginner")) return styles.levelBeginner;
    if (levelLower.includes("2") || levelLower.includes("intermediate")) return styles.levelIntermediate;
    return styles.levelAdvanced;
  };

  const getLevelIcon = () => {
    const levelLower = level.toLowerCase();
    if (levelLower.includes("1") || levelLower.includes("beginner")) return "⚡";
    if (levelLower.includes("2") || levelLower.includes("intermediate")) return "◈";
    return "▲";
  };

  return (
    <motion.div
      id={id}
      className={styles.courseCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: parseFloat(delay) || 0 }}
      whileHover={
        isPointerFine
          ? { y: -4, transition: { duration: 0.25, ease: "easeOut" } }
          : undefined
      }
    >
      <Link href={`/courses/${targetSlug}`} className={styles.courseCardBg}>
        <Image
          src={image}
          alt={imageAlt || name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.courseCardImage}
        />
        <div className={styles.courseCardOverlay} />
        <div className={styles.courseCardContent}>
          <span className={`${styles.courseLevel} ${getLevelClass()}`}>
            <span aria-hidden="true">{getLevelIcon()}</span>
            {level}
          </span>
          <div className={styles.courseInfo}>
            <h3 className={styles.courseName}>{name}</h3>
            <div className={styles.courseMeta}>
              <span className={styles.courseDuration}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                {duration}
              </span>
              <span className={styles.courseCta}>
                View course
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

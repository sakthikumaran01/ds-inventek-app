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
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/**
 * Card for the "Robotics Sports Training" parallel program on the
 * /courses listing page. Deliberately does not use CourseCard or any
 * level-filtering logic — this program has no level and must never read
 * as "Level 4" alongside Foundation/Quad Bot/Gyro Bot. Reuses
 * CourseCard.module.css so it's visually identical in size/prominence.
 */
export default function SportsProgramCard({ program, delay = 0 }) {
  return (
    <motion.div
      className={styles.courseCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: parseFloat(delay) || 0 }}
    >
      <Link href={`/courses/${program.slug}`} className={styles.courseCardBg}>
        <Image
          src={program.image}
          alt="Composite of DS Inventek robotics sports events"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.courseCardImage}
        />
        <div className={styles.courseCardOverlay} />
        <div className={styles.courseCardContent}>
          <span className={styles.courseLevel}>{program.eyebrow}</span>
          <div className={styles.courseInfo}>
            <h3 className={styles.courseName}>{program.title}</h3>
            <div className={styles.courseMeta}>
              <span className={styles.courseDuration}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                {program.events.length} Events
              </span>
              <span className={styles.courseCta}>
                View Details
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

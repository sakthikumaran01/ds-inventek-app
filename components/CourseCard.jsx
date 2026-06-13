import Link from "next/link";
import Image from "next/image";
import styles from "./CourseCard.module.css";

export default function CourseCard({
  name,
  level,
  duration,
  price,
  image,
  delay,
  id,
  onClick,
  isExpanded,
  desc,
  modules,
  enrollUrl,
}) {
  return (
    <div
      id={id}
      className={`${styles.courseCard} reveal-item`}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.courseCardBg} onClick={onClick}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={styles.courseCardImage}
        />
        <div className={styles.courseCardOverlay}></div>
        <div className={styles.courseCardContent}>
          <span
            className={`${styles.courseLevel} ${
              level === "Beginner"
                ? styles.levelBeginner
                : level === "Intermediate"
                ? styles.levelIntermediate
                : styles.levelAdvanced
            }`}
          >
            {level === "Beginner" ? "⚡" : level === "Intermediate" ? "◈" : "▲"} {level}
          </span>
          <div>
            <h3 className={styles.courseName}>{name}</h3>
            <div className={styles.courseMeta}>
              <span className={styles.courseDuration}>⏱ {duration}</span>
              {price ? (
                <span className={styles.coursePrice}>{price}</span>
              ) : (
                <Link href="/courses" className={styles.courseView}>
                  Enroll →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className={`glass-card ${styles.courseDetails}`}>
          <p className={styles.courseDesc}>{desc}</p>
          <div className={styles.modules}>
            <h4>What You'll Learn:</h4>
            <ul>
              {modules.map((module, midx) => (
                <li key={midx}>{module}</li>
              ))}
            </ul>
          </div>
          <a href={enrollUrl || "/contact"} target="_blank" rel="noopener noreferrer" className={styles.enrollBtn}>
            Enroll Now →
          </a>
        </div>
      )}
    </div>
  );
}

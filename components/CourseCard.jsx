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
  slug,
}) {
  const targetSlug = slug || id;

  return (
    <div
      id={id}
      className={`${styles.courseCard} reveal-item`}
      style={{ transitionDelay: delay }}
    >
      <Link href={`/courses/${targetSlug}`} className={styles.courseCardBg}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.courseCardImage}
        />
        <div className={styles.courseCardOverlay}></div>
        <div className={styles.courseCardContent}>
          <span
            className={`${styles.courseLevel} ${
              level.toLowerCase().includes("1") || level.toLowerCase().includes("beginner")
                ? styles.levelBeginner
                : level.toLowerCase().includes("2") || level.toLowerCase().includes("intermediate")
                ? styles.levelIntermediate
                : styles.levelAdvanced
            }`}
          >
            <span aria-hidden="true">
              {level.toLowerCase().includes("1") || level.toLowerCase().includes("beginner") ? "⚡" : level.toLowerCase().includes("2") || level.toLowerCase().includes("intermediate") ? "◈" : "▲"}
            </span>{" "}
            {level}
          </span>
          <div>
            <h3 className={styles.courseName}>{name}</h3>
            <div className={styles.courseMeta}>
              <span className={styles.courseDuration}>
                <span aria-hidden="true">⏱</span> {duration}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

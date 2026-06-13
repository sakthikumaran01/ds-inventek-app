import Link from "next/link";
import Image from "next/image";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ icon, title, badge, desc, image, delay, id, features, price }) {
  return (
    <div
      id={id}
      className={`glass-card ${styles.serviceCard} reveal-item`}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardImageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.cardImage}
        />
        <div className={styles.cardIconBadge}>{icon}</div>
      </div>
      <span className={styles.serviceBadge}>{badge}</span>
      <h3 className={styles.serviceTitle}>{title}</h3>
      {price && <div className={styles.servicePrice}>{price}</div>}
      <p className={styles.serviceDesc}>{desc}</p>

      {features && features.length > 0 && (
        <div className={styles.featuresList}>
          {features.map((feature, fidx) => (
            <div key={fidx} className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      <Link href="/contact" className={styles.serviceBtn}>
        Get More Info →
      </Link>
    </div>
  );
}

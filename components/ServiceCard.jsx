import Link from "next/link";
import Image from "next/image";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ icon, title, badge, desc, image, delay, id, features, price, slug }) {
  return (
    <Link
      id={id}
      href={`/services/${slug || id}`}
      className={`glass-card ${styles.serviceCard} reveal-item`}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardImageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.cardImage}
        />
        <div className={styles.cardIconBadge} aria-hidden="true">{icon}</div>
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

      <div className={styles.serviceBtn}>
        Get More Info →
      </div>
    </Link>
  );
}

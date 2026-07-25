import styles from "./GovBadges.module.css";
import content from "@/data/content.json";

function BadgePill({ badge }) {
  return (
    <div className={styles.badgePill}>
      <span className={styles.badgeIcon} aria-hidden="true">{badge.icon}</span>
      <div className={styles.badgeText}>
        <span className={styles.badgeTitle}>{badge.title}</span>
        <span className={styles.badgeSub}>{badge.subtitle}</span>
      </div>
    </div>
  );
}

export default function GovBadges({ limit }) {
  const { label, items } = content.govBadges;
  const itemsToShow = limit ? items.slice(0, limit) : items;
  // Doubled for seamless mobile marquee loop
  const doubled = [...itemsToShow, ...itemsToShow];

  return (
    <div className={styles.badgesWrapper}>
      <span className={styles.badgesLabel}>{label}</span>

      {/* Desktop: static flex-wrap layout */}
      <div className={styles.badgesRow}>
        {itemsToShow.map((badge, idx) => (
          <BadgePill key={idx} badge={badge} />
        ))}
      </div>

      {/* Mobile: infinite marquee (hidden on desktop) */}
      <div className={styles.mobileMarquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {doubled.map((badge, idx) => (
            <BadgePill key={idx} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}

import styles from "./GovBadges.module.css";

export default function GovBadges({ limit }) {
  const badges = [
    { title: "DPIIT Recognised", subtitle: "DPIIT Recognised Startup", icon: "🇮🇳" },
    { title: "AICTE Approved", subtitle: "AICTE Approved", icon: "🎓" },
    { title: "Startup India", subtitle: "Startup India Registered", icon: "🚀" },
    { title: "NITI Aayog", subtitle: "NITI Aayog Supported", icon: "🏛️" },
    { title: "DSIR Certified", subtitle: "DSIR Certified", icon: "🔬" },
  ];

  const itemsToShow = limit ? badges.slice(0, limit) : badges;

  return (
    <div className={styles.badgesWrapper}>
      <span className={styles.badgesLabel}>Recognised & Certified By</span>
      <div className={styles.badgesRow}>
        {itemsToShow.map((badge, idx) => (
          <div key={idx} className={styles.badgePill}>
            <span className={styles.badgeIcon} aria-hidden="true">{badge.icon}</span>
            <div className={styles.badgeText}>
              <span className={styles.badgeTitle}>{badge.title}</span>
              <span className={styles.badgeSub}>{badge.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

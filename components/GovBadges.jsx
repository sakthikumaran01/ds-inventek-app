import styles from "./GovBadges.module.css";

export default function GovBadges() {
  const badges = [
    { title: "DPIIT Recognised", subtitle: "DPIIT Recognised Startup", icon: "🇮🇳" },
    { title: "NITI Aayog", subtitle: "NITI Aayog Supported", icon: "🏛️" },
    { title: "DSIR Certified", subtitle: "DSIR Certified", icon: "🔬" },
    { title: "AICTE Approved", subtitle: "AICTE Approved", icon: "🎓" },
    { title: "Startup India", subtitle: "Startup India Registered", icon: "🚀" },
  ];

  return (
    <div className={styles.badgesWrapper}>
      <span className={styles.badgesLabel}>Recognised & Certified By</span>
      <div className={styles.badgesRow}>
        {badges.map((badge, idx) => (
          <div key={idx} className={styles.badgePill}>
            <span className={styles.badgeIcon}>{badge.icon}</span>
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

import styles from "./Testimonials.module.css";
import content from "@/data/content.json";

export default function Testimonials() {
  const testimonials = content.testimonials;

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className="section-eyebrow reveal-item" style={{ margin: "0 auto 1rem", justifyContent: "center" }}>
          Testimonials
        </div>
        <h2 className="section-title reveal-item" style={{ textAlign: "center", marginBottom: "3rem" }}>
          What Our Community Says
        </h2>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`glass-card ${styles.testimonialCard} reveal-item`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.footerRow}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <span className={styles.meta}>
                    {t.city} · {t.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My son learned the basics of circuit design and built his first project here. The instructors are extremely patient and know how to keep children engaged.",
      name: "Rajesh Kumar",
      city: "Chennai",
      program: "Basic Electronics",
    },
    {
      quote: "Highly structured STEM curriculum. The practical lab setup support for our school has transformed our physics and computer labs completely.",
      name: "Sister Mary D'Souza",
      city: "Puducherry",
      program: "School Lab Setup Partner",
    },
    {
      quote: "Coaching from World Champions is a game changer. The insights on motors and structural layout helped our team secure a podium finish in national level events.",
      name: "Sanjay Sen",
      city: "Chennai",
      program: "Competition Training",
    },
  ];

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

import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us for Robotics Lab Setup & Courses | DS Inventek",
  description: "Get in touch with us to discuss school robotics curriculums, college lab setups, student workshops, and partnership opportunities. We respond within 24 hours.",
  keywords: "contact robotics India, partner school STEM lab, register robotics workshop Chennai, school lab setups Chennai, robotics course registration, Chennai robotics",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Get in Touch"
        subtitle="Let's build something amazing together. We're here to answer your questions."
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left: Info */}
            <div id="contact-info" className="reveal-item">
              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon} aria-hidden="true">✉️</div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>
                    <a href="mailto:info@dsinventek.com" style={{ color: "inherit", textDecoration: "none" }}>info@dsinventek.com</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon} aria-hidden="true">📞</div>
                <div>
                  <div className={styles.contactLabel}>Phone / WhatsApp</div>
                  <div className={styles.contactValue}>
                    <a href="tel:+919943336712" style={{ color: "inherit", textDecoration: "none" }}>+91 99433 36712</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon} aria-hidden="true">📍</div>
                <div>
                  <div className={styles.contactLabel}>Puducherry Centre</div>
                  <div className={styles.contactValue} style={{ fontSize: "0.85rem", fontWeight: "normal", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    [Puducherry Centre Address - coming soon]<br />
                    Puducherry, India
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon} aria-hidden="true">📍</div>
                <div>
                  <div className={styles.contactLabel}>Chennai Centre</div>
                  <div className={styles.contactValue} style={{ fontSize: "0.85rem", fontWeight: "normal", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    [Chennai Centre Address - coming soon]<br />
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon} aria-hidden="true">⏱️</div>
                <div>
                  <div className={styles.contactLabel}>Operating Hours</div>
                  <div className={styles.contactValue} style={{ fontSize: "0.85rem", fontWeight: "normal", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ marginTop: "1.5rem", padding: "1.5rem" }}>
                <div className={styles.responseTimeLabel}>Response Time</div>
                <p className={styles.responseTimeText}>
                  We typically respond within <strong>24 hours</strong> on business days. For urgent inquiries, email us or chat via WhatsApp.
                </p>
              </div>

              <div className={styles.socialLinks} style={{ marginTop: "1.5rem" }}>
                <a href="https://linkedin.com/company/ds-inventek" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn">in</a>
                <a href="https://instagram.com/ds_inventek" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram" aria-label="Instagram"><span aria-hidden="true">📷</span></a>
                <a href="https://youtube.com/@dsinventek" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="YouTube" aria-label="YouTube"><span aria-hidden="true">▶</span></a>
                <a href="https://wa.me/919943336712" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="WhatsApp" aria-label="WhatsApp"><span aria-hidden="true">💬</span></a>
              </div>
              
              {/* Map embed */}
              <div style={{ marginTop: "2rem", overflow: "hidden", borderRadius: "12px", border: "1px solid var(--glass-border)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4137260570383!2d79.82902631533036!3d11.933221991542617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536166113dc73d%3A0x8cfef1a95e6cf1e4!2sPuducherry!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right: Form Component */}
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <h2 id="quick-title" className="section-title reveal-item" style={{ textAlign: "center", marginBottom: "3rem" }}>
            Explore More
          </h2>

          <div className={styles.quickGrid}>
            {[
              {
                icon: "📚",
                title: "Browse Courses",
                desc: "Explore our full range of robotics courses.",
                link: "/courses",
              },
              {
                icon: "🛠️",
                title: "Our Services",
                desc: "Learn about our seven service verticals.",
                link: "/services",
              },
              {
                icon: "🏆",
                title: "About Us",
                desc: "Meet the team behind DS Inventek.",
                link: "/about",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className={`glass-card ${styles.quickCard} reveal-item`}
                id={`quick-${idx}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.quickIcon}>{item.icon}</div>
                <h3 className={styles.quickTitle}>{item.title}</h3>
                <p className={styles.quickDesc}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import styles from "@/app/contact/contact.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ContactPageClient({ content }) {
  const quickLinks = content.contact.quickLinks;

  return (
    <div>
      <PageHero
        title={content.contact.hero.title}
        subtitle={content.contact.hero.subtitle}
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left: Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.contactInfoItem} variants={fadeRight}>
                <div className={styles.contactIcon} aria-hidden="true">✉️</div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>
                    <a
                      href={`mailto:${content.company.email}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {content.company.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div className={styles.contactInfoItem} variants={fadeRight}>
                <div className={styles.contactIcon} aria-hidden="true">📞</div>
                <div>
                  <div className={styles.contactLabel}>Phone / WhatsApp</div>
                  <div className={styles.contactValue}>
                    <a
                      href={`tel:${content.company.phoneRaw}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {content.company.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div className={styles.contactInfoItem} variants={fadeRight}>
                <div className={styles.contactIcon} aria-hidden="true">📍</div>
                <div>
                  <div className={styles.contactLabel}>
                    {content.company.addresses.puducherry.label}
                  </div>
                  <div
                    className={styles.contactValue}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "normal",
                      color: "var(--ink-muted)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {content.company.addresses.puducherry.value}
                    <br />
                    {content.company.addresses.puducherry.city}
                  </div>
                </div>
              </motion.div>



              <motion.div className={styles.contactInfoItem} variants={fadeRight}>
                <div className={styles.contactIcon} aria-hidden="true">⏱️</div>
                <div>
                  <div className={styles.contactLabel}>Operating Hours</div>
                  <div
                    className={styles.contactValue}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "normal",
                      color: "var(--ink-muted)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {content.company.operatingHours.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card"
                style={{ marginTop: "1.5rem", padding: "1.5rem" }}
                variants={fadeRight}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={styles.responseTimeLabel}>
                  {content.company.responseTimeLabel}
                </div>
                <p className={styles.responseTimeText}>
                  {content.company.responseTimeText}
                </p>
              </motion.div>

              <motion.div
                className={styles.socialLinks}
                style={{ marginTop: "1.5rem" }}
                variants={fadeRight}
              >
                <motion.a
                  href={content.company.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="LinkedIn"
                  whileHover={{ y: -3 }}
                >
                  in
                </motion.a>
                <motion.a
                  href={content.company.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="Instagram"
                  aria-label="Instagram"
                  whileHover={{ y: -3 }}
                >
                  <span aria-hidden="true">📷</span>
                </motion.a>
                <motion.a
                  href={content.company.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="YouTube"
                  aria-label="YouTube"
                  whileHover={{ y: -3 }}
                >
                  <span aria-hidden="true">▶</span>
                </motion.a>
                <motion.a
                  href={content.company.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  whileHover={{ y: -3 }}
                >
                  <span aria-hidden="true">💬</span>
                </motion.a>
              </motion.div>

              {/* Map embed */}
              <motion.div
                style={{
                  marginTop: "2rem",
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "1px solid var(--border-hairline)",
                }}
                variants={fadeRight}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4137260570383!2d79.82902631533036!3d11.933221991542617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536166113dc73d%3A0x8cfef1a95e6cf1e4!2sPuducherry!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Right: Form Component */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore More
          </motion.h2>

          <motion.div
            className={styles.quickGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {quickLinks.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Link
                  href={item.href}
                  className={`glass-card ${styles.quickCard}`}
                  style={{ display: "block" }}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: "0 16px 32px rgba(0, 212, 255, 0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ height: "100%" }}
                  >
                    <div className={styles.quickIcon}>{item.icon}</div>
                    <h3 className={styles.quickTitle}>{item.title}</h3>
                    <p className={styles.quickDesc}>{item.desc}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

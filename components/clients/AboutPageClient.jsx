"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import GovBadges from "@/components/sections/GovBadges";
import CtaBanner from "@/components/sections/CtaBanner";
import styles from "@/app/about/about.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Founding Team section ("Six Champions. One Mission.") temporarily
// hidden per request — JSX and content.json's `about.team` data are left
// intact. To re-enable, set this back to true.
const showFoundingTeam = false;

export default function AboutPageClient({ content }) {
  const timeline = content.about.timeline;
  const team = content.about.team;

  return (
    <div>
      <PageHero
        title={content.about.hero.title}
        subtitle={content.about.hero.subtitle}
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.missionGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className={`glass-card ${styles.missionCard}`}
              style={{ borderLeft: "3px solid var(--accent)" }}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardLabel}>{content.about.mission.label}</div>
              <p className={styles.cardText}>{content.about.mission.text}</p>
            </motion.div>
            <motion.div
              className={`glass-card ${styles.missionCard}`}
              style={{ borderLeft: "3px solid var(--accent)" }}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardLabel} style={{ color: "var(--accent)" }}>
                {content.about.vision.label}
              </div>
              <p className={styles.cardText}>{content.about.vision.text}</p>
            </motion.div>
          </motion.div>

          {/* Government Recognition Badges */}
          <motion.div
            style={{ marginTop: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GovBadges />
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.about.timelineEyebrow}
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.about.timelineTitle.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                {idx === 0 && <br />}
              </span>
            ))}
          </motion.h2>

          <motion.div
            className={styles.timeline}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className={styles.timelineItem}
                variants={fadeLeft}
              >
                <motion.div
                  className={`${styles.timelineDot} ${
                    item.type === "champion"
                      ? styles.champion
                      : item.type === "podium"
                      ? styles.podium
                      : ""
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                />
                <motion.div
                  className="glass-card"
                  style={{ flex: 1 }}
                  whileHover={{
                    x: 8,
                    boxShadow: item.type === "champion" 
                      ? "0 8px 32px rgba(255, 215, 0, 0.3)" 
                      : "0 8px 32px rgba(0, 212, 255, 0.15)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div
                    className={`${styles.timelineEvent} ${
                      item.type === "champion" ? styles.championText : ""
                    }`}
                  >
                    {item.event.startsWith("🏆") ? (
                      <>
                        <span aria-hidden="true">🏆</span>{" "}
                        {item.event.replace("🏆", "").trim()}
                      </>
                    ) : item.event.startsWith("🥉") ? (
                      <>
                        <span aria-hidden="true">🥉</span>{" "}
                        {item.event.replace("🥉", "").trim()}
                      </>
                    ) : (
                      item.event
                    )}
                  </div>
                  <div className={styles.timelineResult}>{item.result}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {showFoundingTeam && (
        <>
          <div className="divider"></div>

          {/* Team */}
          <section className="section cv-auto">
            <div className="container">
              <motion.p
                className="section-eyebrow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {content.about.teamEyebrow}
              </motion.p>
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {content.about.teamTitle}
              </motion.h2>

              <motion.div
                className={styles.teamGrid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    className={`glass-card ${styles.teamCard}`}
                    variants={fadeUp}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className={styles.teamAvatar}
                      style={{ background: member.gradient }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {member.initials}
                    </motion.div>
                    <div className={styles.teamRole}>{member.role}</div>
                    <div className={styles.teamName}>{member.name}</div>
                    <p className={styles.teamBio}>{member.bio}</p>
                    <div className={styles.teamTags}>
                      <span className={`${styles.teamTag} ${styles.tagExperience}`}>
                        {member.experience}
                      </span>
                      <span className={`${styles.teamTag} ${styles.tagSpecialization}`}>
                        {member.specialization}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </>
      )}

      <div className="divider"></div>

      {/* Why Us */}
      <section className="section cv-auto">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.about.whyUsTitle}
          </motion.h2>

          <motion.div
            className={styles.whyGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {content.about.whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                className={`glass-card ${styles.whyCard}`}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className={styles.whyIcon}
                  aria-hidden="true"
                  whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <CtaBanner
        title={content.about.cta.title}
        subtitle={content.about.cta.subtitle}
        primaryText={content.about.cta.primaryText}
        primaryHref={content.about.cta.primaryHref}
        secondaryText={content.about.cta.secondaryText}
        secondaryHref={content.about.cta.secondaryHref}
        primaryBtnClass="btn-primary"
      />
    </div>
  );
}

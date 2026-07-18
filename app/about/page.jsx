import Link from "next/link";
import PageHero from "@/components/PageHero";
import GovBadges from "@/components/GovBadges";
import CtaBanner from "@/components/CtaBanner";
import styles from "./about.module.css";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.about.title,
  description: content.meta.about.description,
  keywords: content.meta.about.keywords,
};

export default function AboutPage() {
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
          <div className={styles.missionGrid}>
            <div id="mission" className={`glass-card ${styles.missionCard} reveal-item`} style={{ borderLeft: "3px solid var(--primary-light)" }}>
              <div className={styles.cardLabel}>{content.about.mission.label}</div>
              <p className={styles.cardText}>{content.about.mission.text}</p>
            </div>
            <div id="vision" className={`glass-card ${styles.missionCard} reveal-item`} style={{ borderLeft: "3px solid var(--secondary)", transitionDelay: "0.1s" }}>
              <div className={styles.cardLabel} style={{ color: "var(--secondary)" }}>{content.about.vision.label}</div>
              <p className={styles.cardText}>{content.about.vision.text}</p>
            </div>
          </div>
          
          {/* Government Recognition Badges */}
          <div style={{ marginTop: "3rem" }}>
            <GovBadges />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <p id="timeline-eyebrow" className="section-eyebrow reveal-item">
            {content.about.timelineEyebrow}
          </p>
          <h2 id="timeline-title" className="section-title reveal-item">
            {content.about.timelineTitle.split('\n').map((line, idx) => (
              <span key={idx}>{line}{idx === 0 && <br />}</span>
            ))}
          </h2>

          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={idx} id={`timeline-${idx}`} className={`${styles.timelineItem} reveal-item`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className={`${styles.timelineDot} ${item.type === "champion" ? styles.champion : item.type === "podium" ? styles.podium : ""}`}></div>
                <div className="glass-card" style={{ flex: 1 }}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={`${styles.timelineEvent} ${item.type === "champion" ? styles.championText : ""}`}>
                    {item.event.startsWith("🏆") ? (
                      <>
                        <span aria-hidden="true">🏆</span> {item.event.replace("🏆", "").trim()}
                      </>
                    ) : item.event.startsWith("🥉") ? (
                      <>
                        <span aria-hidden="true">🥉</span> {item.event.replace("🥉", "").trim()}
                      </>
                    ) : (
                      item.event
                    )}
                  </div>
                  <div className={styles.timelineResult}>{item.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Team */}
      <section className="section">
        <div className="container">
          <p id="team-eyebrow" className="section-eyebrow reveal-item">
            {content.about.teamEyebrow}
          </p>
          <h2 id="team-title" className="section-title reveal-item">
            {content.about.teamTitle}
          </h2>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div
                key={idx}
                id={`team-${idx}`}
                className={`glass-card ${styles.teamCard} reveal-item`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className={styles.teamAvatar} style={{ background: member.gradient }}>
                  {member.initials}
                </div>
                <div className={styles.teamRole}>{member.role}</div>
                <div className={styles.teamName}>{member.name}</div>
                <p className={styles.teamBio}>{member.bio}</p>
                <div className={styles.teamTags}>
                  <span className={`${styles.teamTag} ${styles.tagExperience}`}>{member.experience}</span>
                  <span className={`${styles.teamTag} ${styles.tagSpecialization}`}>{member.specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Why Us */}
      <section className="section">
        <div className="container">
          <h2 id="why-title" className="section-title reveal-item" style={{ textAlign: "center", marginBottom: "3rem" }}>
            {content.about.whyUsTitle}
          </h2>

          <div className={styles.whyGrid}>
            {content.about.whyUs.map((item, idx) => (
              <div
                key={idx}
                id={`why-${idx}`}
                className={`glass-card ${styles.whyCard} reveal-item`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.whyIcon} aria-hidden="true">{item.icon}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
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

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import GovBadges from "@/components/GovBadges";
import CtaBanner from "@/components/CtaBanner";
import styles from "./services.module.css";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.services.title,
  description: content.meta.services.description,
  keywords: content.meta.services.keywords,
};

export default function ServicesPage() {
  const services = content.services.list;
  const processSteps = content.services.process;

  return (
    <div>
      <PageHero
        title={content.services.hero.title}
        subtitle={content.services.hero.subtitle}
      />

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                id={service.id}
                icon={service.icon}
                title={service.title}
                badge={service.audience}
                price={service.priceInfo}
                desc={service.desc}
                features={service.features}
                image={service.image}
                delay={`${(idx % 3) * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* How It Works Section */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow reveal-item" style={{ margin: "0 auto 1rem", justifyContent: "center" }}>
            The Roadmap
          </p>
          <h2 className="section-title reveal-item">
            How It Works
          </h2>
          <p className="section-subtitle reveal-item">
            We guide you step-by-step from initial concept design to final hardware integration and classroom launch.
          </p>

          <div className={styles.processGrid}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`glass-card ${styles.processCard} reveal-item`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.processStep}>{step.step}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Case Study Section */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow reveal-item" style={{ margin: "0 auto 1rem", justifyContent: "center" }}>
            {content.services.caseStudy.eyebrow}
          </p>
          <h2 className="section-title reveal-item">
            {content.services.caseStudy.title}
          </h2>

          <div className={`glass-card ${styles.caseStudyCard} reveal-item`}>
            <div className={styles.caseStudyMeta}>
              <span className={styles.caseStudySchool}>{content.services.caseStudy.school}</span>
              <span>{content.services.caseStudy.meta}</span>
            </div>
            <p className={styles.caseStudyQuote}>
              {content.services.caseStudy.quote}
            </p>
            <div className={styles.caseStudyOutcome}>
              {content.services.caseStudy.outcome}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <p id="why-eyebrow" className="section-eyebrow reveal-item">
            {content.services.whyChooseUs.eyebrow}
          </p>
          <h2 id="why-title" className="section-title reveal-item">
            {content.services.whyChooseUs.title}
          </h2>

          <div className={styles.whyGrid}>
            {content.services.whyChooseUs.list.map((item, idx) => (
              <div
                key={idx}
                id={`why-${idx}`}
                className={`glass-card ${styles.whyCard} reveal-item`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
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
        title={content.services.cta.title}
        subtitle={content.services.cta.subtitle}
        primaryText={content.services.cta.primaryText}
        primaryHref={content.services.cta.primaryHref}
        secondaryText={content.services.cta.secondaryText}
        secondaryHref={content.services.cta.secondaryHref}
        primaryBtnClass="btn-primary"
      />
    </div>
  );
}

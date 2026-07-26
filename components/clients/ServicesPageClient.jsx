"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/cards/ServiceCard";
import GovBadges from "@/components/sections/GovBadges";
import CtaBanner from "@/components/sections/CtaBanner";
import styles from "@/app/services/services.module.css";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ServicesPageClient({ content }) {
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
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                badge={service.audience}
                ctaBadge={service.ctaBadge}
                desc={service.desc}
                features={service.features}
                image={service.image}
                imageAlt={service.imageAlt}
                delay={`${(idx % 3) * 0.1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.p
            className="section-eyebrow"
            style={{ margin: "0 auto 1rem", justifyContent: "center" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {content.services.processSection.eyebrow}
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {content.services.processSection.title}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {content.services.processSection.subtitle}
          </motion.p>

          <motion.div
            className={styles.processGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`glass-card ${styles.processCard}`}
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <div className={styles.processStep}>{step.step}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* Case Study */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.p
            className="section-eyebrow"
            style={{ margin: "0 auto 1rem", justifyContent: "center" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {content.services.caseStudy.eyebrow}
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {content.services.caseStudy.title}
          </motion.h2>
          <motion.div
            className={`glass-card ${styles.caseStudyCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={styles.caseStudyMeta}>
              <span className={styles.caseStudySchool}>{content.services.caseStudy.school}</span>
              <span>{content.services.caseStudy.meta}</span>
            </div>
            <p className={styles.caseStudyQuote}>{content.services.caseStudy.quote}</p>
            <div className={styles.caseStudyOutcome}>{content.services.caseStudy.outcome}</div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {content.services.whyChooseUs.eyebrow}
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {content.services.whyChooseUs.title}
          </motion.h2>
          <motion.div
            className={styles.whyGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {content.services.whyChooseUs.list.map((item, idx) => (
              <motion.div
                key={idx}
                className={`glass-card ${styles.whyCard}`}
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <div className={styles.whyIcon} aria-hidden="true">{item.icon}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider" />

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

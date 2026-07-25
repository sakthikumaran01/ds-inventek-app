"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServicesSlider from "@/components/sections/ServicesSlider";
import CourseSlider from "@/components/sections/CourseSlider";
import GovBadges from "@/components/sections/GovBadges";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import CircuitPattern from "@/components/ui/CircuitPattern";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import styles from "./page.module.css";
import content from "@/data/content.json";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Home() {
  const featuredServices = content.services.list.slice(0, 3).map(s => ({
    icon: s.icon,
    title: s.title,
    desc: s.desc,
    badge: s.audience.split(" · ")[0],
    image: s.image,
    slug: s.id,
    ctaBadge: s.ctaBadge,
  }));

  const featuredCourses = content.courses.list;

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <CircuitPattern opacity={0.08} />
        
        <div className={styles.heroContent}>
          <motion.div 
            id="hero-eyebrow" 
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span aria-hidden="true" className={styles.globeIcon}>🌍</span> 
            {content.home.hero.eyebrow}
          </motion.div>

          <motion.h1 
            id="hero-title" 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={styles.line1}>{content.home.hero.titleLine1}</span>
            <span className={styles.line2}>{content.home.hero.titleLine2}</span>
          </motion.h1>

          <motion.p 
            id="hero-sub" 
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {content.home.hero.subtitle}
          </motion.p>

          <motion.div 
            id="hero-ctas" 
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href={content.home.hero.primaryCta.href} className="btn-primary">
              {content.home.hero.primaryCta.text}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href={content.home.hero.secondaryCta.href} className="btn-ghost">
              {content.home.hero.secondaryCta.text}
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className={styles.scrollMouse}>
            <motion.div 
              className={styles.scrollWheel}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ── GOVT RECOGNITION BADGES ── */}
      <div className="container" style={{ marginTop: "1rem" }}>
        <GovBadges limit={3} />
      </div>

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <motion.div 
          className={styles.statsInner}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {content.home.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              id={`stat-${idx}`}
              className={`glass-card ${styles.statCard}`}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <span className={styles.statNum}>
                <AnimatedCounter 
                  end={parseInt(stat.num.replace(/[^0-9]/g, '')) || 0} 
                  suffix={stat.num.includes('+') || stat.num !== "7" ? "+" : ""}
                  duration={2}
                />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── AUDIENCE SEGMENTATION ── */}
      <section className={styles.segmentation}>
        <div className="container">
          <motion.div 
            className={styles.segmentationGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {content.home.segmentation.map((seg, idx) => (
              <motion.div 
                key={idx} 
                className={`glass-card ${styles.segmentCard} ${idx === 0 ? styles.studentCard : styles.institutionCard}`}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className={styles.segmentIcon} 
                  aria-hidden="true"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {seg.icon}
                </motion.div>
                <h3 className={styles.segmentTitle}>{seg.title}</h3>
                <p className={styles.segmentDesc}>{seg.desc}</p>
                <Link href={seg.ctaHref} className={idx === 0 ? "btn-primary" : "btn-secondary"}>
                  {seg.ctaText}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── FEATURED COURSES ── */}
      <section className={styles.featuredCourses}>
        <div className="container">
          <motion.p 
            id="courses-eyebrow" 
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.home.featuredCourses.eyebrow}
          </motion.p>
          <motion.h2 
            id="courses-title" 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.home.featuredCourses.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
          <motion.p 
            id="courses-subtitle" 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.home.featuredCourses.subtitle}
          </motion.p>

          <CourseSlider courses={featuredCourses} />

          <motion.div 
            style={{ textAlign: "center", marginTop: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/courses" className="btn-primary">
              {content.home.browseAllCourses}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── FEATURED SERVICES ── */}
      <section className={styles.featured}>
        <div className="container">
          <motion.p 
            id="services-eyebrow" 
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.home.featuredServices.eyebrow}
          </motion.p>
          <motion.h2 
            id="services-title" 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.home.featuredServices.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
          <motion.p 
            id="services-subtitle" 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.home.featuredServices.subtitle}
          </motion.p>

          <ServicesSlider services={featuredServices} />

          <motion.div 
            style={{ textAlign: "center", marginTop: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/services" className="btn-primary">
              {content.home.viewAllServices}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      <div className="divider"></div>

      {/* ── CTA BANNER ── */}
      <CtaBanner
        title={content.home.cta.title}
        subtitle={content.home.cta.subtitle}
        primaryText={content.home.cta.primaryText}
        primaryHref={content.home.cta.primaryHref}
        secondaryText={content.home.cta.secondaryText}
        secondaryHref={content.home.cta.secondaryHref}
      />
    </div>
  );
}

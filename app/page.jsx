import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CourseSlider from "@/components/CourseSlider";
import GovBadges from "@/components/GovBadges";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import styles from "./page.module.css";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.home.title,
  description: content.meta.home.description,
  keywords: content.meta.home.keywords,
};

export default function Home() {
  const featuredServices = content.services.list.slice(0, 3).map(s => ({
    icon: s.icon,
    title: s.title,
    desc: s.desc,
    badge: s.audience.split(" · ")[0],
    image: s.image,
    slug: s.id,
  }));

  const featuredCourses = content.courses.list;

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}></div>
        <div className={styles.heroContent}>
          <div id="hero-eyebrow" className={`${styles.heroEyebrow} reveal-item`}>
            <span aria-hidden="true">🌍</span> {content.home.hero.eyebrow}
          </div>
          <h1 id="hero-title" className={`${styles.heroTitle} reveal-item`}>
            <span className={styles.line1}>{content.home.hero.titleLine1}</span>
            <span className={styles.line2}>{content.home.hero.titleLine2}</span>
          </h1>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item`}>
            {content.home.hero.subtitle}
          </p>
          <div id="hero-ctas" className={`${styles.heroCtas} reveal-item`}>
            <Link href="/courses" className="btn-primary">
              Explore Courses →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Set Up a Robotics Lab
            </Link>
          </div>

          <div className={styles.heroBadge}>
            <div className={`glass-card ${styles.championshipBadge}`} style={{ textAlign: "center", width: "260px" }}>
              <div className={styles.trophyIcon} aria-hidden="true">{content.home.hero.championshipBadge.trophyIcon}</div>
              <div className={styles.trophyTitle}>{content.home.hero.championshipBadge.title}</div>
              <div className={styles.trophySub}>
                {content.home.hero.championshipBadge.location.split('\n').map((line, idx) => (
                  <span key={idx}>{line}{idx === 0 && <br />}</span>
                ))}
              </div>
              <div className={styles.trophyYear}>{content.home.hero.championshipBadge.year}</div>
              <div className={styles.trophyCaption}>
                {content.home.hero.championshipBadge.caption}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── GOVT RECOGNITION BADGES ── */}
      <div className="container" style={{ marginTop: "1rem" }}>
        <GovBadges limit={3} />
      </div>

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {content.home.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-${idx}`}
              className={`glass-card ${styles.statCard} reveal-item`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <span className={styles.statNum}>{stat.num}{stat.num !== "7" ? "+" : ""}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── AUDIENCE SEGMENTATION ── */}
      <section className={styles.segmentation}>
        <div className="container">
          <div className={styles.segmentationGrid}>
            {content.home.segmentation.map((seg, idx) => (
              <div key={idx} className={`glass-card ${styles.segmentCard} ${idx === 0 ? styles.studentCard : styles.institutionCard} reveal-item`}>
                <div className={styles.segmentIcon} aria-hidden="true">{seg.icon}</div>
                <h3 className={styles.segmentTitle}>{seg.title}</h3>
                <p className={styles.segmentDesc}>{seg.desc}</p>
                <Link href={seg.ctaHref} className={idx === 0 ? "btn-primary" : "btn-secondary"}>
                  {seg.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── FEATURED COURSES ── */}
      <section className={styles.featuredCourses}>
        <div className="container">
          <p id="courses-eyebrow" className="section-eyebrow reveal-item">
            {content.home.featuredCourses.eyebrow}
          </p>
          <h2 id="courses-title" className="section-title reveal-item">
            {content.home.featuredCourses.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p id="courses-subtitle" className="section-subtitle reveal-item">
            {content.home.featuredCourses.subtitle}
          </p>

          <CourseSlider courses={featuredCourses} />

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/courses" className="btn-primary">
              Browse All Courses →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── FEATURED SERVICES ── */}
      <section className={styles.featured}>
        <div className="container">
          <p id="services-eyebrow" className="section-eyebrow reveal-item">
            {content.home.featuredServices.eyebrow}
          </p>
          <h2 id="services-title" className="section-title reveal-item">
            {content.home.featuredServices.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p id="services-subtitle" className="section-subtitle reveal-item">
            {content.home.featuredServices.subtitle}
          </p>

          <div className={styles.servicesGrid}>
            {featuredServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                id={`service-card-${idx}`}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                badge={service.badge}
                image={service.image}
                delay={`${idx * 0.1}s`}
                slug={service.slug}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" className="btn-primary">
              View All Services →
            </Link>
          </div>
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

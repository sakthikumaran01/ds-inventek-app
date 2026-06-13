import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CourseCard from "@/components/CourseCard";
import GovBadges from "@/components/GovBadges";
import Testimonials from "@/components/Testimonials";
import styles from "./page.module.css";

export const metadata = {
  title: "Robotics & AI Education Chennai & Pondicherry | DS Inventek",
  description: "DS Inventek offers world-class hands-on robotics courses, school/college lab setups, and interactive experience zones. Founded by World Champion engineers.",
  keywords: "robotics training Chennai, AI robotics courses, STEM robotics school India, school robotics lab setup CBSE, next-generation AI robotics Chennai, Games of the Future champion",
};

export default function Home() {
  const featuredServices = [
    {
      icon: "📚",
      title: "EduTech Curriculum",
      desc: "Structured robotics curriculum designed for CBSE and state board integration.",
      badge: "Schools · CBSE",
      image: "/images/service-curriculum.png",
    },
    {
      icon: "🖥️",
      title: "Robotics Lab Setup",
      desc: "End-to-end robotics lab design, equipment procurement, and installation.",
      badge: "Schools · Colleges",
      image: "/images/service-lab.png",
    },
    {
      icon: "✨",
      title: "Experience Zone Setup",
      desc: "Interactive robotics experience zones that engage the public.",
      badge: "Malls · Museums",
      image: "/images/service-experience.png",
    },
  ];

  const featuredCourses = [
    {
      name: "Basic Electronics",
      level: "Beginner",
      duration: "8 hrs",
      image: "/images/course-electronics.png",
    },
    {
      name: "Quad Bot",
      level: "Beginner",
      duration: "12 hrs",
      image: "/images/course-quadbot.png",
    },
    {
      name: "Self Balancing Robot",
      level: "Intermediate",
      duration: "16 hrs",
      image: "/images/course-balancing.png",
    },
    {
      name: "Robotic Arm",
      level: "Intermediate",
      duration: "20 hrs",
      image: "/images/course-arm.png",
    },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}></div>
        <div className={styles.heroContent}>
          <div id="hero-eyebrow" className={`${styles.heroEyebrow} reveal-item`}>
            🌍 World Champions — Games of the Future 2024, Kazan
          </div>
          <h1 id="hero-title" className={`${styles.heroTitle} reveal-item`}>
            <span className={styles.line1}>World Champions in Robotics.</span>
            <span className={styles.line2}>Now Building India's Next Generation of Engineers.</span>
          </h1>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item`}>
            Kazan 2024 World Champions · 300+ Competition Wins · 5,000+ Students Trained across India
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
              <div className={styles.trophyIcon}>🏆</div>
              <div className={styles.trophyTitle}>World Champions</div>
              <div className={styles.trophySub}>
                Games of the Future
                <br />
                Kazan, Russia
              </div>
              <div className={styles.trophyYear}>2024</div>
              <div className={styles.trophyCaption}>
                Kazan 2024 · First Lego League · World Champions
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
        <GovBadges />
      </div>

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {[
            { num: "10", label: "Years of Excellence" },
            { num: "5,000", label: "Students Trained" },
            { num: "300", label: "Competition Wins" },
            { num: "7", label: "Business Verticals" },
          ].map((stat, idx) => (
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

      <div className="divider"></div>

      {/* ── FEATURED SERVICES ── */}
      <section className={styles.featured}>
        <div className="container">
          <p id="services-eyebrow" className="section-eyebrow reveal-item">
            What We Offer
          </p>
          <h2 id="services-title" className="section-title reveal-item">
            Seven Ways We<br />
            Empower Innovators
          </h2>
          <p id="services-subtitle" className="section-subtitle reveal-item">
            From school curriculum integration to world-class robotics competitions — we have a vertical for every stage of the journey.
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

      {/* ── FEATURED COURSES ── */}
      <section className={styles.featuredCourses}>
        <div className="container">
          <p id="courses-eyebrow" className="section-eyebrow reveal-item">
            Learn by Building
          </p>
          <h2 id="courses-title" className="section-title reveal-item">
            Courses That Ship<br />
            Real Projects
          </h2>
          <p id="courses-subtitle" className="section-subtitle reveal-item">
            Every course ends with hardware you built yourself. No simulations. No shortcuts.
          </p>

          <div className={styles.coursesGrid}>
            {featuredCourses.map((course, idx) => (
              <CourseCard
                key={idx}
                id={`course-${idx}`}
                name={course.name}
                level={course.level}
                duration={course.duration}
                image={course.image}
                delay={`${idx * 0.1}s`}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/courses" className="btn-primary">
              Browse All Courses →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      <div className="divider"></div>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 id="cta-title" className={`${styles.ctaTitle} reveal-item`}>
            Ready to build your first robot?
          </h2>
          <p id="cta-sub" className={`${styles.ctaSub} reveal-item`}>
            Join 5,000+ students who've gone from curious to capable with DS Inventek.
          </p>
          <div id="cta-btns" className={`${styles.ctaBtns} reveal-item`}>
            <Link href="/courses" className="btn-white">
              Explore Courses
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

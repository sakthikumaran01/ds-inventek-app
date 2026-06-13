"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [reveal, setReveal] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReveal((prev) => [...new Set([...prev, entry.target.id])]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}></div>
        <div className={styles.heroContent}>
          <div id="hero-eyebrow" className={`${styles.heroEyebrow} reveal-item ${reveal.includes("hero-eyebrow") ? "visible" : ""}`}>
            🌍 World Champions — Games of the Future 2024, Kazan
          </div>
          <h1 id="hero-title" className={`${styles.heroTitle} reveal-item ${reveal.includes("hero-title") ? "visible" : ""}`}>
            <span className={styles.line1}>Building Tomorrow's</span>
            <span className={styles.line2}>Engineers, Today.</span>
          </h1>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item ${reveal.includes("hero-sub") ? "visible" : ""}`}>
            Robotics education that transforms curious minds into world-class innovators — from Chennai to the global stage.
          </p>
          <div id="hero-ctas" className={`${styles.heroCtas} reveal-item ${reveal.includes("hero-ctas") ? "visible" : ""}`}>
            <Link href="/courses" className="btn-primary">
              Explore Courses →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to Us
            </Link>
          </div>

          <div className={styles.heroBadge}>
            <div className="glass-card" style={{ textAlign: "center", width: "260px" }}>
              <div className={styles.trophyIcon}>🏆</div>
              <div className={styles.trophyTitle}>World Champions</div>
              <div className={styles.trophySub}>
                Games of the Future
                <br />
                Kazan, Russia
              </div>
              <div className={styles.trophyYear}>2024</div>
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

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {[
            { num: "10", label: "Years of Robotics\nExperience" },
            { num: "500", label: "Students\nTrained" },
            { num: "5", label: "International\nCompetitions" },
            { num: "7", label: "Business\nVerticals" },
          ].map((stat, idx) => (
            <div
              key={idx}
              id={`stat-${idx}`}
              className={`glass-card ${styles.statCard} reveal-item ${reveal.includes(`stat-${idx}`) ? "visible" : ""}`}
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
          <p id="services-eyebrow" className={`section-eyebrow reveal-item ${reveal.includes("services-eyebrow") ? "visible" : ""}`}>
            What We Offer
          </p>
          <h2 id="services-title" className={`section-title reveal-item ${reveal.includes("services-title") ? "visible" : ""}`}>
            Seven Ways We<br />
            Empower Innovators
          </h2>
          <p id="services-subtitle" className={`section-subtitle reveal-item ${reveal.includes("services-subtitle") ? "visible" : ""}`}>
            From school curriculum integration to world-class robotics competitions — we have a vertical for every stage of the journey.
          </p>

          <div className={styles.servicesGrid}>
            {[
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
            ].map((service, idx) => (
              <div
                key={idx}
                id={`service-card-${idx}`}
                className={`glass-card ${styles.serviceCard} reveal-item ${reveal.includes(`service-card-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.cardImageContainer}>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                  <div className={styles.cardIconBadge}>{service.icon}</div>
                </div>
                <span className={styles.serviceBadge}>{service.badge}</span>
                <div className={styles.serviceTitle}>{service.title}</div>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <Link href="/services" className={styles.serviceLink}>
                  Learn More →
                </Link>
              </div>
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
          <p id="courses-eyebrow" className={`section-eyebrow reveal-item ${reveal.includes("courses-eyebrow") ? "visible" : ""}`}>
            Learn by Building
          </p>
          <h2 id="courses-title" className={`section-title reveal-item ${reveal.includes("courses-title") ? "visible" : ""}`}>
            Courses That Ship<br />
            Real Projects
          </h2>
          <p id="courses-subtitle" className={`section-subtitle reveal-item ${reveal.includes("courses-subtitle") ? "visible" : ""}`}>
            Every course ends with hardware you built yourself. No simulations. No shortcuts.
          </p>

          <div className={styles.coursesGrid}>
            {[
              { name: "Basic Electronics", level: "Beginner", duration: "8 hrs", image: "/images/course-electronics.png" },
              { name: "Quad Bot", level: "Beginner", duration: "12 hrs", image: "/images/course-quadbot.png" },
              { name: "Self Balancing Robot", level: "Intermediate", duration: "16 hrs", image: "/images/course-balancing.png" },
              { name: "Robotic Arm", level: "Intermediate", duration: "20 hrs", image: "/images/course-arm.png" },
            ].map((course, idx) => (
              <div
                key={idx}
                id={`course-${idx}`}
                className={`${styles.courseCard} reveal-item ${reveal.includes(`course-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.courseCardBg}>
                  <img src={course.image} alt={course.name} className={styles.courseCardImage} />
                  <div className={styles.courseCardOverlay}></div>
                  <div className={styles.courseCardContent}>
                    <span className={`${styles.courseLevel} ${course.level === "Beginner" ? styles.levelBeginner : styles.levelIntermediate}`}>
                      {course.level === "Beginner" ? "⚡" : "◈"} {course.level}
                    </span>
                    <div>
                      <div className={styles.courseName}>{course.name}</div>
                      <div className={styles.courseMeta}>
                        <span className={styles.courseDuration}>⏱ {course.duration}</span>
                        <Link href="/courses" className={styles.courseView}>
                          Enroll →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 id="cta-title" className={`${styles.ctaTitle} reveal-item ${reveal.includes("cta-title") ? "visible" : ""}`}>
            Ready to build your first robot?
          </h2>
          <p id="cta-sub" className={`${styles.ctaSub} reveal-item ${reveal.includes("cta-sub") ? "visible" : ""}`}>
            Join 500+ students who've gone from curious to capable with DS Inventek.
          </p>
          <div id="cta-btns" className={`${styles.ctaBtns} reveal-item ${reveal.includes("cta-btns") ? "visible" : ""}`}>
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

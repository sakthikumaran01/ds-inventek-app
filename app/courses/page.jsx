"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./courses.module.css";

export default function CoursesPage() {
  const [reveal, setReveal] = useState([]);
  const [expandedCourse, setExpandedCourse] = useState(null);

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

  const courses = [
    {
      name: "Basic Electronics",
      level: "Beginner",
      duration: "8 hrs",
      price: "₹2,499",
      desc: "Learn electronics fundamentals with hands-on circuit building.",
      modules: ["Ohm's Law", "Resistors & Capacitors", "LEDs & Diodes", "Circuit Assembly"],
      image: "/images/course-electronics.png",
    },
    {
      name: "Quad Bot",
      level: "Beginner",
      duration: "12 hrs",
      price: "₹3,999",
      desc: "Build and program a four-legged walking robot.",
      modules: ["Robot Assembly", "Motor Control", "Programming", "Testing & Calibration"],
      image: "/images/course-quadbot.png",
    },
    {
      name: "Self Balancing Robot",
      level: "Intermediate",
      duration: "16 hrs",
      price: "₹5,999",
      desc: "Create an advanced self-balancing two-wheeled robot using PID control.",
      modules: ["Sensor Integration", "PID Control", "Advanced Programming", "Real-World Applications"],
      image: "/images/course-balancing.png",
    },
    {
      name: "Robotic Arm",
      level: "Intermediate",
      duration: "20 hrs",
      price: "₹7,999",
      desc: "Design and control a multi-joint robotic arm with precision.",
      modules: ["Mechanical Design", "Motor Control", "Forward/Inverse Kinematics", "Automation"],
      image: "/images/course-arm.png",
    },
    {
      name: "Line Following Robot",
      level: "Beginner",
      duration: "10 hrs",
      price: "₹2,999",
      desc: "Build a robot that autonomously follows a line using sensors.",
      modules: ["Sensor Calibration", "Logic Programming", "Testing", "Optimization"],
      image: "/images/course-linefollower.png",
    },
    {
      name: "Drone Technology",
      level: "Advanced",
      duration: "24 hrs",
      price: "₹9,999",
      desc: "Master drone assembly, programming, and autonomous flight.",
      modules: ["Drone Assembly", "Flight Physics", "Autonomous Programming", "Advanced Maneuvers"],
      image: "/images/course-drone.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div id="hero-title" className={`${styles.heroTitle} reveal-item ${reveal.includes("hero-title") ? "visible" : ""}`}>
            Robotics Courses
          </div>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item ${reveal.includes("hero-sub") ? "visible" : ""}`}>
            From beginner to advanced — hands-on robotics courses that ship real projects.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.coursesGrid}>
            {courses.map((course, idx) => (
              <div
                key={idx}
                id={`course-${idx}`}
                className={`${styles.courseCard} reveal-item ${reveal.includes(`course-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div
                  className={styles.courseCardBg}
                  onClick={() => setExpandedCourse(expandedCourse === idx ? null : idx)}
                >
                  <img src={course.image} alt={course.name} className={styles.courseCardImage} />
                  <div className={styles.courseCardOverlay}></div>
                  <div className={styles.courseCardContent}>
                    <span
                      className={`${styles.courseLevel} ${
                        course.level === "Beginner"
                          ? styles.levelBeginner
                          : course.level === "Intermediate"
                          ? styles.levelIntermediate
                          : styles.levelAdvanced
                      }`}
                    >
                      {course.level === "Beginner" ? "⚡" : course.level === "Intermediate" ? "◈" : "▲"} {course.level}
                    </span>
                    <div>
                      <div className={styles.courseName}>{course.name}</div>
                      <div className={styles.courseMeta}>
                        <span className={styles.courseDuration}>⏱ {course.duration}</span>
                        <span className={styles.coursePrice}>{course.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {expandedCourse === idx && (
                  <div className={`glass-card ${styles.courseDetails}`}>
                    <p className={styles.courseDesc}>{course.desc}</p>
                    <div className={styles.modules}>
                      <h4>What You'll Learn:</h4>
                      <ul>
                        {course.modules.map((module, midx) => (
                          <li key={midx}>{module}</li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact" className={styles.enrollBtn}>
                      Enroll Now →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Learning Path */}
      <section className="section">
        <div className="container">
          <p id="path-eyebrow" className={`section-eyebrow reveal-item ${reveal.includes("path-eyebrow") ? "visible" : ""}`}>
            Your Learning Journey
          </p>
          <h2 id="path-title" className={`section-title reveal-item ${reveal.includes("path-title") ? "visible" : ""}`}>
            Progressive Skill Building
          </h2>

          <div className={styles.pathContainer}>
            {[
              {
                stage: "Stage 1",
                title: "Foundations",
                courses: ["Basic Electronics", "Line Following Robot"],
                desc: "Master the basics of circuits, sensors, and simple robotics.",
              },
              {
                stage: "Stage 2",
                title: "Intermediate",
                courses: ["Quad Bot", "Self Balancing Robot"],
                desc: "Build more complex robots with advanced control systems.",
              },
              {
                stage: "Stage 3",
                title: "Advanced",
                courses: ["Robotic Arm", "Drone Technology"],
                desc: "Design and build professional-grade robotics systems.",
              },
            ].map((path, idx) => (
              <div
                key={idx}
                id={`path-${idx}`}
                className={`glass-card ${styles.pathCard} reveal-item ${reveal.includes(`path-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.pathStage}>{path.stage}</div>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathDesc}>{path.desc}</p>
                <div className={styles.pathCourses}>
                  {path.courses.map((courseName, cidx) => (
                    <span key={cidx} className={styles.courseBadge}>
                      {courseName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 id="faq-title" className={`section-title reveal-item ${reveal.includes("faq-title") ? "visible" : ""}`} style={{ textAlign: "center" }}>
            Frequently Asked Questions
          </h2>

          <div className={styles.faqGrid}>
            {[
              {
                q: "Do I need prior robotics experience?",
                a: "Not at all! Our beginner courses start from the fundamentals and assume no prior experience.",
              },
              {
                q: "Are materials included?",
                a: "Yes, all course materials and components are included in the course fee.",
              },
              {
                q: "Will I get a certificate?",
                a: "Yes, completion of any course gets you an industry-recognized DS Inventek certificate.",
              },
              {
                q: "Can I attend classes in person?",
                a: "Yes! We offer both online and in-person classes at our Chennai and Pondicherry centers.",
              },
            ].map((faq, idx) => (
              <div key={idx} id={`faq-${idx}`} className={`glass-card ${styles.faqCard} reveal-item ${reveal.includes(`faq-${idx}`) ? "visible" : ""}`} style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}>
                <h4 className={styles.faqQ}>{faq.q}</h4>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 id="cta-title" className={`${styles.ctaTitle} reveal-item ${reveal.includes("cta-title") ? "visible" : ""}`}>
            Ready to start building?
          </h2>
          <p id="cta-sub" className={`${styles.ctaSub} reveal-item ${reveal.includes("cta-sub") ? "visible" : ""}`}>
            Choose a course above or contact us to find the perfect fit for your skill level.
          </p>
          <div id="cta-btns" className={`${styles.ctaBtns} reveal-item ${reveal.includes("cta-btns") ? "visible" : ""}`}>
            <Link href="/contact" className="btn-primary">
              Enroll Now →
            </Link>
            <Link href="/" className="btn-ghost">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

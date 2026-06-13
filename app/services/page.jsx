"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./services.module.css";

export default function ServicesPage() {
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

  const services = [
    {
      icon: "📚",
      title: "EduTech Curriculum",
      audience: "Schools · CBSE / State Board",
      desc: "Structured robotics curriculum designed for CBSE and state board integration — from Grades 6 to 12. Industry-aligned pedagogy with hands-on labs.",
      features: ["6-12 grade curriculum", "CBSE aligned", "Hands-on projects", "Teacher training"],
      image: "/images/service-curriculum.png",
    },
    {
      icon: "🖥️",
      title: "Robotics Lab Setup",
      audience: "Schools · Colleges · Makerspaces",
      desc: "End-to-end robotics lab design, equipment procurement, and installation for institutions of every size.",
      features: ["Complete consultation", "Equipment sourcing", "Installation & setup", "Staff training"],
      image: "/images/service-lab.png",
    },
    {
      icon: "✨",
      title: "Experience Zone Setup",
      audience: "Malls · Museums · Venues",
      desc: "Interactive robotics experience zones that engage the public and create unforgettable brand moments.",
      features: ["Custom design", "Interactive demos", "Maintenance support", "Visitor engagement"],
      image: "/images/service-experience.png",
    },
    {
      icon: "🌐",
      title: "Online Courses (B2C)",
      audience: "Students · Hobbyists · All India",
      desc: "Self-paced and live online robotics courses accessible from anywhere in India — beginner to advanced.",
      features: ["Self-paced learning", "Live sessions", "Beginner to advanced", "Certificate included"],
      image: "/images/service-online.png",
    },
    {
      icon: "👥",
      title: "In-Person Training Centers",
      audience: "Students · Professionals",
      desc: "Hands-on robotics workshops and long-format programs at our Chennai and Pondicherry centers.",
      features: ["Location: Chennai", "Location: Pondicherry", "Weekend batches", "Corporate training"],
      image: "/images/service-inperson.png",
    },
    {
      icon: "🏅",
      title: "Trainer Certification",
      audience: "Educators · Trainers · Institutions",
      desc: "Certify your educators with our DS Inventek Robotics Trainer Program — industry-recognised credentials.",
      features: ["Industry recognized", "2-week intensive", "Lifetime support", "Job placement"],
      image: "/images/service-certification.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div id="hero-title" className={`${styles.heroTitle} reveal-item ${reveal.includes("hero-title") ? "visible" : ""}`}>
            Our Services
          </div>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item ${reveal.includes("hero-sub") ? "visible" : ""}`}>
            Seven vertical integration points designed to deliver robotics education at every stage of the journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div
                key={idx}
                id={`service-${idx}`}
                className={`glass-card ${styles.serviceCard} reveal-item ${reveal.includes(`service-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className={styles.cardImageContainer}>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                  <div className={styles.cardIconBadge}>{service.icon}</div>
                </div>
                <span className={styles.serviceBadge}>{service.audience}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>

                <div className={styles.featuresList}>
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className={styles.featureItem}>
                      <span className={styles.featureBullet}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={styles.serviceBtn}>
                  Get More Info →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <p id="why-eyebrow" className={`section-eyebrow reveal-item ${reveal.includes("why-eyebrow") ? "visible" : ""}`}>
            Why Choose DS Inventek
          </p>
          <h2 id="why-title" className={`section-title reveal-item ${reveal.includes("why-title") ? "visible" : ""}`}>
            Industry-Leading Expertise
          </h2>

          <div className={styles.whyGrid}>
            {[
              {
                icon: "🏆",
                title: "World Champions",
                desc: "Our team literally won the World Championship in robotics. We teach real-world competition strategies and techniques.",
              },
              {
                icon: "📊",
                title: "500+ Students",
                desc: "Over 500 students have trained with us. Our methodologies are battle-tested with measurable outcomes.",
              },
              {
                icon: "🌍",
                title: "Global Recognition",
                desc: "Certified trainers. Industry partnerships. International competition experience at every level.",
              },
              {
                icon: "⚙️",
                title: "Hands-On Hardware",
                desc: "No simulations. Every course involves real robotics hardware that you build and control yourself.",
              },
              {
                icon: "🎓",
                title: "Structured Learning",
                desc: "Beginner to advanced pathways. Each course builds on previous skills with clear progression.",
              },
              {
                icon: "💼",
                title: "Career Ready",
                desc: "Our programs align with industry needs. Graduates are ready for college robotics teams and STEM careers.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                id={`why-${idx}`}
                className={`glass-card ${styles.whyCard} reveal-item ${reveal.includes(`why-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
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
            Ready to get started?
          </h2>
          <p id="cta-sub" className={`${styles.ctaSub} reveal-item ${reveal.includes("cta-sub") ? "visible" : ""}`}>
            Contact us to discuss which service fits your needs perfectly.
          </p>
          <div id="cta-btns" className={`${styles.ctaBtns} reveal-item ${reveal.includes("cta-btns") ? "visible" : ""}`}>
            <Link href="/contact" className="btn-primary">
              Contact Us →
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

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./about.module.css";

export default function AboutPage() {
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

  const timeline = [
    {
      year: "2023",
      event: "Robot Battle — Bitva Robotov",
      result: "Runner-up — Godspeed reached the grand final",
      type: "milestone",
    },
    {
      year: "2023",
      event: "🏆 Bitva Robotov Super Final",
      result: "Champion — defeated DADDY in the final",
      type: "champion",
    },
    {
      year: "Feb 2024",
      event: "🏆 Games of the Future — Kazan, Russia",
      result: "World Champion — defeated Daddy Bots in the grand final",
      type: "champion",
    },
    {
      year: "2024",
      event: "Bitva Robotov 2024",
      result: "Eliminated in opening rounds — returned stronger",
      type: "milestone",
    },
    {
      year: "2025",
      event: "🥉 Games of the Future 2025",
      result: "3rd Place — won the playoff against DADDY",
      type: "podium",
    },
  ];

  const team = [
    {
      initials: "SM",
      name: "Sanjidhan M",
      role: "CEO",
      focus: "Vision · Strategy · BD",
      gradient: "linear-gradient(135deg, #7C3AED, #4C1D95)",
    },
    {
      initials: "SD",
      name: "Sakthikumaran D",
      role: "CFO & CPO",
      focus: "Finance · Product · Compliance",
      gradient: "linear-gradient(135deg, #06B6D4, #0E7490)",
    },
    {
      initials: "VM",
      name: "VelMurugan",
      role: "COO & CTO",
      focus: "Operations · Technology",
      gradient: "linear-gradient(135deg, #059669, #065F46)",
    },
    {
      initials: "VB",
      name: "Vijay Baskar",
      role: "COO",
      focus: "Operations Management",
      gradient: "linear-gradient(135deg, #D97706, #92400E)",
    },
    {
      initials: "MV",
      name: "Mukesh V",
      role: "CMO",
      focus: "Marketing · Brand · Growth",
      gradient: "linear-gradient(135deg, #DB2777, #9D174D)",
    },
    {
      initials: "NK",
      name: "Nakeeran",
      role: "CTO",
      focus: "Technical Development",
      gradient: "linear-gradient(135deg, #7C3AED, #06B6D4)",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div id="hero-title" className={`${styles.heroTitle} reveal-item ${reveal.includes("hero-title") ? "visible" : ""}`}>
            About DS Inventek
          </div>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item ${reveal.includes("hero-sub") ? "visible" : ""}`}>
            Born from competition. Built for education. Backed by world championship excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div id="mission" className={`glass-card ${styles.missionCard} reveal-item ${reveal.includes("mission") ? "visible" : ""}`} style={{ borderLeft: "3px solid var(--primary-light)" }}>
              <div className={styles.cardLabel}>Our Mission</div>
              <p className={styles.cardText}>To make robotics education accessible, hands-on, and world-class for every student in India.</p>
            </div>
            <div id="vision" className={`glass-card ${styles.missionCard} reveal-item ${reveal.includes("vision") ? "visible" : ""}`} style={{ borderLeft: "3px solid var(--secondary)", transitionDelay: "0.1s" }}>
              <div className={styles.cardLabel} style={{ color: "var(--secondary)" }}>Our Vision</div>
              <p className={styles.cardText}>To position India as a global leader in youth robotics innovation by 2030.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <p id="timeline-eyebrow" className={`section-eyebrow reveal-item ${reveal.includes("timeline-eyebrow") ? "visible" : ""}`}>
            Our Journey
          </p>
          <h2 id="timeline-title" className={`section-title reveal-item ${reveal.includes("timeline-title") ? "visible" : ""}`}>
            Born from Competition<br />Built for Education
          </h2>

          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={idx} id={`timeline-${idx}`} className={`${styles.timelineItem} reveal-item ${reveal.includes(`timeline-${idx}`) ? "visible" : ""}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className={`${styles.timelineDot} ${item.type === "champion" ? styles.champion : item.type === "podium" ? styles.podium : ""}`}></div>
                <div className="glass-card" style={{ flex: 1 }}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={`${styles.timelineEvent} ${item.type === "champion" ? styles.championText : ""}`}>{item.event}</div>
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
          <p id="team-eyebrow" className={`section-eyebrow reveal-item ${reveal.includes("team-eyebrow") ? "visible" : ""}`}>
            The Founding Team
          </p>
          <h2 id="team-title" className={`section-title reveal-item ${reveal.includes("team-title") ? "visible" : ""}`}>
            The Six Who Started It
          </h2>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div
                key={idx}
                id={`team-${idx}`}
                className={`glass-card ${styles.teamCard} reveal-item ${reveal.includes(`team-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className={styles.teamAvatar} style={{ background: member.gradient }}>
                  {member.initials}
                </div>
                <div className={styles.teamRole}>{member.role}</div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamFocus}>{member.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Why Us */}
      <section className="section">
        <div className="container">
          <h2 id="why-title" className={`section-title reveal-item ${reveal.includes("why-title") ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3rem" }}>
            Why DS Inventek
          </h2>

          <div className={styles.whyGrid}>
            {[
              {
                icon: "🌍",
                title: "World-Class Expertise",
                desc: "Our founders are literally world champions. We don't teach theory — we teach what we've done at the highest level.",
              },
              {
                icon: "🔧",
                title: "Hands-On Learning",
                desc: "Every course ends with hardware you built yourself. Real components, real soldering, real robots that work.",
              },
              {
                icon: "🏅",
                title: "Industry-Certified",
                desc: "Our trainers are certified through our rigorous program — the same program we offer to schools nationwide.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                id={`why-${idx}`}
                className={`glass-card ${styles.whyCard} reveal-item ${reveal.includes(`why-${idx}`) ? "visible" : ""}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
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
            Join the Revolution
          </h2>
          <p id="cta-sub" className={`${styles.ctaSub} reveal-item ${reveal.includes("cta-sub") ? "visible" : ""}`}>
            Be part of the team building the future of robotics education in India.
          </p>
          <div id="cta-btns" className={`${styles.ctaBtns} reveal-item ${reveal.includes("cta-btns") ? "visible" : ""}`}>
            <Link href="/services" className="btn-primary">
              Explore Services →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

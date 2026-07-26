"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import styles from "@/app/careers/careers.module.css";

export default function CareersPageClient({ content }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    skills: "",
    coverLetter: "",
    portfolioUrl: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const openPositions = content.careers.openPositions;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.skills || !formData.coverLetter) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Application submitted successfully! Our recruitment team will email you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          skills: "",
          coverLetter: "",
          portfolioUrl: "",
        });
      } else {
        const errorData = await response.json();
        setStatus({
          type: "error",
          message: errorData.error || "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      console.error("Careers submission error:", error);
      setStatus({
        type: "error",
        message: "An error occurred during submission. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        title={content.careers.hero.title}
        subtitle={content.careers.hero.subtitle}
      />

      <section className="section">
        <div className="container">
          <div className={styles.careersGrid}>
            {/* Left Column: Job Postings */}
            <div className={styles.opportunities}>
              <h2 className={styles.sectionHeading}>{content.careers.sectionHeading}</h2>
              <p className={styles.introText}>
                {content.careers.introText}
              </p>

              <div className={styles.positionsList}>
                {openPositions.map((pos, idx) => (
                  <div key={idx} className={`glass-card ${styles.positionCard} reveal-item`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                    <div className={styles.posMeta}>
                      <span className={styles.posType}>{pos.type}</span>
                    </div>
                    <h3 className={styles.posTitle}>{pos.title}</h3>
                    <p className={styles.posDesc}>{pos.desc}</p>
                    <div className={styles.requirements}>
                      <h4>{content.careers.requirementsLabel}</h4>
                      <ul>
                        {pos.reqs.map((req, rIdx) => (
                          <li key={rIdx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className={`${styles.applicationContainer} reveal-item`} style={{ transitionDelay: "0.2s" }}>
              <div className={`glass-card ${styles.formCard}`}>
                <h3 className={styles.formTitle}>{content.careers.formTitle}</h3>
                <p className={styles.formSubtitle}>{content.careers.formSubtitle}</p>

                {status.message && (
                  <div className={`${styles.statusBox} ${status.type === "success" ? styles.successBox : styles.errorBox}`}>
                    {status.type === "success" ? "✓" : "⚠"} {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="10-digit Indian Mobile"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="yourname@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="position">Position of Interest *</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a position</option>
                      {content.careers.positionOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="portfolioUrl">Resume / Profile Link (Google Drive / GitHub / LinkedIn)</label>
                    <input
                      type="url"
                      id="portfolioUrl"
                      name="portfolioUrl"
                      placeholder="https://..."
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="skills">Key Skill Sets & Core Technologies *</label>
                    <textarea
                      id="skills"
                      name="skills"
                      placeholder="List microcontrollers, programming languages, or tools you are comfortable with (e.g. Arduino, C++, Python, PCB design, Soldering, ROS, IoT, etc.)"
                      value={formData.skills}
                      onChange={handleChange}
                      rows={3}
                      required
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="coverLetter">Cover Letter / Describe Yourself *</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      placeholder="Briefly tell us why you are excited to join DS Inventek and how your background fits the role..."
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={4}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" disabled={submitting} className={`btn-primary ${styles.submitBtn}`}>
                    {submitting ? "Submitting Application..." : "Submit Application →"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

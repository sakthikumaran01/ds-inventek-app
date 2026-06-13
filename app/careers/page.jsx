"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import styles from "./careers.module.css";

export default function CareersPage() {
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

  const openPositions = [
    {
      title: "Robotics Instructor (Chennai & Puducherry)",
      type: "Full-Time / Part-Time",
      desc: "Educate and inspire students by delivering CBSE-aligned and advanced robotics curriculums.",
      reqs: [
        "Strong fundamentals in basic electronics, Arduino, and sensors",
        "Excellent communication skills and passion for teaching children & young adults",
        "Prior experience teaching STEM / Robotics is a plus",
        "Willingness to travel to partner schools in Chennai/Puducherry",
      ],
    },
    {
      title: "Embedded Systems Developer",
      type: "Full-Time",
      desc: "Design and build our next-generation proprietary learning kits, microcontroller boards, and robotic controller systems.",
      reqs: [
        "Proficiency in C/C++ programming for ESP32, STM32, or Arduino architectures",
        "Hands-on experience with hardware debugging, oscilloscope, and soldering",
        "Understanding of I2C, SPI, UART communication protocols",
        "Basic knowledge of PCB design tools (EasyEDA, KiCad, or Eagle) is preferred",
      ],
    },
  ];

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
        title="Careers"
        subtitle="Shape the Future of Robotics & AI Education. Join the World Champion Team."
      />

      <section className="section">
        <div className="container">
          <div className={styles.careersGrid}>
            {/* Left Column: Job Postings */}
            <div className={styles.opportunities}>
              <h2 className={styles.sectionHeading}>Current Openings</h2>
              <p className={styles.introText}>
                We are looking for passionate individuals who love hardware, microcontrollers, and teaching. If you want to build India's next generation of engineers, we want to hear from you.
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
                      <h4>What we look for:</h4>
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
                <h3 className={styles.formTitle}>Submit Application</h3>
                <p className={styles.formSubtitle}>Apply directly using the form below.</p>

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
                      <option value="Robotics Instructor">Robotics Instructor</option>
                      <option value="Embedded Systems Developer">Embedded Systems Developer</option>
                      <option value="General Application">General / Other</option>
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

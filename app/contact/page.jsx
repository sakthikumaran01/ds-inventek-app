"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [reveal, setReveal] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    source: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
          source: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.details || "Failed to send message. Please try again.";
        alert(errorMessage);
        console.error("API Error:", errorData);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please check console for details.");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div id="hero-title" className={`${styles.heroTitle} reveal-item ${reveal.includes("hero-title") ? "visible" : ""}`}>
            Get in Touch
          </div>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item ${reveal.includes("hero-sub") ? "visible" : ""}`}>
            Let's build something amazing together. We're here to answer your questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left: Info */}
            <div id="contact-info" className={`reveal-item ${reveal.includes("contact-info") ? "visible" : ""}`}>
              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>sakthikumaran.dsinventek@gmail.com</div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <div className={styles.contactLabel}>Location</div>
                  <div className={styles.contactValue}>Chennai / Pondicherry, Tamil Nadu, India</div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactIcon}>🤝</div>
                <div>
                  <div className={styles.contactLabel}>Partnerships</div>
                  <div className={styles.contactValue}>Open to schools, colleges & institutions</div>
                </div>
              </div>

              <div className="glass-card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
                <div className={styles.responseTimeLabel}>Response Time</div>
                <p className={styles.responseTimeText}>
                  We typically respond within <strong>24 hours</strong> on business days. For urgent inquiries, use "Urgent" in the subject.
                </p>
              </div>

              <div className={styles.socialLinks}>
                <Link href="#" className={styles.socialLink} title="LinkedIn">
                  in
                </Link>
                <Link href="#" className={styles.socialLink} title="Instagram">
                  📷
                </Link>
                <Link href="#" className={styles.socialLink} title="YouTube">
                  ▶
                </Link>
                <Link href="#" className={styles.socialLink} title="WhatsApp">
                  💬
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div id="contact-form" className={`glass-card ${styles.contactForm} reveal-item ${reveal.includes("contact-form") ? "visible" : ""}`}>
              {submitted && (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <p>Message sent successfully! We'll respond within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="10-digit mobile" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Service Enquiry</option>
                    <option>Course Enquiry</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="source">How did you hear about us?</label>
                  <select id="source" name="source" value={formData.source} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option>Social Media</option>
                    <option>Google</option>
                    <option>Word of Mouth</option>
                    <option>School / College</option>
                    <option>Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <button type="submit" className={`btn-primary ${styles.formSubmit}`}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <h2 id="quick-title" className={`section-title reveal-item ${reveal.includes("quick-title") ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3rem" }}>
            Explore More
          </h2>

          <div className={styles.quickGrid}>
            {[
              {
                icon: "📚",
                title: "Browse Courses",
                desc: "Explore our full range of robotics courses.",
                link: "/courses",
              },
              {
                icon: "🛠️",
                title: "Our Services",
                desc: "Learn about our seven service verticals.",
                link: "/services",
              },
              {
                icon: "🏆",
                title: "About Us",
                desc: "Meet the team behind DS Inventek.",
                link: "/about",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className={`glass-card ${styles.quickCard} reveal-item ${reveal.includes(`quick-${idx}`) ? "visible" : ""}`}
                id={`quick-${idx}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.quickIcon}>{item.icon}</div>
                <h3 className={styles.quickTitle}>{item.title}</h3>
                <p className={styles.quickDesc}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

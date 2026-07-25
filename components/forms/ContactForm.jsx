"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    source: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    <div id="contact-form" className={`glass-card ${styles.contactForm}`}>
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
  );
}

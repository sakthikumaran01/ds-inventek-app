"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./QuotationModal.module.css";

export default function QuotationModal({ isOpen, onClose, selectedService = "EduTech Curriculum" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    organisationName: "",
    email: "",
    phone: "",
    serviceInterest: selectedService,
    budgetRange: "Prefer to discuss",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormData((prev) => ({ ...prev, serviceInterest: selectedService }));
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, selectedService]);

  if (!isOpen || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    if (formData.fullName.trim().length < 2) {
      alert("Please enter a valid name (minimum 2 characters).");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (formData.message.trim().length < 20) {
      alert("Please provide more detailed requirements (minimum 20 characters).");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          organisationName: "",
          email: "",
          phone: "",
          serviceInterest: selectedService,
          budgetRange: "Prefer to discuss",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        console.error("Quotation submission failed:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Quotation submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`glass-card ${styles.modalContent}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {submitStatus === "success" ? (
          <div className={styles.successScreen}>
            <div className={styles.successIcon} aria-hidden="true">💼</div>
            <h3 className={styles.successTitle}>Quotation Brief Submitted!</h3>
            <p className={styles.successText}>
              Thank you, <strong>{formData.fullName || "there"}</strong>. We have received your quotation request for <strong>{formData.serviceInterest || selectedService}</strong>. A B2B representative will review your scope and get in touch within 24 hours.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.title}>Request a Quotation</h3>
            <p className={styles.subtitle}>Let us prepare a custom proposal for your school, college, or organization.</p>

            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                minLength={2}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="organisationName">Organisation / Institution Name</label>
              <input
                type="text"
                id="organisationName"
                name="organisationName"
                value={formData.organisationName}
                onChange={handleChange}
                placeholder="School name, college, or company"
                className={styles.input}
              />
            </div>

            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@organisation.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[6-9][0-9]{9}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label htmlFor="serviceInterest">Service Interest *</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="EduTech Curriculum">EduTech Curriculum</option>
                  <option value="Robotics Lab Setup">Robotics Lab Setup</option>
                  <option value="Experience Zone Setup">Experience Zone Setup</option>
                  <option value="Online Courses (B2C)">Online Courses (B2C)</option>
                  <option value="In-Person Training Centers">In-Person Training Centers</option>
                  <option value="Trainer Certification">Trainer Certification</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="budgetRange">Budget Range *</label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="< ₹1L">&lt; ₹1 Lakh</option>
                  <option value="₹1–5L">₹1 – 5 Lakhs</option>
                  <option value="₹5–20L">₹5 – 20 Lakhs</option>
                  <option value="₹20L+">₹20 Lakhs+</option>
                  <option value="Prefer to discuss">Prefer to discuss</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message / Requirements *</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                value={formData.message}
                onChange={handleChange}
                placeholder="Detail your requirements: student count, timeline, target board integration, physical space constraints, etc. (minimum 20 characters)"
                className={styles.textarea}
                rows={4}
              />
            </div>

            {submitStatus === "error" && (
              <p className={styles.errorMessage} role="alert">
                ❌ Submission failed. Please verify your connection or SMTP credentials.
              </p>
            )}

            <button type="submit" disabled={isSubmitting} className={`btn-primary ${styles.submitBtn}`}>
              {isSubmitting ? "Submitting..." : "Submit Quotation Request →"}
            </button>
            <p className={styles.securePrompt}>
              <span aria-hidden="true">🔒</span> Confidential request · Response within 24 hours
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}

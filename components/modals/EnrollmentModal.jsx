"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./EnrollmentModal.module.css";

export default function EnrollmentModal({ isOpen, onClose, course }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    ageGroup: "< 14",
    priorExperience: "None",
    preferredBatch: "Online Weekday",
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
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !course || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Indian Phone format validation (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseName: course.name,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          ageGroup: "< 14",
          priorExperience: "None",
          preferredBatch: "Online Weekday",
        });
      } else {
        setSubmitStatus("error");
        console.error("Enrollment failed:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Enrollment error:", error);
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
            <div className={styles.successIcon} aria-hidden="true">🎉</div>
            <h3 className={styles.successTitle}>Registration Request Received!</h3>
            <p className={styles.successText}>
              Thank you for your interest in <strong>{course.name}</strong>!
            </p>
            <p className={styles.successText}>
              Our team will contact you within <strong>24 hours</strong> with <strong>course pricing details</strong> and batch scheduling options.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.title}>Register Interest</h3>
            <p className={styles.formSubtitle}>
              Fill in your details and receive <strong>course pricing</strong> and batch information within 24 hours.
            </p>
            <div className={styles.courseSummary}>
              <span className={styles.courseLabel}>Selected Course:</span>
              <strong className={styles.courseName}>{course.name}</strong>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
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
                  placeholder="name@example.com"
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
                <span className={styles.inputHint}>Format: 10-digit Indian number (starts with 6-9)</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Chennai, Pondicherry"
                className={styles.input}
              />
            </div>

            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label htmlFor="ageGroup">Age Group *</label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="< 14">&lt; 14</option>
                  <option value="14–18">14–18</option>
                  <option value="18–25">18–25</option>
                  <option value="25+">25+</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="priorExperience">Prior Experience *</label>
                <select
                  id="priorExperience"
                  name="priorExperience"
                  value={formData.priorExperience}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="None">None</option>
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="preferredBatch">Preferred Batch *</label>
              <select
                id="preferredBatch"
                name="preferredBatch"
                value={formData.preferredBatch}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Online Weekday">Online Weekday</option>
                <option value="Online Weekend">Online Weekend</option>
                <option value="Offline Weekday">Offline Weekday</option>
                <option value="Offline Weekend">Offline Weekend</option>
              </select>
            </div>

            {submitStatus === "error" && (
              <p className={styles.errorMessage} role="alert">
                ❌ Submission failed. Please verify your connection or SMTP credentials.
              </p>
            )}

            <button type="submit" disabled={isSubmitting} className={`btn-primary ${styles.submitBtn}`}>
              {isSubmitting ? "Processing..." : "Confirm Enrollment →"}
            </button>
            <p className={styles.securePrompt}>
              <span aria-hidden="true">🔒</span> Secure enrollment · Confirmation within 24 hours
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}

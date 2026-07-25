"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import CoursesGrid from "@/components/sections/CoursesGrid";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import styles from "@/app/courses/courses.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CoursesPageClient({ content }) {
  const courses = content.courses.list;

  return (
    <div>
      <PageHero
        title={content.courses.hero.title}
        subtitle={content.courses.hero.subtitle}
      />

      {/* Courses Grid Container */}
      <section className="section">
        <div className="container">
          <CoursesGrid courses={courses} showFilter={true} />
        </div>
      </section>

      <div className="divider"></div>

      {/* Learning Path */}
      <section className="section">
        <div className="container">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.courses.learningPath.eyebrow}
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.courses.learningPath.title}
          </motion.h2>

          <motion.div
            className={styles.pathContainer}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {content.courses.learningPath.stages.map((path, idx) => (
              <motion.div
                key={idx}
                className={`glass-card ${styles.pathCard}`}
                variants={fadeUp}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.15)",
                  transition: { duration: 0.3 }
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Testimonials */}
      <Testimonials />

      <div className="divider"></div>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ textAlign: "center" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.courses.faq.title}
          </motion.h2>

          <motion.div
            className={styles.faqGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {content.courses.faq.list.map((faq, idx) => (
              <motion.div
                key={idx}
                className={`glass-card ${styles.faqCard}`}
                variants={fadeUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h4 className={styles.faqQ}>{faq.q}</h4>
                <p className={styles.faqA}>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FAQ CTA */}
      <CtaBanner
        title={content.courses.cta.title}
        subtitle={content.courses.cta.subtitle}
        primaryText={content.courses.cta.primaryText}
        primaryHref={content.courses.cta.primaryHref}
        secondaryText={content.courses.cta.secondaryText}
        secondaryHref={content.courses.cta.secondaryHref}
        primaryBtnClass="btn-primary"
      />
    </div>
  );
}

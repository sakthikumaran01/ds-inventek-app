import PageHero from "@/components/PageHero";
import CoursesGrid from "@/components/CoursesGrid";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import styles from "./courses.module.css";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.courses.title,
  description: content.meta.courses.description,
  keywords: content.meta.courses.keywords,
};

export default function CoursesPage() {
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
          <p id="path-eyebrow" className="section-eyebrow reveal-item">
            {content.courses.learningPath.eyebrow}
          </p>
          <h2 id="path-title" className="section-title reveal-item">
            {content.courses.learningPath.title}
          </h2>

          <div className={styles.pathContainer}>
            {content.courses.learningPath.stages.map((path, idx) => (
              <div
                key={idx}
                id={`path-${idx}`}
                className={`glass-card ${styles.pathCard} reveal-item`}
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

      {/* Testimonials */}
      <Testimonials />

      <div className="divider"></div>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 id="faq-title" className="section-title reveal-item" style={{ textAlign: "center" }}>
            {content.courses.faq.title}
          </h2>

          <div className={styles.faqGrid}>
            {content.courses.faq.list.map((faq, idx) => (
              <div key={idx} id={`faq-${idx}`} className={`glass-card ${styles.faqCard} reveal-item`} style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}>
                <h4 className={styles.faqQ}>{faq.q}</h4>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
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

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CourseDetailClient from "@/components/clients/CourseDetailClient";
import styles from "./detail.module.css";
import content from "@/data/content.json";
import { SITE_URL } from "@/lib/utils";
import { getCourseJsonLd, getBreadcrumbJsonLd } from "@/lib/structuredData";

export async function generateStaticParams() {
  return content.courses.list.map((course) => ({
    slug: course.id,
  }));
}

export async function generateMetadata({ params }) {
  const course = content.courses.list.find(c => c.id === params.slug);
  if (!course) return {};

  return {
    title: `${course.name} Course | DS Inventek`,
    description: course.desc,
    keywords: `robotics, ${course.name}, STEM courses, build robot Chennai, Arduino, Raspberry Pi, Chennai`,
    alternates: {
      canonical: `/courses/${course.id}`,
    },
  };
}

export default function CourseDetailPage({ params }) {
  const course = content.courses.list.find(c => c.id === params.slug);

  if (!course) {
    notFound();
  }

  const courseJsonLd = getCourseJsonLd(course);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Courses", url: `${SITE_URL}/courses` },
    { name: course.name, url: `${SITE_URL}/courses/${course.id}` },
  ]);

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.navBreadcrumb}>
            <Link href="/courses">Courses</Link>
            <span aria-hidden="true">/</span>
            <span>{course.name}</span>
          </div>

          <div className={styles.heroContent}>
            <span className={`${styles.levelBadge} ${
              course.level.toLowerCase().includes("1") || course.level.toLowerCase().includes("beginner")
                ? styles.levelBeginner
                : course.level.toLowerCase().includes("2") || course.level.toLowerCase().includes("intermediate")
                ? styles.levelIntermediate
                : styles.levelAdvanced
            }`}>
              <span aria-hidden="true">
                {course.level.toLowerCase().includes("1") || course.level.toLowerCase().includes("beginner") ? "⚡" : course.level.toLowerCase().includes("2") || course.level.toLowerCase().includes("intermediate") ? "◈" : "▲"}
              </span>{" "}
              {course.level}
            </span>
            <h1 className={styles.title}>{course.name}</h1>
            <div className={styles.metaRow}>
              <span className={styles.duration}>⏱ {course.duration}</span>
            </div>
            <p className={styles.introText}>{course.desc}</p>
            
            <div className={styles.ctaWrapper}>
              <CourseDetailClient courseName={course.name} />
              <Link href="/contact" className="btn-ghost">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeader}>Overview</h2>
              <p className={styles.longDesc}>{course.longDesc}</p>
              
              <div className={`glass-card ${styles.trustCard}`}>
                <h4>🔒 Secure Enrollment Assured</h4>
                <p>Register today to reserve your seat. We will call you within 24 hours to schedule class batches.</p>
                <div className={styles.trustStrip}>
                  <span>✓ DPIIT Recognised</span>
                  <span>✓ Certificate included</span>
                  <span>✓ Materials included</span>
                </div>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={`glass-card ${styles.imageContainer}`}>
                <Image
                  src={course.image}
                  alt={course.imageAlt || course.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={styles.image}
                  priority
                />
              </div>

              <div className={`glass-card ${styles.modulesCard}`}>
                <h3>What You'll Learn:</h3>
                <ul className={styles.modulesList}>
                  {course.modules.map((module, idx) => (
                    <li key={idx} className={styles.moduleItem}>
                      <span className={styles.bullet}>✓</span>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import CourseDetailClient from "@/components/clients/CourseDetailClient";
import styles from "./roboticsSports.module.css";
import content from "@/data/content.json";
import { SITE_URL } from "@/lib/utils";
import { getBreadcrumbJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: content.meta.roboticsSports.title,
  description: content.meta.roboticsSports.description,
  keywords: content.meta.roboticsSports.keywords,
  alternates: {
    canonical: "/courses/robotics-sports-training",
  },
};

export default function RoboticsSportsTrainingPage() {
  const program = content.roboticsSports;

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Courses", url: `${SITE_URL}/courses` },
    { name: program.title, url: `${SITE_URL}/courses/${program.slug}` },
  ]);

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.navBreadcrumb}>
            <Link href="/courses">Courses</Link>
            <span aria-hidden="true">/</span>
            <span>{program.title}</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrowBadge}>{program.eyebrow}</span>
            <h1 className={styles.title}>{program.title}</h1>
            <p className={styles.tagline}>{program.tagline}</p>

            <div className={styles.ctaWrapper}>
              <CourseDetailClient courseName={program.title} />
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
              <p className={styles.longDesc}>{program.overview}</p>

              <h2 className={styles.sectionHeader}>Events</h2>
              <div className={`glass-card ${styles.eventsCard}`}>
                <ul className={styles.eventsList}>
                  {program.events.map((event) => (
                    <li key={event.id} className={styles.eventRow}>
                      <div className={styles.eventName}>{event.name}</div>
                      <p className={styles.eventDesc}>{event.description}</p>
                    </li>
                  ))}
                </ul>
                {program.moreEventsNote && (
                  <p className={styles.moreEventsNote}>{program.moreEventsNote}</p>
                )}
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={`glass-card ${styles.imageContainer}`}>
                <Image
                  src={program.image}
                  alt="Composite of DS Inventek robotics sports events"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={styles.image}
                  priority
                />
              </div>

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
          </div>
        </div>
      </section>
    </div>
  );
}

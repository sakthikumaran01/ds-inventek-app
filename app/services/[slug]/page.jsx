import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ServiceDetailClient from "@/components/clients/ServiceDetailClient";
import styles from "./detail.module.css";
import content from "@/data/content.json";
import { SITE_URL } from "@/lib/utils";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/structuredData";

export async function generateStaticParams() {
  return content.services.list.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const service = content.services.list.find(s => s.id === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | DS Inventek`,
    description: service.desc,
    keywords: `robotics, ${service.title}, school robotics, lab setup Chennai, lab setup Puducherry, STEM South India, Pondicherry`,
    alternates: {
      canonical: `/services/${service.id}`,
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = content.services.list.find(s => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = getServiceJsonLd(service);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: service.title, url: `${SITE_URL}/services/${service.id}` },
  ]);

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.navBreadcrumb}>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.title}</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.audienceBadge}>{service.audience}</span>
            <h1 className={styles.title}>
              <span aria-hidden="true" className={styles.titleIcon}>{service.icon}</span> {service.title}
            </h1>
            <p className={styles.priceTag}>{service.priceInfo}</p>
            <p className={styles.introText}>{service.desc}</p>
            
            <div className={styles.ctaWrapper}>
              <ServiceDetailClient serviceName={service.title} />
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
              <p className={styles.longDesc}>{service.longDesc}</p>
              
              <div className={`glass-card ${styles.trustCard}`}>
                <h4>Why partner with DS Inventek?</h4>
                <ul>
                  <li>✓ Work directly with World Champions (Kazan 2024 FLL title holders)</li>
                  <li>✓ Turnkey execution with zero reliance on secondary suppliers</li>
                  <li>✓ Recognised by DPIIT and Startup India</li>
                </ul>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={`glass-card ${styles.imageContainer}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={styles.image}
                  priority
                />
              </div>

              <div className={`glass-card ${styles.featuresCard}`}>
                <h3>Core Features Included:</h3>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.bullet}>✓</span>
                      <span>{feature}</span>
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

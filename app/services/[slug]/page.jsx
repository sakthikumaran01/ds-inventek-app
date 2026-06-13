import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import styles from "./detail.module.css";

const servicesData = {
  "edutech-curriculum": {
    title: "EduTech Curriculum",
    icon: "📚",
    desc: "Give your school a competitive edge — a CBSE-aligned robotics curriculum with full teacher training and lab support.",
    audience: "Schools · CBSE / State Board",
    price: "Starting from ₹1,50,000 per academic year",
    longDesc: "Integrate robotics directly into your school's curriculum. We provide a complete textbook set, hands-on lab kits, teacher training, and ongoing assessment systems that make school-level STEM education structured, fun, and highly effective. Fully CBSE-compliant and customized for Grades 6 to 12.",
    features: [
      "Grade 6-12 structured curriculum",
      "CBSE & state-board aligned syllabus",
      "Term-wise textbook sets & digital resources",
      "Regular assessments & report cards",
      "Annual STEM science-fair support",
      "Continuous trainer workshops"
    ],
    image: "/images/service-curriculum.png"
  },
  "robotics-lab-setup": {
    title: "Robotics Lab Setup",
    icon: "🖥️",
    desc: "From empty classroom to fully operational robotics lab — we handle design, sourcing, and setup.",
    audience: "Schools · Colleges · Makerspaces",
    price: "Starting from ₹3,50,000 (turnkey)",
    longDesc: "Equip your institution with a state-of-the-art robotics laboratory. From high-quality components, tools, microcontrollers, and sensors to custom benches and storage systems — our turnkey solutions cover it all. Complete with on-site installation and trainer onboarding.",
    features: [
      "End-to-end laboratory workspace design",
      "Turnkey hardware & component procurement",
      "3D printers, laser cutters, & soldering setups",
      "On-site installation & hardware test runs",
      "Trainer certification & operating manual",
      "1-year comprehensive hardware maintenance"
    ],
    image: "/images/service-lab.png"
  },
  "experience-zone": {
    title: "Experience Zone Setup",
    icon: "✨",
    desc: "Turn footfall into fascination — robotics experience zones for malls, museums, and public venues.",
    audience: "Malls · Museums · Venues",
    price: "Custom Quotation — Request Brief",
    longDesc: "Design and install an interactive robotics zone that attracts, engages, and educates the public. Perfect for malls, science centers, museums, and private educational hubs. Includes automated robot combat arenas, robotic claws, and AI-vision games.",
    features: [
      "Custom layout design matching brand aesthetic",
      "Interactive robot combat arenas & controls",
      "AI computer vision demonstration setups",
      "Operator training & handbook guidelines",
      "Weekly/monthly safety audit inspections",
      "Regular bot updates & repairs"
    ],
    image: "/images/service-experience.png"
  },
  "online-courses": {
    title: "Online Courses (B2C)",
    icon: "🌐",
    desc: "Learn robotics from the comfort of your home with our expert-led, interactive online modules.",
    audience: "Students · Hobbyists · All India",
    price: "Starting from ₹2,499 per module",
    longDesc: "Accessible from anywhere in India, our online courses feature real hardware kits shipped directly to your doorstep. Learn circuit design, Arduino programming, PID control, and AI integration via video tutorials and weekly live interactive code review sessions.",
    features: [
      "Hands-on hardware kits delivered to your door",
      "Live interactive doubt clearing sessions",
      "Self-paced learning platform dashboard",
      "Curriculum designed by World Champion engineers",
      "Project submission reviews & feedback",
      "Verified course completion certificate"
    ],
    image: "/images/service-online.png"
  },
  "inperson-training": {
    title: "In-Person Training Centers",
    icon: "👥",
    desc: "Hands-on, project-based learning under the guidance of World Champions at our physical centers.",
    audience: "Students · Professionals",
    price: "Starting from ₹1,200 per session",
    longDesc: "Get face-to-face mentorship from champion robotics engineers. Our Chennai and Pondicherry training centers are fully equipped with advanced fabrication tools, test areas, and specialized sensors for students who want to build complex autonomous bots.",
    features: [
      "Dedicated workspace desks at Chennai & Pondicherry",
      "Direct coaching from World Champion mentors",
      "Work with professional grade fabrication tools",
      "Weekend & summer bootcamp scheduling batches",
      "Mock robotics competitions & trials",
      "Access to advanced parts library"
    ],
    image: "/images/service-inperson.png"
  },
  "trainer-certification": {
    title: "Trainer Certification",
    icon: "🏅",
    desc: "Become a certified STEM educator with our intensive industry-aligned training programs.",
    audience: "Educators · Trainers · Institutions",
    price: "Starting from ₹15,000 per cohort",
    longDesc: "Empower your instructors or start your own tutoring career. Our Trainer Certification program teaches coding, physics, electronics, mechanical design, and classroom management techniques to ensure high-quality STEM instruction.",
    features: [
      "Rigorous 2-week training intensive program",
      "Certification aligned with global STEM standards",
      "Lifetime pedagogy resources & software access",
      "Job placement support in partner schools",
      "Hands-on microcontroller assessment",
      "Classroom coordination & control coaching"
    ],
    image: "/images/service-certification.png"
  }
};

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug];
  if (!service) return {};

  return {
    title: `${service.title} | DS Inventek`,
    description: service.desc,
    keywords: `robotics, ${service.title}, school robotics, lab setup, STEM Chennai, Pondicherry`,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}></div>
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
            <p className={styles.priceTag}>{service.price}</p>
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
                  <li>✓ Recognised by NITI Aayog, DPIIT, and Startup India</li>
                </ul>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={`glass-card ${styles.imageContainer}`}>
                <Image
                  src={service.image}
                  alt={service.title}
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

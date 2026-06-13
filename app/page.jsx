import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CourseSlider from "@/components/CourseSlider";
import GovBadges from "@/components/GovBadges";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import styles from "./page.module.css";

export const metadata = {
  title: "Robotics & AI Education Chennai & Pondicherry | DS Inventek",
  description: "DS Inventek offers world-class hands-on robotics courses, school/college lab setups, and interactive experience zones. Founded by World Champion engineers.",
  keywords: "robotics training Chennai, AI robotics courses, STEM robotics school India, school robotics lab setup CBSE, next-generation AI robotics Chennai, Games of the Future champion",
};

export default function Home() {
  const featuredServices = [
    {
      icon: "📚",
      title: "EduTech Curriculum",
      desc: "Give your school a competitive edge — a CBSE-aligned robotics curriculum with full teacher training and lab support.",
      badge: "Schools · CBSE",
      image: "/images/service-curriculum.png",
      slug: "edutech-curriculum",
    },
    {
      icon: "🖥️",
      title: "Robotics Lab Setup",
      desc: "From empty classroom to fully operational robotics lab — we handle design, sourcing, and setup.",
      badge: "Schools · Colleges",
      image: "/images/service-lab.png",
      slug: "robotics-lab-setup",
    },
    {
      icon: "✨",
      title: "Experience Zone Setup",
      desc: "Turn footfall into fascination — robotics experience zones for malls, museums, and public venues.",
      badge: "Malls · Museums",
      image: "/images/service-experience.png",
      slug: "experience-zone",
    },
  ];

  const featuredCourses = [
    {
      id: "basic-electronics",
      name: "Basic Electronics",
      level: "Beginner",
      duration: "8 hrs",
      price: "₹2,499",
      desc: "Learn electronics fundamentals with hands-on circuit building.",
      modules: ["Ohm's Law", "Resistors & Capacitors", "LEDs & Diodes", "Circuit Assembly"],
      image: "/images/course-electronics.png",
      enrollUrl: "https://wa.me/919943336712?text=I'd+like+to+enrol+in+Basic+Electronics+course",
    },
    {
      id: "quad-bot",
      name: "Quad Bot",
      level: "Beginner",
      duration: "12 hrs",
      price: "₹3,999",
      desc: "Build and program a four-legged walking robot.",
      modules: ["Robot Assembly", "Motor Control", "Programming", "Testing & Calibration"],
      image: "/images/course-quadbot.png",
      enrollUrl: "https://wa.me/919943336712?text=I'd+like+to+enrol+in+Quad+Bot+course",
    },
    {
      id: "self-balancing-robot",
      name: "Self Balancing Robot",
      level: "Intermediate",
      duration: "16 hrs",
      price: "₹5,999",
      desc: "Create an advanced self-balancing two-wheeled robot using PID control.",
      modules: ["Sensor Integration", "PID Control", "Advanced Programming", "Real-World Applications"],
      image: "/images/course-balancing.png",
      enrollUrl: "https://wa.me/919943336712?text=I'd+like+to+enrol+in+Self+Balancing+Robot+course",
    },
    {
      id: "robotic-arm",
      name: "Robotic Arm",
      level: "Intermediate",
      duration: "20 hrs",
      price: "₹7,999",
      desc: "Design and control a multi-joint robotic arm with precision.",
      modules: ["Mechanical Design", "Motor Control", "Forward/Inverse Kinematics", "Automation"],
      image: "/images/course-arm.png",
      enrollUrl: "https://wa.me/919943336712?text=I'd+like+to+enrol+in+Robotic+Arm+course",
    },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}></div>
        <div className={styles.heroContent}>
          <div id="hero-eyebrow" className={`${styles.heroEyebrow} reveal-item`}>
            <span aria-hidden="true">🌍</span> World Champions — Games of the Future 2024, Kazan
          </div>
          <h1 id="hero-title" className={`${styles.heroTitle} reveal-item`}>
            <span className={styles.line1}>World Champions in Robotics.</span>
            <span className={styles.line2}>Now Building India's Next Generation of Engineers.</span>
          </h1>
          <p id="hero-sub" className={`${styles.heroSub} reveal-item`}>
            Kazan 2024 World Champions · 300+ Competition Wins · 5,000+ Students Trained across India
          </p>
          <div id="hero-ctas" className={`${styles.heroCtas} reveal-item`}>
            <Link href="/courses" className="btn-primary">
              Explore Courses →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Set Up a Robotics Lab
            </Link>
          </div>

          <div className={styles.heroBadge}>
            <div className={`glass-card ${styles.championshipBadge}`} style={{ textAlign: "center", width: "260px" }}>
              <div className={styles.trophyIcon} aria-hidden="true">🏆</div>
              <div className={styles.trophyTitle}>World Champions</div>
              <div className={styles.trophySub}>
                Games of the Future
                <br />
                Kazan, Russia
              </div>
              <div className={styles.trophyYear}>2024</div>
              <div className={styles.trophyCaption}>
                Kazan 2024 · First Lego League · World Champions
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── GOVT RECOGNITION BADGES ── */}
      <div className="container" style={{ marginTop: "1rem" }}>
        <GovBadges limit={3} />
      </div>

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {[
            { num: "5,000", label: "Students Trained" },
            { num: "300", label: "Competition Wins" },
            { num: "10", label: "Years of Excellence" },
            { num: "7", label: "Business Verticals" },
          ].map((stat, idx) => (
            <div
              key={idx}
              id={`stat-${idx}`}
              className={`glass-card ${styles.statCard} reveal-item`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <span className={styles.statNum}>{stat.num}{stat.num !== "7" ? "+" : ""}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── AUDIENCE SEGMENTATION ── */}
      <section className={styles.segmentation}>
        <div className="container">
          <div className={styles.segmentationGrid}>
            <div className={`glass-card ${styles.segmentCard} ${styles.studentCard} reveal-item`}>
              <div className={styles.segmentIcon} aria-hidden="true">⚡</div>
              <h3 className={styles.segmentTitle}>For Students</h3>
              <p className={styles.segmentDesc}>
                Learn robotics by building real, physical projects. Go from basic circuits to advanced autonomous flight.
              </p>
              <Link href="/courses" className="btn-primary">
                Explore Courses →
              </Link>
            </div>
            <div className={`glass-card ${styles.segmentCard} ${styles.institutionCard} reveal-item`}>
              <div className={styles.segmentIcon} aria-hidden="true">🏛️</div>
              <h3 className={styles.segmentTitle}>For Institutions</h3>
              <p className={styles.segmentDesc}>
                Equip your school or college with turnkey labs, CBSE-aligned curriculum, and world-class certification.
              </p>
              <Link href="/contact" className="btn-secondary">
                Get a Quotation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── FEATURED COURSES ── */}
      <section className={styles.featuredCourses}>
        <div className="container">
          <p id="courses-eyebrow" className="section-eyebrow reveal-item">
            Learn by Building
          </p>
          <h2 id="courses-title" className="section-title reveal-item">
            Courses That Ship<br />
            Real Projects
          </h2>
          <p id="courses-subtitle" className="section-subtitle reveal-item">
            Every course ends with hardware you built yourself. No simulations. No shortcuts.
          </p>

          <CourseSlider courses={featuredCourses} />

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/courses" className="btn-primary">
              Browse All Courses →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── FEATURED SERVICES ── */}
      <section className={styles.featured}>
        <div className="container">
          <p id="services-eyebrow" className="section-eyebrow reveal-item">
            What We Offer
          </p>
          <h2 id="services-title" className="section-title reveal-item">
            Seven Ways We<br />
            Empower Innovators
          </h2>
          <p id="services-subtitle" className="section-subtitle reveal-item">
            From school curriculum integration to world-class robotics competitions — we have a vertical for every stage of the journey.
          </p>

          <div className={styles.servicesGrid}>
            {featuredServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                id={`service-card-${idx}`}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                badge={service.badge}
                image={service.image}
                delay={`${idx * 0.1}s`}
                slug={service.slug}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" className="btn-primary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      <div className="divider"></div>

      {/* ── CTA BANNER ── */}
      <CtaBanner
        title="Ready to build your first robot?"
        subtitle="Join 5,000+ students who've gone from curious to capable with DS Inventek."
        primaryText="Explore Courses"
        primaryHref="/courses"
        secondaryText="Talk to Us"
        secondaryHref="/contact"
      />
    </div>
  );
}

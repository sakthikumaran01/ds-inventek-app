import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import GovBadges from "@/components/GovBadges";
import styles from "./services.module.css";

export const metadata = {
  title: "Robotics Services & Lab Setup CBSE | DS Inventek",
  description: "Explore our 7 integration points including CBSE EduTech curriculum, complete school/college robotics lab setups, and interactive experience zones. Founded by World Champions.",
  keywords: "robotics lab setup CBSE, school robotics curriculum, B2B robotics lab India, robotics experience zone setup, trainer certification program",
};

export default function ServicesPage() {
  const services = [
    {
      id: "curriculum",
      icon: "📚",
      title: "EduTech Curriculum",
      audience: "Schools · CBSE / State Board",
      price: "Starting from ₹X per academic year",
      desc: "Structured robotics curriculum designed for CBSE and state board integration — from Grades 6 to 12. Industry-aligned pedagogy with hands-on labs.",
      features: ["6-12 grade curriculum", "CBSE aligned", "Hands-on projects", "Teacher training"],
      image: "/images/service-curriculum.png",
    },
    {
      id: "lab-setup",
      icon: "🖥️",
      title: "Robotics Lab Setup",
      audience: "Schools · Colleges · Makerspaces",
      price: "Starting from ₹X (turnkey)",
      desc: "End-to-end robotics lab design, equipment procurement, and installation for institutions of every size.",
      features: ["Complete consultation", "Equipment sourcing", "Installation & setup", "Staff training"],
      image: "/images/service-lab.png",
    },
    {
      id: "experience-zones",
      icon: "✨",
      title: "Experience Zone Setup",
      audience: "Malls · Museums · Venues",
      price: "Custom Quotation — Request Brief",
      desc: "Interactive robotics experience zones that engage the public and create unforgettable brand moments.",
      features: ["Custom design", "Interactive demos", "Maintenance support", "Visitor engagement"],
      image: "/images/service-experience.png",
    },
    {
      id: "online-courses",
      icon: "🌐",
      title: "Online Courses (B2C)",
      audience: "Students · Hobbyists · All India",
      price: "Starting from ₹X per module",
      desc: "Self-paced and live online robotics courses accessible from anywhere in India — beginner to advanced.",
      features: ["Self-paced learning", "Live sessions", "Beginner to advanced", "Certificate included"],
      image: "/images/service-online.png",
    },
    {
      id: "inperson-training",
      icon: "👥",
      title: "In-Person Training Centers",
      audience: "Students · Professionals",
      price: "Starting from ₹X per session",
      desc: "Hands-on robotics workshops and long-format programs at our Chennai and Pondicherry centers.",
      features: ["Location: Chennai", "Location: Pondicherry", "Weekend batches", "Corporate training"],
      image: "/images/service-inperson.png",
    },
    {
      id: "certification",
      icon: "🏅",
      title: "Trainer Certification",
      audience: "Educators · Trainers · Institutions",
      price: "Starting from ₹X per cohort",
      desc: "Certify your educators with our DS Inventek Robotics Trainer Program — industry-recognised credentials.",
      features: ["Industry recognized", "2-week intensive", "Lifetime support", "Job placement"],
      image: "/images/service-certification.png",
    },
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "Submit Your Brief",
      desc: "Fill the contact form or WhatsApp us with your school name, student count, and which service you're exploring.",
    },
    {
      step: "Step 2",
      title: "Consultation Call",
      desc: "Our team schedules a 30-minute call to understand your curriculum needs, existing infrastructure, and budget range.",
    },
    {
      step: "Step 3",
      title: "Proposal & Demo",
      desc: "We send a detailed proposal within 48 hours and arrange an in-person or virtual demo at your convenience.",
    },
    {
      step: "Step 4",
      title: "Implementation",
      desc: "On agreement, we deploy the lab setup, curriculum, or workshop with full onboarding support included.",
    },
  ];

  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Seven vertical integration points designed to deliver robotics education at every stage of the journey."
      />

      {/* Services Intro / GovBadges */}
      <div className="container" style={{ marginTop: "2rem" }}>
        <GovBadges />
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                id={service.id}
                icon={service.icon}
                title={service.title}
                badge={service.audience}
                price={service.price}
                desc={service.desc}
                features={service.features}
                image={service.image}
                delay={`${(idx % 3) * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* How It Works Section */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow reveal-item" style={{ margin: "0 auto 1rem", justifyContent: "center" }}>
            The Roadmap
          </p>
          <h2 className="section-title reveal-item">
            How It Works
          </h2>
          <p className="section-subtitle reveal-item">
            We guide you step-by-step from initial concept design to final hardware integration and classroom launch.
          </p>

          <div className={styles.processGrid}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`glass-card ${styles.processCard} reveal-item`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.processStep}>{step.step}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Case Study Section */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow reveal-item" style={{ margin: "0 auto 1rem", justifyContent: "center" }}>
            Case Study
          </p>
          <h2 className="section-title reveal-item">
            What Schools Say
          </h2>

          <div className={`glass-card ${styles.caseStudyCard} reveal-item`}>
            <div className={styles.caseStudyMeta}>
              <span className={styles.caseStudySchool}>Case Study Coming Soon</span>
              <span>Puducherry · Lab Setup</span>
            </div>
            <p className={styles.caseStudyQuote}>
              "The turn-key robotics laboratory setup was completed on-time. The curriculum and staff training have empowered our students to begin building real hardware projects in their first semester."
            </p>
            <div className={styles.caseStudyOutcome}>
              🏆 Outcome: School robotics enrollment increased by 40% in Year 1
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <p id="why-eyebrow" className="section-eyebrow reveal-item">
            Why Choose Us
          </p>
          <h2 id="why-title" className="section-title reveal-item">
            Industry-Leading Excellence
          </h2>

          <div className={styles.whyGrid}>
            {[
              {
                icon: "🏆",
                title: "World Champions",
                desc: "Our team literally won the World Championship in robotics. We teach real-world competition strategies and techniques.",
              },
              {
                icon: "📊",
                title: "5,000+ Students",
                desc: "Over 5,000 students have trained with us. Our methodologies are battle-tested with measurable outcomes.",
              },
              {
                icon: "🌍",
                title: "Global Recognition",
                desc: "Certified trainers. Industry partnerships. International competition experience at every level.",
              },
              {
                icon: "⚙️",
                title: "Hands-On Hardware",
                desc: "No simulations. Every course involves real robotics hardware that you build and control yourself.",
              },
              {
                icon: "🎓",
                title: "Structured Learning",
                desc: "Beginner to advanced pathways. Each course builds on previous skills with clear progression.",
              },
              {
                icon: "💼",
                title: "Career Ready",
                desc: "Our programs align with industry needs. Graduates are ready for college robotics teams and STEM careers.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                id={`why-${idx}`}
                className={`glass-card ${styles.whyCard} reveal-item`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 id="cta-title" className="ctaTitle reveal-item">
            Ready to get started?
          </h2>
          <p id="cta-sub" className="ctaSub reveal-item">
            Contact us to discuss which service fits your needs perfectly.
          </p>
          <div id="cta-btns" className="ctaBtns reveal-item">
            <Link href="/contact" className="btn-primary">
              Contact Us →
            </Link>
            <Link href="/" className="btn-ghost">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

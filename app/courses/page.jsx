import PageHero from "@/components/PageHero";
import CoursesGrid from "@/components/CoursesGrid";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import styles from "./courses.module.css";

export const metadata = {
  title: "Hands-on Robotics & AI Courses | DS Inventek",
  description: "Learn robotics by building real hardware. From Basic Electronics, Quad Bots, Self Balancing Robots, Robotic Arms to advanced Drones. Industry-certified pathways.",
  keywords: "robotics courses Chennai, AI drone courses India, build robotic arm Chennai, Arduino training, quad bot assembly, PID control sensor courses, STEM courses Pondicherry",
};

export default function CoursesPage() {
  const whatsappNumber = "919943336712";

  const courses = [
    {
      id: "basic-electronics",
      name: "Basic Electronics",
      level: "Beginner",
      duration: "8 hrs",
      price: "₹2,499",
      desc: "Learn electronics fundamentals with hands-on circuit building.",
      modules: ["Ohm's Law", "Resistors & Capacitors", "LEDs & Diodes", "Circuit Assembly"],
      image: "/images/course-electronics.png",
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+Basic+Electronics+course`,
    },
    {
      id: "line-following-robot",
      name: "Line Following Robot",
      level: "Beginner",
      duration: "10 hrs",
      price: "₹2,999",
      desc: "Build a robot that autonomously follows a line using infrared sensors.",
      modules: ["Sensor Calibration", "Logic Programming", "Differential Drive", "Optimization"],
      image: "/images/course-linefollower.png",
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+Line+Following+Robot+course`,
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
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+Quad+Bot+course`,
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
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+Self+Balancing+Robot+course`,
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
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+Robotic+Arm+course`,
    },
    {
      id: "drone-technology",
      name: "Drone Technology",
      level: "Advanced",
      duration: "24 hrs",
      price: "₹9,999",
      desc: "Master drone assembly, programming, and autonomous flight.",
      modules: ["Drone Assembly", "Flight Physics", "Autonomous Programming", "Advanced Maneuvers"],
      image: "/images/course-drone.png",
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+Drone+Technology+course`,
    },
    {
      id: "ai-ml-robotics",
      name: "AI & ML Robotics",
      level: "Advanced",
      duration: "28 hrs",
      price: "₹11,999",
      desc: "Master autonomous smart robots integrated with computer vision and machine learning models.",
      modules: ["Computer Vision", "Object Detection", "ROS (Robot Operating System)", "Machine Learning Models"],
      image: "/images/course-quadbot.png",
      enrollUrl: `https://wa.me/${whatsappNumber}?text=I'd+like+to+enrol+in+AI+%26+ML+Robotics+course`,
    },
  ];

  return (
    <div>
      <PageHero
        title="Courses That Ship Real Projects"
        subtitle="Every course ends with hardware you built yourself."
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
            Your Learning Journey
          </p>
          <h2 id="path-title" className="section-title reveal-item">
            Progressive Skill Building
          </h2>

          <div className={styles.pathContainer}>
            {[
              {
                stage: "Stage 1",
                title: "Foundations",
                courses: ["Basic Electronics", "Line Following Robot"],
                desc: "Master the basics of circuits, sensors, and simple robotics.",
              },
              {
                stage: "Stage 2",
                title: "Intermediate",
                courses: ["Quad Bot", "Self Balancing Robot"],
                desc: "Build more complex robots with advanced control systems.",
              },
              {
                stage: "Stage 3",
                title: "Advanced",
                courses: ["Robotic Arm", "Drone Technology", "AI & ML Robotics"],
                desc: "Design and build professional-grade robotics systems.",
              },
            ].map((path, idx) => (
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
            Frequently Asked Questions
          </h2>

          <div className={styles.faqGrid}>
            {[
              {
                q: "Do I need prior robotics experience?",
                a: "Not at all! Our beginner courses start from the fundamentals and assume no prior experience.",
              },
              {
                q: "Are materials included?",
                a: "Yes, all course materials and components are included in the course fee.",
              },
              {
                q: "Will I get a certificate?",
                a: "Yes, completion of any course gets you an industry-recognized DS Inventek certificate.",
              },
              {
                q: "Can I attend classes in person?",
                a: "Yes! We offer both online and in-person classes at our Chennai and Pondicherry centers.",
              },
            ].map((faq, idx) => (
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
        title="Ready to start building?"
        subtitle="Choose a course above or contact us to find the perfect fit for your skill level."
        primaryText="Enroll Now →"
        primaryHref="/contact"
        secondaryText="Back Home"
        secondaryHref="/"
        primaryBtnClass="btn-primary"
      />
    </div>
  );
}

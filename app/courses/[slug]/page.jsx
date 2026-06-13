import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CourseDetailClient from "@/components/CourseDetailClient";
import styles from "./detail.module.css";

const coursesData = {
  "basic-electronics": {
    name: "Basic Electronics",
    level: "Beginner",
    duration: "8 hrs",
    price: "₹2,499",
    desc: "Learn electronics fundamentals with hands-on circuit building.",
    longDesc: "Dive into the exciting world of hardware. This hands-on course teaches you the absolute foundations of electrical circuits, working with standard breadboards, active components, and multimeters. You will build real circuit applications from scratch under the guidance of champion engineers.",
    modules: ["Ohm's Law & Circuit Theory", "Resistors, Capacitors & Diodes", "LEDs, Switches & Transistors", "Breadboard Prototyping & Assembly"],
    image: "/images/course-electronics.png"
  },
  "line-following-robot": {
    name: "Line Following Robot",
    level: "Beginner",
    duration: "10 hrs",
    price: "₹2,999",
    desc: "Build a robot that autonomously follows a line using infrared sensors.",
    longDesc: "Bring code and physics together. In this course, you'll assemble a differential-drive robot chassis, configure infrared (IR) sensor arrays, and program logic controllers to make your robot track paths autonomously. You'll master logic, sensor calibration, and mechanical steering.",
    modules: ["IR Sensor Calibration & Theory", "Logic Programming & Gates", "Differential Drive DC Motors", "Chassis Assembly & Calibration"],
    image: "/images/course-linefollower.png"
  },
  "quad-bot": {
    name: "Quad Bot",
    level: "Beginner",
    duration: "12 hrs",
    price: "₹3,999",
    desc: "Build and program a four-legged walking robot.",
    longDesc: "Explore legged locomotion. Quad Bot guides you through building a four-legged walking robot using servo motor controls and microcontrollers. You will learn walk gating algorithms, mechanical link angles, and remote instructions coding.",
    modules: ["Leg Mechanical link design", "Servo Motor Calibration", "Microcontroller coding", "Walk cycle testing & calibration"],
    image: "/images/course-quadbot.png"
  },
  "self-balancing-robot": {
    name: "Self Balancing Robot",
    level: "Intermediate",
    duration: "16 hrs",
    price: "₹5,999",
    desc: "Create an advanced self-balancing two-wheeled robot using PID control.",
    longDesc: "Master advanced closed-loop automation. You will integrate accelerometers and gyroscopes (IMUs) with microcontrollers, and implement real-time PID feedback control equations. Build a robot that defies gravity on two wheels just like a Segway.",
    modules: ["IMU sensor data fusion", "PID feedback loop algorithm", "Closed-loop microcoding", "Real-world motor balancing"],
    image: "/images/course-balancing.png"
  },
  "robotic-arm": {
    name: "Robotic Arm",
    level: "Intermediate",
    duration: "20 hrs",
    price: "₹7,999",
    desc: "Design and control a multi-joint robotic arm with precision.",
    longDesc: "Learn industrial manipulation systems. In this course, you will program a multi-joint robotic arm, master inverse kinematics mathematics, design coordinate motion paths, and program claw grippers for automated object sorting.",
    modules: ["Mechanical link mechanics", "Inverse kinematics control", "Claw grippers automation", "Industrial pick-and-place paths"],
    image: "/images/course-arm.png"
  },
  "drone-technology": {
    name: "Drone Technology",
    level: "Advanced",
    duration: "24 hrs",
    price: "₹9,999",
    desc: "Master drone assembly, programming, and autonomous flight.",
    longDesc: "Take to the skies. Build a quadcopter drone from scratch! You'll configure flight controllers (like APM/Betaflight), solder power distribution boards, calibrate electronic speed controllers (ESCs), and code GPS-guided autonomous waypoint routes.",
    modules: ["Flight physics & dynamics", "Flight controller coding", "Power boards soldering", "GPS waypoint navigation"],
    image: "/images/course-drone.png"
  },
  "ai-ml-robotics": {
    name: "AI & ML Robotics",
    level: "Advanced",
    duration: "28 hrs",
    price: "₹11,999",
    desc: "Master autonomous smart robots integrated with computer vision and machine learning models.",
    longDesc: "Bridge artificial intelligence and physical robotics. Integrate advanced microcomputers (such as Jetson Nano or Raspberry Pi) with camera systems to perform live object tracking, color sorting, obstacle avoidance, and path mapping using OpenCV and TensorFlow models.",
    modules: ["OpenCV computer vision setup", "Object detection ML inference", "ROS (Robot Operating System) basics", "Autonomous mapping & navigation"],
    image: "/images/course-quadbot.png"
  }
};

export async function generateMetadata({ params }) {
  const course = coursesData[params.slug];
  if (!course) return {};

  return {
    title: `${course.name} Course | DS Inventek`,
    description: course.desc,
    keywords: `robotics, ${course.name}, STEM courses, build robot Chennai, Arduino, Raspberry Pi, Chennai`,
  };
}

export default function CourseDetailPage({ params }) {
  const course = coursesData[params.slug];

  if (!course) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}></div>
        <div className="container">
          <div className={styles.navBreadcrumb}>
            <Link href="/courses">Courses</Link>
            <span aria-hidden="true">/</span>
            <span>{course.name}</span>
          </div>

          <div className={styles.heroContent}>
            <span className={`${styles.levelBadge} ${
              course.level === "Beginner"
                ? styles.levelBeginner
                : course.level === "Intermediate"
                ? styles.levelIntermediate
                : styles.levelAdvanced
            }`}>
              <span aria-hidden="true">
                {course.level === "Beginner" ? "⚡" : course.level === "Intermediate" ? "◈" : "▲"}
              </span>{" "}
              {course.level}
            </span>
            <h1 className={styles.title}>{course.name}</h1>
            <div className={styles.metaRow}>
              <span className={styles.duration}>⏱ {course.duration}</span>
              <span className={styles.price}>{course.price}</span>
            </div>
            <p className={styles.introText}>{course.desc}</p>
            
            <div className={styles.ctaWrapper}>
              <CourseDetailClient courseName={course.name} coursePrice={course.price} />
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
                  alt={course.name}
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

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "Press", href: "/contact" },
    ],
    services: [
      { label: "EduTech Curriculum", href: "/services" },
      { label: "Lab Setup", href: "/services" },
      { label: "Experience Zones", href: "/services" },
      { label: "Certification", href: "/services" },
    ],
    courses: [
      { label: "Basic Electronics", href: "/courses" },
      { label: "Quad Bot", href: "/courses" },
      { label: "Robotic Arm", href: "/courses" },
      { label: "Drone Technology", href: "/courses" },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <img src="/logo.png" alt="DS Inventek" className={styles.logoIcon} />
              DS <span>INVENTEK</span>
            </Link>
            <p>Powering the next generation of innovators — from Chennai to the world stage.</p>
          </div>

          <div>
            <div className={styles.footerColTitle}>Company</div>
            <ul className={styles.footerLinks}>
              {footerLinks.company.map((link, i) => (
                <li key={`company-${i}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.footerColTitle}>Services</div>
            <ul className={styles.footerLinks}>
              {footerLinks.services.map((link, i) => (
                <li key={`services-${i}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.footerColTitle}>Courses</div>
            <ul className={styles.footerLinks}>
              {footerLinks.courses.map((link, i) => (
                <li key={`courses-${i}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} DS Inventek Pvt. Ltd. All rights reserved. · Chennai, Tamil Nadu, India</p>
          <p className={styles.footerBadge}>World Champions 🏆 Games of the Future 2024</p>
        </div>
      </div>
    </footer>
  );
}

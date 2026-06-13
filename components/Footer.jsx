import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import GovBadges from "./GovBadges";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
    services: [
      { label: "EduTech Curriculum", href: "/services#curriculum" },
      { label: "Lab Setup", href: "/services#lab-setup" },
      { label: "Experience Zones", href: "/services#experience-zones" },
      { label: "Certification", href: "/services#certification" },
    ],
    courses: [
      { label: "Basic Electronics", href: "/courses#basic-electronics" },
      { label: "Quad Bot", href: "/courses#quad-bot" },
      { label: "Self Balancing Robot", href: "/courses#self-balancing-robot" },
      { label: "Robotic Arm", href: "/courses#robotic-arm" },
      { label: "Drone Technology", href: "/courses#drone-technology" },
      { label: "AI & ML Robotics", href: "/courses#ai-ml-robotics" },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <Image src="/logo.png" alt="DS Inventek" width={30} height={30} className={styles.logoIcon} />
              DS <span>INVENTEK</span>
            </Link>
            <p>Powering the next generation of innovators — from Chennai to the world stage.</p>
            <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-muted)" }}>
              📧 <a href="mailto:info@dsinventek.com" style={{ color: "var(--primary-light)", textDecoration: "none" }}>info@dsinventek.com</a>
            </p>
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

        {/* Government Recognition Badges */}
        <div style={{ marginTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "1rem" }}>
          <GovBadges />
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} DS Inventek Pvt. Ltd. All rights reserved. · Chennai, Tamil Nadu, India</p>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="https://linkedin.com/company/ds-inventek" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }} title="LinkedIn">LinkedIn</a>
            <a href="https://instagram.com/ds_inventek" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }} title="Instagram">Instagram</a>
            <a href="https://youtube.com/@dsinventek" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }} title="YouTube">YouTube</a>
            <a href="https://wa.me/919943336712" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }} title="WhatsApp">WhatsApp</a>
          </div>
          <p className={styles.footerBadge}>World Champions 🏆 Games of the Future 2024</p>
        </div>
      </div>
    </footer>
  );
}

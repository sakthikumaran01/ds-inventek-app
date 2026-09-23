import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import GovBadges from "@/components/sections/GovBadges";
import SocialIcons from "@/components/ui/SocialIcons";
import content from "@/data/content.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: content.footer.links.company,
    services: content.footer.links.services,
    courses: content.courses.list.map(c => ({
      label: c.name.replace(/ – .*/, "").replace(/ & .*/, ""),
      href: `/courses#${c.id}`
    })).concat([{ label: "View all courses →", href: "/courses" }]),
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
            <p>{content.footer.desc}</p>
            <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "rgba(250, 248, 243, 0.6)" }}>
              <span aria-hidden="true">📧</span> <a href={`mailto:${content.company.email}`} style={{ color: "var(--bg-page)", textDecoration: "none" }}>{content.company.email}</a>
            </p>
            <p style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "rgba(250, 248, 243, 0.6)" }}>
              <span aria-hidden="true">📞</span> <a href={`tel:${content.company.phoneRaw}`} style={{ color: "var(--bg-page)", textDecoration: "none" }}>{content.company.phone}</a>
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
          <p>{content.footer.copyright.replace("{year}", currentYear)}</p>
          <SocialIcons variant="dark" />
          <p className={styles.footerBadge}>{content.footer.championBadge}</p>
        </div>
      </div>
    </footer>
  );
}

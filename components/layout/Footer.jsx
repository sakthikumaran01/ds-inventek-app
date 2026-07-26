import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import GovBadges from "@/components/sections/GovBadges";
import content from "@/data/content.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedinUrl = content.company.socialLinks.linkedin;
  const instagramUrl = content.company.socialLinks.instagram;
  const youtubeUrl = content.company.socialLinks.youtube;
  const whatsappUrl = content.company.socialLinks.whatsapp;

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
          <div className={styles.socialIcons}>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} title="LinkedIn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} title="Instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} title="YouTube" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} title="WhatsApp" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.004 0C5.378 0 0 5.376 0 12.001c0 2.112.551 4.167 1.597 5.979L0 24l6.196-1.625c1.752.955 3.72 1.458 5.804 1.46h.004c6.627 0 12.002-5.377 12.002-12.003C24.006 5.376 18.63 0 12.004 0zm0 22.001h-.003c-1.815 0-3.593-.487-5.14-1.408l-.369-.219-3.821.996 1.018-3.709-.241-.383C2.524 16.033 2 14.07 2 12.001 2 6.478 6.486 2 12.004 2c5.518 0 10.002 4.478 10.002 10.001 0 5.522-4.484 10-10.002 10z"/></svg>
            </a>
          </div>
          <p className={styles.footerBadge}>{content.footer.championBadge}</p>
        </div>
      </div>
    </footer>
  );
}

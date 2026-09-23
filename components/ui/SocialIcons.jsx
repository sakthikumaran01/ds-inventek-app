import content from "@/data/content.json";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import styles from "./SocialIcons.module.css";

/**
 * Single shared social-icon set (LinkedIn, Instagram, YouTube, WhatsApp)
 * used by both the footer and the contact page, so they render
 * identically and always read from the same content.company.socialLinks
 * source. `variant` only changes color theming for the local background
 * ("dark" for the footer's dark bg, "light" for pages on the light bg) —
 * shape, size, icons, and hover behavior are identical either way.
 */
export default function SocialIcons({ variant = "light" }) {
  const { linkedin, instagram, youtube, whatsapp } = content.company.socialLinks;
  const variantClass = variant === "dark" ? styles.dark : styles.light;

  return (
    <div className={styles.socialIcons}>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconLink} ${variantClass}`}
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconLink} ${variantClass}`}
        title="Instagram"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a
        href={youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconLink} ${variantClass}`}
        title="YouTube"
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </a>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconLink} ${variantClass}`}
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon width={18} height={18} />
      </a>
    </div>
  );
}

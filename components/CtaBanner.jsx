import Link from "next/link";
import styles from "./CtaBanner.module.css";

export default function CtaBanner({
  title,
  subtitle,
  primaryText,
  primaryHref = "/courses",
  secondaryText,
  secondaryHref = "/contact",
  primaryBtnClass = "btn-white",
  secondaryBtnClass = "btn-ghost",
}) {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaInner}>
        <h2 className={`${styles.ctaTitle} reveal-item`}>{title}</h2>
        {subtitle && <p className={`${styles.ctaSub} reveal-item`}>{subtitle}</p>}
        <div className={`${styles.ctaBtns} reveal-item`}>
          <Link href={primaryHref} className={primaryBtnClass}>
            {primaryText}
          </Link>
          {secondaryText && (
            <Link href={secondaryHref} className={secondaryBtnClass}>
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

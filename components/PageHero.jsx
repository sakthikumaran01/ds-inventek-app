import styles from "./PageHero.module.css";

export default function PageHero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 id="hero-title" className={`${styles.heroTitle} reveal-item`}>
          {title}
        </h1>
        <p id="hero-sub" className={`${styles.heroSub} reveal-item`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

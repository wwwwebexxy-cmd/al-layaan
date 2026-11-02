import styles from "./Hero.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.diagonalWrapper}>
        <div className={styles.topLeftImage}>
          <div className={styles.overlayContent}>
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className={styles.title}>
                <span style={{ color: "white" }}>AL LAYAAN</span>
                <br />
                <span style={{ color: "var(--accent)" }}>Aluminium &amp; Glass</span>
              </h1>
            </ScrollReveal>
          </div>
        </div>
        <div className={styles.bottomRightImage}>
          <div className={styles.overlayContentRight}>
            <ScrollReveal direction="up" delay={0.4}>
              <p className={styles.subtitle}>
                Premium aluminium and glass solutions for homes and businesses — shop fronts, partitions, doors, windows, kitchens, and more.
              </p>
            </ScrollReveal>
            <div className={styles.ctaGroup}>
              <a href="#contact" className={styles.primaryBtn}>Request a Consultation</a>
              <a href="#services" className={styles.secondaryBtn}>Explore Services</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wavyDivider}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C320,150 420,-50 740,50 C1060,150 1160,-50 1440,50 L1440,100 L0,100 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}

import styles from "./About.module.css";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <ScrollReveal direction="right" className={styles.imageMain}>
            <Image
              src="/al-layaan/about-workshop.webp"
              alt="AL LAYAAN craftsman inspecting an aluminium and glass frame"
              width={1536}
              height={1024}
              className={styles.image}
            />
          </ScrollReveal>
        </div>
        <div className={styles.textContent}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="section-title text-gradient" style={{ textAlign: "left", margin: 0 }}>About AL LAYAAN</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className={styles.heading}>CRAFTING MODERN ALUMINIUM &amp; GLASS SPACES</h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.paragraph}>
              AL LAYAAN delivers premium aluminium and glass solutions for residential and commercial spaces. We combine precise fabrication, quality materials, and clean installation to create results that look refined and perform for years.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className={styles.paragraph}>
              From the first consultation through final fitting, our team works with care across shop fronts, partitions, doors, windows, railings, kitchens, outdoor structures, and maintenance.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

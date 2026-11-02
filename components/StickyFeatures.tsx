"use client";

import styles from "./StickyFeatures.module.css";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Precision Fabrication",
    description: "Careful measurements and clean detailing for a confident final fit.",
    image: "/al-layaan/about-workshop.webp",
  },
  {
    id: 2,
    title: "Premium Materials",
    description: "Quality aluminium, glass, hardware, and finishes selected for daily use.",
    image: "/al-layaan/office-partitions.webp",
  },
  {
    id: 3,
    title: "Made for Your Space",
    description: "Solutions shaped around your project, your measurements, and your style.",
    image: "/al-layaan/kitchen-cabinets.webp",
  },
  {
    id: 4,
    title: "Professional Installation",
    description: "A tidy, considered installation process from first fitting to final check.",
    image: "/al-layaan/automatic-glass-doors.webp",
  },
  {
    id: 5,
    title: "Clear Communication",
    description: "Straightforward guidance so every project decision feels simple.",
    image: "/al-layaan/shop-fronts.webp",
  },
  {
    id: 6,
    title: "Reliable Maintenance",
    description: "Ongoing support for windows, doors, screens, and moving hardware.",
    image: "/al-layaan/window-door-maintenance.webp",
  },
];

export default function StickyFeatures() {
  return (
    <section id="features" className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.splitLayout}>
          <div className={styles.textContent}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="section-title text-gradient" style={{ textAlign: "left", margin: 0 }}>Why Choose AL LAYAAN</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className={styles.description}>
                From a single door to a complete commercial fit-out, we bring the same care to every aluminium and glass detail.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.imageContent}>
            <ScrollReveal direction="left" delay={0.2}>
              <Image src="/al-layaan/about-workshop.webp" alt="AL LAYAAN aluminium and glass workshop" width={1536} height={1024} className={styles.mainImage} />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              {features.concat(features).map((feature, index) => (
                <div key={`${feature.id}-${index}`} className={styles.slideCard}>
                  <Image src={feature.image} alt={feature.title} width={1024} height={1536} className={styles.slideImage} />
                  <div className={styles.slideContent}>
                    <h3 className={styles.slideTitle}>{feature.title}</h3>
                    <p className={styles.slideDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./OurClients.module.css";

const projectHighlights = [
  { title: "Contemporary shop fronts", image: "/al-layaan/shop-fronts.webp" },
  { title: "Bright office partitions", image: "/al-layaan/office-partitions.webp" },
  { title: "Modern outdoor structures", image: "/al-layaan/canopies-pergolas.webp" },
  { title: "Glass railings and stairs", image: "/al-layaan/railings.webp" },
  { title: "Aluminium kitchen spaces", image: "/al-layaan/kitchen-cabinets.webp" },
];

export default function OurClients() {
  return (
    <section className="py-20" id="our-clients">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center mb-12">Made for Modern Spaces</h2>
        </ScrollReveal>

        <div className={styles.logoGrid}>
          {projectHighlights.map((project, index) => (
            <ScrollReveal key={project.title} direction="up" delay={0.1 + (index * 0.1)}>
              <div className={styles.logoWrapper}>
                <Image src={project.image} alt={project.title} width={1024} height={1536} className={styles.logoImage} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

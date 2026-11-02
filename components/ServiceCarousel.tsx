"use client";

import React from "react";
import Image from "next/image";
import styles from "./ServiceCarousel.module.css";
import ScrollReveal from "./ScrollReveal";

const allServices = [
  { title: "Shop Fronts", description: "Make a confident first impression with clean, durable aluminium and glass storefronts.", image: "/al-layaan/shop-fronts.webp" },
  { title: "Office Glass Partitions", description: "Bright, flexible workspaces with precise glass partitions and aluminium framing.", image: "/al-layaan/office-partitions.webp" },
  { title: "Automatic Glass Doors", description: "Smooth, accessible entrances designed for commercial spaces and daily traffic.", image: "/al-layaan/automatic-glass-doors.webp" },
  { title: "Mirror Works", description: "Decorative and practical mirror installations tailored to your interior.", image: "/al-layaan/mirror-works.webp" },
  { title: "Shower Glass Partitions", description: "Frameless and framed shower solutions with clean lines and quality hardware.", image: "/al-layaan/shower-partitions.webp" },
  { title: "Canopy & Pergola", description: "Elegant aluminium outdoor structures that add shade, comfort, and character.", image: "/al-layaan/canopies-pergolas.webp" },
  { title: "Balcony & Staircase Railings", description: "Safe, modern glass and aluminium railings that open up every view.", image: "/al-layaan/railings.webp" },
  { title: "Gate & Fencing", description: "Strong, contemporary aluminium gates and fencing made for lasting security.", image: "/al-layaan/gates-fencing.webp" },
  { title: "Fly Mesh Installation", description: "Discreet mesh screens for fresh air, comfort, and everyday protection.", image: "/al-layaan/fly-mesh.webp" },
  { title: "Window & Door Maintenance", description: "All types of window and door maintenance, repairs, seals, and adjustments.", image: "/al-layaan/window-door-maintenance.webp" },
  { title: "Aluminium Kitchen Cabinets", description: "Durable, refined aluminium kitchens with modern storage and glass details.", image: "/al-layaan/kitchen-cabinets.webp" },
];

export default function ServiceCarousel() {
  return (
    <section className="py-20 overflow-hidden bg-white" id="services">
      <div className="container mb-12">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center">Our Aluminium &amp; Glass Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle text-center mx-auto">
            Thoughtful design, precise fabrication, and dependable installation for modern homes and businesses.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {allServices.map((service) => (
            <div key={service.title} className={styles.card}>
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 14vw" className={styles.cardImage} />
              <div className={styles.overlay}>
                <div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

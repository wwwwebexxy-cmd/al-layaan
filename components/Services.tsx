import styles from "./Services.module.css";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const services = [
  { title: "Shop Fronts", image: "/al-layaan/shop-fronts.webp" },
  { title: "Office Glass Partitions", image: "/al-layaan/office-partitions.webp" },
  { title: "Automatic Glass Doors", image: "/al-layaan/automatic-glass-doors.webp" },
  { title: "Mirror Works", image: "/al-layaan/mirror-works.webp" },
  { title: "Shower Glass Partitions", image: "/al-layaan/shower-partitions.webp" },
  { title: "Canopy & Pergola", image: "/al-layaan/canopies-pergolas.webp" },
  { title: "Balcony & Staircase Railings", image: "/al-layaan/railings.webp" },
  { title: "Gate & Fencing", image: "/al-layaan/gates-fencing.webp" },
  { title: "Fly Mesh Installation", image: "/al-layaan/fly-mesh.webp" },
  { title: "Window & Door Maintenance", image: "/al-layaan/window-door-maintenance.webp" },
  { title: "Aluminium Kitchen Cabinets", image: "/al-layaan/kitchen-cabinets.webp" },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient">Our Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle">
            Premium aluminium and glass solutions, carefully made for modern homes and businesses.
          </p>
        </ScrollReveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={0.2 + (index * 0.1)}>
              <div className={styles.card}>
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw" className={styles.cardImage} />
                <div className={styles.overlay}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

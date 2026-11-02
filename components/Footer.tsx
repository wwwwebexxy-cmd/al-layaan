import styles from "./Footer.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/al-layaan-logo-cropped.webp"
              alt="AL LAYAAN Aluminium and Glass"
              width={620}
              height={440}
              className={styles.logoImage}
              sizes="(max-width: 768px) 220px, 280px"
            />
          </div>
          <p className={styles.description}>
            Premium aluminium and glass solutions for homes and businesses, shaped with precision and installed with care.
          </p>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Company</h4>
          <a href="#about" className={styles.link}>About AL LAYAAN</a>
          <a href="#services" className={styles.link}>Our Services</a>
          <a href="#features" className={styles.link}>Why Choose Us</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Explore</h4>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#our-clients" className={styles.link}>Applications</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Connect</h4>
          <div className={styles.socialLinks}>
            <a href="#contact" className={styles.socialIcon} aria-label="Contact AL LAYAAN">
              <FaEnvelope />
            </a>
            <a href="#contact" className={styles.socialIcon} aria-label="Find AL LAYAAN service coverage">
              <FaMapMarkerAlt />
            </a>
            <a href="#contact" className={styles.socialIcon} aria-label="Request a consultation from AL LAYAAN">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} AL LAYAAN Aluminium and Glass. All rights reserved.</p>
      </div>
    </footer>
  );
}

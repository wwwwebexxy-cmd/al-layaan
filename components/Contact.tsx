"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoColumn}>
          <ScrollReveal direction="right" delay={0.1}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaPhoneAlt /></span>
              <span className={styles.infoText}>Request a project consultation</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaEnvelope /></span>
              <span className={styles.infoText}>Share your requirements with our team</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaMapMarkerAlt /></span>
              <span className={styles.infoText}>Serving homes and businesses across the UAE</span>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.mapColumn}>
          <ScrollReveal direction="left" delay={0.2} style={{ width: "100%", height: "100%" }}>
            <iframe
              src="https://www.google.com/maps?q=United+Arab+Emirates&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="AL LAYAAN service area in the United Arab Emirates"
              className={styles.mapIframe}
            ></iframe>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

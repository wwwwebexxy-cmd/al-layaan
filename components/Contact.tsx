"use client";

import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoColumn}>
          <ScrollReveal direction="right" delay={0.1}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaWhatsapp /></span>
              <a
                href="https://wa.me/971504789326"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoText}
                aria-label="Chat with AL LAYAAN on WhatsApp at +971504789326"
              >
                +971504789326
              </a>
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
              <span className={styles.infoText}>Dubai-UAE</span>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.mapColumn}>
          <ScrollReveal direction="left" delay={0.2} style={{ width: "100%", height: "100%" }}>
            <iframe
              src="https://www.google.com/maps?q=Dubai%2C+United+Arab+Emirates&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="AL LAYAAN location in Dubai, United Arab Emirates"
              className={styles.mapIframe}
            ></iframe>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

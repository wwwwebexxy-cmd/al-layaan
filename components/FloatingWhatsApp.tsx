"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="#contact"
      className={styles.floatingBtn}
      aria-label="Request an AL LAYAAN consultation"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}

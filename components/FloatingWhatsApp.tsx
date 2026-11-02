"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971504789326"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat with AL LAYAAN on WhatsApp at +971504789326"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}

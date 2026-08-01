"use client";

import content from "@/data/content.json";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const whatsappNumber = content.company.whatsappNumber;
  const message = "Hello, I'd like to get more information about DS Inventek robotics setups and courses.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className={styles.whatsappIcon} width={26} height={26} />
      <span className={styles.label}>Chat with Us</span>
    </a>
  );
}

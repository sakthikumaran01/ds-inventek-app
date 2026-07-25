"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.css";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = window.setTimeout(() => setIsVisible(true), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <div className={`${styles.wrapper} ${isVisible ? styles.visible : styles.hidden}`}>{children}</div>;
}

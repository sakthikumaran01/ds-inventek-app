"use client";

import { useRef } from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import styles from "./ServicesSlider.module.css";

/**
 * ServicesSlider — desktop renders a 3-col grid; mobile becomes a
 * horizontal scroll slider with prev/next controls (same UX as CourseSlider).
 */
export default function ServicesSlider({ services }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Mobile-only slider controls */}
      <div className={styles.controls}>
        <button
          onClick={() => scroll("left")}
          className={styles.controlBtn}
          aria-label="Previous service"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          onClick={() => scroll("right")}
          className={styles.controlBtn}
          aria-label="Next service"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Desktop: grid layout / Mobile: horizontal scroll */}
      <div className={styles.track} ref={sliderRef}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.slide}>
            <ServiceCard
              id={`service-card-${idx}`}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              badge={service.badge}
              image={service.image}
              imageAlt={service.imageAlt}
              delay={`${idx * 0.1}`}
              slug={service.slug}
              ctaBadge={service.ctaBadge}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

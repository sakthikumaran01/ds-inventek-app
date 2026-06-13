"use client";

import { useRef } from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseSlider.module.css";

export default function CourseSlider({ courses }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Navigation Controls */}
      <div className={styles.controls}>
        <button
          onClick={() => scroll("left")}
          className={styles.controlBtn}
          aria-label="Scroll left"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          onClick={() => scroll("right")}
          className={styles.controlBtn}
          aria-label="Scroll right"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Slider Viewport */}
      <div className={styles.sliderViewport} ref={sliderRef}>
        {courses.map((course, idx) => (
          <div key={course.id || idx} className={styles.slide}>
            <CourseCard
              id={course.id}
              name={course.name}
              level={course.level}
              duration={course.duration}
              price={course.price}
              image={course.image}
              delay={`${idx * 0.05}s`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

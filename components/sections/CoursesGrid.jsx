"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/cards/CourseCard";
import styles from "@/app/courses/courses.module.css";

const SPORTS_FILTER = "Sports Training";
const FILTERS = ["All", "Level 1", "Level 2", "Level 3", SPORTS_FILTER];

export default function CoursesGrid({ courses, showFilter = false, extraItem = null }) {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.coursesGrid} .reveal-item`).forEach((el) => {
        el.classList.add("visible");
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const showExtraItem = (activeFilter === "All" || activeFilter === SPORTS_FILTER) && extraItem;
  const filteredCourses = activeFilter === SPORTS_FILTER
    ? []
    : activeFilter === "All"
    ? courses
    : courses.filter(course => course.level === activeFilter);

  return (
    <div className={styles.gridContainer}>
      {showFilter && (
        <div className={styles.filterBar}>
          {FILTERS.map((level) => (
            <button
              key={level}
              onClick={() => setActiveFilter(level)}
              className={`${styles.filterBtn} ${activeFilter === level ? styles.activeFilter : ""}`}
            >
              {level}
            </button>
          ))}
        </div>
      )}

      <div
        className={`${styles.coursesGrid} ${
          activeFilter === "All" && extraItem ? styles.coursesGridQuad : ""
        }`}
      >
        {filteredCourses.map((course, idx) => (
          <CourseCard
            key={course.id || idx}
            id={course.id}
            name={course.name}
            level={course.level}
            duration={course.duration}
            price={course.price}
            image={course.image}
            imageAlt={course.imageAlt}
            delay={`${(idx % 3) * 0.1}s`}
          />
        ))}
        {/* Not a leveled course — shown with the full, unfiltered list,
            or alone when the Sports Training filter is active. */}
        {showExtraItem}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/cards/CourseCard";
import styles from "@/app/courses/courses.module.css";

export default function CoursesGrid({ courses, showFilter = false }) {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.coursesGrid} .reveal-item`).forEach((el) => {
        el.classList.add("visible");
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredCourses = activeFilter === "All"
    ? courses
    : courses.filter(course => course.level === activeFilter);

  return (
    <div className={styles.gridContainer}>
      {showFilter && (
        <div className={styles.filterBar}>
          {["All", "Level 1", "Level 2", "Level 3"].map((level) => (
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

      <div className={styles.coursesGrid}>
        {filteredCourses.map((course, idx) => (
          <CourseCard
            key={course.id || idx}
            id={course.id}
            name={course.name}
            level={course.level}
            duration={course.duration}
            price={course.price}
            image={course.image}
            delay={`${(idx % 3) * 0.1}s`}
          />
        ))}
      </div>
    </div>
  );
}

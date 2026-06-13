"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import styles from "@/app/courses/courses.module.css";

export default function CoursesGrid({ courses }) {
  const [expandedCourse, setExpandedCourse] = useState(null);

  return (
    <div className={styles.coursesGrid}>
      {courses.map((course, idx) => (
        <CourseCard
          key={idx}
          id={course.id}
          name={course.name}
          level={course.level}
          duration={course.duration}
          price={course.price}
          image={course.image}
          desc={course.desc}
          modules={course.modules}
          enrollUrl={course.enrollUrl}
          delay={`${(idx % 3) * 0.1}s`}
          onClick={() => setExpandedCourse(expandedCourse === idx ? null : idx)}
          isExpanded={expandedCourse === idx}
        />
      ))}
    </div>
  );
}

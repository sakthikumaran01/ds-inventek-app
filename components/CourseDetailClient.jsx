"use client";

import { useState } from "react";
import EnrollmentModal from "./EnrollmentModal";

export default function CourseDetailClient({ courseName }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button 
        className="btn-primary" 
        onClick={() => setModalOpen(true)}
        style={{ fontSize: "1.05rem", padding: "0.9rem 2.25rem", border: "none", cursor: "pointer" }}
      >
        Enroll Now →
      </button>

      <EnrollmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        course={{ name: courseName }}
      />
    </>
  );
}

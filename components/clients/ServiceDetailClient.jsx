"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const QuotationModal = dynamic(() => import("@/components/modals/QuotationModal"), {
  ssr: false,
});

export default function ServiceDetailClient({ serviceName }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button 
        className="btn-primary" 
        onClick={() => setModalOpen(true)}
        style={{ fontSize: "1.05rem", padding: "0.9rem 2.25rem" }}
      >
        Get a Quotation →
      </button>

      <QuotationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedService={serviceName}
      />
    </>
  );
}

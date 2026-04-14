"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve in Tamil Nadu?",
    answer: "We primarily serve the Erode and Salem districts, but we are fully equipped to handle major projects across all of Tamil Nadu for long-term contracts and industrial relocations."
  },
  {
    question: "Do you provide 24/7 operator support?",
    answer: "Yes, SPA Crane Service operates 24/7 for emergency lifting and critical industrial operations. Our certified operators are always ready for round-the-clock shift work."
  },
  {
    question: "What is your safety certification process?",
    answer: "Safety is our core value. Every crane in our fleet undergoes quarterly third-party inspections and daily on-site checks. Our operators are TPI certified and undergo regular safety training."
  },
  {
    question: "How do I get a quote for my project?",
    answer: "You can use our 'Get a Quote' form on the website, or call us directly at +91 97872 96480. We typically provide a preliminary estimate within 4 business hours."
  },
  {
    question: "What is the minimum rental period?",
    answer: "We offer flexible rental terms ranging from a single shift (8 hours) for small mobile crane tasks to multi-year contracts for large-scale infrastructure projects."
  },
  {
    question: "Are your cranes insured?",
    answer: "Absolutely. All our equipment is fully insured for public liability and damage. We also assist clients in verifying on-site insurance requirements before starting any lift."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div style={{ 
      borderBottom: "1px solid rgba(255,255,255,0.08)", 
      overflow: "hidden" 
    }}>
      <button 
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 0",
          background: "none",
          border: "none",
          color: "#f8fafc",
          textAlign: "left",
          cursor: "pointer",
          fontSize: "1.2rem",
          fontWeight: "600",
          outline: "none"
        }}
      >
        <span style={{ flex: 1, paddingRight: "2rem" }}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: "var(--primary, #facc15)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{ 
              color: "var(--text-muted, #94a3b8)", 
              fontSize: "1.05rem", 
              lineHeight: 1.8, 
              paddingBottom: "2.5rem",
              maxWidth: "800px"
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main style={{ minHeight: "100vh", background: "#020617", paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Header Section */}
      <section style={{ padding: "0 10%", marginBottom: "6rem", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: "30px", border: "1px solid rgba(250, 204, 21, 0.3)", background: "rgba(250, 204, 21, 0.05)", color: "var(--primary, #facc15)", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "2px", marginBottom: "1.5rem" }}>
            SUPPORT & GUIDELINES
          </div>
          <h1 className="orbitron" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f8fafc", marginBottom: "1.5rem", lineHeight: 1.1 }}>
            Have <span style={{ color: "var(--primary, #facc15)" }}>Questions?</span>
          </h1>
          <p style={{ color: "var(--text-muted, #94a3b8)", maxWidth: "700px", margin: "0 auto", fontSize: "1.15rem", lineHeight: 1.7 }}>
            Find answers to commonly asked questions about our services, safety protocols, and booking process.
          </p>
        </motion.div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ padding: "0 10%", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ 
          background: "rgba(15, 23, 42, 0.4)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: "1rem 3rem"
        }}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "0 10%", marginTop: "8rem", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            padding: "4rem 2rem",
            background: "radial-gradient(circle at center, rgba(250, 204, 21, 0.05) 0%, transparent 70%)"
          }}
        >
          <h2 style={{ fontSize: "2rem", color: "#f8fafc", marginBottom: "1.5rem" }}>Still have questions?</h2>
          <p style={{ color: "var(--text-muted, #94a3b8)", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Our team is available 24/7 to discuss your project requirements in detail.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+919787296480" style={{ 
              background: "var(--primary, #facc15)", color: "#020617", 
              fontWeight: "800", padding: "16px 32px", borderRadius: "10px",
              textDecoration: "none"
            }}>
              Contact Us Now
            </a>
            <a href="/contact" style={{ 
              color: "#f8fafc", border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: "600", padding: "16px 32px", borderRadius: "10px",
              textDecoration: "none"
            }}>
              Get a Free Quote
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

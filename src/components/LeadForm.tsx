"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitLead } from "../app/actions/submitLead";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    
    // Ready for Google Sheets integration in your server action
    try {
      const response = await submitLead(formData);
      setStatus(response.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  // Premium Metallic & Glass input styling
  const inputStyle: React.CSSProperties = {
    width: "100%", 
    padding: "14px 16px", 
    borderRadius: "8px",
    background: "rgba(15, 23, 42, 0.6)", 
    border: "1px solid rgba(148, 163, 184, 0.3)", // Subtle silver/metallic border
    color: "#f8fafc", 
    outline: "none", 
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)"
  };

  return (
    <section id="lead-form" style={{ padding: "100px 5%", position: "relative", zIndex: 10, background: "#020617" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ 
          maxWidth: "650px", 
          margin: "0 auto", 
          padding: "3.5rem", 
          borderRadius: "16px",
          background: "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9))",
          border: "1px solid rgba(192, 192, 192, 0.15)", // Metallic silver outer border
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(192, 192, 192, 0.05)",
          backdropFilter: "blur(20px)"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", marginBottom: "0.5rem", color: "#f8fafc", fontWeight: 800 }}>
            Request a <span style={{ color: "var(--primary, #facc15)" }}>Quote</span>
          </h2>
          <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "1.05rem" }}>
            Fill out the details below for a precise estimate.
          </p>
        </div>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ padding: "2.5rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.3)", textAlign: "center", color: "#10b981" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: "0 auto 1rem" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", fontWeight: "bold" }}>Request Sent Successfully!</h3>
            <p style={{ color: "#d1fae5" }}>Thank you. Our dispatch team will reach out to you shortly.</p>
          </motion.div>
        ) : (
          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleSubmit}>
            
            {/* Grid for Name and Phone to sit side-by-side on larger screens */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label htmlFor="name" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#cbd5e1" }}>Full Name *</label>
                <input required type="text" id="name" name="name" placeholder="John Doe" style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary, #facc15)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)"} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label htmlFor="phone" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#cbd5e1" }}>Phone Number *</label>
                <input required type="tel" id="phone" name="phone" placeholder="+91 00000 00000" style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary, #facc15)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)"} />
              </div>
            </div>

            {/* Email Field */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <label htmlFor="email" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#cbd5e1" }}>Email Address *</label>
              <input required type="email" id="email" name="email" placeholder="john@company.com" style={inputStyle}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary, #facc15)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)"} />
            </div>

            {/* Grid for Services and Requirement Type */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label htmlFor="service" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#cbd5e1" }}>Equipment Needed *</label>
                <select required id="service" name="service" defaultValue="" style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary, #facc15)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)"}>
                  <option value="" disabled style={{ color: "black" }}>Select Equipment...</option>
                  <option value="mobile-crane" style={{ color: "black" }}>Mobile Crane</option>
                  <option value="tower-crane" style={{ color: "black" }}>Tower Crane</option>
                  <option value="industrial-lifting" style={{ color: "black" }}>Heavy Lifting Gear</option>
                  <option value="other" style={{ color: "black" }}>Other / Unsure</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label htmlFor="duration" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#cbd5e1" }}>Requirement Type *</label>
                <select required id="duration" name="duration" defaultValue="" style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary, #facc15)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)"}>
                  <option value="" disabled style={{ color: "black" }}>Select Duration...</option>
                  <option value="contract" style={{ color: "black" }}>Long-term Contract</option>
                  <option value="one-day" style={{ color: "black" }}>One Day Lift</option>
                  <option value="other" style={{ color: "black" }}>Other</option>
                </select>
              </div>
            </div>

            {/* Location Field */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <label htmlFor="location" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#cbd5e1" }}>Project Location *</label>
              <input required type="text" id="location" name="location" placeholder="e.g. Erode Central, Salem IT Park" style={inputStyle}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary, #facc15)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)"} />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === "submitting"} 
              style={{ 
                marginTop: "1.5rem",
                padding: "16px",
                background: status === "submitting" ? "#94a3b8" : "var(--primary, #facc15)",
                color: "#020617",
                fontWeight: 800,
                fontSize: "1.1rem",
                borderRadius: "8px",
                border: "none",
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(250, 204, 21, 0.3)",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
              onMouseOver={(e) => { if (status !== "submitting") e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={(e) => { if (status !== "submitting") e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {status === "submitting" ? "Sending Details..." : "Get Your Quote"}
            </button>

            {status === "error" && (
              <p style={{ color: "#ef4444", fontSize: "0.95rem", textAlign: "center", marginTop: "0.5rem" }}>
                Connection error. Please try again or call us directly.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}
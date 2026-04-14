"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  // Data for the new Expertise Cards
  const expertise = [
    {
      title: "Architectural Erecting",
      desc: "Precision lifting for complex structural steel, precast concrete, and delicate architectural frameworks.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5a2 2 0 012-2h2a2 2 0 012-2v5" />
        </svg>
      )
    },
    {
      title: "Industrial Relocation",
      desc: "Safe, heavily coordinated dismantling and moving of factory machinery and heavy plant equipment.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    },
    {
      title: "Infrastructure Works",
      desc: "Heavy duty support for bridge construction, metro developments, and large-scale public logistics.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      )
    },
    {
      title: "Emergency Recovery",
      desc: "24/7 rapid response fleet for accident recovery, roadside assistance, and urgent lifting requirements.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" style={{ padding: "100px 5%", position: "relative", zIndex: 10 }}>
      {/* Top Section: The Story & Experience */}
      <div className="about-grid" style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "4rem",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        marginBottom: "6rem" // Added space before cards
      }}>
        {/* Left: Image / Graphic */}
        <motion.div
          className="about-img-container"
          style={{ flex: "1 1 400px" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            position: "relative", width: "100%", aspectRatio: "4/3",
            background: "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(2,6,23,0.9))",
            borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
          }}>
            {/* Background decorative text */}
            <h1 className="orbitron" style={{
              fontSize: "clamp(3rem, 10vw, 5rem)",
              color: "rgba(255,255,255,0.03)",
              position: "absolute",
              transform: "rotate(-35deg) scale(1.2)",
              whiteSpace: "nowrap",
              userSelect: "none"
            }}>EST. 2010</h1>
            
            <div style={{ textAlign: "center", zIndex: 2 }}>
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary, #facc15)" strokeWidth="1.2" style={{ marginBottom: "1rem" }}>
                 <path d="M2 22h20M12 2L2 22h20L12 2zM12 8v8" />
               </svg>
               <h3 className="orbitron" style={{ color: "#fff", letterSpacing: "2px" }}>SPA CRANES</h3>
            </div>
          </div>
        </motion.div>

        {/* Right: Text & Experience Details */}
        <motion.div
          className="about-text-container"
          style={{ flex: "1 1 500px" }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="orbitron" style={{ color: "var(--primary, #facc15)", fontWeight: "bold", letterSpacing: "1px", marginBottom: "0.5rem" }}>
            ABOUT THE COMPANY
          </p>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", marginBottom: "1.5rem", color: "#f8fafc", lineHeight: 1.1 }}>
            The Arigarasudhan Standard
          </h2>
          <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
            Based in the industrial heart of Erode and Salem, SPA Crane Service is the region's preferred choice for heavy logistics. Founded and led by <strong>Arigarasudhan</strong>, a distinguished expert with over a decade of hands-on experience in heavy lifting, we ensure that every project in Tamil Nadu is executed flawlessly.
          </p>
          <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            From delicate architectural components to massive industrial machinery, our commitment to reliability, rigorous safety protocols, and modern fleet maintenance makes us the premier partner for top contractors.
          </p>

          {/* Experience Metrics Block */}
          <div style={{ 
            display: "flex", gap: "2rem", marginBottom: "2rem", 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            borderBottom: "1px solid rgba(255,255,255,0.1)", 
            padding: "1.5rem 0" 
          }}>
            <div>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>10<span style={{ color: "var(--primary, #facc15)" }}>+</span></div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted, #94a3b8)", textTransform: "uppercase", letterSpacing: "1px" }}>Years Exp.</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}></div>
            <div>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>100<span style={{ color: "var(--primary, #facc15)" }}>%</span></div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted, #94a3b8)", textTransform: "uppercase", letterSpacing: "1px" }}>Safety Record</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}></div>
            <div>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>24<span style={{ color: "var(--primary, #facc15)" }}>/7</span></div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted, #94a3b8)", textTransform: "uppercase", letterSpacing: "1px" }}>Availability</div>
            </div>
          </div>

          <div className="about-cta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>
            <a href="tel:+919787296480" style={{ 
              background: "var(--primary, #facc15)", color: "#020617", 
              fontWeight: "800", padding: "14px 28px", borderRadius: "8px",
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 4px 14px rgba(250, 204, 21, 0.2)"
            }}>
              CALL US: +91 97872 96480
            </a>
            <a href="mailto:spacraneservice.tn@gmail.com" style={{ 
              color: "#fff", 
              fontWeight: "600", 
              textDecoration: "none",
              borderBottom: "1px solid var(--primary, #facc15)"
            }}>
              spacraneservice.tn@gmail.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Expertise Cards */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "#f8fafc" }}>Specialized <span style={{ color: "var(--primary, #facc15)" }}>Expertise</span></h2>
          <p style={{ color: "var(--text-muted, #94a3b8)", marginTop: "0.5rem" }}>Engineered solutions for every lifting scenario.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: "var(--primary, #facc15)", backgroundColor: "rgba(255,255,255,0.05)" }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "2rem",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
                cursor: "default"
              }}
            >
              <div style={{ 
                background: "rgba(250, 204, 21, 0.1)", 
                width: "60px", height: "60px", 
                borderRadius: "12px", 
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--primary, #facc15)",
                marginBottom: "1.5rem"
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#f8fafc", marginBottom: "1rem" }}>{item.title}</h3>
              <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
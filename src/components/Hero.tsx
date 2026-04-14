"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Framer motion variants for smooth, staggered reveals
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each element appearing
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth cubic-bezier ease
    }, 
  };

  return (
    <section 
      className="hero-section" 
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10%",
        position: "relative",
        zIndex: 10,
        overflow: "hidden" // Keeps background elements contained
      }}
    >
      {/* Subtle background glow for a premium feel */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)",
          zIndex: -1,
          borderRadius: "50%",
          filter: "blur(80px)"
        }} 
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: "800px" }}
      >
        {/* Subtitle / Location */}
        <motion.p 
          variants={itemVariants}
          className="orbitron" 
          style={{ 
            color: "var(--primary, #facc15)", 
            fontSize: "0.9rem", 
            letterSpacing: "3px", 
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <span style={{ width: "40px", height: "2px", background: "var(--primary, #facc15)", display: "inline-block" }} />
          Serving Tamil Nadu: Erode & Salem
        </motion.p>

        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="hero-title" 
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)", // Slightly larger clamp for desktop impact
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1px"
          }}
        >
          HEAVY LIFTING <br />
          <span 
            style={{ 
              color: "var(--primary, #facc15)", 
              WebkitTextFillColor: "var(--primary, #facc15)",
              textShadow: "0 0 40px rgba(250, 204, 21, 0.3)" // Adds a premium subtle glow
            }}
          >
            MADE SIMPLE.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="hero-p" 
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)", // Responsive text sizing
            color: "var(--text-muted, #94a3b8)",
            marginBottom: "3rem",
            maxWidth: "600px",
            lineHeight: 1.7
          }}
        >
          Premium crane services and lifting solutions by Arigarasudhan.
          We bring power, precision, and safety to every project.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="btn-container" 
          style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="btn-primary hero-btn" 
              style={{
                background: "var(--primary, #facc15)",
                color: "#020617",
                padding: "16px 32px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(250, 204, 21, 0.25)",
                cursor: "pointer"
              }}
            >
              Get a Quote Today
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/services"
              className="hero-btn"
              style={{
                background: "transparent", 
                color: "var(--text-light, #f8fafc)",
                padding: "16px 32px", 
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px", 
                fontWeight: 600, 
                fontSize: "1rem", 
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                transition: "background-color 0.3s ease"
              }}
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
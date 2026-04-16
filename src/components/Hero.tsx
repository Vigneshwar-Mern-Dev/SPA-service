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
          className="orbitron hero-subtitle-text" 
        >
          <span style={{ width: "40px", height: "2px", background: "var(--primary, #facc15)", display: "inline-block" }} />
          Serving Tamil Nadu: Erode & Salem
        </motion.p>

        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="orbitron hero-title-text hero-title" 
        >
          HEAVY LIFTING <br />
          <span className="hero-glow-text">
            MADE SIMPLE.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="hero-p hero-desc-text" 
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
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Get a Quote Today
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/services"
              className="btn-secondary hero-btn"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
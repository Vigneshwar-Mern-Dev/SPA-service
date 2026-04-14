import CinematicBackground from "@/components/CinematicBackground";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Cinematic Background */}
      <CinematicBackground />

      {/* Main Landing View */}
      <Hero />

      {/* Caseios-style Home Page Segments (Teasers) */}
      <section style={{ 
        position: "relative", 
        zIndex: 10, 
        padding: "100px 10%", 
        background: "linear-gradient(to bottom, transparent, #020617)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--primary)" }}>
          EXCELLENCE IN EVERY LIFT
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "700px", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
          From Erode to Salem, we are the trusted partner for heavy industrial lifting. 
          Our modern fleet and expert operators ensure your project is completed safely and on time.
        </p>
        
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/about" style={{
             padding: "20px 40px",
             border: "1px solid var(--glass-border)",
             borderRadius: "12px",
             color: "#fff",
             textDecoration: "none",
             background: "rgba(255,255,255,0.02)",
             backdropFilter: "blur(10px)",
             transition: "all 0.3s"
          }}>
            <h3 style={{ marginBottom: "10px" }}>Learn Our Story</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Meet Arigarasudhan & the team</p>
          </Link>

          <Link href="/services" style={{
             padding: "20px 40px",
             border: "1px solid var(--glass-border)",
             borderRadius: "12px",
             color: "#fff",
             textDecoration: "none",
             background: "rgba(255,255,255,0.02)",
             backdropFilter: "blur(10px)",
             transition: "all 0.3s"
          }}>
            <h3 style={{ marginBottom: "10px" }}>View Equipment</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Explore our specialized fleet</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

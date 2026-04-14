"use client";

import { motion } from "framer-motion";

// Upgraded services list with professional SVGs instead of emojis
const servicesList = [
  {
    title: "Mobile Crane Rental",
    desc: "Versatile and agile cranes capable of navigating tight spaces to lift heavy loads right on site.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="12" width="20" height="8" rx="2" />
        <path d="M6 12V8a2 2 0 012-2h8a2 2 0 012 2v4M12 2v4M8 22v-2M16 22v-2" />
      </svg>
    )
  },
  {
    title: "Tower Crane Assembly",
    desc: "For high-rise constructions, our tower cranes provide unparalleled height and lifting capacity.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M8 22h8M10 2h4M9 6h6M8 10h8M7 14h10M6 18h12" />
      </svg>
    )
  },
  {
    title: "Industrial Lifting",
    desc: "Specialized lifting solutions for industrial machinery, bridge components, and massive infrastructure.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22v-9M12 13l-4-4m4 4l4-4M4 9h16M4 5h16M4 9v13h16V9" />
      </svg>
    )
  },
  {
    title: "Rigging & Planning",
    desc: "Comprehensive lift planning and precision rigging by experienced logistics professionals.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    )
  }
];

// Array of 12 projects to create exactly 4 rows of 3 cards
const projectsList = [
  { id: 1, title: "Steel Bridge Erection", location: "Salem Highway, TN", image: "/project-1.jpg" },
  { id: 2, title: "Textile Mill Relocation", location: "Erode Industrial Estate", image: "/project-2.jpg" },
  { id: 3, title: "Metro Pillar Placement", location: "Coimbatore City", image: "/project-3.jpg" },
  { id: 4, title: "Windmill Turbine Assembly", location: "Tiruppur District", image: "/project-4.jpg" },
  { id: 5, title: "Precast Concrete Lifting", location: "Salem IT Park", image: "/project-5.jpg" },
  { id: 6, title: "Boiler Plant Installation", location: "Bhavani, Erode", image: "/project-6.jpg" },
  { id: 7, title: "Commercial Complex Setup", location: "Salem Center", image: "/project-7.jpg" },
  { id: 8, title: "Heavy Generator Moving", location: "Perundurai SIPCOT", image: "/project-8.jpg" },
  { id: 9, title: "Factory Roof Trussing", location: "Namakkal Bypass", image: "/project-9.jpg" },
  { id: 10, title: "Emergency Accident Recovery", location: "NH-44 Highway", image: "/project-10.jpg" },
  { id: 11, title: "Water Tank Hoisting", location: "Erode Suburbs", image: "/project-11.jpg" },
  { id: 12, title: "Railway Track Logistics", location: "Salem Junction", image: "/project-12.jpg" }
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 5%", position: "relative", zIndex: 10, background: "#020617", overflow: "hidden" }}>
      
      {/* 1. INNOVATIVE CENTER HEADER */}
      <div style={{ textAlign: "center", marginBottom: "5rem", position: "relative" }}>
        {/* Subtle background glow behind the text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "300px", height: "300px", background: "rgba(250, 204, 21, 0.15)",
          filter: "blur(100px)", zIndex: -1, borderRadius: "50%"
        }} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            display: "inline-block", padding: "8px 16px", borderRadius: "30px",
            border: "1px solid rgba(250, 204, 21, 0.3)", background: "rgba(250, 204, 21, 0.05)",
            color: "var(--primary, #facc15)", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "2px",
            marginBottom: "1.5rem"
          }}
        >
          ENGINEERING THE IMPOSSIBLE
        </motion.div>
        
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f8fafc", marginBottom: "1.5rem", lineHeight: 1.1 }}>
          Precision in <span style={{ color: "var(--primary, #facc15)" }}>Every Lift.</span>
        </h2>
        <p style={{ color: "var(--text-muted, #94a3b8)", maxWidth: "650px", margin: "0 auto", fontSize: "1.15rem", lineHeight: 1.7 }}>
          From massive industrial relocations to delicate architectural assemblies, SPA Cranes brings world-class lifting technology and expertise to your site.
        </p>
      </div>

      {/* 2. PREMIUM SERVICES (1 ROW) */}
      <div style={{
        display: "grid",
        /* Using auto-fit with a min-width of 240px ensures they naturally form 4 columns on desktop, but stack on phones */
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "2rem",
        maxWidth: "1300px",
        margin: "0 auto",
        marginBottom: "8rem" // Large gap before the next section
      }}>
        {servicesList.map((svc, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, borderColor: "rgba(250, 204, 21, 0.4)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ 
              padding: "2.5rem 2rem", 
              background: "rgba(15, 23, 42, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              display: "flex", flexDirection: "column", gap: "1.2rem",
              backdropFilter: "blur(12px)",
              transition: "all 0.3s ease"
            }}
          >
            <div style={{ color: "var(--primary, #facc15)", background: "rgba(250, 204, 21, 0.1)", width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px" }}>
              {svc.icon}
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "#f8fafc", fontWeight: "600" }}>{svc.title}</h3>
            <p style={{ color: "var(--text-muted, #94a3b8)", lineHeight: 1.6, fontSize: "0.95rem" }}>{svc.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* --- DIVIDER --- */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", margin: "0 auto 6rem" }} />

      {/* 3. OUR PROJECTS / WORKS (4 Rows, 3 Cards Per Row) */}
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f8fafc", marginBottom: "1rem" }}>
            Featured <span style={{ color: "var(--primary, #facc15)" }}>Projects</span>
          </h2>
          <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "1.1rem" }}>A showcase of our recent lifting operations across Tamil Nadu.</p>
        </div>

        <div style={{
          display: "grid",
          /* minmax(320px, 1fr) ensures exactly 3 columns on standard desktops */
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem"
        }}>
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover="hover"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >
              {/* Image Container with Hover Zoom */}
              <div style={{ width: "100%", height: "240px", overflow: "hidden", position: "relative", background: "#1e293b" }}>
                <motion.div
                  variants={{
                    hover: { scale: 1.08 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    width: "100%", height: "100%",
                    /* NOTE: Replace this backgroundImage with actual <img src={project.image} /> or Next.js <Image /> once you have the files */
                    background: `linear-gradient(45deg, rgba(20,20,20,0.8), rgba(40,40,40,0.2)), url('https://images.unsplash.com/photo-1541888086925-0c13bb104753?q=80&w=600&auto=format&fit=crop')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
              </div>

              {/* Card Content */}
              <div style={{ padding: "1.5rem" }}>
                <h4 style={{ fontSize: "1.25rem", color: "#f8fafc", marginBottom: "0.5rem", fontWeight: "600" }}>
                  {project.title}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--primary, #facc15)", fontSize: "0.9rem", fontWeight: "500" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More Button (Optional styling) */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <button style={{
            background: "transparent", color: "#f8fafc",
            border: "1px solid rgba(250, 204, 21, 0.5)",
            padding: "12px 32px", borderRadius: "8px",
            fontSize: "1rem", fontWeight: "600", cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = "var(--primary, #facc15)"; e.currentTarget.style.color = "#000"; }}
          onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f8fafc"; }}
          >
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
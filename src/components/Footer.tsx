"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      padding: "80px 5% 30px", 
      background: "#020617",
      borderTop: "1px solid rgba(192, 192, 192, 0.15)", // Subtle metallic silver border
      boxShadow: "inset 0 10px 30px -10px rgba(0,0,0,0.5)",
      position: "relative",
      zIndex: 10
    }}>
      <div className="footer-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "4rem",
        marginBottom: "60px",
        maxWidth: "1300px",
        margin: "0 auto 60px"
      }}>
        
        {/* Column 1: Brand */}
        <div>
          <div className="orbitron" style={{ 
            fontSize: "1.8rem", 
            fontWeight: "800", 
            color: "var(--primary, #facc15)", 
            marginBottom: "1rem", 
            letterSpacing: "1px",
            textShadow: "0 0 20px rgba(250, 204, 21, 0.2)"
          }}>
            SPA CRANES
          </div>
          <p style={{ color: "var(--text-muted, #94a3b8)", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}>
            Premium lifting solutions and specialized crane services led by Arigarasudhan. Excellence across Tamil Nadu.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{ fontSize: "1.25rem", marginBottom: "1.5rem", color: "#f8fafc", fontWeight: "600" }}>Quick Links</h4>
          <ul className="footer-links" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {["Home", "About Us", "Our Services", "Blog", "FAQ", "Get a Quote"].map((item) => (
              <li key={item}>
                <Link 
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  style={{ 
                    color: "var(--text-muted, #94a3b8)", 
                    textDecoration: "none", 
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-block"
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = "var(--primary, #facc15)"; e.currentTarget.style.transform = "translateX(5px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = "var(--text-muted, #94a3b8)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Expertise */}
        <div>
          <h4 style={{ fontSize: "1.25rem", marginBottom: "1.5rem", color: "#f8fafc", fontWeight: "600" }}>Our Expertise</h4>
          <ul className="footer-links" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {["Mobile Crane Rental", "Tower Crane Solutions", "Industrial Heavy Lifting", "Precision Rigging"].map((item) => (
              <li key={item} style={{ color: "var(--text-muted, #94a3b8)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--primary, #facc15)", fontSize: "1.2rem" }}>›</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Information & Head Office */}
        <div>
          <h4 style={{ fontSize: "1.25rem", marginBottom: "1.5rem", color: "#f8fafc", fontWeight: "600" }}>Contact Us</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Phone with Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ 
                background: "rgba(250, 204, 21, 0.1)", 
                padding: "10px", 
                borderRadius: "10px", 
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(250, 204, 21, 0.2)"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary, #facc15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted, #94a3b8)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>24/7 Dispatch</div>
                <a href="tel:+919787296480" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "1.15rem", fontWeight: "bold", transition: "color 0.2s ease" }}
                   onMouseOver={(e) => e.currentTarget.style.color = "var(--primary, #facc15)"}
                   onMouseOut={(e) => e.currentTarget.style.color = "#f8fafc"}>
                  +91 97872 96480
                </a>
              </div>
            </div>

            {/* Email with Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ 
                background: "rgba(255, 255, 255, 0.05)", 
                border: "1px solid rgba(192, 192, 192, 0.2)", // Metallic border
                padding: "10px", 
                borderRadius: "10px", 
                display: "flex", alignItems: "center", justifyContent: "center" 
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted, #94a3b8)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>Email Support</div>
                <a href="mailto:spacraneservice.tn@gmail.com" style={{ color: "var(--text-muted, #94a3b8)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s ease" }}
                   onMouseOver={(e) => e.currentTarget.style.color = "#f8fafc"}
                   onMouseOut={(e) => e.currentTarget.style.color = "var(--text-muted, #94a3b8)"}>
                  spacraneservice.tn@gmail.com
                </a>
              </div>
            </div>

            {/* Head Office */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginTop: "4px" }}>
              <div style={{ 
                background: "rgba(255, 255, 255, 0.05)", 
                border: "1px solid rgba(192, 192, 192, 0.2)", // Metallic border
                padding: "10px", 
                borderRadius: "10px", 
                display: "flex", alignItems: "center", justifyContent: "center" 
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted, #94a3b8)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Head Office</div>
                <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>
                  <strong style={{ color: "var(--text-light, #e2e8f0)", fontWeight: "500" }}>SPA Crane Service</strong><br />
                  Industrial Estate,<br />
                  Erode, Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar - Fixed Layout */}
      <div style={{ 
        textAlign: "center", 
        borderTop: "1px solid rgba(192, 192, 192, 0.15)", // Metallic silver border
        paddingTop: "30px",
        maxWidth: "1300px",
        margin: "0 auto"
      }}>
        <p style={{ 
          color: "var(--text-muted, #94a3b8)", 
          fontSize: "0.9rem", 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          alignItems: "center",
          gap: "12px",
          margin: 0
        }}>
          <span>© {new Date().getFullYear()} SPA Crane Service. All Rights Reserved by <strong style={{color: "#e2e8f0"}}>Sriya A</strong>.</span>
          <span style={{ opacity: 0.3, color: "#cbd5e1" }}>|</span>
          <span>Designed by <strong style={{color: "#e2e8f0"}}>Daddy's Home Solution Private Limited</strong></span>
          <span style={{ opacity: 0.3, color: "#cbd5e1" }}>|</span>
          <span>Developed by <strong style={{color: "#e2e8f0"}}>Vigneshwar S</strong></span>
        </p>
      </div>
    </footer>
  );
}
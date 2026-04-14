"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Heavy Lifting: Automation and AI",
    category: "Technology",
    excerpt: "Discover how AI-driven load calculations are revolutionizing site safety and efficiency in crane operations.",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1541888086925-0c13bb104753?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Safely Navigating Tight Construction Sites",
    category: "Safety",
    excerpt: "A guide on selecting the right mobile cranes for urban environments where space is at a premium.",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1510103588494-0683a6888496?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "SPA Cranes: 10 Years of Excellence in Tamil Nadu",
    category: "Company News",
    excerpt: "Reflecting on our journey from a single crane to the region's preferred heavy lifting partner.",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1545459720-aac273a27b4d?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Header Section */}
      <section style={{ padding: "0 10%", marginBottom: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: "30px", border: "1px solid rgba(250, 204, 21, 0.3)", background: "rgba(250, 204, 21, 0.05)", color: "var(--primary, #facc15)", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "2px", marginBottom: "1.5rem" }}>
            LATEST INSIGHTS
          </div>
          <h1 className="orbitron" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f8fafc", marginBottom: "1.5rem", lineHeight: 1.1 }}>
            Industry <span style={{ color: "var(--primary, #facc15)" }}>Knowledge Hub.</span>
          </h1>
          <p style={{ color: "var(--text-muted, #94a3b8)", maxWidth: "600px", fontSize: "1.1rem", lineHeight: 1.7 }}>
            Exploring the intersection of engineering excellence, safety, and modern infrastructure development across Tamil Nadu.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: "0 10%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          maxWidth: "1400px"
        }}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "20px",
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <div style={{ position: "absolute", top: "20px", left: "20px", background: "var(--primary, #facc15)", color: "#020617", padding: "4px 12px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase" }}>
                  {post.category}
                </div>
              </div>
              <div style={{ padding: "2rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ color: "var(--text-muted, #94a3b8)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>{post.date}</div>
                <h3 style={{ fontSize: "1.3rem", color: "#f8fafc", marginBottom: "1rem", lineHeight: 1.4, fontWeight: "600" }}>{post.title}</h3>
                <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>{post.excerpt}</p>
                <div style={{ marginTop: "auto" }}>
                  <Link href={`/blog/${post.id}`} style={{ color: "var(--primary, #facc15)", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Read Full Story
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Coming Soon / Subscribe */}
      <section style={{ padding: "0 10%", marginTop: "8rem", textAlign: "center" }}>
        <div style={{ 
          background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          padding: "4rem 2rem",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255,0.05)"
        }}>
          <h2 className="orbitron" style={{ fontSize: "2rem", color: "#f8fafc", marginBottom: "1rem" }}>Stay Informed</h2>
          <p style={{ color: "var(--text-muted, #94a3b8)", marginBottom: "2rem" }}>Get the latest industry news and safety updates delivered to your inbox.</p>
          <div style={{ display: "flex", gap: "12px", maxWidth: "450px", margin: "0 auto", flexWrap: "wrap" }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: "10px",
                flexGrow: 1,
                outline: "none"
              }}
            />
            <button style={{
              background: "var(--primary, #facc15)",
              color: "#020617",
              border: "none",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Join Newsletter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

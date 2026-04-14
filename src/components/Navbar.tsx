"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: scrolled ? "12px 5%" : "24px 5%",
          background: scrolled ? "rgba(2, 6, 23, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand & Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            {/* Make sure to add a logo.png to your public folder */}
            <Image
              src="/logo.png"
              alt="SPA Cranes Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <div
              className="orbitron"
              style={{
                fontSize: "1.4rem",
                fontWeight: "800",
                color: "var(--primary, #facc15)",
                letterSpacing: "1px",
              }}
            >
              SPA CRANES
            </div>
          </div>
        </Link>

        {/* Desktop Links — hidden on mobile via globals.css */}
        <div
          className="nav-links"
          style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
        >
          {["Home", "About", "Services"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                color: "var(--text-light, #e2e8f0)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: "500",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary, #facc15)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-light, #e2e8f0)")}
            >
              {item}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div 
            style={{ position: "relative" }}
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <div
              style={{
                color: "var(--text-light, #e2e8f0)",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary, #facc15)")}
              onMouseOut={(e) => (e.currentTarget.style.color = isResourcesOpen ? "var(--primary, #facc15)" : "var(--text-light, #e2e8f0)")}
            >
              Resources
              <svg 
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" 
                style={{ transform: isResourcesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    minWidth: "160px",
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "10px",
                    marginTop: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}
                >
                  {[
                    { name: "Blog", href: "/blog" },
                    { name: "FAQ", href: "/faq" }
                  ].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      style={{
                        color: "var(--text-light, #e2e8f0)",
                        textDecoration: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                        transition: "all 0.2s ease"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "rgba(250, 204, 21, 0.1)";
                        e.currentTarget.style.color = "var(--primary, #facc15)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--text-light, #e2e8f0)";
                      }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link
            href="/contact"
            style={{
              background: "var(--primary, #facc15)",
              color: "#020617",
              padding: "10px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "0.5px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 14px rgba(250, 204, 21, 0.3)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(250, 204, 21, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(250, 204, 21, 0.3)";
            }}
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="mobile-only" style={{ display: "none" }}>
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle Menu"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "80%",
              maxWidth: "340px",
              height: "100vh",
              background: "#0f172a",
              zIndex: 2000,
              padding: "80px 40px",
              boxShadow: "-10px 0 50px rgba(0,0,0,0.8)",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              borderLeft: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <button
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {["Home", "About", "Services", "Blog", "FAQ"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="orbitron"
                style={{
                  color: "#f8fafc",
                  textDecoration: "none",
                  fontSize: "1.3rem",
                  fontWeight: "500",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "10px"
                }}
              >
                {item}
              </Link>
            ))}
            
            <Link
              href="/contact"
              onClick={toggleMenu}
              style={{
                background: "var(--primary, #facc15)",
                color: "#020617",
                padding: "16px",
                borderRadius: "8px",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "1.1rem",
                marginTop: "auto",
                marginBottom: "20px",
                boxShadow: "0 4px 14px rgba(250, 204, 21, 0.2)",
              }}
            >
              GET A QUOTE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(2, 6, 23, 0.6)",
              zIndex: 1500,
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
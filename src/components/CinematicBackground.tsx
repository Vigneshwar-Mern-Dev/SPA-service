"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/hero1.webp",
  "/images/hero2.webp"
];

export default function CinematicBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      overflow: "hidden",
      backgroundColor: "#020617"
    }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15, x: index % 2 === 0 ? "2%" : "-2%" }}
            transition={{ duration: 10, ease: "linear" }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src={images[index]}
              alt={`SPA Crane In Action - Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                filter: "brightness(0.6) contrast(1.1)"
              }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Overlays for depth and readability */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0.9) 100%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at center, transparent 0%, rgba(2, 6, 23, 0.8) 100%)",
        pointerEvents: "none"
      }} />
    </div>
  );
}

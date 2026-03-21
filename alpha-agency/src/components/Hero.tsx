"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — silently fail, poster will show
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* ─── VIDEO BACKGROUND ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/photo_2026-03-21_21-07-54.jpg"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform, opacity" }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </motion.video>

        {/* ─── OVERLAY SYSTEM ─── */}
        {/* 1. Main cinematic black vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.72) 0%, rgba(13,13,13,0.0) 45%, rgba(13,13,13,0.80) 100%)",
          }}
        />

        {/* 2. Left / Right side darkening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,13,13,0.50) 0%, rgba(13,13,13,0) 35%, rgba(13,13,13,0) 65%, rgba(13,13,13,0.50) 100%)",
          }}
        />

        {/* 3. Red accent ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(139,0,0,0.22) 0%, rgba(226,27,27,0.06) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[#E21B1B] text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-8">
            Digital Growth Partner
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-black leading-[0.9] tracking-tight mb-6 font-[family-name:var(--font-montserrat)]"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
        >
          <span className="block text-[#F2F2F2]">FIRST IN</span>
          <span className="block gradient-text-red">MIND</span>
          <span className="block text-[#F2F2F2]">
            FIRST IN<span className="text-[#E21B1B]"> RESULTS</span>
            <span className="text-[#E21B1B]">.</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p
            className="text-[#F2F2F2]/70 text-lg md:text-xl max-w-xl mx-auto mt-10 mb-14 font-light"
            style={{
              backdropFilter: "blur(2px)",
              padding: "12px 24px",
              borderRadius: "4px",
            }}
          >
            <strong className="text-[#F2F2F2]/95">
              Tired of agencies that talk big and deliver little?
            </strong>
            <br />
            We build campaigns that prove their worth in numbers.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-[#E21B1B] text-[#F2F2F2] font-bold text-sm uppercase tracking-wider hover:bg-[#FF2D2D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,27,27,0.4)] hover:-translate-y-0.5"
          >
            Contact Us
          </a>
          <a
            href="#campaigns"
            className="px-10 py-4 border border-[#F2F2F2]/20 text-[#F2F2F2] font-bold text-sm uppercase tracking-wider hover:border-[#E21B1B]/50 hover:bg-[#E21B1B]/8 transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-[#F2F2F2]/30" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

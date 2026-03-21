"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, NexGen Labs",
    text: "ALPHA transformed our entire digital presence. Their data-driven approach increased our qualified leads by 340% in just three months. Absolutely game-changing.",
  },
  {
    name: "Omar Hassan",
    role: "Founder, Urban Pulse",
    text: "Working with ALPHA felt like having a team of ninjas silently dominating every platform. Our brand went from invisible to unforgettable.",
  },
  {
    name: "Elena Rodriguez",
    role: "CMO, Echo Studios",
    text: "The ROI we've seen is unlike anything we've experienced with other agencies. ALPHA doesn't just promise results — they deliver them on a silver platter.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-32 relative">
      {/* Subtle section divider */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#141414] to-[#0D0D0D]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#E21B1B] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-16 font-[family-name:var(--font-montserrat)]">
            WHAT <span className="gradient-text-red">THEY SAY</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="matte-card rounded-xl p-10 md:p-14 max-w-2xl mx-auto"
            >
              <Quote className="text-[#E21B1B]/20 mx-auto mb-6" size={40} />
              <p className="text-[#F2F2F2]/80 text-lg md:text-xl leading-relaxed mb-8 font-light">
                &quot;{testimonials[current].text}&quot;
              </p>
              <div>
                <p className="text-[#F2F2F2] font-bold text-lg font-[family-name:var(--font-montserrat)]">
                  {testimonials[current].name}
                </p>
                <p className="text-[#E21B1B] text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#F2F2F2]/10 flex items-center justify-center text-[#F2F2F2]/60 hover:bg-[#E21B1B] hover:border-[#E21B1B] hover:text-[#F2F2F2] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === current
                    ? "w-8 bg-[#E21B1B]"
                    : "w-2 bg-[#F2F2F2]/15 hover:bg-[#F2F2F2]/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#F2F2F2]/10 flex items-center justify-center text-[#F2F2F2]/60 hover:bg-[#E21B1B] hover:border-[#E21B1B] hover:text-[#F2F2F2] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

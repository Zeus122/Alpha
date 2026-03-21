"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "x", label: "Average ROI" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden section-alt">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/photo_2026-03-21_21-08-03.jpg" alt="About Background" className="w-full h-full object-cover mix-blend-luminosity grayscale" />
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B0000]/5 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E21B1B] text-xs font-bold tracking-[0.4em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-[family-name:var(--font-montserrat)]">
              LET&apos;S{" "}
              <span className="gradient-text-red">GROW</span>
              <br />
              TOGETHER
            </h2>
            <p className="text-[#F2F2F2]/60 text-base leading-relaxed mb-6">
              We are a team of strategists, designers, and developers who are
              passionate about creating meaningful digital experiences. Every
              campaign we build is rooted in data and driven by creativity.
            </p>
            <p className="text-[#F2F2F2]/60 text-base leading-relaxed mb-8">
              <strong className="text-[#F2F2F2]/90">
                Bold. Measurable. Unforgettable.
              </strong>{" "}
              That&apos;s not just a tagline—it&apos;s our promise.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#E21B1B] text-[#F2F2F2] font-bold text-sm uppercase tracking-wider hover:bg-[#FF2D2D] transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,27,27,0.3)]"
            >
              Work With Us
            </a>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="matte-card rounded-lg p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#E21B1B] mb-2 font-[family-name:var(--font-montserrat)]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[#F2F2F2]/40 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

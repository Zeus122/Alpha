"use client";

import { motion } from "framer-motion";
import { Palette, Share2, Globe, Search, PenTool, Cpu } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding",
    description:
      "We craft identities that command attention. From logos to full brand systems, your visual story starts here.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Strategic content that builds communities and drives engagement across all platforms.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Stunning, high-performance websites that convert visitors into loyal customers.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Data-driven optimization that puts your brand at the top of search results.",
  },
  {
    icon: PenTool,
    title: "Content",
    description:
      "Compelling stories, sharp copy, and visuals that make your audience stop scrolling.",
  },
  {
    icon: Cpu,
    title: "AI Marketing",
    description:
      "Leverage artificial intelligence for predictive analytics, personalization, and campaign optimization.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative section-alt overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/photo_2026-03-21_21-07-57.jpg" alt="Services Background" className="w-full h-full object-cover mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-[#E21B1B] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-montserrat)]">
            OUR <span className="gradient-text-red">SERVICES</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="matte-card rounded-lg p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-[#E21B1B]/8 flex items-center justify-center mb-6 group-hover:bg-[#E21B1B] group-hover:shadow-[0_0_20px_rgba(226,27,27,0.3)] transition-all duration-300">
                <service.icon
                  className="text-[#E21B1B] group-hover:text-[#F2F2F2] transition-colors duration-300"
                  size={26}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F2F2F2] group-hover:text-[#E21B1B] transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
                {service.title}
              </h3>
              <p className="text-[#F2F2F2]/50 text-sm leading-relaxed group-hover:text-[#F2F2F2]/70 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

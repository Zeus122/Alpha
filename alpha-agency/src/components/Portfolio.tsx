"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Jewel Mou",
    category: "Branding",
  },
  {
    title: "Samar Alfy Fashion",
    category: "Branding",
  },
  {
    title: "Vinca",
    category: "Branding",
  },
  {
    title: "Urban Pulse",
    category: "Social Media",
  },
  {
    title: "NexGen Labs",
    category: "Web Design",
  },
  {
    title: "Echo Studios",
    category: "AI Marketing",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[#E21B1B] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Portfolio
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-montserrat)]">
              OUR <span className="gradient-text-red">WORK</span>
            </h2>
            <p className="text-[#F2F2F2]/50 max-w-md text-sm leading-relaxed">
              Every project is a story. We bring brands to life with strategy,
              creativity, and measurable results.
            </p>
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Dark image placeholder */}
              <div
                className={`relative w-full ${
                  i === 0 ? "h-[500px]" : "h-[280px]"
                } bg-[#2C2C2E] overflow-hidden`}
              >
                {/* Subtle crimson gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2E] to-[#141414] opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/5 to-transparent group-hover:from-[#8B0000]/15 transition-all duration-500" />

                {/* Geometric accent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-[#E21B1B]/10 group-hover:border-[#E21B1B]/30 group-hover:scale-150 transition-all duration-700" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-[#E21B1B] text-xs font-bold tracking-widest uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-black text-[#F2F2F2] font-[family-name:var(--font-montserrat)]">
                      {project.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-[#E21B1B] mt-3 transition-all duration-400 group-hover:w-16" />
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="p-4 bg-[#141414] border-t border-[#F2F2F2]/[0.04]">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#F2F2F2]">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#F2F2F2]/30 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-7xl md:text-9xl font-black text-[#F2F2F2]/[0.02] tracking-tight font-[family-name:var(--font-montserrat)]"
              >
                FIRST IN MIND · FIRST IN RESULTS ·{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

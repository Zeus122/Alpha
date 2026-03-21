"use client";

import { motion } from "framer-motion";

const campaigns = [
  {
    image: "/assets/photo_2026-03-21_21-07-57.jpg",
    title: "A Good Brand Inspires",
    category: "Branding",
  },
  {
    image: "/assets/photo_2026-03-21_21-07-54.jpg",
    title: "Beat Your Competition",
    category: "Branding",
  },
  {
    image: "/assets/photo_2026-03-21_21-08-06.jpg",
    title: "Strategy, Story, Sales",
    category: "Social Media",
  },
  {
    image: "/assets/photo_2026-03-21_21-08-03.jpg",
    title: "Impactful Branding",
    category: "Consulting",
  },
  {
    image: "/assets/photo_2026-03-21_21-08-10.jpg",
    title: "Business Setup in Dubai",
    category: "Consulting",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-32 relative section-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center md:text-left"
        >
          <p className="text-[#E21B1B] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            حملات ألفا التسويقية الخاصة
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-montserrat)] uppercase">
              OUR <span className="gradient-text-red">CAMPAIGNS</span>
            </h2>
            <p className="text-[#F2F2F2]/50 max-w-md text-sm leading-relaxed">
              Explore Alpha&apos;s internal marketing campaigns, where we practice exactly what we preach. Real strategy, powerful branding, and flawless execution.
            </p>
          </div>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {campaigns.map((campaign, i) => (
            <motion.div
              key={campaign.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg cursor-pointer bg-[#141414] ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-[450px] md:h-auto" : "h-[350px]"
              }`}
            >
              <div className="absolute inset-0 w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-400" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/5 to-transparent group-hover:from-[#8B0000]/20 transition-all duration-500" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest text-[#F2F2F2] uppercase bg-[#E21B1B]/80 rounded-sm">
                    {campaign.category}
                  </span>
                  <h3 className="text-3xl font-black text-[#F2F2F2] font-[family-name:var(--font-montserrat)]">
                    {campaign.title}
                  </h3>
                  <div className="w-8 h-[3px] bg-[#E21B1B] mt-5 transition-all duration-400 opacity-0 group-hover:opacity-100 group-hover:w-16 shadow-[0_0_10px_rgba(226,27,27,0.5)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

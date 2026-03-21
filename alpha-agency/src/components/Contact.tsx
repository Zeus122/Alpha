"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    websiteLink: "",
    email: "",
    phoneNumber: "",
    serviceDescription: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.serviceDescription.trim()) {
      return;
    }

    setFormState("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormState("success");
      setFormData({ 
        name: "", 
        brandName: "", 
        websiteLink: "", 
        email: "", 
        phoneNumber: "", 
        serviceDescription: "" 
      });
      setTimeout(() => setFormState("idle"), 4000);
    } catch (error) {
      console.error(error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-6 py-4 bg-[#141414] border border-[#F2F2F2]/[0.06] rounded-lg text-[#F2F2F2] placeholder:text-[#F2F2F2]/25 focus:outline-none focus:border-[#E21B1B]/50 focus:shadow-[0_0_15px_rgba(226,27,27,0.1)] transition-all duration-300";

  return (
    <section id="contact" className="py-32 relative section-alt overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/photo_2026-03-21_21-08-06.jpg" alt="Contact Background" className="w-full h-full object-cover mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B0000]/5 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E21B1B] text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight font-[family-name:var(--font-montserrat)]">
              LET&apos;S{" "}
              <span className="gradient-text-red">TALK</span>
              <span className="text-[#E21B1B]">.</span>
            </h2>
            <p className="text-[#F2F2F2]/50 text-base leading-relaxed mb-10 max-w-md">
              Ready to take your brand to the next level? Drop us a message and
              let&apos;s create something measurable, bold, and unforgettable
              together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E21B1B]/8 flex items-center justify-center">
                  <Send size={18} className="text-[#E21B1B]" />
                </div>
                <a
                  href="mailto:alphamediaagency.eg@gmail.com"
                  className="text-[#F2F2F2]/60 hover:text-[#F2F2F2] transition-colors overflow-hidden text-ellipsis"
                  title="alphamediaagency.eg@gmail.com"
                >
                  alphamediaagency.eg@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E21B1B]/8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#E21B1B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:01140871504"
                  className="text-[#F2F2F2]/60 hover:text-[#F2F2F2] transition-colors"
                >
                  01140871504
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#F2F2F2] mb-1 font-semibold text-sm">Name <span className="text-[#E21B1B]">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[#F2F2F2] mb-1 font-semibold text-sm">Brand Name</label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) =>
                    setFormData({ ...formData, brandName: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[#F2F2F2] mb-1 font-semibold text-sm">Website Link</label>
                <input
                  type="text"
                  value={formData.websiteLink}
                  onChange={(e) =>
                    setFormData({ ...formData, websiteLink: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[#F2F2F2] mb-1 font-semibold text-sm">Email <span className="text-[#E21B1B]">*</span></label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[#F2F2F2] mb-1 font-semibold text-sm">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[#F2F2F2] mb-1 font-semibold text-sm">Service needed <span className="text-[#E21B1B]">*</span></label>
                <textarea
                  placeholder="Service Description"
                  rows={4}
                  required
                  value={formData.serviceDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceDescription: e.target.value })
                  }
                  className={`${inputClass} resize-none mb-1 mt-1 placeholder-[#F2F2F2]/30`}
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className={`w-full py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 ${
                  formState === "success"
                    ? "bg-[#F2F2F2]/10 text-[#F2F2F2] border border-[#F2F2F2]/20"
                    : formState === "error"
                    ? "bg-[#8B0000]/20 text-[#E21B1B] border border-[#8B0000]/30"
                    : "bg-[#E21B1B] text-[#F2F2F2] hover:bg-[#FF2D2D] hover:shadow-[0_0_25px_rgba(226,27,27,0.35)]"
                }`}
              >
                {formState === "loading" && (
                  <>
                    <div className="w-5 h-5 border-2 border-[#F2F2F2]/30 border-t-[#F2F2F2] rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {formState === "idle" && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                {formState === "success" && (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                )}
                {formState === "error" && (
                  <>
                    <AlertCircle size={18} />
                    Something went wrong
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerChildren } from "@/components/motion-wrapper";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

interface InfoColumnProps {
  lines: [string, string];
}

// ─── Animation variants ───────────────────────────────────────────────────────

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function InfoColumn({ lines }: InfoColumnProps) {
  return (
    <div className="flex flex-col gap-0.5 text-center md:text-left">
      <span className="text-sm font-semibold text-white/80 tracking-wide">
        {lines[0]}
      </span>
      <span className="text-xs text-white/40 tracking-widest uppercase">
        {lines[1]}
      </span>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-white/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
      <motion.div
        className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  );
}

function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex flex-col items-center gap-1 px-6 py-5 rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-moto-red/40 transition-colors duration-300">
        <span className="text-3xl font-black text-moto-red tracking-tight leading-none">
          {value}
        </span>
        <span className="text-xs text-moto-gray uppercase tracking-widest font-medium">
          {label}
        </span>
      </div>
    </FadeIn>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col bg-moto-dark overflow-hidden">
      {/* Top red accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-moto-red z-10" />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,38,38,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,38,38,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Dark gradient overlay — dark → dark-2 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #0F1419 0%, #1A1F2E 100%)",
          zIndex: -1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 pt-20 pb-12 text-center">
        <StaggerChildren className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariant}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-moto-red/50 text-moto-red text-xs font-bold tracking-[0.2em] uppercase bg-moto-red/5">
              <span className="w-1.5 h-1.5 rounded-full bg-moto-red inline-block" />
              Technical &amp; Business Proposal
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariant}
            className="text-7xl sm:text-8xl font-black tracking-tight leading-none select-none"
          >
            <span className="text-white">Moto</span>
            <span className="text-moto-red">Market</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariant} className="flex flex-col gap-1">
            <p className="text-lg sm:text-xl font-semibold text-white/60 tracking-wide">
              Custom E-Commerce Platform
            </p>
            <p className="text-sm text-white/35 tracking-widest uppercase">
              Next-Generation Motorcycle Gear Shop
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariant}
            className="w-16 h-px bg-moto-red/50"
          />

          {/* Info columns */}
          <motion.div
            variants={itemVariant}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 pt-2 w-full max-w-2xl"
          >
            <InfoColumn lines={["Alexandros Keramopoulos", "Gen2 Digital"]} />
            <InfoColumn lines={["Version 2.0", "Απρίλιος 2026"]} />
            <InfoColumn lines={["Εμπιστευτικό", "Για εσωτερική χρήση"]} />
          </motion.div>
        </StaggerChildren>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export function Stats() {
  const stats: Array<{ value: string; label: string }> = [
    { value: "10K+", label: "Products" },
    { value: "6", label: "Languages" },
    { value: "20+", label: "Automations" },
    { value: "24/7", label: "AI Assistant" },
  ];

  return (
    <section className="bg-moto-dark-2 border-t border-white/5 py-14 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

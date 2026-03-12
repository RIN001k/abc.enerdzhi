"use client";

import { GraduationCap, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "років дбайливої підготовки",
    value: "10+",
    icon: GraduationCap,
  },
  {
    label: "випускників упевнено пішли в 1 клас",
    value: "500+",
    icon: Users,
  },
  {
    label: "дітей у групі — максимум",
    value: "8",
    icon: Sparkles,
  },
];

export function StatsSection() {
  return (
    <section className="section-space">
      <div className="container-padded">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-card grid gap-4 p-5 sm:p-6 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-2xl bg-white/70 p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-semibold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


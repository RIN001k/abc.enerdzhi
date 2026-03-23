"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToLead = () => {
    const el = document.querySelector("#lead-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="section-space border-b border-slate-200/60 bg-gradient-to-b from-cyan-50 via-amber-50/60 to-sky-50"
    >
      <div className="container-padded grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-sky-100">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Дбайлива підготовка з любов&apos;ю до дітей</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Дбайлива підготовка до школи{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-mint bg-clip-text text-transparent">
              в атмосфері турботи та гри
            </span>
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-slate-600">
            Допомагаємо дітям полюбити навчання, адаптуватися до нових правил і
            впевнено зробити перший крок у шкільне життя. Без стресу,
            перевантажень і сліз — з увагою до особистості кожної дитини.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={scrollToLead}
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-soft transition hover:bg-brand-blue/90"
            >
              Записатися на безкоштовну зустріч
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <p className="text-xs sm:text-sm text-slate-500">
              Покажемо простір, познайомимося з дитиною та підберемо формат
              занять.
            </p>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-4 max-w-md text-xs sm:text-sm text-slate-600">
            <div>
              <dt className="font-semibold text-slate-900">Вік</dt>
              <dd>від 2 до 7 років</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Формат</dt>
              <dd>очні заняття 2 рази на тиждень</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-card relative overflow-hidden">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-mint/60 blur-3xl" />
            <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-brand-yellow/60 blur-3xl" />
            <div className="relative p-5 sm:p-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-tr from-sky-100 via-amber-50 to-emerald-50">
                <div className="flex h-full flex-col items-center justify-center p-6 sm:p-8">
                  <div className="mb-4 h-20 w-20 rounded-full bg-[url('https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center shadow-soft" />
                  <p className="text-center text-sm sm:text-base font-medium text-slate-800">
                    Щасливі очі дитини — головний показник того, що вона готова
                    до школи не лише знаннями, а й серцем.
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Професійні педагоги поруч на кожному кроці.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[11px] sm:text-xs text-slate-600">
                <div className="rounded-2xl bg-white px-3 py-2 shadow-sm">
                  <p className="text-xs font-semibold text-slate-900">
                    М&apos;яка адаптація
                  </p>
                  <p>через гру та спілкування</p>
                </div>
                <div className="rounded-2xl bg-white px-3 py-2 shadow-sm">
                  <p className="text-xs font-semibold text-slate-900">
                    Малі групи
                  </p>
                  <p>до 10 дітей</p>
                </div>
                <div className="rounded-2xl bg-white px-3 py-2 shadow-sm">
                  <p className="text-xs font-semibold text-slate-900">
                    Підтримка батьків
                  </p>
                  <p>консультації та рекомендації</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


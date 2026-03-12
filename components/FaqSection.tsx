"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "З якого віку можна розпочинати підготовку до школи?",
    answer:
      "Оптимально починати з 5–6 років. У цьому віці дитина вже готова опановувати навчальні навички в ігровій формі, але при цьому не перевантажується. Ми підбираємо програму під вік і рівень готовності.",
  },
  {
    question: "Що, якщо дитина соромиться або важко йде на контакт?",
    answer:
      "Це нормально — ми приділяємо багато уваги м&apos;якій адаптації. Педагоги допомагають дитині поступово влитися в групу через гру, спільні завдання та невеликі кроки. Зазвичай уже за кілька занять діти почуваються впевнено.",
  },
  {
    question: "Чи потрібно робити домашні завдання?",
    answer:
      "Ми даємо посильні домашні завдання лише там, де це справді допомагає закріпити матеріал. Наша мета — не навантажити родину, а сформувати у дитини звичку доводити розпочате до кінця.",
  },
  {
    question: "Як проходить перше знайомство з центром?",
    answer:
      "Ми запрошуємо вас на безкоштовну зустріч: показуємо простір, знайомимося з дитиною, проводимо невелику діагностику та обговорюємо ваші очікування. Після цього підбираємо оптимальну програму та формат.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-space">
      <div className="container-padded">
        <div className="mb-8 text-center">
          <h2 className="section-title">Поширені запитання батьків</h2>
          <p className="section-subtitle mx-auto">
            Якщо у вас залишилися запитання, ви завжди можете поставити їх у
            формі нижче або телефоном — ми із задоволенням розповімо детальніше.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: 0.03 * index }}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4"
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-200/80 bg-white/80"
                    >
                      <div className="px-4 py-3 text-xs sm:px-5 sm:py-4 sm:text-sm text-slate-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


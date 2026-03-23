"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Puzzle, Brain, Users } from "lucide-react";

const benefits = [
  {
    title: "Досвідчені педагоги та психолог",
    description:
      "Команда, яка розуміє дитячу психологію та допомагає дитині почуватися в безпеці й прийнятті.",
    icon: HeartHandshake,
  },
  {
    title: "Ігрова форма навчання",
    description:
      "Через сюжетні ігри, творчість і рух дитина природно опановує навички, потрібні у школі.",
    icon: Puzzle,
  },
  {
    title: "Психологічна адаптація",
    description:
      "Розвиваємо емоційний інтелект, упевненість у собі, уміння спілкуватися та домовлятися з однолітками.",
    icon: Brain,
  },
  {
    title: "Малі групи та індивідуальний підхід",
    description:
      "До 10 дітей у групі — викладач встигає приділити час кожному та помітити найменші зміни.",
    icon: Users,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-space">
      <div className="container-padded">
        <div className="mb-8 text-center">
          <h2 className="section-title">Чому батьки обирають нас</h2>
          <p className="section-subtitle mx-auto">
            Ваша головна цінність — спокій за дитину. Наша — підтримати
            її на кожному кроці до школи та зберегти природний інтерес до
            пізнання.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.04 * index }}
              className="glass-card flex gap-3 p-4 sm:p-5"
            >
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-mint/30 text-brand-blue">
                <benefit.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


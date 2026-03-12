"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  child: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Анна, мама Лізи (6 років)",
    child: "Ліза, 6 років",
    text: "Донька йшла до школи без страху — вона вже знала, як проходять уроки, як спілкуватися з учителем і що робити на перервах. Особливо ціную, що тут уважно ставилися до її почуттів, а не лише до результатів.",
  },
  {
    name: "Ігор, тато Мишка (7 років)",
    child: "Мишко, 7 років",
    text: "Ми прийшли майже без підготовки й з тривогою, що не встигнемо. За кілька місяців син підтягнувся з читання, став більш посидючим і навчився доводити завдання до кінця. Зараз у школі чуємо лише гарні відгуки від учительки.",
  },
  {
    name: "Марія, мама Аліси (5 років)",
    child: "Аліса, 5 років",
    text: "Для нас було важливо не перевантажувати дитину. На заняттях багато гри, творчості та спілкування. Аліса щоразу питає, коли знову поїдемо до центру — для мене це найкращий показник.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space">
      <div className="container-padded">
        <div className="mb-8 text-center">
          <h2 className="section-title">Батьки про нас</h2>
          <p className="section-subtitle mx-auto">
            Ми будуємо партнерство з родиною, тому відкрито ділимося зворотним
            зв&apos;язком і підтримуємо батьків на всьому шляху підготовки до школи.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              className="glass-card flex h-full flex-col justify-between p-5"
            >
              <div>
                <div className="mb-2 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700">{t.text}</p>
              </div>
              <div className="mt-4 border-t border-slate-200 pt-3 text-xs sm:text-sm">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-slate-500">{t.child}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


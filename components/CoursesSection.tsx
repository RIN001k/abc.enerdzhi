"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Rocket } from "lucide-react";

type Course = {
  name: string;
  description: string;
  price: string;
  badge?: string;
  icon: ElementType;
  features: string[];
};

const courses: Course[] = [
  {
    name: "Базова підготовка",
    description:
      "Плавне знайомство з навчальною діяльністю для тих, хто робить перші кроки до школи.",
    price: "від 5 900 ₴ / місяць",
    icon: Sparkles,
    features: [
      "2 занятия в неделю по 60 минут",
      "развитие речи, внимания и логики",
      "знакомство с буквами и цифрами",
      "первые навыки чтения и счёта",
    ],
  },
  {
    name: "Інтенсив «Упевнений першокласник»",
    description:
      "Комплексна підготовка для дітей, яким важливо почуватися впевнено з першого дня в школі.",
    price: "від 7 900 ₴ / місяць",
    badge: "рекомендуємо",
    icon: Rocket,
    features: [
      "3 заняття на тиждень по 75 хвилин",
      "читання, рахунок, письмо та логіка",
      "тренування посидючості та самоконтролю",
      "елементи емоційного інтелекту",
    ],
  },
  {
    name: "Экспресс-курс",
    description:
      "Для тих, хто вирішив готуватися ближче до школи або хоче освіжити знання перед 1 класом.",
    price: "від 9 500 ₴ / курс",
    icon: Clock,
    features: [
      "стисла програма 1,5–2 місяці",
      "інтенсивні міні-групи",
      "діагностика та закриття прогалин",
      "рекомендації батькам щодо подальшої підтримки",
    ],
  },
];

export function CoursesSection() {
  return (
    <section id="programs" className="section-space">
      <div className="container-padded">
        <div className="mb-8 text-center">
          <h2 className="section-title">Наші програми підготовки</h2>
          <p className="section-subtitle mx-auto">
            Підберемо формат занять під вік, характер і рівень готовності
            вашої дитини, щоб дорога до школи була радісною та спокійною.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, index) => (
            <motion.article
              key={course.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              className="glass-card flex flex-col justify-between p-5 sm:p-6"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <course.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {course.name}
                    </h3>
                  </div>
                  {course.badge && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                      {course.badge}
                    </span>
                  )}
                </div>
                <p className="mb-4 text-xs sm:text-sm text-slate-600">
                  {course.description}
                </p>
                <ul className="mb-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brand-blue/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  {course.price}
                </p>
                <p className="text-[11px] text-slate-500">
                  Точну вартість уточнюйте на консультації
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


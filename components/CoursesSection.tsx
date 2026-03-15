"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, BookOpen, Pencil } from "lucide-react";

type Course = {
  name: string;
  description: string;
  badge?: string;
  icon: ElementType;
  features: string[];
};

const courses: Course[] = [
  {
    name: "Гурток «Ігрова педагогіка» (від 2 років)",
    description:
      "Тематичні інтегровані заняття, які допомагають малюкам пізнавати світ через гру та творчість.",
    icon: Sparkles,
    features: [
      "розвиток мовлення, мислення, памʼяті та уяви",
      "укріплення дрібної моторики",
      "бесіди та сюжетно-рольові ігри",
      "дидактичні, настільні та рухливі ігри",
      "казко-йога, лего, орігамі",
    ],
  },
  {
    name: "Нейророзвиток (від 2 років)",
    description:
      "Групи до 10 дітей за авторською програмою Тетяни Черкаської для гармонійного розвитку мозку та емоційної сфери.",
    badge: "комплексний розвиток",
    icon: Brain,
    features: [
      "розвиток уваги та міжпівкульної взаємодії",
      "нейроігри та вправи на координацію",
      "керування емоціями в ігровій формі",
      "розвиток памʼяті та мислення",
      "орієнтація у просторі та сенсорне сприймання",
      "укріплення дрібної моторики",
    ],
  },
  {
    name: "Англійська мова (від 2 років)",
    description:
      "Групи до 8 дітей за методикою Happy Kids Academy: вивчення англійської через гру та позитивні емоції.",
    icon: BookOpen,
    features: [
      "перші слова та вирази в ігрових ситуаціях",
      "пісні, римівки та руханки",
      "картки, історії та мінідіалоги",
      "формування позитивного ставлення до мов",
    ],
  },
  {
    name: "Підготовка до школи (від 5 років)",
    description:
      "Комплексна підготовка до 1 класу: від базових навичок до психологічної готовності до шкільного життя.",
    icon: Pencil,
    features: [
      "читання, підготовка руки до письма, математика",
      "розвиток логічного та образного мислення",
      "формування навчальної мотивації та самостійності",
      "адаптація до шкільного режиму та правил",
      "вартість: 2 500 грн / місяць",
    ],
  },
];

export function CoursesSection() {
  return (
    <section id="programs" className="section-space">
      <div className="container-padded">
        <div className="mb-8 text-center">
          <h2 className="section-title">Наші напрями та курси</h2>
          <p className="section-subtitle mx-auto">
            Усі заняття побудовані в ігровому форматі, з урахуванням вікових
            особливостей та емоційного стану дитини.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
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
                <ul className="mb-2 space-y-2 text-xs sm:text-sm text-slate-600">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brand-blue/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 glass-card grid gap-4 p-5 sm:p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Графік занять
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Стандартний графік для всіх напрямів — заняття{" "}
              <span className="font-semibold text-slate-900">
                2 рази на тиждень
              </span>
              . Абонемент розрахований на{" "}
              <span className="font-semibold text-slate-900">
                8 занять (4 тижні)
              </span>
              .
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Підбираємо зручні дні та час залежно від віку дитини та
              завантаженості груп.
            </p>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Оплата
            </h3>
            <ul className="mt-2 space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                <span>
                  <span className="font-semibold">
                    Комплексний абонемент
                  </span>{" "}
                  (Англійська мова + Нейророзвиток) —{" "}
                  <span className="font-semibold">2 500 грн / місяць</span>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                <span>
                  <span className="font-semibold">Окремий блок</span> (будь-який
                  один напрямок, окрім підготовки до школи) —{" "}
                  <span className="font-semibold">1 500 грн / місяць</span>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                <span>
                  <span className="font-semibold">Підготовка до школи</span> —{" "}
                  <span className="font-semibold">2 500 грн / місяць</span>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                <span>
                  Деталі оплати та наявність місць у групах можна уточнити у
                  адміністратора центру.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


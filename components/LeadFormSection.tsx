"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  age: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  age: "",
};

export function LeadFormSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (data: FormValues): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Будь ласка, вкажіть ваше імʼя.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Вкажіть номер телефону для звʼязку.";
    } else if (!/^[\d\s()+-]{6,20}$/.test(data.phone.trim())) {
      newErrors.phone = "Перевірте коректність номера телефону.";
    }

    if (!data.age.trim()) {
      newErrors.age = "Вкажіть вік дитини.";
    } else {
      const ageNumber = Number(data.age);
      if (Number.isNaN(ageNumber) || ageNumber < 4 || ageNumber > 9) {
        newErrors.age = "Вік має бути від 4 до 9 років.";
      }
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Помилка відправки форми.");
      }

      setValues(initialValues);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Помилка, спробуйте пізніше.");
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="section-space">
      <div className="container-padded">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="section-title">
              Запишіться на безкоштовну зустріч-знайомство
            </h2>
            <p className="section-subtitle">
              Ми покажемо простір, познайомимося з дитиною, проведемо
              мінідіагностику та підберемо оптимальну програму підготовки до
              школи. Зустріч ні до чого не зобовʼязує.
            </p>

            <div className="mt-6 glass-card p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-slate-700">
                Після відправлення заявки ми звʼяжемося з вами протягом
                робочого дня, уточнимо деталі та запропонуємо зручний час для
                візиту до центру.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Віддаєте перевагу дзвінку?
                  </p>
                  <p>+380737731616 — адміністратор центру</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card space-y-4 p-5 sm:p-6"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs sm:text-sm font-medium text-slate-800"
                >
                  Ваше імʼя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-brand-blue focus:ring-2"
                  placeholder="Наприклад, Анна"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-xs sm:text-sm font-medium text-slate-800"
                >
                  Телефон для звʼязку
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-brand-blue focus:ring-2"
                  placeholder="+38 (0__) ___-__-__"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="mb-1 block text-xs sm:text-sm font-medium text-slate-800"
                >
                  Вік дитини
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={values.age}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-brand-blue focus:ring-2"
                  placeholder="Наприклад, 6"
                  min={2}
                  max={7}
                />
                {errors.age && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.age}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-full bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-blue/90 disabled:cursor-not-allowed disabled:bg-brand-blue/70"
              >
                {isSubmitting ? "Відправлення..." : "Надіслати заявку"}
              </button>

              {submitted && (
                <p className="text-xs text-emerald-600">
                  Заявка отримана!
                </p>
              )}

              {submitError && (
                <p className="text-xs text-red-600">{submitError}</p>
              )}

              <p className="text-[11px] text-slate-500">
                Надсилаючи форму, ви погоджуєтеся на обробку персональних
                даних відповідно до чинного законодавства.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


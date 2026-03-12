"use client";

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contacts"
      className="border-t border-slate-200 bg-slate-50/90 py-8"
    >
      <div className="container-padded grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            [Назва твого центру]
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Центр дбайливої підготовки дітей до школи. Створюємо простір, у
            якому дитина почувається впевненою, улюбленою та здатною на більше.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-blue" />
              <a
                href="tel:+380991234567"
                className="hover:text-brand-blue hover:underline"
              >
                +38 (099) 123-45-67
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-blue" />
              <a
                href="mailto:info@school-center.ru"
                className="hover:text-brand-blue hover:underline"
              >
                info@school-center.ru
              </a>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-slate-700">
            <MapPin className="h-4 w-4 text-brand-blue" />
            <p>м. Ваше місто, вул. Прикладна, буд. 1</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 md:items-end">
          <div>
            <p className="text-xs sm:text-sm font-medium text-slate-800">
              Ми в соцмережах
            </p>
            <div className="mt-2 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm transition hover:text-brand-blue"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm transition hover:text-brand-blue"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} [Назва твого центру]. Усі права
            захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}


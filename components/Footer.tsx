"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Building2,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contacts"
      className="border-t border-slate-200 bg-gradient-to-t from-sky-50 via-amber-50/70 to-slate-50 py-8"
    >
      <div className="container-padded grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            АБС ЕНЕРДЖІ
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
                +380 73 773 16 16
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-blue" />
              <a
                href="mailto:abc-enerdgy@ukr.net"
                className="hover:text-brand-blue hover:underline"
              >
                abc-enerdgy@ukr.net
              </a>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-slate-700">
            <MapPin className="h-4 w-4 text-brand-blue" />
            <p>м. Київ</p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="glass-card border-sky-100 bg-white/90 p-4 text-xs sm:text-sm text-slate-700">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    ЗДО №589
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Відкрито для всіх бажаючих
                  </p>
                </div>
              </div>
              <p>
                Адреса: вулиця Левка Лук&apos;яненка, 3Б, Київ, 04212. Заняття
                відкриті для всіх бажаючих, у тому числі для дітей з інших
                садочків.
              </p>
              <a
                href="https://maps.app.goo.gl/LExTd32YvsSRj3o78"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 rounded-full bg-brand-blue/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft transition hover:bg-brand-blue"
              >
                <MapPin className="h-3.5 w-3.5" />
                Відкрити карту
              </a>
            </div>

            <div className="glass-card border-emerald-100 bg-white/90 p-4 text-xs sm:text-sm text-slate-700">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    ЗДО №206
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Лише для зарахованих дітей
                  </p>
                </div>
              </div>
              <p>
                Адреса: вулиця Полярна, 13А, Київ, 02000. Увага: заняття
                проводяться лише для дітей, які офіційно зараховані до цього
                садочка.
              </p>
              <a
                href="https://maps.app.goo.gl/TjeXPCEDQ6AevgRe9"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft transition hover:bg-emerald-600"
              >
                <MapPin className="h-3.5 w-3.5" />
                Відкрити карту
              </a>
            </div>
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
            © {new Date().getFullYear()} АБС ЕНЕРДЖІ. Усі права
            захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}


"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#programs", label: "Програми" },
  { href: "#benefits", label: "Переваги" },
  { href: "#testimonials", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (typeof window !== "undefined") {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-md">
      <div className="container-padded flex items-center justify-between py-3 sm:py-4">
        <Link href="#top" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-mint shadow-soft">
            <span className="text-xl font-bold text-white">А</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              [Назва твого центру]
            </span>
            <span className="text-xs text-slate-500">
              центр підготовки до школи
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#lead-form")}
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-blue/90"
          >
            Записатися
          </button>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Відкрити меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50/95 py-3 md:hidden">
          <div className="container-padded flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-2xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-white"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#lead-form")}
              className="mt-1 rounded-2xl bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-soft"
            >
              Записатися
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


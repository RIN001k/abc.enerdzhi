import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Центр підготовки до школи | Дбайливий старт",
  description:
    "Сучасний центр дбайливої підготовки дітей до школи: досвідчені педагоги, малі групи та атмосфера турботи.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="min-h-screen bg-gradient-to-b from-cyan-50 via-amber-50/60 to-sky-100">
        {/* Глобальний фон з усіх зображень, окрім logo.png */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          {/* Десктоп / великі екрани — хаотичне розпорошення */}
          <div
            className="hidden xl:block absolute top-[18%] right-[12%] h-60 w-60 bg-no-repeat bg-contain opacity-22"
            style={{
              backgroundImage: "url('/monstriki.png')",
              transform: "rotate(9deg) scale(0.95)",
            }}
          />
          <div
            className="hidden xl:block absolute top-[42%] left-[18%] h-52 w-52 bg-no-repeat bg-contain opacity-2"
            style={{
              backgroundImage: "url('/semeika.png')",
              transform: "rotate(4deg) scale(0.9)",
            }}
          />
          <div
            className="hidden 2xl:block absolute top-[30%] left-[40%] h-56 w-56 bg-no-repeat bg-contain opacity-18"
            style={{
              backgroundImage: "url('/makvin.png')",
              transform: "rotate(10deg) scale(0.9)",
            }}
          />
          <div
            className="hidden 2xl:block absolute bottom-[12%] right-[8%] h-60 w-60 bg-no-repeat bg-contain opacity-2"
            style={{
              backgroundImage: "url('/krasni.png')",
              transform: "rotate(-9deg) scale(1.05)",
            }}
          />

          {/* Планшети / середні екрани */}
          <div
            className="hidden md:block lg:hidden absolute top-[12%] right-[6%] h-52 w-52 bg-no-repeat bg-contain opacity-26"
            style={{
              backgroundImage: "url('/monstriki.png')",
              transform: "rotate(-6deg) scale(1.05)",
            }}
          />
          <div
            className="hidden md:block absolute bottom-[8%] right-[18%] h-44 w-44 bg-no-repeat bg-contain opacity-18"
            style={{
              backgroundImage: "url('/schur.png')",
              transform: "rotate(-4deg) scale(1.1)",
            }}
          />

          {/* Додаткові силуети для sm+ — більш хаотично по площі */}
          <div
            className="hidden sm:block absolute top-[10%] left-[4%] h-40 w-40 bg-no-repeat bg-contain opacity-16"
            style={{
              backgroundImage: "url('/robotiki.png')",
              transform: "rotate(6deg) scale(0.9)",
            }}
          />
          <div
            className="hidden sm:block absolute top-[38%] left-[28%] h-40 w-40 bg-no-repeat bg-contain opacity-14"
            style={{
              backgroundImage: "url('/nemo.png')",
              transform: "rotate(5deg) scale(0.85)",
            }}
          />
          <div
            className="hidden sm:block absolute bottom-[14%] left-[6%] h-40 w-40 bg-no-repeat bg-contain opacity-14"
            style={{
              backgroundImage: "url('/pioner.png')",
              transform: "rotate(-10deg) scale(1.05)",
            }}
          />

          {/* Телефони — лише дуже прозорі образи, щоб не перекривати текст */}
          <div
            className="block sm:hidden absolute bottom-[10%] left-[-10%] h-40 w-40 bg-no-repeat bg-contain opacity-[0.18]"
            style={{
              backgroundImage: "url('/monstriki.png')",
              transform: "rotate(7deg) scale(0.95)",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}

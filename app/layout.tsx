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
      <body className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-100">
        {children}
      </body>
    </html>
  );
}


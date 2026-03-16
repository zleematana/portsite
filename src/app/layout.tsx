import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Алексей Ефремов | Актёр · Музыкант · Каскадёр",
  description:
    "Официальный сайт-портфолио актёра Алексея Ефремова. Театр, кино, музыка, файер-шоу, акробатика.",
  openGraph: {
    title: "Алексей Ефремов",
    description: "Актёр | Музыкант | Каскадёр",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-neutral-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

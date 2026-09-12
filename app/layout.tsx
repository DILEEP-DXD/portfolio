import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dileep-kumar.dev"),
  title: "Dileep Kumar — AI/ML Developer & GenAI Builder",
  description:
    "Portfolio of Dileep Kumar Reddy — B.Tech CSE (AI/ML) student building AI-powered apps, RAG pipelines, and automation tools. Open to GenAI developer roles and internships.",
  openGraph: {
    title: "Dileep Kumar — AI/ML Developer & GenAI Builder",
    description:
      "Portfolio of Dileep Kumar Reddy — building AI-powered apps, RAG pipelines, and automation tools.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        <Preloader />
        {children}
      </body>
    </html>
  );
}

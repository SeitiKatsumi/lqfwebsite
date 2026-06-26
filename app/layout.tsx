import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Motion";
import { IrisAssistant } from "@/components/IrisAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lqf.com.br"),
  title: "LQF Farmacêutica",
  description: "Desenvolvimento e fabricação de cosméticos e dermocosméticos com estrutura farmacêutica.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <IrisAssistant />
      </body>
    </html>
  );
}

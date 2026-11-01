import type { Metadata } from "next";
import "./globals.css";
import { Boldonse, Inder, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  weight: "400",
  subsets: ["latin"],
});

const inder = Inder({
  variable: "--font-inder",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiero Ayudar",
  description:
    "En QuieroAyudar gestionamos las emergencias nacionales para que puedas colaborar, donar e involucrarte cuando la comunidad más lo necesita.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${boldonse.variable} ${inder.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

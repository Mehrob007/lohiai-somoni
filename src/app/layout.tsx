import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/globalStyles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContentRight from "@/components/ui/HomeContentRight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Коллеҷи милитсияи",
  description: "Коллеҷи милитсияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout">
          <Header />
          <div className="home">
            {children}

            <HomeContentRight />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

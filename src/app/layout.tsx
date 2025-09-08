import type { Metadata } from "next";
import "./globals.css";
import "../styles/globalStyles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContentRight from "@/components/ui/HomeContentRight";

export const metadata: Metadata = {
  title: "Коллеҷи милитсияи",
  description: "Коллеҷи милитсияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" /> */}
      </head>
      <body>
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

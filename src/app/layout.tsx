import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/globalStyles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import imgPerson1 from "../../public/images/person1.jpg";
import imgPerson2 from "../../public/images/person2.jpg";
import imgPerson3 from "../../public/images/person3.webp";

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
  description: "Коллеҷи милитсияи Вазорати корҳои дохилии Тоҷикистон",
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
            <div className="home-content-right">
              <Card
                activeBoxHeader={true}
                url={imgPerson1}
                discription="Суханронии Асосгузори сулҳу ваҳдати миллӣ, Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон, муҳтарам Эмомалӣ Раҳмон бо муносибати Рӯзи дониш ва ифтитоҳи бинои нави Академияи Вазорати корҳои дохилӣ"
              />
              <Card
                // activeBoxHeader={true}
                url={imgPerson2}
                discription="Вазири корҳои дохилии Ҷумҳурии Тоҷикистон - РАҲИМЗОДА РАМАЗОН ҲАМРО"
              />
              <Card
                // activeBoxHeader={true}
                url={imgPerson3}
                discription="САРДОРИ КОЛЛЕҶИ МИЛИТСИЯИ ВКД 
ҶУМҲУРИИ ТОҶИКИСТОН, 
ПОДПОЛКОВНИКИ МИЛИТСИЯ  
НУРУЛЛОЗОДА  МЕҳРУЛЛО"
              />
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

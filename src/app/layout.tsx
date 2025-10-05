import type { Metadata } from "next";
import "./globals.css";
import "../styles/globalStyles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContentRight from "@/components/ui/HomeContentRight";

export const metadata: Metadata = {
  title:
    "Колледж милиции МВД Таджикистана | Государственное образовательное учреждение СПО",
  description:
    "Государственное образовательное учреждение «Колледж милиции МВД Республики Таджикистан» в г. Куляб с 2014 года готовит специалистов для органов правопорядка. Поддержка сирот и детей сотрудников МВД.",
  keywords: [
    "Коллеҷи милитсия",
    "ВКД Тоҷикистон",
    "Таҳсилот",
    "Амният",
    "Ҳуқуқ",
    "Коллеҷи милитсияи ВКД Тоҷикистон",
    "Омӯзиши мутахассисони мақомоти ҳифзи ҳуқуқ",
    "Коллеҷи милитсияи Кӯлоб",
    "Колледж милиции",
    "МВД Таджикистан",
    "Образование",
    "Безопасность",
    "Право",
    "Колледж милиции МВД Таджикистана",
    "Колледж милиции Куляб",
    "Среднее профессиональное образование МВД Таджикистан",
    "Учебное заведение МВД Таджикистана",
    "Подготовка специалистов правоохранительных органов",
    "Колледж для сирот и детей сотрудников МВД",
    "Поступление в колледж МВД Таджикистан",
    "На таджикском (для локального SEO):",
    "Police College",
    "MIA Tajikistan",
    "Education",
    "Security",
    "Law",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "Колледж милиции МВД Таджикистана | Государственное образовательное учреждение СПО",
    description:
      "Государственное образовательное учреждение «Колледж милиции МВД Республики Таджикистан» в г. Куляб с 2014 года готовит специалистов для органов правопорядка. Поддержка сирот и детей сотрудников МВД.",
    url: "https://kvkd.tj/",
    siteName:
      "Колледж милиции МВД Таджикистана | Государственное образовательное учреждение СПО",
    images: [
      {
        url: "https://kvkd.tj/_next/image?url=%2Ficons%2Flogo1.png&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Колледж милиции МВД Таджикистана | Государственное образовательное учреждение СПО",
      },
    ],
    locale: "tg_TJ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Колледж милиции МВД Таджикистана | Государственное образовательное учреждение СПО",
    description:
      "Государственное образовательное учреждение «Колледж милиции МВД Республики Таджикистан» в г. Куляб с 2014 года готовит специалистов для органов правопорядка. Поддержка сирот и детей сотрудников МВД.",
    images: ["https://kvkd.tj/_next/image?url=%2Ficons%2Flogo1.png&w=384&q=75"],
  },
  verification: {
    google: "unY-sbaM-A-o9DUW2Uggfm4IFyAeAphKKpEXCSBNan8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

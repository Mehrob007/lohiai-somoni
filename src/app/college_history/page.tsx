"use client";
import SectionTable from "@/components/element/SectionTable";

// export const metadata: Metadata = {
//   title:
//     "Колледж милиции МВД Таджикистана | Государственное образовательное учреждение СПО",
//   description:
//     "Государственное образовательное учреждение «Колледж милиции МВД Республики Таджикистан» в г. Куляб с 2014 года готовит специалистов для органов правопорядка. Поддержка сирот и детей сотрудников МВД.",
//   keywords: [
//     // таджикский
//     "Коллеҷи милитсия",
//     "ВКД Тоҷикистон",
//     "Таҳсилот",
//     "Амният",
//     "Ҳуқуқ",
//     // русский
//     "Колледж милиции",
//     "МВД Таджикистан",
//     "Образование",
//     "Безопасность",
//     "Право",
//     // английский
//     "Police College",
//     "MIA Tajikistan",
//     "Education",
//     "Security",
//     "Law",
//   ],
//   icons: {
//     icon: "/favicon.svg",
//     shortcut: "/favicon.ico",
//   },
// };

export default function collegeHistory() {

  
  return (
    <>
      <div className="khabarho">
        {/* <div className="header-component">
          <h1>Таърихи Коллеҷи милитсия</h1>
        </div> */}

        <div className="content-component">
          <SectionTable
            urlGet={"college-history/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

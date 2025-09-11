"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function collegeHistory() {
  return (
    <>
      <Head>
        <title>Таърихи Коллеҷи милитсия | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Таърихи Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон. Оғоз, рушд ва саҳми он дар тарбияи мутахассисони соҳаи низомӣ."
        />
        <meta
          name="keywords"
          content="Таърихи Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон, таърихи донишгоҳ, коллеҷи ҳарбӣ, омӯзиш, рушд"
        />
        <meta
          property="og:title"
          content="Таърихи Коллеҷи милитсия | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Омӯзед таърихи таъсис ва рушди Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kvkd.tj/college-history" />
        <meta
          property="og:image"
          content="https://kvkd.tj/_next/image?url=%2Ficons%2Flogo1.png&w=384&q=75"
        />
      </Head>
      <div className="khabarho">
        <div className="header-component">
          <h1>Таърихи Коллеҷи милитсия</h1>
        </div>

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

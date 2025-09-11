"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function collegeStructure() {
  return (
    <>
      <Head>
        <title>Сохтори Коллеҷи милитсия | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Сохтори Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон. Маълумот дар бораи факултетҳо, шуъбаҳо ва таркиби таълимӣ."
        />
        <meta
          name="keywords"
          content="Сохтори Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон, сохтори донишгоҳ, факултетҳо, шуъбаҳо, таркиб"
        />
        <meta
          property="og:title"
          content="Сохтори Коллеҷи милитсия | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Маълумот дар бораи сохтор, факултетҳо ва шуъбаҳои Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
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
          <h1>Сохтори Коллеҷ</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"college-structure/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

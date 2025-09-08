"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function Leadership() {
  return (
    <>
      <Head>
        <title>Роҳбарият | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Маълумот дар бораи роҳбарият ва шахсони масъули Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
        />
        <meta
          name="keywords"
          content="Роҳбарият, шахсони масъул, Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон, идоракунӣ"
        />
        <meta
          property="og:title"
          content="Роҳбарият | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Омӯзед маълумот дар бораи роҳбарият ва шахсони масъули Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kvkd.tj/college-history" />
        <meta
          property="og:image"
          content="https://kvkd.tj/favicon.svg"
        />
      </Head>
      <div className="khabarho">
        <div className="header-component">
          <h1>Роҳбарият</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"leadership/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

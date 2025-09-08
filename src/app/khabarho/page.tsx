"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function Khabarho() {
  return (
    <>
      <Head>
        <title>Хабарҳо | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Охирин хабарҳо ва рӯйдодҳои Академияи ҳарбӣ Тоҷикистон. Маълумоти нав оид ба фаъолият ва дастовардҳои Коллеҷи милитсия."
        />
        <meta
          name="keywords"
          content="Хабарҳо, рӯйдодҳо, Академияи ҳарбӣ, Тоҷикистон, Коллеҷи милитсия, навигариҳо, дастовардҳо"
        />
        <meta
          property="og:title"
          content="Хабарҳо | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Охирин хабарҳо ва рӯйдодҳои Академияи ҳарбӣ Тоҷикистон. Дастовардҳо ва фаъолияти Коллеҷи милитсия."
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
          <h1>Хабарҳо</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"news/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

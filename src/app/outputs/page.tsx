"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function Сadets() {
  return (
    <>
      <Head>
        <title>Баромадҳо | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Баромадҳо ва натиҷаҳои илмӣ-таҳқиқотии Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
        />
        <meta
          name="keywords"
          content="Баромадҳо, натиҷаҳо, илмӣ-таҳқиқотӣ, Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон"
        />
        <meta
          property="og:title"
          content="Баромадҳо | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Озмоед баромадҳо ва натиҷаҳои илмӣ-таҳқиқотии Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
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
          <h1>Баромадҳо</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"outputs/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

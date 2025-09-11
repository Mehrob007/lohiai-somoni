"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function Сadets() {
  return (
    <>
      <Head>
        <title>Курсанти беҳтарин</title>
        <meta
          name="description"
          content="Рӯйхати беҳтарин курсантони Академияи ҳарбӣ Тоҷикистон. Бубинед курсантҳои пешсаф бо дастовардҳои баланди таълимӣ ва интизомӣ."
        />
        <meta
          name="keywords"
          content="Курсанти беҳтарин, Академияи ҳарбӣ, Тоҷикистон, курсантҳо, донишҷӯёни ҳарбӣ, дастовардҳо"
        />
        <meta
          property="og:title"
          content="Курсанти беҳтарин | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Рӯйхати курсантҳои пешсаф бо натиҷаҳои баланд дар Академияи ҳарбӣ Тоҷикистон."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kvkd.tj/cadets" />
        <meta
          property="og:image"
          content="https://kvkd.tj/_next/image?url=%2Ficons%2Flogo1.png&w=384&q=75"
        />
      </Head>
      <div className="khabarho">
        <div className="header-component">
          <h1>Курсанти беҳтарин</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"cadets/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

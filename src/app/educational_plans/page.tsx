"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function EducationalPlans() {
  return (
    <>
      <Head>
        <title>Нақшаҳои таълимӣ ва нашрияҳо | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Нақшаҳои таълимӣ ва нашрияҳои Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон. Маълумот барои донишҷӯён ва омӯзгорон."
        />
        <meta
          name="keywords"
          content="Нақшаҳои таълимӣ, нашрияҳо, Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон, донишҷӯён, омӯзгорон"
        />
        <meta
          property="og:title"
          content="Нақшаҳои таълимӣ ва нашрияҳо | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Дастрасӣ ба нақшаҳои таълимӣ ва нашрияҳои Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
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
          <h1>Нақшаҳои таълимӣ ва нашрияҳо</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"educational-plans/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

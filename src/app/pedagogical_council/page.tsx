"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function PedagogicalСouncil() {
  return (
    <>
      <Head>
        <title>Шӯрои илмию педагогӣ | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Маълумот дар бораи Шӯрои илмию педагогӣ ва фаъолиятҳои он дар Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
        />
        <meta
          name="keywords"
          content="Шӯрои илмию педагогӣ, Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон, педагогон, илмию тадқиқот"
        />
        <meta
          property="og:title"
          content="Шӯрои илмию педагогӣ | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Шинос шавед бо Шӯрои илмию педагогӣ ва фаъолиятҳои он дар Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон."
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
          <h1>Шӯрои илмию педагогӣ</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"pedagogical-council/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

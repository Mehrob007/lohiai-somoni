"use client";
import SectionTable from "@/components/element/SectionTable";
import Head from "next/head";

export default function Acts() {
  return (
    <>
      <Head>
        <title>Санадҳо</title>
        <meta
          name="description"
          content="Барои дидани рӯйхати санадҳо ворид шавед."
        />
        <meta name="keywords" content="санадҳо, ҳуҷҷатҳо, Тоҷикистон" />
        <meta property="og:title" content="Санадҳо" />
        <meta
          property="og:description"
          content="Барои дидани рӯйхати санадҳо ворид шавед."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kvkd.tj/acts" />
        <meta property="og:image" content="https://kvkd.tj/favicon.svg" />
      </Head>

      <div className="khabarho">
        <div className="header-component">
          <h1>Санадҳо</h1>
        </div>

        <div className="content-component">
          <SectionTable
            urlGet={"acts/list"}
            headerTable={["", "title"]}
            styleHeader={{ gridTemplateColumns: "100px 200px" }}
            styleItem={{ gridTemplateColumns: "100px 70%" }}
          />
        </div>
      </div>
    </>
  );
}

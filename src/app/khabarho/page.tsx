"use client";
import SectionTable from "@/components/element/SectionTable";

export default function Khabarho() {
  return (
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
  );
}

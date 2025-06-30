"use client";
import SectionTable from "@/components/element/SectionTable";

export default function Сadets() {
  return (
    <div className="khabarho">
      <div className="header-component">
        <h1>Баромадхо</h1>
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
  );
}

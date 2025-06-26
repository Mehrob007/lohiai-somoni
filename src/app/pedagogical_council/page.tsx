"use client";
import SectionTable from "@/components/element/SectionTable";

export default function PedagogicalСouncil() {
  return (
    <div className="khabarho">
      <div className="header-component">
        <h1>Шурои илми-педагоги</h1>
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
  );
}

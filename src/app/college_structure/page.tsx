"use client";
import SectionTable from "@/components/element/SectionTable";

export default function collegeStructure() {
  return (
    <div className="khabarho">
      <div className="header-component">
        <h1>Сохтори Коллеч</h1> 
      </div>

      <div className="content-component">
        <SectionTable
          urlGet={"college-structure/list"}
          headerTable={["", "title"]}
          styleHeader={{ gridTemplateColumns: "100px 200px" }}
          styleItem={{ gridTemplateColumns: "100px 70%" }}
        />
      </div>
    </div>
  );
}

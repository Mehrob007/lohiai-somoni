import { redirect } from "next/navigation";
import React from "react";

interface card {
  url: string;
  discription: string;
  activeBoxHeader?: boolean;
  id: string;
}
export default function Card({ url, discription, activeBoxHeader, id }: card) {
  return (
    <div
      className="card"
      style={{ marginTop: activeBoxHeader ? "32px" : "" }}
      onClick={() => redirect(`/list/leadership_list-${id}`)}
    >
      {activeBoxHeader ? <span>Суханронии Президент</span> : ""}
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}files/${url}`}
        alt="img"
        width={192}
        height={133}
      />
      <p>{discription.toUpperCase()}</p>
    </div>
  );
}

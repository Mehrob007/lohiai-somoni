import React from "react";

interface card {
  url: string;
  discription: string;
  activeBoxHeader?: boolean;
}
export default function Card({ url, discription, activeBoxHeader }: card) {
  return (
    <div className="card" style={{ marginTop: activeBoxHeader ? "32px" : "" }}>
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

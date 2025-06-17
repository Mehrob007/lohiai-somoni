import Image from "next/image";
import React from "react";

interface card {
  url: string;
  discription: string;
  activeBoxHeader?: boolean;
}
export default function Card({ url, discription, activeBoxHeader }: card) {
  return (
    <div className="card" style={{ marginTop: activeBoxHeader ? "32px" : "" }}>
      {activeBoxHeader ? <span>Суханронии президент</span> : ""}
      <Image src={url} width={233} height={283} alt={"card-img"} />
      <p>{discription}</p>
    </div>
  );
}

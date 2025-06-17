import navBar from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-banner">
        {/* <Image width={88} height={117} src={"/icons/icon-banner2.png"} alt="icon-banner" /> */}
        <div>
          <Image
            width={170}
            height={177}
            src={"/icons/icon-banner1.png"}
            alt="icon-banner"
          />
          <h1>Академияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон </h1>
        </div>
      </div>
      <ul className="header-navbar">
        {navBar.map((e, i) => (
          <li key={i} className={e.class || ""}>
            <Link href={e.url || ""}>{e.label}</Link>
            <ol>
              {e.subUrl &&
                e.subUrl.map((e, i) => (
                  <li key={i}>
                    <Link href={e.url || ""}> {e.label}</Link>
                  </li>
                ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
}

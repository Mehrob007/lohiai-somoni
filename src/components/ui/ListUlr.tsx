import Link from "next/link";
import React from "react";

interface url {
  label: string;
  url?: string;
}

export default function ListUlr({
  title,
  arrUrl,
}: {
  title: string;
  arrUrl: url[] | undefined;
}) {
  return (
    <div className="list">
      <div className="list-header">
        <h1>{title}</h1>
      </div>

      <div className="list-content">
        {Array.isArray(arrUrl) &&
          arrUrl.map((e, i) => (
            <Link href={e.url || ""} key={i}>
              <span>{e.label}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}

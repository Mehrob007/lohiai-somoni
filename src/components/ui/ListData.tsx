"use client";
import { dataList } from "@/api/dataList";
import { ItemList } from "@/types/dataList";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";

export default function ListData({
  getUrl,
  title,
  redirectButton,
}: {
  getUrl: string;
  title: string;
  redirectButton: {
    title: string;
    url: string;
  };
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ItemList[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data: ItemList[] = await dataList.getDataList(getUrl);
        setData(data.filter((_, i) => i < 4));
      } catch (e) {
        console.error(e);
        setError("Маълумот ба даст оварда нашуд.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error.length) {
    return <h1>Маълумот ба даст оварда нашуд.</h1>;
  }
  return (
    <div className="list list-data">
      <div className="list-header">
        <h1>{title}</h1>
        <Link href={redirectButton.url}>{redirectButton.title}</Link>
      </div>

      <div className="list-content-second">
        {Array.isArray(data) &&
          data.map((item, i) => (
            <div key={i}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.main_photo_id}`}
                alt="list-photo"
                width={100}
                height={100}
              />
              <div>
                <Link
                  href={
                    `/list/${getUrl?.split("/", 3).join("_")}-${item._id}` || ""
                  }
                >
                  {item.main_title}
                </Link>
                <span>
                  <MdDateRange />
                  {item.createdAt
                    ?.split("T")[0]
                    .split("-")
                    .map((e, i) => (i !== 0 ? `${e}.` : e))
                    .reverse() || ""}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

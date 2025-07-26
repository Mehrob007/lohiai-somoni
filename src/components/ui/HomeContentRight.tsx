"use client";
import globalFunctions from "@/hooks/globalFunctions";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface itemChildrenNews {
  description: string;
  photo_id: string;
}
interface itemGetNews {
  _id: string;
  main_title: string;
  main_photo_id: string;
  main_description: string;
  content?: itemChildrenNews[];
}

export default function HomeContentRight() {
  const urlGet = "leadership/list";
  const { getItems } = globalFunctions();
  const [data, setData] = useState<itemGetNews[] | itemGetNews | null>(null);
  const getData = async () => {
    if (!urlGet) {
      console.error("URL for fetching data is not provided.");
      return;
    }
    console.log("sended.");
    await getItems(urlGet, undefined, setData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home-content-right">
      {Array.isArray(data) &&
        data
          .filter((_, i) => i < 3)
          .map((e, i) => (
            <Card
              key={i}
              activeBoxHeader={i === 0 && true}
              url={`${e.main_photo_id}`}
              discription={e.main_title}
            />
          ))}
    </div>
  );
}

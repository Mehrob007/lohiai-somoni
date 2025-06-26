// app/list/[item].tsx

"use client";

import globalFunctions from "@/hooks/globalFunctions";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Item() {
  const params = useParams();
  const item = params?.item;

  console.log("path", item);
  

  const id = typeof item === "string" && item?.split("list")[1]?.split("-")[1];
  const urlGet =
    typeof item === "string" && `${item.split("_")[0]}/list`

  const { getItems } = globalFunctions();

  console.log("urlGet", urlGet);
  

  const [data, setData] = useState<itemGetNews[] | itemGetNews | null>(null);

  const getData = async () => {
    if (!urlGet) {
      console.error("URL for fetching data is not provided.");
      return;
    }
    console.log("sended.");

    const params = { id: id as string };
    await getItems(urlGet, params, setData);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", data);
  if (!data) {
    return;
  }

  return (
    <div className="item-page">
      {data && !Array.isArray(data) ? (
        <div className="item-page-content">
          <h1>{data.main_title}</h1>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}files/${data.main_photo_id}`}
            alt="main_photo"
            width={835}
            height={553}
          />
          {data.content &&
            data.content.length > 0 &&
            data.content.map((item, i) => (
              <div key={i}>
                {item.photo_id && <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.photo_id}`}
                  alt={`photo_${i}`}
                  width={835}
                  height={553}
                />}
                <p>{item.description}</p>
              </div>
            ))}
          {/* <p>{data.main_description}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

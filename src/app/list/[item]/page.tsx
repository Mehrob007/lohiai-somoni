// app/list/[item].tsx

"use client";

// import P from "@/components/ui/P";
import globalFunctions from "@/hooks/globalFunctions";
// import Image from "next/image";
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


  const id = typeof item === "string" && item?.split("list")[1]?.split("-")[1];
  const urlGet = typeof item === "string" && `${item.split("_")[0]}/list`;

  const { getItems } = globalFunctions();

  const [data, setData] = useState<itemGetNews[] | itemGetNews | null>(null);

  const getData = async () => {
    if (!urlGet) {
      console.error("URL for fetching data is not provided.");
      return;
    }

    const params = { id: id as string };
    await getItems(urlGet, params, setData);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return;
  }

  return (
    <div className="item-page">
      {data && !Array.isArray(data) ? (
        <div className="item-page-content">
          <h1>{data.main_title}</h1>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}files/${data.main_photo_id}`}
            alt="main_photo"
            width={835}
            height={553}
          />
          {data.content &&
            data.content.length > 0 &&
            data.content.map((item, i) => (
              <>
                {item.photo_id || item.description.length ? (
                  <div key={i}>
                    {item.photo_id ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.photo_id}`}
                        alt={`photo_${i}`}
                        width={835}
                        height={553}
                      />
                    ) : (
                      ""
                    )}
                    {/* {item.description.length ? <P>{item.description}</P> : ""} */}
                    {item.description.length ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
          {/* <p>{data.main_description}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

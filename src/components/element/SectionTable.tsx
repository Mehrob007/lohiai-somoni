import globalFunctions from "@/hooks/globalFunctions";
// import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import P from "../ui/P";

interface itemChildrenNews {
  description: string;
  photo_id: string;
}

export interface Item {
  main_title: string;
  main_photo_id: string;
  main_description: string;
  content?: itemChildrenNews[];
}
interface styles {
  [key: string]: string;
}
// interface ApiResponse {
//   data: Item[] | null;
//   hasMore: boolean;
//   next_id: number;
// }
interface sectionTable {
  styleHeader?: styles;
  styleItem?: styles;
  urlGet: string | undefined;
  headerTable: string[] | undefined;
}
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

export default function SectionTable({
  urlGet,
  // styleHeader,
  styleItem,
}: // headerTable,
sectionTable) {
  const { getItems } = globalFunctions();

  const [data, setData] = useState<itemGetNews[] | itemGetNews | null>(null);

  const getData = async () => {
    if (!urlGet) {
      console.error("URL for fetching data is not provided.");
      return;
    }
    await getItems(urlGet, undefined, setData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section-table">
      {/* <div className="section-table-header" style={styleHeader}>
        {Array.isArray(headerTable) &&
          headerTable.map((e, i) => <div key={i}>{e}</div>)}
      </div> */}
      <div className="section-table-content">
        {Array.isArray(data) &&
          data?.map((item, i) => (
            <div key={i} style={styleItem}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.main_photo_id}`}
                alt="img"
                width={192}
                height={133}
              />
              <div>
                <Link
                  href={`/list/${urlGet?.split("/", 3).join("_")}-${item._id}`}
                >
                  {item.main_title}
                </Link>
                {item.main_description.length ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.main_description }}
                  />
                ) : (
                  ""
                )}
                {/* <P>{item.main_description as string}</P> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

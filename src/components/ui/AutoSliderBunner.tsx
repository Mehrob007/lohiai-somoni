"use client";
import { dataList } from "@/api/dataList";
import { autoSlider } from "@/types/autoSlider";
import { ItemList } from "@/types/dataList";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";

export default function AutoSliderBunner({
  itemsPerPage,
  itemWidth,
  gap,
  getUrl,
  routerRedirect,
}: autoSlider) {
  const [data, setData] = useState<ItemList[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const containerRef = useRef<HTMLInputElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * (itemWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (!data) return;
    const maxIndex = Math.floor(data.length / itemsPerPage);
    const newIndex = currentIndex + 1 > maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex * itemsPerPage);
  };

  // const handlePrev = () => {
  //   if (!data) return;
  //   const maxIndex = Math.floor(data.length / itemsPerPage);
  //   const newIndex = currentIndex - 1 < 0 ? maxIndex : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  //   scrollToIndex(newIndex * itemsPerPage);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await dataList.getDataList(getUrl);
        setData(data);
      } catch (e) {
        setError("Не удалось получить данные.");
        console.error(e);
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
    return <h1>{error}</h1>;
  }

  return (
    <div className="auto-slider-bunner">
      <div
        ref={containerRef}
        className="auto-slider-bunner-content"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div
              key={index}
              id={`list-id${index}`}
              style={{
                minWidth: `${itemWidth}px`,
                marginRight: `${gap}px`,
                scrollSnapAlign: "start",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.main_photo_id}`}
                alt={`slide-${index}`}
                className="w-full h-auto rounded shadow"
                width={370}
                height={262}
              />
              <div>
                <Link
                  href={routerRedirect + "_list-" + item._id}
                  className="flex-shrink-0"
                >
                  {item.main_title}
                </Link>
                <p>{item.main_description}</p>
                <span>
                  <MdDateRange />
                  {item.createdAt
                    ?.split("T")[0]
                    .split("-")
                    .map((e, i) => (i !== 0 ? `${e}.` : e))
                    .reverse() || ""}
                  <span>
                    {`${item.createdAt?.split("T")[1].split(":")[0]}:${
                      item.createdAt?.split("T")[1].split(":")[1]
                    }` || ""}
                  </span>
                </span>
              </div>
            </div>
          ))}
        <nav>
          {Array.isArray(data) &&
            Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    scrollToIndex(index * itemsPerPage);
                  }}
                  className={`${
                    currentIndex === index ? "active-button" : ""
                  }`}
                ></button>
              ),
            )}
        </nav>
      </div>
    </div>
  );
}

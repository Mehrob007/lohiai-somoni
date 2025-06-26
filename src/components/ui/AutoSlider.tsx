"use client";
import { dataList } from "@/api/dataList";
import { autoSlider } from "@/types/autoSlider";
import { ItemList } from "@/types/dataList";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function AutoSlider({
  title,
  itemsPerPage,
  itemWidth,
  itemHeight,
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

  const handlePrev = () => {
    if (!data) return;
    const maxIndex = Math.floor(data.length / itemsPerPage);
    const newIndex = currentIndex - 1 < 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex * itemsPerPage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
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
    <div className="auto-slider">
      <div className="auto-slider-header">
        <h1>{title}</h1>
        <div className="auto-slider-buttons">
          <button onClick={handlePrev}>
            <RiArrowLeftSLine />
          </button>
          <button onClick={handleNext}>
            <RiArrowLeftSLine style={{ rotate: "180deg" }} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="auto-slider-content"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {Array.isArray(data) &&
          data.map((item, index) => (
            <Link
              href={routerRedirect + "_list-" + item._id}
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${itemWidth}px`,
                marginRight: `${gap}px`,
                scrollSnapAlign: "start",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.main_photo_id}`}
                alt={`slide-${index}`}
                className="w-full h-auto rounded shadow"
                width={itemWidth}
                height={itemHeight}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

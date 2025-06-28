"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false); // по умолчанию false

  useEffect(() => {
    if (typeof window === "null") return;

    const media = window.matchMedia(query);
    setMatches(media.matches); // установка начального значения

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;

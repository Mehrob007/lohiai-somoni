"use client";
import navBar from "@/data/menu";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const pathName = usePathname();

  console.log("isMobile", isMobile);

  useEffect(() => {
    if (pathName) {
      setOpenBurger(false);
    }
  }, [pathName]);

  return (
    <div className="header">
      <div className="header-banner">
        {/* <Image width={88} height={117} src={"/icons/icon-banner2.png"} alt="icon-banner" /> */}

        {isMobile ? (
          <>
            <Image
              className="logo1"
              width={170}
              height={177}
              src={"/icons/logo1.png"}
              alt="icon-banner"
            />
            <h1>коллеҷи милитсияи вазорати корҳои дохилии тоҷикистон</h1>
            <main>
              {" "}
              <Image
                className="flag"
                width={170}
                height={177}
                src={"/icons/flag-bunner.png"}
                alt="icon-banner"
              />
              <Image
                className="building"
                width={500}
                height={177}
                src={"/icons/building-bunner.png"}
                alt="icon-banner"
              />{" "}
              <Image
                className="logo2"
                width={170}
                height={177}
                src={"/icons/logo2.png"}
                alt="icon-banner"
              />
            </main>
          </>
        ) : (
          <>
            {" "}
            <div>
              {" "}
              <Image
                width={170}
                height={177}
                src={"/icons/icon-banner1.png"}
                alt="icon-banner"
              />
              <h1>Академияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон </h1>
            </div>{" "}
          </>
        )}
      </div>

      {isMobile ? (
        <div
          className="header-navbar"
          style={{ height: openBurger ? "455px" : "" }}
        >
          <div className="burger-menu-div">
            <button onClick={() => setOpenBurger(!openBurger)}>
              <GiHamburgerMenu />
            </button>
          </div>
          <ol
            className="burger-menu"
            style={{ translate: openBurger ? "0 50px" : "0 -299px" }}
          >
            {navBar.map((e, i) => (
              <>
                {e.url && (
                  <li key={i} className={e.class || ""}>
                    <Link href={e.url || ""}>{e.label}</Link>
                  </li>
                )}
                {e.subUrl &&
                  e.subUrl.map((e, i) => (
                    <li key={i}>
                      <Link href={e.url || ""}> {e.label}</Link>
                    </li>
                  ))}
              </>
            ))}
          </ol>
        </div>
      ) : (
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
      )}
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Image src={"/icons/blg.jpg"} alt="blg" width={200} height={208} />
        <div className="footer-container-copy">
          <div className="title">
            © 2013 - 2025 Академияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон
          </div>
          <div className="address">
            Суроға:
            <br />
            Ҷумҳурии Тоҷикистон, ш.Душанбе, кӯчаи Мастонгулов 3
          </div>
          <div className="footer-container-partner">
            <div className="slideMain">
              <div className="slide">
                <Image
                  src={"/icons/president.jpg"}
                  alt="partner3"
                  width={100}
                  height={100}
                />
              </div>

              <div className="slide">
                <Image
                  src={"/icons/khovar.jpg"}
                  alt="partner2"
                  width={100}
                  height={100}
                />
              </div>
              <div className="slide">
                <Image
                  src={"/icons/mvd.jpg"}
                  alt="partner3"
                  width={100}
                  height={100}
                />
              </div>
              <div className="slide">
                <Image
                  src={"/icons/mfa.jpg"}
                  alt="partner1"
                  width={100}
                  height={100}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

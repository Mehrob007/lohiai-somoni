import Head from "next/head";
import React from "react";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Тамос | Академияи ҳарбӣ Тоҷикистон</title>
        <meta
          name="description"
          content="Маълумоти тамос бо Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон: суроға, телефон, факс ва почтаи электронӣ."
        />
        <meta
          name="keywords"
          content="Тамос Коллеҷи милитсия, Академияи ҳарбӣ, Тоҷикистон, суроға, телефон, почтаи электронӣ, факс"
        />
        <meta
          property="og:title"
          content="Тамос | Академияи ҳарбӣ Тоҷикистон"
        />
        <meta
          property="og:description"
          content="Бо Коллеҷи милитсия дар Академияи ҳарбӣ Тоҷикистон тамос гиред: суроға, телефон, факс ва почтаи электронӣ."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kvkd.tj/college-history" />
        <meta
          property="og:image"
          content="https://kvkd.tj/_next/image?url=%2Ficons%2Flogo1.png&w=384&q=75"
        />
      </Head>
      <div className="khabarho">
        <div className="header-component">
          <h1>Тамос</h1>
        </div>

        <div className="content-component">
          <p>
            <span>Суроға: </span>
            Вилояти Хатлон, ш. Кӯлоб, кӯчаи А. Абдураҳмонов 33
          </p>
          <p>
            <span>Телефон: </span>
            +992 (83322) 2 30 93
          </p>
          <p>
            <span>Факс: </span>
            23 0 99
          </p>
          <p>
            <span>E-Mail: </span>
            kolledzhvkd.kulob@mail.ru
          </p>
        </div>
      </div>
    </>
  );
}

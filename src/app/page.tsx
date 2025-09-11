import AutoSlider from "@/components/ui/AutoSlider";
import AutoSliderBunner from "@/components/ui/AutoSliderBunner";
import HorizontalList from "@/components/ui/HorizontalList";
import ListData from "@/components/ui/ListData";
import ListUlr from "@/components/ui/ListUlr";
import navBar from "@/data/menu";
import Head from "next/head";


export default function Home() {
  //   const itemsPerPage = 4;
  //   const itemWidth = 170;
  //   const itemHeight = 227;
  //   const gap = 16;

  return (
    <>
      <Head>
        <title>Асосӣ</title>
        <meta
          name="description"
          content="Коллеҷи милитсияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон."
        />
        <meta name="keywords" content="санадҳо, ҳуҷҷатҳо, Тоҷикистон" />
        <meta property="og:title" content="Санадҳо" />
        <meta
          property="og:description"
          content="Коллеҷи милитсияи Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kvkd.tj" />
        <meta property="og:image" content="https://kvkd.tj/favicon.svg" />
      </Head>
      <div className="home-content-left">
        <AutoSliderBunner
          getUrl="outputs/list"
          title="Шӯрои илмию педагогӣ"
          itemsPerPage={1}
          itemWidth={785}
          itemHeight={275}
          gap={30}
          routerRedirect="/list/outputs"
        />
        <hr className="alt" />
        <div className="home-content-child">
          <ListUlr title="Коллеҷи милитсия" arrUrl={navBar[1].subUrl} />
          <ListData
            title="Хабарҳо"
            getUrl={"news/list"}
            redirectButton={{ title: "Ҳамаи Хабарҳо »", url: "/khabarho" }}
          />
        </div>
        <hr className="alt" />
        <HorizontalList
          title="Курсантони беҳтарин"
          getUrl={"cadets/list"}
          redirectButton={{
            title: "Ҳамаи Курсантони беҳтарин »",
            url: "/cadets",
          }}
        />
      </div>
      <AutoSlider
        getUrl="pedagogical-council/list"
        title="Шӯрои илмию педагогӣ"
        itemsPerPage={3}
        itemWidth={170}
        itemHeight={227}
        gap={16}
        routerRedirect="/list/pedagogical-council"
      />
    </>
    // </div>
  );
}

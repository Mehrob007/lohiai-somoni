import AutoSlider from "@/components/ui/AutoSlider";
import ListUlr from "@/components/ui/ListUlr";
import navBar from "@/data/menu";

export default function Home() {
  //   const itemsPerPage = 4;
  //   const itemWidth = 170;
  //   const itemHeight = 227;
  //   const gap = 16;

  return (
    // <div className="home">
    <div className="home-content-left">
      <AutoSlider
        getUrl="pedagogical-council/list"
        title="Шурои илми-педагоги"
        itemsPerPage={4}
        itemWidth={170}
        itemHeight={227}
        gap={16}
        routerRedirect="/list/pedagogical-council"
      />
      <ListUlr title="Коллеҷи милитсия" arrUrl={navBar[1].subUrl} />
    </div>

    // </div>
  );
}

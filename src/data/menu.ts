interface SubUrl {
  label: string;
  url?: string;
}
interface navbar {
  label: string;
  url?: string;
  subUrl?: SubUrl[];
  class?: string;
}

const navBar: navbar[] = [
  {
    label: "Асосӣ",
    url: "/",
  },
  {
    label: "Коллечи милитсия",
    // url: "/khabarho",
    subUrl: [
      {
        label: "Рохбарият",
        url: "/leadership",
      },
      {
        label: "Таърихи Коллечи милитсия",
        url: "/college-history",
      },
      {
        label: "Сохтори Коллеч",
        url: "/college-structure",
      },
      {
        label: "Курссанти бехтари",
        url: "/cadets",
      },
    ],
  },
  {
    label: "Хабарњо",
    url: "/khabarho",
  },
  {
    label: "Баромадхо",
    url: "/outputs",
  },
  {
    label: "Таълим ва илм",
    subUrl: [
      {
        label: "Наќшахои таълими ва нашрияхо",
        url: "/educational-plans",
      },
      {
        label: "Шурои илми-педагоги",
        url: "/pedagogical-council",
      },
    ],
    class: "educational-plans"
  },
  {
    label: "Санадҳо",
    url: "/acts",
  },
  {
    label: "Тамос",
    url: "/contacts",
  },
];

export default navBar;

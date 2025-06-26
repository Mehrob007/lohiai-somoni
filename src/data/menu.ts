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
    label: "Коллеҷи милитсия",
    // url: "/khabarho",
    subUrl: [
      {
        label: "Рохбарият",
        url: "/leadership",
      },
      {
        label: "Таърихи Коллеҷи милитсия",
        url: "/college_history",
      },
      {
        label: "Сохтори Коллеч",
        url: "/college_structure",
      },
      {
        label: "Курссанти бехтари",
        url: "/cadets",
      },
    ],
  },
  {
    label: "Хабарҳо",
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
        url: "/educational_plans",
      },
      {
        label: "Шурои илми-педагоги",
        url: "/pedagogical_council",
      },
    ],
    class: "educational-plans",
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

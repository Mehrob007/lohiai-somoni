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
    subUrl: [
      {
        label: "Роҳбарият",
        url: "/leadership",
      },
      {
        label: "Таърихи Коллеҷи милитсия",
        url: "/college_history",
      },
      {
        label: "Сохтори Коллеҷ",
        url: "/college_structure",
      },
      {
        label: "Курсанти беҳтарин",
        url: "/cadets",
      },
    ],
  },
  {
    label: "Хабарҳо",
    url: "/khabarho",
  },
  {
    label: "Баромадҳо",
    url: "/outputs",
  },
  {
    label: "Таълим ва илм",
    subUrl: [
      {
        label: "Нақшаҳои таълимӣ ва нашрияҳо",
        url: "/educational_plans",
      },
      {
        label: "Шӯрои илмию педагогӣ",
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

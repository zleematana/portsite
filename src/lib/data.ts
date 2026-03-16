export interface PhysicalSpec {
  label: string;
  value: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  type: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export const PHYSICAL_SPECS: PhysicalSpec[] = [
  { label: "Возраст", value: "33" },
  { label: "Рост", value: "188 см" },
  { label: "Телосложение", value: "Атлетическое" },
  { label: "Волосы", value: "Светло-русые" },
];

export const SKILLS_TAGS: string[] = [
  "Рок-вокалист",
  "Завязываю шнурки",
  "Акробатика",
  "Игра на нервах",
  "Файер-шоу",
  "Стойка на руках",
  "Меняю лампочки",
  "Бокс",
  "Горю — в прямом смысле",
  "Гитара",
  "Боевые искусства",
  "Вяжу как бурма",
  "Огненное дыхание",
  "Укрощаю публику",
  "Жонглирование",
  "Кулинария",
  "Прыгаю выше головы",
  "Вождение авто",
  "Умею молчать красиво",
  "Слышу музыку в тишине",
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2019 — н.в.",
    title: "Мюзикл «Queen»",
    type: "Театр",
    description:
      "Главная роль в рок-музыкальном спектакле. Живое пение, актёрская игра и работа с многотысячной аудиторией.",
  },
  {
    year: "2022",
    title: "Независимый художественный фильм",
    type: "Кино",
    description:
      "Роль второго плана в инди-проекте. Работа на съёмочной площадке, взаимодействие с режиссёром и командой.",
  },
  {
    year: "2020 — 2023",
    title: "Ведущий крупных мероприятий",
    type: "Ивенты",
    description:
      "3 года профессионального ведения корпоративных и развлекательных мероприятий. Работа с живой аудиторией.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/hero-main.jpg", alt: "Портрет" },
  { src: "/images/guitar.jpg", alt: "Гитарное выступление" },
  { src: "/images/fire.jpg", alt: "Файер-шоу" },
  { src: "/images/acrobatic.jpg", alt: "Акробатика" },
  { src: "/images/123.jpg", alt: "Выступление" },
  { src: "/images/dkqqhlSv3PwjJIRYDt98NbXE4Cx9JvBXn2QmbENUGlYGi__d7qlMONdY11e7rKU8nrRDFwQwYBJvJbbnAmA1R4lI.jpg", alt: "Фото 6" },
  { src: "/images/t8hOYJDMgnLslb33QtdL_cqIJo8aAbOeviqlUYF7ENgqHG8oXUd9wNhbHufON8MBpKKKjKSx9IXN5BGo2W3rqoxA.jpg", alt: "Фото 7" },
  { src: "/images/qkLyJvWz8SM_OF7le87td8nSeR8sZkOOK2xn1jhoFtx9fWCsSQVwthhZC_ASRDNV8e-qI-jIW41xi09t2KIqOl-e.jpg", alt: "Фото 8" },
  { src: "/images/zpP7jcOEB8GhFfO73As54yKMeIiBaKc4CvrfB-7109XNC02Fyc702wRph8DcrlH2pNyWMxs4BsA1Dm7y8161yaiY.jpg", alt: "Фото 9" },
  { src: "/images/WzbIpfek0GhVYRZDajdR9olpQNt-DihLgVlKCCiGxyYMLqWw6nFksU4XUEkKSeFEKpc3_8C0L3aHidFyiIszYqKI.jpg", alt: "Фото 10" },
  { src: "/images/UwNw4RD5wAHprvYLB9KxfXhEZ9K38hOUpBTOspViXAoH0zIbXcL17fRV0EvLh7CrLg-OWoHZiu-lHMCWYNsr78YD.jpg", alt: "Фото 11" },
  { src: "/images/UR3e_hQAAgs_h7FNAefBlaGj76qAO8hBA_NOCkA3MxK_6jmtRNKGqU1zUX60Fydw_vd1jvTGzn8fFkyY7a1Le7UE.jpg", alt: "Фото 12" },
  { src: "/images/oNyZUXUPOSBs4ynmI6TVQ1j2rBS-rz7ovXlZvSC4bcWnmy0-1jvux_1rlQ9FBQGjOHvT2co37QzuAM0Is-nyTGBc.jpg", alt: "Фото 13" },
  { src: "/images/IyTjFI5igrNmhCMGYmqMEq3D6oT2Q3HHPuELT-xLFRyoLcgV6YMZr_o87jTgX0vKyOGOC0KH.jpg", alt: "Фото 14" },
  { src: "/images/I5tIoJb9qSl7kX3uK-GSjL5gUrIIG8zSAsNIXpRAlsrZWu69VJL8R65iY2FgDJcifAbcC6h9.jpg", alt: "Фото 15" },
];

export const CONTACT_LINKS: ContactLink[] = [
  { label: "Telegram", href: "https://t.me/username", icon: "Send" },
  { label: "WhatsApp", href: "https://wa.me/7XXXXXXXXXX", icon: "MessageCircle" },
  { label: "Instagram", href: "https://instagram.com/username", icon: "Instagram" },
];

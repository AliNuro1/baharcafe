export const site = {
  name: "Bahar Cafe",
  tagline: "Somali & Kenyan kitchen",
  location: {
    name: "Bahar Cafe",
    street: "Claremont Road",
    city: "Manchester",
    country: "United Kingdom",
    mapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Bahar+Cafe+Claremont+Road+Manchester",
  },
  phone: {
    label: "Phone number TBC",
    href: "",
    placeholder: true,
  },
  hours: {
    placeholder: true,
    summary: "Opening hours TBC",
    lines: [
      { days: "Monday – Thursday", time: "TBC" },
      { days: "Friday – Sunday", time: "TBC" },
    ],
  },
  order: {
    deliveroo: {
      label: "Deliveroo",
      href: "#",
      placeholder: true,
    },
    justEat: {
      label: "Just Eat",
      href: "#",
      placeholder: true,
    },
  },
  social: [
    { label: "Instagram", href: "#", placeholder: true },
    { label: "Facebook", href: "#", placeholder: true },
  ],
} as const;

export const featuredDishes = [
  {
    image: "BaharCafe_Anjeero.jpg",
    name: "Anjeero",
    description: "Soft, spongy Somali pancake.",
  },
  {
    image: "BaharCafe_LambLiverBreakfast.jpg",
    name: "Lamb liver",
    description: "Sautéed lamb liver with onion, peppers and spice.",
  },
  {
    image: "BaharCafe_Rice.jpg",
    name: "Bariis",
    description: "Fragrant rice, served as we cook it on Claremont Road.",
  },
  {
    image: "BaharCafe_Chapati.jpg",
    name: "Chapati",
    description: "Warm East African flatbread.",
  },
  {
    image: "BaharCafe_TilapiaLunch.jpg",
    name: "Tilapia",
    description: "Fried fish with salad and chilli.",
  },
  {
    image: "BaharCafe_PastaSaldato.jpg",
    name: "Pasta saldato",
    description: "Pasta tossed through a rich, savoury sauce.",
  },
] as const;

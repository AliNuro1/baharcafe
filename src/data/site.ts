export const site = {
  name: "Bahar Cafe",
  tagline: "Somali & Kenyan kitchen",
  location: {
    name: "Bahar Cafe",
    street: "308 Claremont Road",
    neighbourhood: "Moss Side",
    city: "Manchester",
    postcode: "M14 4EP",
    country: "United Kingdom",
    mapsSearchUrl:
      "https://www.google.com/maps/dir/?api=1&destination=308+Claremont+Road,+Manchester+M14+4EP",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=308+Claremont+Road,+Manchester+M14+4EP&output=embed",
  },
  phone: {
    label: "0161 460 6751",
    href: "tel:+441614606751",
    placeholder: false,
  },
  hours: {
    placeholder: false,
    summary: "Open every day",
    lines: [{ days: "Monday – Sunday", time: "9:00am – 6:00pm" }],
  },
  order: {
    deliveroo: {
      label: "Deliveroo",
      href: "https://deliveroo.co.uk/menu/manchester/rusholme/bahar-cafe/?utm_medium=affiliate&utm_source=google_maps_link&fulfillment_type=DELIVERY",
      placeholder: false,
    },
    justEat: {
      label: "Just Eat",
      href: "https://www.just-eat.co.uk/restaurants-baharcafe-manchester/menu?serviceType=delivery&utm_source=google&utm_medium=organic&utm_campaign=foodorder",
      placeholder: false,
    },
  },
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/baharcafemanchester/",
      placeholder: false,
    },
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
    image: "BaharCafe_LambLunchMeal.jpg",
    name: "Rice and Lamb",
    description: "Slow-cooked lamb with fragrant vegetable rice and chips.",
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
    description:
      "Spaghetti mixed through a rich tomato and mince sauce, finished with peppers, onion, coriander and chips.",
  },
] as const;

import type { StaticImageData } from "next/image";
import anjeero from "../assets/food/BaharCafe_Anjeero.jpg";
import beefSuqaarBreakfast from "../assets/food/BaharCafe_BeefSuqaarBreakfast.jpg";
import chapati from "../assets/food/BaharCafe_Chapati.jpg";
import chickenLegLunch from "../assets/food/BaharCafe_ChickenLegLunch.jpg";
import chickenLegLunchMeal from "../assets/food/BaharCafe_ChickenLegLunchMeal.jpg";
import chilli from "../assets/food/BaharCafe_Chilli.jpg";
import eggBreakfast from "../assets/food/BaharCafe_EggBreakfast.jpg";
import filletFishLunch from "../assets/food/BaharCafe_FilletFishLunch.jpg";
import fishLundyMeal from "../assets/food/BaharCafe_FishLundyMeal.jpg";
import heroShot from "../assets/food/BaharCafe_Heroshot_1.jpg";
import lambLiverBreakfast from "../assets/food/BaharCafe_LambLiverBreakfast.jpg";
import lambLunch from "../assets/food/BaharCafe_LambLunch.jpg";
import lambLunchMeal from "../assets/food/BaharCafe_LambLunchMeal.jpg";
import mahragoBreakfast from "../assets/food/BaharCafe_MahragoBreakfast.jpg";
import mixedVeggieBreakfast from "../assets/food/BaharCafe_MixedVeggieBreakfast.jpg";
import pastaSaldato from "../assets/food/BaharCafe_PastaSaldato.jpg";
import pastaWithSauce from "../assets/food/BaharCafe_PastaWithSauce.jpg";
import pineappleCake from "../assets/food/BaharCafe_PineappleCake.jpg";
import rice from "../assets/food/BaharCafe_Rice.jpg";
import shakShukaBreakfast from "../assets/food/BaharCafe_ShakShukaBreakfast.jpg";
import spinachBreakfast from "../assets/food/BaharCafe_SpinachBreakfast.jpg";
import suugo from "../assets/food/BaharCafe_Suugo.jpg";
import tilapiaFishLunchMeal from "../assets/food/BaharCafe_TilapiaFishLunchMeal.jpg";
import tilapiaLunch from "../assets/food/BaharCafe_TilapiaLunch.jpg";
import tiramisu from "../assets/food/BaharCafe_Tiramisu.jpg";

const foodImages = {
  "BaharCafe_Anjeero.jpg": anjeero,
  "BaharCafe_BeefSuqaarBreakfast.jpg": beefSuqaarBreakfast,
  "BaharCafe_Chapati.jpg": chapati,
  "BaharCafe_ChickenLegLunch.jpg": chickenLegLunch,
  "BaharCafe_ChickenLegLunchMeal.jpg": chickenLegLunchMeal,
  "BaharCafe_Chilli.jpg": chilli,
  "BaharCafe_EggBreakfast.jpg": eggBreakfast,
  "BaharCafe_FilletFishLunch.jpg": filletFishLunch,
  "BaharCafe_FishLundyMeal.jpg": fishLundyMeal,
  "BaharCafe_Heroshot_1.jpg": heroShot,
  "BaharCafe_LambLiverBreakfast.jpg": lambLiverBreakfast,
  "BaharCafe_LambLunch.jpg": lambLunch,
  "BaharCafe_LambLunchMeal.jpg": lambLunchMeal,
  "BaharCafe_MahragoBreakfast.jpg": mahragoBreakfast,
  "BaharCafe_MixedVeggieBreakfast.jpg": mixedVeggieBreakfast,
  "BaharCafe_PastaSaldato.jpg": pastaSaldato,
  "BaharCafe_PastaWithSauce.jpg": pastaWithSauce,
  "BaharCafe_PineappleCake.jpg": pineappleCake,
  "BaharCafe_Rice.jpg": rice,
  "BaharCafe_ShakShukaBreakfast.jpg": shakShukaBreakfast,
  "BaharCafe_SpinachBreakfast.jpg": spinachBreakfast,
  "BaharCafe_Suugo.jpg": suugo,
  "BaharCafe_TilapiaFishLunchMeal.jpg": tilapiaFishLunchMeal,
  "BaharCafe_TilapiaLunch.jpg": tilapiaLunch,
  "BaharCafe_Tiramisu.jpg": tiramisu,
} satisfies Record<string, StaticImageData>;

export const heroImage = heroShot;

export function dishImage(file: string) {
  const image = foodImages[file as keyof typeof foodImages];
  if (!image) {
    throw new Error(`Missing dish image: ${file}`);
  }
  return image;
}

function galleryGroup(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("breakfast")) return 0;
  if (lower.includes("lunchmeal")) return 2;
  if (lower.includes("lunch")) return 1;
  return 3;
}

export function galleryImages() {
  return Object.entries(foodImages)
    .filter(([name]) => !name.includes("Heroshot"))
    .sort(([a], [b]) => {
      const group = galleryGroup(a) - galleryGroup(b);
      if (group !== 0) return group;
      return a.localeCompare(b);
    })
    .map(([, image]) => image);
}

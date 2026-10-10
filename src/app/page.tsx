import Hero from "../components/Hero";
import Intro from "../components/Intro";
import TasteSection from "../components/TasteSection";
import OrderSection from "../components/OrderSection";
import LocationSection from "../components/LocationSection";
import GallerySection from "../components/GallerySection";
import FinalCta from "../components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <TasteSection />
      <OrderSection />
      <LocationSection />
      <GallerySection />
      <FinalCta />
    </>
  );
}

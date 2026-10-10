import Image from "next/image";
import { heroImage } from "../lib/food-images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Welcome">
      <div className={styles.media}>
        <Image
          src={heroImage}
          alt="A spread of Somali and Kenyan dishes from Bahar Cafe, including pasta, rice, grilled chicken and fried fish"
          fill
          sizes="(max-width: 767px) 92vw, 50vw"
          quality={74}
          priority
          className={styles.photo}
        />
      </div>
      <div>
        <h1 className={styles.title}>Somalian cooking, served with warmth.</h1>
        <p className={styles.lead}>
          Generous plates, familiar flavours, and a neighbourhood table on Claremont Road.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#order">
            Order Now
          </a>
          <a className="btn btn-secondary" href="#menu">
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}

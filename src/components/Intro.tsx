import Image from "next/image";
import frontImage from "../assets/brand/baharcafefront.jpeg";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={`section ${styles.intro}`} id="about" aria-labelledby="intro-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="intro-title" className="section-title">
            East African flavours, Manchester table.
          </h2>
          <p className="lede">
            Bahar Cafe is a Somali cafe with a blend of food from across East Africa. We have been in
            the heart of Moss Side, on Claremont Road, since 2009. Come for suqaar with anjeero or
            chapati for breakfast, or our traditional rice and lamb for lunch, served with the kind of
            welcome that feels like home.
          </p>
        </div>
        <figure className={styles.card}>
          <Image
            src={frontImage}
            alt="The Bahar Cafe storefront on Claremont Road, with a blue sign for East African cuisine"
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
            quality={74}
            className={styles.photo}
          />
        </figure>
      </div>
    </section>
  );
}

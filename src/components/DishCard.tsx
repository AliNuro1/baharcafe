import Image, { type StaticImageData } from "next/image";
import styles from "./DishCard.module.css";

type DishCardProps = {
  image: StaticImageData;
  name: string;
  description: string;
};

export default function DishCard({ image, name, description }: DishCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1439px) 45vw, 340px"
          quality={72}
          className={styles.photo}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}

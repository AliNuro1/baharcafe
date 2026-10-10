import Image from "next/image";
import { galleryImages } from "../lib/food-images";
import styles from "./GallerySection.module.css";

export default function GallerySection() {
  const images = galleryImages();

  return (
    <section className={`section ${styles.gallery}`} id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="gallery-title" className="section-title">
            The plates
          </h2>
        </div>
        <ul className={styles.mosaic}>
          {images.map((image, index) => {
            const wide = index % 7 === 0;
            return (
              <li key={image.src} className={wide ? styles.wide : undefined}>
                <figure className={styles.figure}>
                  <Image
                    src={image}
                    alt="Bahar Cafe dish — name to be added"
                    fill
                    sizes={wide ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 50vw, 33vw"}
                    quality={70}
                    className={styles.photo}
                  />
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

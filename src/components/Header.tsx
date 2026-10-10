import Image from "next/image";
import { site } from "../data/site";
import logo from "../assets/brand/logopic.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/" aria-label={`${site.name} home`}>
          <Image
            src={logo}
            alt="Bahar Cafe"
            sizes="(max-width: 767px) 148px, 188px"
            quality={90}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <a className={styles.desktop} href="#top" aria-current="page">
            Home
          </a>
          <a href="#menu">Menu</a>
          <a className={styles.desktop} href="#contact">
            Contact
          </a>
        </nav>

        <a className={`btn btn-primary ${styles.order}`} href="#order">
          Order Now
        </a>
      </div>
    </header>
  );
}

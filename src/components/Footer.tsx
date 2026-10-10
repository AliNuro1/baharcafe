import { site } from "../data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>Bahar Cafe</p>
          <p>
            {site.location.street}
            <br />
            {site.location.city}
            <br />
            {site.location.postcode}
          </p>
        </div>

        <div className={styles.visit}>
          <h2 className={styles.heading}>Visit</h2>
          <dl>
            <div>
              <dt>Hours</dt>
              <dd>
                {site.hours.lines.map((line) => (
                  <p className={styles.hoursLine} key={line.days}>
                    <span className={styles.hoursTime}>{line.time}</span>
                    <span className={styles.hoursDays}>{line.days}</span>
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={site.phone.href}>{site.phone.label}</a>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className={styles.heading}>Order</h2>
          <a href={site.order.deliveroo.href} target="_blank" rel="noreferrer">
            {site.order.deliveroo.label}
          </a>
          <a href={site.order.justEat.href} target="_blank" rel="noreferrer">
            {site.order.justEat.label}
          </a>
        </div>

        <div>
          <h2 className={styles.heading}>Explore</h2>
          <a href="/">Home</a>
          <a href="/#menu">Menu</a>
          <a href="/#contact">Contact</a>
          <a href="/#order">Order Now</a>
          <h2 className={`${styles.heading} ${styles.socialHeading}`}>Social</h2>
          {site.social.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        <p>© {year} Bahar Cafe. Claremont Road, Manchester.</p>
      </div>
    </footer>
  );
}

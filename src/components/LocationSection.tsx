import { site } from "../data/site";
import styles from "./LocationSection.module.css";

export default function LocationSection() {
  return (
    <section className={`section ${styles.location}`} id="contact" aria-labelledby="location-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="location-title" className="section-title">
            {site.location.name}
          </h2>
          <p className={styles.address}>
            {site.location.street}
            <br />
            {site.location.neighbourhood}
            <br />
            {site.location.city}
            <br />
            {site.location.postcode}
          </p>
          <p className="lede">Look for Bahar Cafe on Claremont Road, in the heart of Moss Side.</p>
          <div className={styles.actions}>
            <a className="btn btn-dark" href={site.location.mapsSearchUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
            <a className={styles.phone} href={site.phone.href}>
              {site.phone.label}
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            title="Map of Bahar Cafe, 308 Claremont Road, Manchester"
            src={site.location.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

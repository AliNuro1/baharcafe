import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={`section ${styles.cta}`} aria-labelledby="final-cta-title">
      <div className={`container ${styles.panel}`}>
        <h2 id="final-cta-title" className={styles.title}>
          Good food. Good company. Welcome to Bahar.
        </h2>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#order">
            Order Now
          </a>
          <a className="btn btn-secondary" href="#contact">
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
}

import { site } from "../data/site";
import styles from "./OrderSection.module.css";

export default function OrderSection() {
  return (
    <section className={`section ${styles.order}`} id="order" aria-labelledby="order-title">
      <div className={`container ${styles.panel}`}>
        <div>
          <h2 id="order-title" className="section-title">
            Hungry now? Get Bahar delivered.
          </h2>
          <p className="lede">Order our food from our trusted partners using the links below.</p>
        </div>
        <div className={styles.platforms}>
          <a
            className={`btn btn-platform ${styles.platform}`}
            href={site.order.deliveroo.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{site.order.deliveroo.label}</span>
          </a>
          <a
            className={`btn btn-platform ${styles.platform}`}
            href={site.order.justEat.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{site.order.justEat.label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

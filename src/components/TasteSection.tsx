import { featuredDishes } from "../data/site";
import { dishImage } from "../lib/food-images";
import DishCard from "./DishCard";
import styles from "./TasteSection.module.css";

export default function TasteSection() {
  return (
    <section className={`section ${styles.taste}`} id="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="menu-title" className="section-title">
            A taste of Bahar
          </h2>
          <p className="lede">A short look at the kind of plates we cook.</p>
        </div>
        <div className={styles.grid}>
          {featuredDishes.map((dish) => (
            <DishCard
              key={dish.name}
              image={dishImage(dish.image)}
              name={dish.name}
              description={dish.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

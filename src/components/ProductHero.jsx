import { useState } from "react";
import { useReservation } from "../context/ReservationContext";
import { useLanguage } from "../context/LanguageContext";
import { product } from "../data/product";
import CodStamp from "./CodStamp";
import "./ProductHero.css";

export default function ProductHero() {
  const { addQuantity } = useReservation();
  const { dict } = useLanguage();
  const [qty, setQty] = useState(1);

  return (
    <section className="phero" id="kit">
      <div className="container phero__grid">
        <div className="phero__copy">
          <span className="eyebrow">{dict.hero.eyebrow}</span>
          <h1>
            {dict.hero.titleMain}
            <br />
            <span className="phero__accent">{dict.hero.titleAccent}</span>
          </h1>
          <p className="phero__lead">{dict.product.description}</p>

          <div className="phero__price-row">
            <span className="phero__price">{dict.currency(product.price)}</span>
            <span className="phero__price-note">{dict.hero.priceNote}</span>
          </div>

          <div className="phero__reserve">
            <div className="qty-picker">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="-">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="+">+</button>
            </div>
            <button
              className="btn btn-primary phero__cta"
              onClick={() => addQuantity(qty)}
            >
              {dict.hero.reserveCta(dict.currency(product.price * qty))}
            </button>
          </div>

          <ul className="phero__trust">
            {dict.hero.trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="phero__showcase">
          <div className="phero__frame">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="phero__stamp">
            <CodStamp />
          </div>
        </div>
      </div>
    </section>
  );
}

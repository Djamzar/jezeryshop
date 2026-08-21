import { Link } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import "./ProductCard.css";

function formatPrice(value) {
  return new Intl.NumberFormat("fr-DZ").format(value) + " DA";
}

export default function ProductCard({ product }) {
  const { addItem } = useReservation();

  return (
    <article className="product-card">
      <Link to={`/produit/${product.id}`} className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tags?.[0] && (
          <span className={`product-card__tag product-card__tag--${product.tags[0].replace(/\s/g, "-")}`}>
            {product.tags[0]}
          </span>
        )}
        {product.oldPrice && <span className="product-card__promo">Promo</span>}
      </Link>

      <div className="product-card__body">
        <Link to={`/produit/${product.id}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>

        <div className="product-card__prices">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="product-card__old-price">{formatPrice(product.oldPrice)}</span>
          )}
        </div>

        <button
          type="button"
          className="btn btn-primary product-card__cta"
          onClick={() => addItem(product, 1)}
        >
          Réserver
        </button>
      </div>

      <span className="product-card__notch product-card__notch--left" aria-hidden="true" />
      <span className="product-card__notch product-card__notch--right" aria-hidden="true" />
    </article>
  );
}

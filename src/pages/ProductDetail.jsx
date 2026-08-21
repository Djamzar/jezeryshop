import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductById, products } from "../data/products";
import { useReservation } from "../context/ReservationContext";
import ProductCard from "../components/ProductCard";
import CodStamp from "../components/CodStamp";
import "./ProductDetail.css";

function formatPrice(value) {
  return new Intl.NumberFormat("fr-DZ").format(value) + " DA";
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useReservation();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="section container">
        <p>Ce produit n'existe pas ou n'est plus disponible.</p>
        <Link to="/boutique" className="btn btn-primary">Retour à la boutique</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleReserve() {
    addItem(product, qty);
  }

  return (
    <div className="product-detail section">
      <div className="container">
        <button className="product-detail__back" onClick={() => navigate(-1)}>
          ← Retour
        </button>

        <div className="product-detail__grid">
          <div className="product-detail__media">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail__info">
            <span className="eyebrow">
              {product.category.replace(/-/g, " ")}
            </span>
            <h1>{product.name}</h1>

            <div className="product-detail__prices">
              <span className="product-detail__price">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="product-detail__old">{formatPrice(product.oldPrice)}</span>
              )}
            </div>

            <p className="product-detail__desc">{product.description}</p>

            <p className="product-detail__stock">
              {product.stock > 5
                ? "En stock"
                : `Plus que ${product.stock} en stock`}
            </p>

            <div className="product-detail__reserve">
              <div className="qty-picker">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer">−</button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
              <button className="btn btn-primary product-detail__cta" onClick={handleReserve}>
                Réserver — {formatPrice(product.price * qty)}
              </button>
            </div>

            <div className="product-detail__cod">
              <CodStamp size="s" />
              <p>
                Pas de paiement en ligne : vous réglez en espèces directement
                au livreur, à la réception de votre commande.
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="product-detail__related">
            <h2>Vous pourriez aussi aimer</h2>
            <div className="product-grid">
              {related.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import "./Home.css";

export default function Home() {
  const featured = products.filter((p) => p.tags?.includes("populaire"));
  const promo = products.filter((p) => p.oldPrice);

  return (
    <>
      <Hero featured={products} />

      <section className="section categories-band">
        <div className="container">
          <span className="eyebrow">Catégories</span>
          <h2 className="section__title">Faites votre choix</h2>
          <div className="categories-band__grid">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/boutique?cat=${cat.slug}`}
                className="category-tile"
              >
                <span>{cat.label}</span>
                <span className="category-tile__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">Sélection</span>
              <h2 className="section__title">Les plus réservés</h2>
            </div>
            <Link to="/boutique" className="btn btn-ghost">
              Toute la boutique
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>

      {promo.length > 0 && (
        <section className="section promo-band">
          <div className="container">
            <div className="section__head">
              <div>
                <span className="eyebrow">En ce moment</span>
                <h2 className="section__title">Offres à ne pas rater</h2>
              </div>
            </div>
            <div className="product-grid">
              {promo.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      <HowItWorks />
    </>
  );
}

import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryChips from "../components/CategoryChips";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";
import "./Boutique.css";

export default function Boutique() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("cat");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("pertinence");

  function handleCategory(slug) {
    if (slug) setSearchParams({ cat: slug });
    else setSearchParams({});
  }

  const filtered = useMemo(() => {
    let list = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : products;

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (sort === "prix-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "prix-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, search, sort]);

  return (
    <div className="boutique section">
      <div className="container">
        <div className="boutique__head">
          <div>
            <span className="eyebrow">Catalogue</span>
            <h1>La boutique</h1>
          </div>
          <div className="boutique__tools">
            <input
              type="search"
              placeholder="Rechercher un produit…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Rechercher un produit"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Trier les produits"
            >
              <option value="pertinence">Pertinence</option>
              <option value="prix-asc">Prix croissant</option>
              <option value="prix-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        <CategoryChips
          categories={categories}
          active={activeCategory}
          onSelect={handleCategory}
        />

        {filtered.length === 0 ? (
          <div className="boutique__empty">
            <p>Aucun produit ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div className="product-grid boutique__grid">
            {filtered.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

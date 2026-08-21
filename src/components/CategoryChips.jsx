import "./CategoryChips.css";

export default function CategoryChips({ categories, active, onSelect }) {
  return (
    <div className="chips" role="tablist" aria-label="Filtrer par catégorie">
      <button
        type="button"
        className={`chip ${!active ? "is-active" : ""}`}
        onClick={() => onSelect(null)}
        role="tab"
        aria-selected={!active}
      >
        Tout
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          type="button"
          className={`chip ${active === cat.slug ? "is-active" : ""}`}
          onClick={() => onSelect(cat.slug)}
          role="tab"
          aria-selected={active === cat.slug}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

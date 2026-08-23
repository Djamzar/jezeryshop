import { useLanguage } from "../context/LanguageContext";
import "./KitContents.css";

const icons = {
  triangle: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 8 L42 38 H6 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 16 L34 34 H14 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path d="M24 20v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="31" r="1.4" fill="currentColor" />
    </svg>
  ),
  gilet: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M16 10 L24 14 L32 10 L36 16 L33 20 V38 H15 V20 L12 16 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M20 22 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 28 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  trousse: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="7" y="16" width="34" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 16 V12 a2 2 0 0 1 2-2 h8 a2 2 0 0 1 2 2 v4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M7 24 H41" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    </svg>
  ),
  extincteur: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="17" y="16" width="14" height="24" rx="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M22 16 V11 h4 v5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 11 h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M31 20 L38 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 24 H27" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    </svg>
  ),
};

export default function KitContents() {
  const { dict } = useLanguage();

  return (
    <section className="kit-contents section">
      <div className="container">
        <span className="eyebrow">{dict.kit.eyebrow}</span>
        <h2 className="kit-contents__title">{dict.kit.title}</h2>

        <div className="kit-contents__grid">
          {dict.product.contents.map((item) => (
            <div className="kit-item" key={item.id}>
              <span className="kit-item__icon">{icons[item.id]}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

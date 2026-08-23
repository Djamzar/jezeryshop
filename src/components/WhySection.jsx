import { useLanguage } from "../context/LanguageContext";
import { product } from "../data/product";
import "./WhySection.css";

export default function WhySection() {
  const { dict } = useLanguage();

  return (
    <section className="why" id="pourquoi">
      <div className="container why__grid">
        <div className="why__copy">
          <span className="eyebrow">{dict.why.eyebrow}</span>
          <h2>{dict.why.title}</h2>
          <p>{dict.why.text}</p>
        </div>

        <div className="why__compare">
          <div className="why__card why__card--risk">
            <span className="why__label">{dict.why.riskLabel}</span>
            <strong className="why__amount">{dict.currency(product.fineAmount)}</strong>
            <span className="why__sub">{dict.why.riskSub}</span>
          </div>
          <div className="why__vs">{dict.why.vs}</div>
          <div className="why__card why__card--safe">
            <span className="why__label">{dict.why.safeLabel}</span>
            <strong className="why__amount">{dict.currency(product.price)}</strong>
            <span className="why__sub">{dict.why.safeSub}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

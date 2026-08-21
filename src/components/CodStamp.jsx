import "./CodStamp.css";

export default function CodStamp({ size = "m" }) {
  return (
    <div className={`cod-stamp cod-stamp--${size}`} role="img" aria-label="Paiement à la livraison">
      <svg viewBox="0 0 140 140" className="cod-stamp__ring" aria-hidden="true">
        <circle cx="70" cy="70" r="64" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="70" cy="70" r="54" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
      <span className="cod-stamp__text">
        Paiement <strong>à la livraison</strong>
      </span>
    </div>
  );
}

import { Link } from "react-router-dom";
import CodStamp from "./CodStamp";
import "./Hero.css";

export default function Hero({ featured }) {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Livraison partout en Algérie</span>
          <h1>
            La vitrine qui vous suit,
            <br />
            <span className="hero__accent">le paiement à l'arrivée.</span>
          </h1>
          <p className="hero__lead">
            Parcourez le catalogue, réservez vos articles en quelques clics
            et réglez en espèces quand le livreur sonne à votre porte.
            Aucune carte bancaire, aucune surprise.
          </p>
          <div className="hero__actions">
            <Link to="/boutique" className="btn btn-primary">
              Voir la boutique
            </Link>
            <a href="#comment-ca-marche" className="btn btn-outline">
              Comment ça marche
            </a>
          </div>
          <ul className="hero__trust">
            <li>58 wilayas livrées</li>
            <li>Réservation sans engagement</li>
            <li>Paiement 100% à la livraison</li>
          </ul>
        </div>

        <div className="hero__showcase" aria-hidden="true">
          <div className="hero__frame">
            <div className="hero__frame-bar">
              <span /><span /><span />
              <em>vitrine.jezeryshop.dz</em>
            </div>
            <div className="hero__frame-grid">
              {featured.slice(0, 4).map((p, i) => (
                <div className={`hero__tile hero__tile--${i}`} key={p.id}>
                  <img src={p.image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="hero__stamp">
            <CodStamp />
          </div>
        </div>
      </div>
    </section>
  );
}

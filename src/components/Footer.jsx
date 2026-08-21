import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt="Jezeryshop" />
          <p>
            Votre boutique en ligne en Algérie. Réservez vos produits,
            payez à la livraison — simple, sans carte bancaire.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Boutique</h4>
          <ul>
            <li><Link to="/boutique">Tous les produits</Link></li>
            <li><Link to="/boutique?cat=maison-cuisine">Maison &amp; Cuisine</Link></li>
            <li><Link to="/boutique?cat=beaute-bien-etre">Beauté &amp; Bien-être</Link></li>
            <li><Link to="/boutique?cat=electronique">Électronique</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Aide</h4>
          <ul>
            <li><Link to="/#comment-ca-marche">Comment ça marche</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:+213500000000">Nous appeler</a></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Suivez-nous</h4>
          <ul className="site-footer__social">
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="WhatsApp">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>© {new Date().getFullYear()} Jezeryshop — Alger, Algérie</span>
          <span className="site-footer__flag" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}

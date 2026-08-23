import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  const { dict } = useLanguage();
  const [presentation, pourquoi, comment, faq] = dict.footer.col1Links;

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt="Jezeryshop" />
          <p>{dict.footer.brandText}</p>
        </div>

        <div className="site-footer__col">
          <h4>{dict.footer.col1Title}</h4>
          <ul>
            <li><a href="/#kit">{presentation}</a></li>
            <li><a href="/#pourquoi">{pourquoi}</a></li>
            <li><a href="/#comment-ca-marche">{comment}</a></li>
            <li><a href="/#faq">{faq}</a></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>{dict.footer.col2Title}</h4>
          <ul>
            <li><a href="tel:+213500000000">+213 5 00 00 00 00</a></li>
            <li>
              <a href="https://wa.me/213500000000" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li><a href="mailto:contact@jezeryshop.dz">contact@jezeryshop.dz</a></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>{dict.footer.col3Title}</h4>
          <ul className="site-footer__social">
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>{dict.footer.copyright(new Date().getFullYear())}</span>
          <Link to="/mentions-legales" className="site-footer__legal">
            {dict.footer.legalLink}
          </Link>
          <span className="site-footer__flag" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}

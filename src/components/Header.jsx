import { useState } from "react";
import { Link } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  const { quantity, setTicketOpen } = useReservation();
  const { dict } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/#kit", label: dict.nav.kit },
    { href: "/#pourquoi", label: dict.nav.pourquoi },
    { href: "/#comment-ca-marche", label: dict.nav.comment },
    { href: "/#faq", label: dict.nav.faq },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Jezeryshop" />
        </Link>

        <nav className={`site-header__nav ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />

          <button
            type="button"
            className="ticket-btn"
            onClick={() => setTicketOpen(true)}
            aria-label={dict.header.ticketBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 8h16l-1.5 10.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M8 8V6a4 4 0 0 1 8 0v2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span>{dict.header.ticketBtn}</span>
            {quantity > 0 && <span className="ticket-btn__count">{quantity}</span>}
          </button>

          <button
            type="button"
            className="burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

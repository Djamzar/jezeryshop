import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  const { totalItems, setTicketOpen } = useReservation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Accueil", end: true },
    { to: "/boutique", label: "Boutique" },
    { to: "/#comment-ca-marche", label: "Comment ça marche" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Jezeryshop" />
        </Link>

        <nav className={`site-header__nav ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "is-active" : undefined
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="ticket-btn"
            onClick={() => setTicketOpen(true)}
            aria-label="Ouvrir mon bon de réservation"
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
            <span>Mon bon</span>
            {totalItems > 0 && <span className="ticket-btn__count">{totalItems}</span>}
          </button>

          <button
            type="button"
            className="burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
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

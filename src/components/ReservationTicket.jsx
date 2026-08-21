import { Link } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import "./ReservationTicket.css";

function formatPrice(value) {
  return new Intl.NumberFormat("fr-DZ").format(value) + " DA";
}

export default function ReservationTicket() {
  const {
    items,
    isTicketOpen,
    setTicketOpen,
    updateQuantity,
    removeItem,
    totalItems,
    totalPrice,
  } = useReservation();

  if (!isTicketOpen) return null;

  return (
    <div className="ticket-overlay" onClick={() => setTicketOpen(false)}>
      <aside
        className="ticket-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Bon de réservation"
      >
        <div className="ticket-panel__head">
          <div>
            <span className="eyebrow">Bon de réservation</span>
            <h3>N° {String(totalItems).padStart(2, "0")}-JZ</h3>
          </div>
          <button
            type="button"
            className="ticket-panel__close"
            onClick={() => setTicketOpen(false)}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="ticket-panel__empty">
            <p>Votre bon est vide pour l'instant.</p>
            <Link to="/boutique" className="btn btn-primary" onClick={() => setTicketOpen(false)}>
              Découvrir la boutique
            </Link>
          </div>
        ) : (
          <>
            <ul className="ticket-lines">
              {items.map((item) => (
                <li className="ticket-line" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="ticket-line__info">
                    <span className="ticket-line__name">{item.name}</span>
                    <span className="ticket-line__unit">
                      {formatPrice(item.price)} / unité
                    </span>
                    <div className="ticket-line__qty">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Diminuer la quantité"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="ticket-line__right">
                    <span className="ticket-line__total">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      type="button"
                      className="ticket-line__remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Retirer
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ticket-perforation" aria-hidden="true" />

            <div className="ticket-panel__total">
              <span>Total à régler à la livraison</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>

            <Link
              to="/reservation"
              className="btn btn-primary ticket-panel__cta"
              onClick={() => setTicketOpen(false)}
            >
              Confirmer la réservation
            </Link>
            <p className="ticket-panel__note">
              Aucun paiement en ligne. Vous réglez en espèces au livreur.
            </p>
          </>
        )}
      </aside>
    </div>
  );
}

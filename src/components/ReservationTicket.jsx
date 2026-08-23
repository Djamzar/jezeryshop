import { Link } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import { useLanguage } from "../context/LanguageContext";
import { product } from "../data/product";
import "./ReservationTicket.css";

export default function ReservationTicket() {
  const {
    quantity,
    setExactQuantity,
    isTicketOpen,
    setTicketOpen,
    totalPrice,
  } = useReservation();
  const { dict } = useLanguage();

  if (!isTicketOpen) return null;

  return (
    <div className="ticket-overlay" onClick={() => setTicketOpen(false)}>
      <aside
        className="ticket-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={dict.ticket.title}
      >
        <div className="ticket-panel__head">
          <div>
            <span className="eyebrow">{dict.ticket.title}</span>
            <h3>{product.name}</h3>
          </div>
          <button
            type="button"
            className="ticket-panel__close"
            onClick={() => setTicketOpen(false)}
            aria-label={dict.ticket.close}
          >
            ✕
          </button>
        </div>

        {quantity === 0 ? (
          <div className="ticket-panel__empty">
            <p>{dict.ticket.emptyText}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setExactQuantity(1)}
            >
              {dict.ticket.addBtn}
            </button>
          </div>
        ) : (
          <>
            <div className="ticket-line">
              <img src={product.image} alt="" />
              <div className="ticket-line__info">
                <span className="ticket-line__name">{product.name}</span>
                <span className="ticket-line__unit">
                  {dict.currency(product.price)} {dict.ticket.unit}
                </span>
                <div className="ticket-line__qty">
                  <button
                    type="button"
                    onClick={() => setExactQuantity(quantity - 1)}
                    aria-label="-"
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setExactQuantity(quantity + 1)}
                    aria-label="+"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="ticket-line__right">
                <span className="ticket-line__total">{dict.currency(totalPrice)}</span>
              </div>
            </div>

            <div className="ticket-perforation" aria-hidden="true" />

            <div className="ticket-panel__total">
              <span>{dict.ticket.totalLabel}</span>
              <strong>{dict.currency(totalPrice)}</strong>
            </div>

            <Link
              to="/reservation"
              className="btn btn-primary ticket-panel__cta"
              onClick={() => setTicketOpen(false)}
            >
              {dict.ticket.confirmBtn}
            </Link>
            <p className="ticket-panel__note">{dict.ticket.note}</p>
          </>
        )}
      </aside>
    </div>
  );
}

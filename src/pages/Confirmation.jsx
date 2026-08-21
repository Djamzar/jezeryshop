import { Link, Navigate, useLocation } from "react-router-dom";
import CodStamp from "../components/CodStamp";
import "./Confirmation.css";

function formatPrice(value) {
  return new Intl.NumberFormat("fr-DZ").format(value) + " DA";
}

export default function Confirmation() {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" replace />;

  const { orderNumber, total, itemsCount, client } = state;

  return (
    <div className="confirmation section">
      <div className="container confirmation__inner">
        <div className="receipt">
          <div className="receipt__perfo receipt__perfo--top" />
          <div className="receipt__body">
            <span className="eyebrow">Réservation confirmée</span>
            <h1>Merci, {client.nom.split(" ")[0]} !</h1>
            <p className="receipt__lead">
              Votre bon de réservation <strong>{orderNumber}</strong> est
              enregistré. Notre équipe vous contacte au{" "}
              <strong>{client.telephone}</strong> pour organiser la livraison.
            </p>

            <div className="receipt__row">
              <span>Articles réservés</span>
              <span>{itemsCount}</span>
            </div>
            <div className="receipt__row">
              <span>Wilaya</span>
              <span>{client.wilaya}</span>
            </div>
            <div className="receipt__row">
              <span>Adresse</span>
              <span>{client.adresse}</span>
            </div>

            <div className="receipt__divider" />

            <div className="receipt__total">
              <span>Total à payer à la livraison</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <div className="receipt__stamp">
              <CodStamp />
            </div>
          </div>
          <div className="receipt__perfo receipt__perfo--bottom" />
        </div>

        <div className="confirmation__actions">
          <Link to="/boutique" className="btn btn-outline">Continuer mes achats</Link>
          <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

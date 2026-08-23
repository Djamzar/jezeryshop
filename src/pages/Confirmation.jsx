import { Navigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import CodStamp from "../components/CodStamp";
import "./Confirmation.css";

export default function Confirmation() {
  const { state } = useLocation();
  const { dict } = useLanguage();

  if (!state) return <Navigate to="/" replace />;

  const { orderNumber, total, quantity, client } = state;
  const t = dict.confirmation;

  return (
    <div className="confirmation section">
      <div className="container confirmation__inner">
        <div className="receipt">
          <div className="receipt__perfo receipt__perfo--top" />
          <div className="receipt__body">
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{t.greeting(client.nom.split(" ")[0])}</h1>
            <p className="receipt__lead">
              {t.lead(orderNumber, client.telephone)}
            </p>

            <div className="receipt__row">
              <span>RoadSafe Emergency Kit</span>
              <span>× {quantity}</span>
            </div>
            <div className="receipt__row">
              <span>{t.wilayaLabel}</span>
              <span>{client.wilaya}</span>
            </div>
            <div className="receipt__row">
              <span>{t.adresseLabel}</span>
              <span>{client.adresse}</span>
            </div>

            <div className="receipt__divider" />

            <div className="receipt__total">
              <span>{t.totalLabel}</span>
              <strong>{dict.currency(total)}</strong>
            </div>

            <div className="receipt__stamp">
              <CodStamp />
            </div>
          </div>
          <div className="receipt__perfo receipt__perfo--bottom" />
        </div>

        <div className="confirmation__actions">
          <Link to="/" className="btn btn-outline">{t.continueBtn}</Link>
          <Link to="/" className="btn btn-primary">{t.homeBtn}</Link>
        </div>
      </div>
    </div>
  );
}

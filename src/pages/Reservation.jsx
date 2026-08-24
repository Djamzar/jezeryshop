import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import { useLanguage } from "../context/LanguageContext";
import { product } from "../data/product";
import { wilayas } from "../data/wilayas";
import { wilayasAr } from "../data/wilayasAr";
import { createReservation } from "../api/reservations";
import "./Reservation.css";

export default function Reservation() {
  const { quantity, totalPrice, clearReservation } = useReservation();
  const { dict, lang } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    wilaya: "",
    adresse: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const wilayaOptions = wilayas.map((w, i) => ({
    value: w,
    label: lang === "dz" ? wilayasAr[i] : w,
  }));

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.nom.trim()) next.nom = dict.reservation.errors.nom;
    if (!/^0[5-7][0-9]{8}$/.test(form.telephone.replace(/\s/g, "")))
      next.telephone = dict.reservation.errors.telephone;
    if (!form.wilaya) next.wilaya = dict.reservation.errors.wilaya;
    if (!form.adresse.trim()) next.adresse = dict.reservation.errors.adresse;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (quantity === 0) return;
    if (!validate()) return;

    setSubmitError("");
    setSubmitting(true);

    try {
      const result = await createReservation({ quantity, client: form });
      navigate("/confirmation", {
        state: {
          orderNumber: result.orderNumber,
          total: result.total,
          quantity: result.quantity,
          client: form,
        },
      });
      clearReservation();
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (quantity === 0) {
    return (
      <div className="section container reservation-empty">
        <span className="eyebrow">{dict.reservation.emptyEyebrow}</span>
        <h1>{dict.reservation.emptyTitle}</h1>
        <p>{dict.reservation.emptyText}</p>
        <Link to="/" className="btn btn-primary">{dict.reservation.emptyCta}</Link>
      </div>
    );
  }

  const t = dict.reservation;

  return (
    <div className="reservation section">
      <div className="container reservation__grid">
        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="reservation-form__lead">{t.lead}</p>

          <div className="field">
            <label htmlFor="nom">{t.labels.nom}</label>
            <input
              id="nom"
              type="text"
              value={form.nom}
              onChange={(e) => update("nom", e.target.value)}
              placeholder={t.placeholders.nom}
            />
            {errors.nom && <span className="field__error">{errors.nom}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="telephone">{t.labels.telephone}</label>
              <input
                id="telephone"
                type="tel"
                value={form.telephone}
                onChange={(e) => update("telephone", e.target.value)}
                placeholder={t.placeholders.telephone}
              />
              {errors.telephone && <span className="field__error">{errors.telephone}</span>}
            </div>

            <div className="field">
              <label htmlFor="wilaya">{t.labels.wilaya}</label>
              <select
                id="wilaya"
                value={form.wilaya}
                onChange={(e) => update("wilaya", e.target.value)}
              >
                <option value="">{t.placeholders.wilaya}</option>
                {wilayaOptions.map((w) => (
                  <option key={w.value} value={w.value}>{w.label}</option>
                ))}
              </select>
              {errors.wilaya && <span className="field__error">{errors.wilaya}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="adresse">{t.labels.adresse}</label>
            <input
              id="adresse"
              type="text"
              value={form.adresse}
              onChange={(e) => update("adresse", e.target.value)}
              placeholder={t.placeholders.adresse}
            />
            {errors.adresse && <span className="field__error">{errors.adresse}</span>}
          </div>

          <div className="field">
            <label htmlFor="note">{t.labels.note}</label>
            <textarea
              id="note"
              rows="3"
              value={form.note}
              onChange={(e) => update("note", e.target.value)}
              placeholder={t.placeholders.note}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary reservation-form__submit"
            disabled={submitting}
          >
            {submitting ? "Envoi en cours…" : t.submit(dict.currency(totalPrice))}
          </button>
          {submitError && (
            <p className="field__error reservation-form__submit-error">{submitError}</p>
          )}
        </form>

        <aside className="reservation-summary">
          <span className="eyebrow">{t.summaryEyebrow}</span>
          <h3>{t.summaryTitle}</h3>
          <ul>
            <li>
              <span>{quantity} × {product.name}</span>
              <span>{dict.currency(totalPrice)}</span>
            </li>
          </ul>
          <div className="ticket-perforation" />
          <div className="reservation-summary__total">
            <span>{t.summaryTotal}</span>
            <strong>{dict.currency(totalPrice)}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}

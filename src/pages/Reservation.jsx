import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import { wilayas } from "../data/wilayas";
import "./Reservation.css";

function formatPrice(value) {
  return new Intl.NumberFormat("fr-DZ").format(value) + " DA";
}

export default function Reservation() {
  const { items, totalPrice, clearReservation } = useReservation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    wilaya: "",
    adresse: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.nom.trim()) next.nom = "Le nom est requis.";
    if (!/^0[5-7][0-9]{8}$/.test(form.telephone.replace(/\s/g, "")))
      next.telephone = "Numéro invalide (ex : 0555 12 34 56).";
    if (!form.wilaya) next.wilaya = "Choisissez votre wilaya.";
    if (!form.adresse.trim()) next.adresse = "L'adresse est requise.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;

    const orderNumber = `JZ-${Date.now().toString().slice(-6)}`;
    navigate("/confirmation", {
      state: {
        orderNumber,
        total: totalPrice,
        itemsCount: items.reduce((s, i) => s + i.quantity, 0),
        client: form,
      },
    });
    clearReservation();
  }

  if (items.length === 0) {
    return (
      <div className="section container reservation-empty">
        <span className="eyebrow">Bon de réservation</span>
        <h1>Votre bon est vide</h1>
        <p>Ajoutez des produits depuis la boutique pour lancer une réservation.</p>
        <Link to="/boutique" className="btn btn-primary">Voir la boutique</Link>
      </div>
    );
  }

  return (
    <div className="reservation section">
      <div className="container reservation__grid">
        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <span className="eyebrow">Étape finale</span>
          <h1>Vos coordonnées de livraison</h1>
          <p className="reservation-form__lead">
            Ces informations servent uniquement à préparer et livrer votre
            commande. Le paiement se fait en espèces, à la réception.
          </p>

          <div className="field">
            <label htmlFor="nom">Nom et prénom</label>
            <input
              id="nom"
              type="text"
              value={form.nom}
              onChange={(e) => update("nom", e.target.value)}
              placeholder="Djamal Benali"
            />
            {errors.nom && <span className="field__error">{errors.nom}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="telephone">Téléphone</label>
              <input
                id="telephone"
                type="tel"
                value={form.telephone}
                onChange={(e) => update("telephone", e.target.value)}
                placeholder="0555 12 34 56"
              />
              {errors.telephone && <span className="field__error">{errors.telephone}</span>}
            </div>

            <div className="field">
              <label htmlFor="wilaya">Wilaya</label>
              <select
                id="wilaya"
                value={form.wilaya}
                onChange={(e) => update("wilaya", e.target.value)}
              >
                <option value="">Sélectionner…</option>
                {wilayas.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
              {errors.wilaya && <span className="field__error">{errors.wilaya}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="adresse">Adresse / commune</label>
            <input
              id="adresse"
              type="text"
              value={form.adresse}
              onChange={(e) => update("adresse", e.target.value)}
              placeholder="Cité, rue, repère..."
            />
            {errors.adresse && <span className="field__error">{errors.adresse}</span>}
          </div>

          <div className="field">
            <label htmlFor="note">Note pour le livreur (optionnel)</label>
            <textarea
              id="note"
              rows="3"
              value={form.note}
              onChange={(e) => update("note", e.target.value)}
              placeholder="Étage, horaires de disponibilité..."
            />
          </div>

          <button type="submit" className="btn btn-primary reservation-form__submit">
            Confirmer ma réservation — {formatPrice(totalPrice)}
          </button>
        </form>

        <aside className="reservation-summary">
          <span className="eyebrow">Récapitulatif</span>
          <h3>Votre bon</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.quantity} × {item.name}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="ticket-perforation" />
          <div className="reservation-summary__total">
            <span>Total à la livraison</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}

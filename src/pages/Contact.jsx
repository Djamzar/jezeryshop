import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact section">
      <div className="container contact__grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Une question avant de réserver ?</h1>
          <p className="contact__lead">
            Notre équipe basée à Alger répond du dimanche au jeudi,
            de 9h à 18h.
          </p>

          <ul className="contact__list">
            <li>
              <span>Téléphone</span>
              <a href="tel:+213500000000">+213 5 00 00 00 00</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href="https://wa.me/213500000000" target="_blank" rel="noreferrer">
                +213 5 00 00 00 00
              </a>
            </li>
            <li>
              <span>E-mail</span>
              <a href="mailto:contact@jezeryshop.dz">contact@jezeryshop.dz</a>
            </li>
            <li>
              <span>Adresse</span>
              <span>Alger Est, Algérie</span>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci, votre message a bien été envoyé.");
            e.target.reset();
          }}
        >
          <div className="field">
            <label htmlFor="c-nom">Nom</label>
            <input id="c-nom" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">E-mail ou téléphone</label>
            <input id="c-email" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" rows="5" required />
          </div>
          <button type="submit" className="btn btn-primary">Envoyer le message</button>
        </form>
      </div>
    </div>
  );
}

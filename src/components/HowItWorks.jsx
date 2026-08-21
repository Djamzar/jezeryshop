import "./HowItWorks.css";

const steps = [
  {
    n: "01",
    title: "Choisissez vos articles",
    text: "Parcourez le catalogue et ajoutez les produits voulus à votre bon de réservation, avec la quantité de votre choix.",
  },
  {
    n: "02",
    title: "Confirmez votre réservation",
    text: "Renseignez vos coordonnées et votre wilaya. Aucune information bancaire n'est demandée.",
  },
  {
    n: "03",
    title: "Payez à la livraison",
    text: "Notre livreur vous contacte, vous vérifiez votre commande et réglez en espèces à la réception.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="comment-ca-marche">
      <div className="container">
        <span className="eyebrow">Le déroulé</span>
        <h2 className="how__title">Comment ça marche</h2>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div className="how__step" key={step.n}>
              <span className="how__number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {i < steps.length - 1 && <span className="how__line" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

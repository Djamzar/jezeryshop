import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="section container"
      style={{ textAlign: "center", padding: "120px 20px" }}
    >
      <span className="eyebrow">Erreur 404</span>
      <h1 style={{ marginTop: 12, fontSize: "2.2rem" }}>
        Cette page n'existe pas
      </h1>
      <p style={{ marginTop: 12 }}>
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 28 }}>
        Retour à l'accueil
      </Link>
    </div>
  );
}

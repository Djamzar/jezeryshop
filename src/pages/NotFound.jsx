import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { dict } = useLanguage();
  const t = dict.notFound;

  return (
    <div
      className="section container"
      style={{ textAlign: "center", padding: "120px 20px" }}
    >
      <span className="eyebrow">{t.eyebrow}</span>
      <h1 style={{ marginTop: 12, fontSize: "2.2rem" }}>{t.title}</h1>
      <p style={{ marginTop: 12 }}>{t.text}</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 28 }}>
        {t.cta}
      </Link>
    </div>
  );
}

import { useLanguage } from "../context/LanguageContext";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Choisir la langue">
      <button
        type="button"
        className={lang === "fr" ? "is-active" : ""}
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
      >
        <span className="lang-switch__flag" aria-hidden="true">🇫🇷</span>
        FR
      </button>
      <button
        type="button"
        className={lang === "dz" ? "is-active" : ""}
        onClick={() => setLang("dz")}
        aria-pressed={lang === "dz"}
      >
        <span className="lang-switch__flag" aria-hidden="true">🇩🇿</span>
        الدارجة
      </button>
    </div>
  );
}

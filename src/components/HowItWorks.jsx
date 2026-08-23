import { useLanguage } from "../context/LanguageContext";
import "./HowItWorks.css";

export default function HowItWorks() {
  const { dict } = useLanguage();
  const steps = dict.how.steps;

  return (
    <section className="how" id="comment-ca-marche">
      <div className="container">
        <span className="eyebrow">{dict.how.eyebrow}</span>
        <h2 className="how__title">{dict.how.title}</h2>

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

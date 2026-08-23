import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Faq.css";

export default function Faq() {
  const { dict } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const items = dict.product.faq;

  return (
    <section className="faq section" id="faq">
      <div className="container faq__inner">
        <span className="eyebrow">{dict.faqSection.eyebrow}</span>
        <h2 className="faq__title">{dict.faqSection.title}</h2>

        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq__toggle">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="faq__answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

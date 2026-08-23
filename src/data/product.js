import kitImage from "../assets/kit-hero.jpg";

// Données indépendantes de la langue : prix, image, montant de l'amende.
// Les textes (nom des articles, description, FAQ...) vivent dans
// src/i18n/translations.jsx pour rester traduits en FR / Darija.
export const product = {
  id: "roadsafe-emergency-kit",
  name: "RoadSafe Emergency Kit",
  price: 5000,
  image: kitImage,
  fineAmount: 4000,
};

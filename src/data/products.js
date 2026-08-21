// Catalogue de démonstration. À remplacer plus tard par un vrai backend
// (Express + MongoDB) — la structure des objets ne change pas.

export const categories = [
  { slug: "maison-cuisine", label: "Maison & Cuisine" },
  { slug: "beaute-bien-etre", label: "Beauté & Bien-être" },
  { slug: "electronique", label: "Électronique & Gadgets" },
  { slug: "mode-accessoires", label: "Mode & Accessoires" },
];

export const products = [
  {
    id: "p01",
    name: "Théière marocaine en laiton gravé",
    category: "maison-cuisine",
    price: 3800,
    oldPrice: 4500,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    description:
      "Théière traditionnelle en laiton finement gravé, capacité 1L. Idéale pour le thé à la menthe. Livrée avec un plateau assorti.",
    tags: ["populaire"],
  },
  {
    id: "p02",
    name: "Set de 6 verres à thé décorés",
    category: "maison-cuisine",
    price: 1500,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
    description:
      "Six verres en verre soufflé, motifs dorés peints à la main. Résistants au lavage à la main.",
    tags: [],
  },
  {
    id: "p03",
    name: "Tapis berbère fait main 120x180",
    category: "maison-cuisine",
    price: 12500,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
    description:
      "Tapis en laine tissé à la main dans les Aurès, motifs géométriques traditionnels. Pièce unique.",
    tags: ["stock limité"],
  },
  {
    id: "p04",
    name: "Coffret huiles essentielles (5x10ml)",
    category: "beaute-bien-etre",
    price: 2900,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    description:
      "Lavande, argan, romarin, eucalyptus et amande douce. Pressées à froid, sans additifs.",
    tags: ["populaire"],
  },
  {
    id: "p05",
    name: "Savon noir beldi + gant kessa",
    category: "beaute-bien-etre",
    price: 1200,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1600428853876-fb5a850b444d?w=800&q=80",
    description:
      "Savon noir traditionnel 200g à l'huile d'olive, accompagné d'un gant exfoliant. Pour un hammam maison.",
    tags: [],
  },
  {
    id: "p06",
    name: "Baume au rhassoul et argan",
    category: "beaute-bien-etre",
    price: 1800,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80",
    description:
      "Masque purifiant à l'argile du Maroc et huile d'argan bio, 150g.",
    tags: [],
  },
  {
    id: "p07",
    name: "Enceinte Bluetooth portable 20W",
    category: "electronique",
    price: 5500,
    oldPrice: 6900,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    description:
      "Autonomie 12h, résistante aux éclaboussures (IPX5), Bluetooth 5.0. Coloris noir.",
    tags: ["promo"],
  },
  {
    id: "p08",
    name: "Chargeur solaire 3 ports USB",
    category: "electronique",
    price: 3200,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1620705790324-cf5f4e561d21?w=800&q=80",
    description:
      "Panneau solaire pliable 20W, 3 ports USB, idéal camping et coupures de courant.",
    tags: [],
  },
  {
    id: "p09",
    name: "Montre connectée écran AMOLED",
    category: "electronique",
    price: 6900,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    description:
      "Suivi santé, notifications, étanche, autonomie 7 jours. Bracelet interchangeable.",
    tags: ["populaire"],
  },
  {
    id: "p10",
    name: "Sac à main en cuir véritable",
    category: "mode-accessoires",
    price: 4200,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    description:
      "Cuir souple tanné artisanalement, doublure intérieure, fermeture zip. Coloris camel.",
    tags: [],
  },
  {
    id: "p11",
    name: "Djellaba homme brodée",
    category: "mode-accessoires",
    price: 5800,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=800&q=80",
    description:
      "Tissu premium, broderies fines au col. Disponible du S au XXL.",
    tags: [],
  },
  {
    id: "p12",
    name: "Ceinture cuir tressé réversible",
    category: "mode-accessoires",
    price: 1900,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    description:
      "Cuir véritable tressé, boucle réversible noir/marron. Tailles 85 à 110cm.",
    tags: ["nouveau"],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(slug) {
  if (!slug) return products;
  return products.filter((p) => p.category === slug);
}

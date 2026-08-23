export const translations = {
  fr: {
    dir: "ltr",
    htmlLang: "fr",
    currency: (n) => new Intl.NumberFormat("fr-DZ").format(n) + " DA",
    nav: {
      kit: "Le kit",
      pourquoi: "Pourquoi",
      comment: "Comment ça marche",
      faq: "FAQ",
    },
    header: {
      ticketBtn: "Mon bon",
    },
    codStamp: {
      line1: "Paiement",
      line2: "à la livraison",
    },
    product: {
      tagline: "Le kit de sécurité conforme au code de la route algérien",
      description:
        "Triangle de signalisation, gilet haute visibilité, trousse compacte et extincteur automobile : tout ce qu'exige la loi, réuni dans une seule sacoche à garder dans votre coffre.",
      contents: [
        {
          id: "triangle",
          name: "Triangle de signalisation réfléchissant",
          description:
            "Averti les autres véhicules en cas d'arrêt d'urgence, visible même de nuit grâce à ses bandes réfléchissantes.",
        },
        {
          id: "gilet",
          name: "Gilet haute visibilité normé CE",
          description:
            "À enfiler avant de sortir du véhicule en cas d'arrêt sur la route — obligatoire selon la réglementation.",
        },
        {
          id: "trousse",
          name: "Sacoche RoadSafe Emergency Kit",
          description:
            "Rangement compact et rigide qui centralise tout votre matériel de sécurité, prêt à l'emploi dans le coffre.",
        },
        {
          id: "extincteur",
          name: "Extincteur automobile",
          description:
            "Réagissez rapidement en cas de départ de feu : un réflexe simple qui peut faire toute la différence.",
        },
      ],
      faq: [
        {
          q: "Comment se passe le paiement ?",
          a: "Aucun paiement en ligne n'est demandé. Vous réservez votre kit, puis vous réglez en espèces directement au livreur, à la réception de votre commande.",
        },
        {
          q: "Livrez-vous dans toute l'Algérie ?",
          a: "Oui, la livraison est assurée dans les 58 wilayas. Le délai varie selon votre région, notre équipe vous contacte pour confirmer.",
        },
        {
          q: "Le kit est-il vraiment conforme à la réglementation ?",
          a: "Le triangle et le gilet répondent aux exigences habituellement contrôlées lors des contrôles routiers en Algérie (signalisation réfléchissante, norme CE pour le gilet).",
        },
        {
          q: "Puis-je réserver plusieurs kits ?",
          a: "Oui, vous pouvez choisir la quantité souhaitée au moment de la réservation, par exemple pour équiper plusieurs véhicules.",
        },
        {
          q: "Puis-je annuler ma réservation ?",
          a: "Oui, la réservation ne vous engage à rien avant la livraison. Vous pouvez annuler à tout moment en contactant notre équipe.",
        },
      ],
    },
    hero: {
      eyebrow: "Conforme au code de la route algérien",
      titleMain: "Ne roulez plus jamais",
      titleAccent: "en infraction.",
      priceNote: "livraison incluse dans le calcul du livreur",
      reserveCta: (price) => `Réserver mon kit — ${price}`,
      trust: [
        "58 wilayas livrées",
        "Réservation sans engagement",
        "Paiement 100% à la livraison",
      ],
    },
    why: {
      eyebrow: "Pourquoi ce kit",
      title: "Un contrôle routier ne prévient pas.",
      text: "Sans triangle ni gilet à bord, un simple contrôle de police peut se transformer en amende. Le RoadSafe Emergency Kit reste dans votre coffre en permanence, prêt à l'usage — que ce soit pour un contrôle ou une vraie urgence sur la route.",
      riskLabel: "Sans le kit",
      riskSub: "amende possible, à chaque contrôle",
      safeLabel: "Avec le kit",
      safeSub: "un seul achat, une tranquillité durable",
      vs: "vs",
    },
    kit: {
      eyebrow: "À l'intérieur",
      title: "Ce que contient le kit",
    },
    how: {
      eyebrow: "Le déroulé",
      title: "Comment ça marche",
      steps: [
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
      ],
    },
    faqSection: {
      eyebrow: "Questions fréquentes",
      title: "Avant de réserver",
    },
    footer: {
      brandText:
        "Votre boutique en ligne en Algérie. Réservez votre kit, payez à la livraison — simple, sans carte bancaire.",
      col1Title: "Le kit",
      col1Links: ["Présentation", "Pourquoi ce kit", "Comment ça marche", "FAQ"],
      col2Title: "Contact",
      col3Title: "Suivez-nous",
      legalLink: "Mentions légales",
      copyright: (year) => `© ${year} Jezeryshop — Alger, Algérie`,
    },
    ticket: {
      title: "Bon de réservation",
      emptyText: "Votre bon est vide pour l'instant.",
      addBtn: "Ajouter le kit",
      unit: "/ unité",
      totalLabel: "Total à régler à la livraison",
      confirmBtn: "Confirmer la réservation",
      note: "Aucun paiement en ligne. Vous réglez en espèces au livreur.",
      close: "Fermer",
    },
    reservation: {
      emptyEyebrow: "Bon de réservation",
      emptyTitle: "Votre bon est vide",
      emptyText: "Retournez sur la page du kit pour choisir votre quantité.",
      emptyCta: "Voir le kit",
      eyebrow: "Étape finale",
      title: "Vos coordonnées de livraison",
      lead: "Ces informations servent uniquement à préparer et livrer votre commande. Le paiement se fait en espèces, à la réception.",
      labels: {
        nom: "Nom et prénom",
        telephone: "Téléphone",
        wilaya: "Wilaya",
        adresse: "Adresse / commune",
        note: "Note pour le livreur (optionnel)",
      },
      placeholders: {
        nom: "Djamal Benali",
        telephone: "0555 12 34 56",
        wilaya: "Sélectionner…",
        adresse: "Cité, rue, repère...",
        note: "Étage, horaires de disponibilité...",
      },
      errors: {
        nom: "Le nom est requis.",
        telephone: "Numéro invalide (ex : 0555 12 34 56).",
        wilaya: "Choisissez votre wilaya.",
        adresse: "L'adresse est requise.",
      },
      submit: (price) => `Confirmer ma réservation — ${price}`,
      summaryEyebrow: "Récapitulatif",
      summaryTitle: "Votre bon",
      summaryTotal: "Total à la livraison",
    },
    confirmation: {
      eyebrow: "Réservation confirmée",
      greeting: (firstName) => `Merci, ${firstName} !`,
      lead: (orderNumber, phone) => (
        <>
          Votre bon de réservation <strong>{orderNumber}</strong> est
          enregistré. Notre équipe vous contacte au{" "}
          <strong>{phone}</strong> pour organiser la livraison.
        </>
      ),
      wilayaLabel: "Wilaya",
      adresseLabel: "Adresse",
      totalLabel: "Total à payer à la livraison",
      continueBtn: "Continuer mes achats",
      homeBtn: "Retour à l'accueil",
    },
    notFound: {
      eyebrow: "Erreur 404",
      title: "Cette page n'existe pas",
      text: "Le lien est peut-être incorrect ou la page a été déplacée.",
      cta: "Retour à l'accueil",
    },
  },

  dz: {
    dir: "rtl",
    htmlLang: "ar",
    currency: (n) => new Intl.NumberFormat("fr-DZ").format(n) + " دج",
    nav: {
      kit: "الكيت",
      pourquoi: "علاش",
      comment: "كيفاش تخدم",
      faq: "الأسئلة",
    },
    header: {
      ticketBtn: "الطلبية ديالي",
    },
    codStamp: {
      line1: "الخلاص",
      line2: "وقت التوصيل",
    },
    product: {
      tagline: "الكيت لي يخليك متوافق مع قانون المرور الجزائري",
      description:
        "مثلث الإشارة، صديري عاكس، جراب صغير، و مطفاية حريق: كل شي لي يطلبه القانون، مجموع في حقيبة وحدة تخليها في الكوفر ديالك.",
      contents: [
        {
          id: "triangle",
          name: "مثلث التشوير العاكس",
          description:
            "يعلم السائقين الآخرين وقت التوقف الاضطراري، بان حتى في الليل بفضل الأشرطة العاكسة.",
        },
        {
          id: "gilet",
          name: "صديري عالي الوضوح متوافق مع معيار CE",
          description:
            "تلبسه قبل ما تخرج من الطومبيل إلا وقفت في الطريق — واجب حسب القانون.",
        },
        {
          id: "trousse",
          name: "جراب RoadSafe Emergency Kit",
          description:
            "جراب صغير و منظم يجمع كل عتاد الأمان ديالك، حاضر للاستعمال في الكوفر.",
        },
        {
          id: "extincteur",
          name: "مطفاية حريق للطومبيل",
          description:
            "رد فعل سريع في حالة اندلاع حريق: رد فعل بسيط يقدر ينقذ حياة.",
        },
      ],
      faq: [
        {
          q: "كيفاش يتم الخلاص؟",
          a: "ما كاين حتى خلاص أونلاين. تحجز الكيت، و بعدها تخلص كاش مباشرة للموصل وقت استلام الطلبية.",
        },
        {
          q: "توصلو لكل الجزائر؟",
          a: "إيه، التوصيل موجود في 58 ولاية. المدة تختلف حسب المنطقة ديالك، الفريق تاعنا يتصل بيك باش يأكد.",
        },
        {
          q: "الكيت متوافق فعلا مع القانون؟",
          a: "المثلث و الصديري يستجاوبو للمعايير لي تتفحص عادة في الكونترولات المرورية في الجزائر (تشوير عاكس، معيار CE للصديري).",
        },
        {
          q: "نقدر نحجز أكثر من كيت؟",
          a: "إيه، تقدر تختار الكمية لي تحتاجها وقت الحجز، مثلا باش تجهز أكثر من طومبيل.",
        },
        {
          q: "نقدر نلغي الطلبية؟",
          a: "إيه، الحجز ما يلزمكش بحتى شي قبل التوصيل. تقدر تلغي في أي وقت بالتواصل مع الفريق تاعنا.",
        },
      ],
    },
    hero: {
      eyebrow: "متوافق مع قانون المرور الجزائري",
      titleMain: "ماتبقاش تسوق",
      titleAccent: "و انت مخالف.",
      priceNote: "التوصيل داخل في حساب الموصل",
      reserveCta: (price) => `احجز الكيت ديالي — ${price}`,
      trust: [
        "التوصيل لـ 58 ولاية",
        "الحجز بلا التزام",
        "الخلاص 100% وقت التوصيل",
      ],
    },
    why: {
      eyebrow: "علاش هاد الكيت",
      title: "الكونترول ما يعلمكش قبل.",
      text: "بلا مثلث و لا صديري في الطومبيل، كونترول بسيط يقدر يولي مخالفة. RoadSafe Emergency Kit يبقى في الكوفر ديالك ديما، حاضر للاستعمال — سواء لكونترول ولا لحالة طارئة فعلية في الطريق.",
      riskLabel: "بلا الكيت",
      riskSub: "مخالفة ممكنة، في كل كونترول",
      safeLabel: "بالكيت",
      safeSub: "شرية وحدة برك، راحة البال ديمة",
      vs: "ولا",
    },
    kit: {
      eyebrow: "بداخل الكيت",
      title: "شنو كاين في الكيت",
    },
    how: {
      eyebrow: "المراحل",
      title: "كيفاش تخدم",
      steps: [
        {
          n: "01",
          title: "اختار الكمية",
          text: "شوف الكيت و زيده للطلبية ديالك بالكمية لي تحتاجها.",
        },
        {
          n: "02",
          title: "أكد الطلبية",
          text: "عطينا معلوماتك و الولاية تاعك. ما نطلبوش حتى معلومة بنكية.",
        },
        {
          n: "03",
          title: "خلص وقت التوصيل",
          text: "الموصل يتصل بيك، تتأكد من الطلبية و تخلص كاش وقت الاستلام.",
        },
      ],
    },
    faqSection: {
      eyebrow: "الأسئلة المتكررة",
      title: "قبل ما تحجز",
    },
    footer: {
      brandText:
        "الحانوت الأونلاين ديالك في الجزائر. احجز الكيت ديالك، خلص وقت التوصيل — بسيط، بلا كارط بنكية.",
      col1Title: "الكيت",
      col1Links: ["التقديم", "علاش هاد الكيت", "كيفاش تخدم", "الأسئلة"],
      col2Title: "التواصل",
      col3Title: "تابعنا",
      legalLink: "المعلومات القانونية",
      copyright: (year) => `© ${year} جزيري شوب — الجزائر العاصمة، الجزائر`,
    },
    ticket: {
      title: "بون الحجز",
      emptyText: "البون ديالك فارغ لحد الآن.",
      addBtn: "زيد الكيت",
      unit: "/ للوحدة",
      totalLabel: "المجموع لي يتخلص وقت التوصيل",
      confirmBtn: "أكد الحجز",
      note: "بلا خلاص أونلاين. تخلص كاش للموصل.",
      close: "سكر",
    },
    reservation: {
      emptyEyebrow: "بون الحجز",
      emptyTitle: "الطلبية ديالك فارغة",
      emptyText: "ارجع لصفحة الكيت باش تختار الكمية.",
      emptyCta: "شوف الكيت",
      eyebrow: "المرحلة الأخيرة",
      title: "معلومات التوصيل ديالك",
      lead: "هاد المعلومات تستعمل غير باش نحضرو و نوصلو طلبيتك. الخلاص يكون كاش وقت الاستلام.",
      labels: {
        nom: "الاسم و اللقب",
        telephone: "رقم الهاتف",
        wilaya: "الولاية",
        adresse: "العنوان / البلدية",
        note: "ملاحظة للموصل (اختياري)",
      },
      placeholders: {
        nom: "جمال بن علي",
        telephone: "0555 12 34 56",
        wilaya: "اختار…",
        adresse: "الحي، الشارع، علامة مميزة...",
        note: "الطابق، الأوقات المناسبة...",
      },
      errors: {
        nom: "الاسم واجب.",
        telephone: "رقم غير صحيح (مثال: 0555 12 34 56).",
        wilaya: "اختار الولاية ديالك.",
        adresse: "العنوان واجب.",
      },
      submit: (price) => `أكد الحجز — ${price}`,
      summaryEyebrow: "ملخص",
      summaryTitle: "بون الحجز",
      summaryTotal: "المجموع وقت التوصيل",
    },
    confirmation: {
      eyebrow: "الحجز تأكد",
      greeting: (firstName) => `شكرا، ${firstName} !`,
      lead: (orderNumber, phone) => (
        <>
          بون الحجز ديالك <strong>{orderNumber}</strong> تسجل. الفريق
          تاعنا غادي يتصل بيك على <strong>{phone}</strong> باش ينظم
          التوصيل.
        </>
      ),
      wilayaLabel: "الولاية",
      adresseLabel: "العنوان",
      totalLabel: "المجموع لي يتخلص وقت التوصيل",
      continueBtn: "كمل التسوق",
      homeBtn: "ارجع للرئيسية",
    },
    notFound: {
      eyebrow: "خطأ 404",
      title: "هاد الصفحة ماكانتش",
      text: "الرابط يمكن غالط ولا الصفحة تبدلت.",
      cta: "ارجع للرئيسية",
    },
  },
};

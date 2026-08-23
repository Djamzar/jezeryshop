import { Link } from "react-router-dom";
import { legalInfo } from "../data/legalInfo";
import "./MentionsLegales.css";

export default function MentionsLegales() {
  const { editeur, hebergeur } = legalInfo;

  return (
    <div className="legal section">
      <div className="container legal__inner">
        <span className="eyebrow">Informations légales</span>
        <h1>Mentions légales</h1>
        <p className="legal__intro">
          Conformément à la réglementation algérienne applicable au
          commerce électronique, notamment la loi n° 18-05 du 10 mai 2018
          relative au commerce électronique, les informations suivantes
          sont mises à la disposition des utilisateurs du site Jezeryshop.
        </p>

        <section className="legal__block">
          <h2>1. Éditeur du site</h2>
          <ul className="legal__facts">
            <li><span>Raison sociale / nom</span><span>{editeur.raisonSociale}</span></li>
            <li><span>Forme juridique</span><span>{editeur.formeJuridique}</span></li>
            <li><span>Capital social</span><span>{editeur.capital}</span></li>
            <li><span>Adresse</span><span>{editeur.adresse}</span></li>
            <li><span>Registre de Commerce (RC)</span><span>{editeur.rc}</span></li>
            <li><span>Numéro d'Identification Fiscale (NIF)</span><span>{editeur.nif}</span></li>
            <li><span>Numéro d'Identification Statistique (NIS)</span><span>{editeur.nis}</span></li>
            <li><span>E-mail</span><span>{editeur.email}</span></li>
            <li><span>Téléphone</span><span>{editeur.telephone}</span></li>
            <li><span>Responsable de publication</span><span>{editeur.directeurPublication}</span></li>
          </ul>
        </section>

        <section className="legal__block">
          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            {hebergeur.nom}<br />
            {hebergeur.adresse}<br />
            <a href={hebergeur.site} target="_blank" rel="noreferrer">{hebergeur.site}</a>
          </p>
        </section>

        <section className="legal__block">
          <h2>3. Activité du site</h2>
          <p>
            Jezeryshop propose la présentation et la réservation en ligne
            de produits, avec paiement exclusivement en espèces à la
            livraison. Aucun paiement en ligne, aucune donnée bancaire
            n'est collectée ou traitée par le site.
          </p>
        </section>

        <section className="legal__block">
          <h2>4. Réservation et vente</h2>
          <p>
            La réservation effectuée sur le site ne constitue pas un
            paiement mais une demande de commande. Le contrat de vente
            n'est finalisé qu'à la livraison, au moment du paiement en
            espèces au livreur. Le client peut annuler sa réservation à
            tout moment avant la livraison effective, en contactant
            l'éditeur du site aux coordonnées ci-dessus.
          </p>
          <p>
            Conformément à la loi n° 09-03 du 25 février 2009 relative à
            la protection du consommateur et à la répression des fraudes,
            le consommateur dispose d'un droit à une information claire
            sur le prix, les caractéristiques essentielles du produit et
            les conditions de livraison, informations qui figurent sur la
            page produit.
          </p>
        </section>

        <section className="legal__block">
          <h2>5. Protection des données personnelles</h2>
          <p>
            Les données collectées lors d'une réservation (nom, numéro de
            téléphone, wilaya, adresse) sont utilisées exclusivement pour
            traiter et livrer la commande. Elles ne sont transmises qu'au
            service de livraison chargé d'acheminer la commande, et ne
            sont ni vendues ni cédées à des tiers à des fins commerciales.
          </p>
          <p>
            Conformément à la loi n° 18-07 du 10 juin 2018 relative à la
            protection des personnes physiques dans le traitement des
            données à caractère personnel, vous disposez d'un droit
            d'accès, de rectification et de suppression de vos données,
            que vous pouvez exercer en nous contactant à l'adresse
            {" "}{editeur.email}.
          </p>
        </section>

        <section className="legal__block">
          <h2>6. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments présents sur le site (textes, logo,
            images, mise en page) est protégé au titre de la propriété
            intellectuelle. Toute reproduction non autorisée est
            interdite.
          </p>
        </section>

        <section className="legal__block">
          <h2>7. Droit applicable et litiges</h2>
          <p>
            Le présent site et les transactions qui en découlent sont
            soumis au droit algérien. En cas de litige, une solution
            amiable sera recherchée en priorité en contactant l'éditeur
            aux coordonnées mentionnées ci-dessus.
          </p>
        </section>

        <p className="legal__disclaimer">
          Ce document est un modèle structuré à titre indicatif et ne
          constitue pas un avis juridique. Il est recommandé de le faire
          valider par un professionnel du droit ou de vérifier les
          obligations exactes auprès du Centre National du Registre de
          Commerce (CNRC) avant toute exploitation commerciale réelle du
          site.
        </p>

        <Link to="/" className="btn btn-outline legal__back">← Retour à l'accueil</Link>
      </div>
    </div>
  );
}

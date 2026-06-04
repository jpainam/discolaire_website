export type LegalView = "privacy" | "terms";

export type LegalContent = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export const LEGAL_CONTENT: Record<LegalView, LegalContent> = {
  privacy: {
    eyebrow: "Politique de confidentialité",
    title: "Protection des données personnelles",
    intro:
      "Cette politique explique comment Discolaire collecte, utilise, protège et conserve les données transmises via ce site, les demandes de démonstration et les échanges commerciaux liés à la solution.",
    sections: [
      {
        heading: "1. Données collectées",
        body: "Nous pouvons collecter les informations fournies volontairement dans les formulaires : nom, prénom, fonction, établissement, adresse e-mail, numéro de téléphone, ville, taille de l'école, besoins exprimés et tout message envoyé à notre équipe. Lors d'une démonstration, des données techniques limitées peuvent également être enregistrées pour assurer la sécurité, le diagnostic et l'amélioration du service.",
      },
      {
        heading: "2. Utilisation des données",
        body: "Les données sont utilisées pour répondre aux demandes de contact, organiser les démonstrations, établir des propositions commerciales, fournir l'assistance demandée, améliorer l'expérience du site et sécuriser les accès aux environnements de démonstration.",
      },
      {
        heading: "3. Données scolaires sensibles",
        body: "Discolaire est conçu pour traiter des informations scolaires comme les dossiers élèves, notes, absences, paiements et documents administratifs. Dans le cadre du site public, nous vous recommandons de ne transmettre aucune donnée nominative d'élève dans les formulaires. Lorsque la solution est déployée pour un établissement, les modalités de traitement sont précisées dans le contrat ou l'accord de traitement des données applicable.",
      },
      {
        heading: "4. Partage et sous-traitance",
        body: "Nous ne vendons pas les données personnelles. Certaines informations peuvent être traitées par des prestataires techniques strictement nécessaires à l'hébergement, à la messagerie, à la sécurité, à l'analyse d'audience ou au support. Ces prestataires interviennent selon des obligations de confidentialité et de sécurité.",
      },
      {
        heading: "5. Conservation",
        body: "Les données de contact sont conservées pendant la durée nécessaire au suivi de la demande et de la relation commerciale, sauf obligation légale ou demande de suppression applicable. Les journaux techniques sont conservés pour une durée limitée liée à la sécurité et au bon fonctionnement du service.",
      },
      {
        heading: "6. Cookies et mesures d'audience",
        body: "Le site peut utiliser des cookies ou technologies similaires pour assurer son fonctionnement, mesurer la fréquentation et comprendre les parcours de navigation. Les cookies non essentiels sont utilisés uniquement lorsque la réglementation applicable l'autorise.",
      },
      {
        heading: "7. Droits des personnes",
        body: "Selon la réglementation applicable, vous pouvez demander l'accès, la rectification, la suppression, la limitation ou l'opposition au traitement de vos données. Vous pouvez également demander des informations sur l'origine, la finalité et les destinataires des données traitées.",
      },
      {
        heading: "8. Sécurité",
        body: "Nous appliquons des mesures techniques et organisationnelles destinées à protéger les données contre l'accès non autorisé, la perte, l'altération ou la divulgation. Aucun système n'étant totalement exempt de risque, nous renforçons régulièrement nos pratiques de sécurité.",
      },
      {
        heading: "9. Contact",
        body: "Pour toute demande relative à la confidentialité ou à l'exercice de vos droits, contactez l'équipe Discolaire via le formulaire de contact du site ou les coordonnées communiquées dans votre contrat.",
      },
    ],
  },
  terms: {
    eyebrow: "Conditions d'utilisation",
    title: "Conditions générales du site et de la démonstration",
    intro:
      "Ces conditions encadrent l'accès au site Discolaire, aux contenus de présentation, aux simulateurs, à la documentation et aux environnements de démonstration accessibles depuis ce site.",
    sections: [
      {
        heading: "1. Objet",
        body: "Le site présente la solution Discolaire, ses modules, ses tarifs indicatifs, sa documentation et ses services d'accompagnement. Les informations publiées sont fournies à titre de présentation et peuvent évoluer sans préavis.",
      },
      {
        heading: "2. Accès au site",
        body: "L'accès au site est libre, sous réserve d'une utilisation loyale, raisonnable et conforme aux lois applicables. Discolaire peut suspendre ou limiter l'accès à tout moment pour maintenance, sécurité, mise à jour ou contrainte technique.",
      },
      {
        heading: "3. Démonstration et simulateurs",
        body: "Les espaces de démonstration, simulateurs de prix et exemples fonctionnels sont fournis à des fins d'évaluation. Ils ne constituent pas un engagement définitif de prix, de disponibilité, de performance ou de configuration. Une proposition contractuelle écrite reste nécessaire pour confirmer les conditions applicables à un établissement.",
      },
      {
        heading: "4. Compte, identifiants et sécurité",
        body: "Lorsque des identifiants de démonstration sont fournis, ils doivent rester confidentiels et être utilisés uniquement par les personnes autorisées. Toute utilisation abusive, tentative d'intrusion, extraction massive, contournement de sécurité ou altération du service est interdite.",
      },
      {
        heading: "5. Contenus et propriété intellectuelle",
        body: "Les textes, interfaces, logos, visuels, modules, documentations, architectures et éléments logiciels présentés sur le site sont protégés par les droits de propriété intellectuelle. Toute reproduction, adaptation, diffusion ou exploitation non autorisée est interdite.",
      },
      {
        heading: "6. Responsabilités de l'utilisateur",
        body: "L'utilisateur s'engage à fournir des informations exactes dans les formulaires, à ne pas transmettre de données sensibles inutiles, à respecter les droits des tiers et à ne pas utiliser le site pour un usage frauduleux, illicite ou susceptible de nuire au fonctionnement de Discolaire.",
      },
      {
        heading: "7. Disponibilité et exactitude",
        body: "Discolaire s'efforce de maintenir des informations fiables et un service accessible. Toutefois, des erreurs, interruptions, retards ou indisponibilités peuvent survenir. Les contenus du site ne remplacent pas un contrat, un devis signé ou une documentation technique validée pour un déploiement spécifique.",
      },
      {
        heading: "8. Liens externes",
        body: "Le site peut contenir des liens vers des services tiers, notamment des plateformes de démonstration, de documentation ou de prise de contact. Discolaire n'est pas responsable du contenu, de la sécurité ou des pratiques de confidentialité de ces services tiers.",
      },
      {
        heading: "9. Modification des conditions",
        body: "Discolaire peut mettre à jour ces conditions afin de refléter l'évolution du site, du service, de la réglementation ou de ses pratiques. La version publiée sur le site est celle applicable au moment de la consultation.",
      },
      {
        heading: "10. Droit applicable",
        body: "Sauf stipulation contractuelle contraire, l'utilisation du site est soumise aux règles applicables au lieu d'exploitation de Discolaire et aux dispositions impératives de protection des utilisateurs concernées.",
      },
    ],
  },
};

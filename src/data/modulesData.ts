import { ModuleItem } from "../types";

export const DISCOLAIRE_MODULES: ModuleItem[] = [
  {
    id: "installation",
    title: "Installation & Démarrage",
    description: "Configuration initiale rapide, création de compte et paramétrage général pour démarrer en quelques minutes.",
    fullDetails: "Le processus d'installation de Discolaire est conçu pour être accessible. Que vous optiez pour la version Cloud ou locale, l'assistant d'accueil configure automatiquement l'année scolaire de référence, les coordonnées de l'établissement et les fuseaux horaires nécessaires à l'envoi d'alertes.",
    iconName: "Download",
    category: "Technologie"
  },
  {
    id: "administration",
    title: "Administration Centrale",
    description: "Gestion fine des droits d'utilisateurs, journaux d'audit complets pour la sécurité, et paramètres de l'établissement scolaires.",
    fullDetails: "Administration sécurisée de vos données. Définissez des profils d'accès précis (Proviseur, Secrétaire, Comptable, Enseignant, Éléve, Parent) et contrôlez l'historique complet des actions via nos registres d'audit conformes au RGPD.",
    iconName: "ShieldCheck",
    category: "Administration"
  },
  {
    id: "personnel",
    title: "Gestion du Personnel",
    description: "Fiches administratives complètes du personnel enseignant et administratif, taux horaires, matières enseignées et affectations.",
    fullDetails: "Suivi RH des enseignants, contrats de travail, attributions de matières spécifiques et de classes principales. Connecté directement au planificateur pour éliminer toute possibilité de doublon ou de conflit d'agenda.",
    iconName: "Users",
    category: "Administration"
  },
  {
    id: "eleves",
    title: "Dossiers des Élèves",
    description: "Profils scolaires complets, historique médical, détails d'inscriptions, pièces jointes numérisées et progression annuelle.",
    fullDetails: "Centralisez toutes les informations sur vos apprenants. Gardez un oeil sur le dossier pédagogique complet, les antécédents médicaux d'urgence, et l'historique de présence de chaque élève en un clic.",
    iconName: "GraduationCap",
    category: "Pedagogie"
  },
  {
    id: "parents",
    title: "Portail & Suivi des Parents",
    description: "Gestion des contacts des tuteurs légaux, lien direct parent-élève pour les notifications de notes et d'absences.",
    fullDetails: "Créez une relation de confiance. Les parents d'élèves disposent d'un accès sécurisé pour surveiller l'évolution des notes, justifier les absences de leurs enfants en ligne et échanger avec la vie scolaire.",
    iconName: "UserCheck",
    category: "Administration"
  },
  {
    id: "classes",
    title: "Gestion des Classes",
    description: "Organisation rigoureuse par niveaux, options, séries pédagogiques et découpage en trimestres ou semestres.",
    fullDetails: "Configurez l'ossature académique de votre établissement. Liez des salles de cours fixes, définissez des effectifs maximaux pour garantir le confort pédagogique et attribuez des professeurs principaux en toute simplicité.",
    iconName: "LayoutGrid",
    category: "Pedagogie"
  },
  {
    id: "presences",
    title: "Suivi des Présences",
    description: "Pointage en temps réel des absences et retards par matière ou par demi-journée, et alertes SMS automatiques aux parents.",
    fullDetails: "Luttez activement contre le décrochage scolaire. Les enseignants valident l'appel depuis leur tablette/mobile. Toute absence non justifiée peut déclencher instantanément une notification SMS ou WhatsApp aux tuteurs.",
    iconName: "ClipboardCheck",
    category: "Pedagogie"
  },
  {
    id: "notes",
    title: "Saisie des Notes & Devoirs",
    description: "Gestion des devoirs, évaluations à coefficients variables, calcul et pondération automatiques.",
    fullDetails: "Des outils de saisie de notes simplifiés pour les enseignants, avec support des barèmes personnalisés, appréciations globales et statistiques de classe en temps réel pour évaluer la compréhension.",
    iconName: "FileSpreadsheet",
    category: "Pedagogie"
  },
  {
    id: "bulletins",
    title: "Bulletins Scolaires",
    description: "Calcul fiable des moyennes générales, génération de bulletins PDF signés numériquement et classements.",
    fullDetails: "Générez d'un clic les bilans périodiques complets. Discolaire agrège automatiquement les coefficients, applique les mentions décidées par le conseil de classe et publie les bulletins sur les espaces parents.",
    iconName: "Award",
    category: "Pedagogie"
  },
  {
    id: "emplois_temps",
    title: "Emplois du Temps",
    description: "Générateur intelligent de plannings hebdomadaires pour éviter les conflits d'horaires et de salles.",
    fullDetails: "Gérez intelligemment les ressources de l'école. Visualisez l'occupation des salles en temps réel, configurez des plages de disponibilité pour les enseignants vacataires et partagez l'agenda personnalisé de chaque élève.",
    iconName: "Calendar",
    category: "Pedagogie"
  },
  {
    id: "bibliotheque",
    title: "Gestion de Bibliothèque",
    description: "Indexation des ouvrages scolaires, gestion informatisée des prêts et alertes pour les retards de retour.",
    fullDetails: "Un outil de gestion de fonds (fictions, manuels, documents). Scannez les codes-barres pour enregistrer les emprunts, gérez les stocks, l'état d'usure des livres et relancez les élèves retardataires d'un seul bouton.",
    iconName: "BookOpen",
    category: "Outils"
  },
  {
    id: "comptabilite",
    title: "Comptabilité & Scolarité",
    description: "Échauffement des factures scolaires, encaissement des mensualités, gestion des remises et frais d'inscription.",
    fullDetails: "Suivi financier précis de l'établissement. Discolaire permet de paramétrer des moratoires de paiement, d'émettre des reçus fiscaux, d'enregistrer les paiements par virement, chèque ou cash, et de suivre les impayés.",
    iconName: "CreditCard",
    category: "Finance"
  },
  {
    id: "communications",
    title: "Messagerie & Multi-Canal",
    description: "Envoi massif de bulletins d'information, SMS groupés, messagerie sécurisée interne, intégrations WhatsApp et Email.",
    fullDetails: "Établissez un canal de communication moderne. Diffusez des notes d'information importantes aux personnels en interne tout en envoyant d'importants communiqués de rentrée par email ou SMS en vrac aux familles.",
    iconName: "MessageSquare",
    category: "Outils"
  },
  {
    id: "ai_assistant",
    title: "Adjoint IA Intégré",
    description: "Optimisation de rapports d'apprentissage, génération automatique d'exercices ou aide à la rédaction de commentaires.",
    fullDetails: "L'Intelligence Artificielle intégrée à Discolaire aide les équipes pédagogiques : génération de résumés de conseils de classe, suggestions d'exercices personnalisés et assistance de rédaction pour les appréciations complexes.",
    iconName: "Sparkles",
    category: "Technologie"
  },
  {
    id: "multiplatform",
    title: "Applications Multi-plateforme",
    description: "Accessibilité complète sur Navigateurs Web, applications de bureau (Windows/CLI) et applications d'App Store mobiles.",
    fullDetails: "Une synchronisation fluide sur tous vos appareils. Que vos équipes soient au bureau sur un grand écran ou que les professeurs effectuent les appels sur smartphone en classe, l'expérience reste intuitive et complète.",
    iconName: "Tablet",
    category: "Technologie"
  }
];

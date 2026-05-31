import { DocArticle } from "../types";

export const DISCOLAIRE_DOCS: DocArticle[] = [
  {
    id: "installation",
    title: "Installation et Configuration Initiale",
    section: "Installation",
    summary: "Installation pas-à-pas de l'écosystème Discolaire sur vos serveurs scolaires ou utilisation de l'offre Cloud clé en main.",
    content: `<h3>1. Prérequis Système</h3>
<p>Pour déployer la version autonome/locale de Discolaire sur l'infrastructure de votre école, assurez-vous de disposer de la configuration minimale suivante :</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Serveur :</strong> 4 Cœurs CPU, 8 Go de RAM, 50 Go d'espace disque disponible (SSD recommandé).</li>
  <li><strong>Système d'exploitation :</strong> Ubuntu Server 22.04 LTS, Windows Server 2019 ou supérieur, ou hôte Docker v24+.</li>
  <li><strong>Base de données :</strong> PostgreSQL 14+, gérée par l'installateur automatisé.</li>
</ul>

<h3 class="mt-4">2. Assistant d'Installation Web Automatisé</h3>
<p>L'installation s'effectue en téléchargeant l'archive Discolaire, puis en exécutant le script de démarrage de votre choix :</p>
<pre class="bg-gray-100 p-3 rounded font-mono text-xs mt-2 overflow-x-auto text-violet-800">
# Téléchargement et lancement du conteneur sécurisé
docker run -d -p 8080:8080 --name discolaire-core discolaire/core:latest
</pre>
<p class="mt-2">Ouvrez ensuite votre navigateur internet de prédilection sur l'adresse <code>http://localhost:8080</code>. L'assistant graphique vous accompagnera pour :</p>
<ul class="list-decimal pl-5 space-y-1 mt-2">
  <li>Saisir les informations d'identité de votre établissement (Nom, Logo, Adresse, Numéro d'agrément ministériel).</li>
  <li>Créer le compte de l'Administrateur principal du système.</li>
  <li>Définir la structure de l'année scolaire de départ (Semestrielle ou Trimestrielle).</li>
</ul>`,
    subheadings: ["Prérequis Système", "Assistant d'Installation Web Automatisé", "Premier Démarrage"]
  },
  {
    id: "administration",
    title: "Rôles, Permissions et Journaux d'Audit",
    section: "Administration",
    summary: "Comment administrer l'accès de l'équipe académique, des tuteurs et des apprenants en toute sécurité réglementaire.",
    content: `<h3>1. Gestion des Utilisateurs et Groupes</h3>
<p>Discolaire s'appuie sur le contrôle d'accès basé sur les rôles (RBAC). Les groupes par défaut incluent :</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Direction & Administration :</strong> Accès total en lecture, modification, validation finale des bulletins et écritures financières.</li>
  <li><strong>Enseignants :</strong> Droit de consultation des dossiers de leurs classes assignées, saisie des notes d'évaluations et appel quotidien.</li>
  <li><strong>Comptables :</strong> Émission exclusive des factures scolaires, enregistrement des règlements et suivi des plans d'échelonnement.</li>
  <li><strong>Vie Scolaire :</strong> Saisie des absences et signalements de discipline.</li>
  <li><strong>Élèves & Parents :</strong> Consultation exclusive (bulletins, absences, devoirs, factures de scolarité).</li>
</ul>

<h3 class="mt-4">2. Suivi de la Sécurité (Journal d'Audit)</h3>
<p>Chaque action touchant aux dossiers des élèves ou aux écritures financières est journalisée de manière inaltérable :</p>
<pre class="bg-gray-100 p-3 rounded font-mono text-xs mt-2 text-violet-800">
[AUDIT] 2026-05-31 08:32 - UT: Sec_Marie - ACT: Saisie_Mod_Note - DET: Elev_ID: #402 - Note: 15.5/20
</pre>
<p class="mt-2">Cette transparence totale permet d'éviter les erreurs ou fraudes lors de la finalisation des moyennes en fin de période scolaire.</p>`,
    subheadings: ["Gestion des Rôles", "Contrôles RGPD", "Journalisation d'Audit"]
  },
  {
    id: "eleves_parents",
    title: "Inscriptions et Gestion des Dossiers Élèves",
    section: "Élèves",
    summary: "Procédures d'admission, de transfert de classe, d'importations collectives d'élèves et de liaison avec les parents.",
    content: `<h3>1. Importation Collective des Élèves</h3>
<p>Gagnez du temps en important l'intégralité de votre effectif existant en début d'année depuis un fichier CSV ou Excel standard :</p>
<ul class="list-disc pl-5 space-y-1 mt-2">
  <li>Rendez-vous dans <strong>Élèves > Importer</strong>.</li>
  <li>Téléchargez notre gabarit Excel standardisé (obligatoire pour conserver l'exactitude des entêtes de données).</li>
  <li>Associez les colonnes correspondantes (Nom, Prénom, Sexe, Date de Naissance, Téléphone parent) puis validez.</li>
</ul>

<h3 class="mt-4">2. Création Manuelle et Liaison Parent</h3>
<p>Pour l'admission d'un nouvel élève en milieu de cursus, utilisez le formulaire "Nouvel Élève" permettant d'affecter instantanément sa classe, de définir ses options spécifiques (Ex: Langues vivantes), puis de le rattacher à un foyer fiscal (Parent/Tuteur) existant ou d'ajouter une nouvelle fiche tuteur d'un même élan.</p>`,
    subheadings: ["Import CSV/Excel", "Dossier Médical", "Liaisons Familiales"]
  },
  {
    id: "classes_emplois",
    title: "Organisation des Classes et Emplois du Temps",
    section: "Classes",
    summary: "Structuration académique, assignation des professeurs principaux et conception d'horaires sans conflits.",
    content: `<h3>1. Détermination du Référentiel</h3>
<p>Configurez vos cycles d'études (ex: Primaire, Collège, Lycée) puis créez vos classes de référence (ex: 6ème A, 3ème B, Terminale Scientifique) avec leurs effectifs cibles correspondants.</p>

<h3 class="mt-4">2. Confection Calendaire</h3>
<p>L'outil d'emploi du temps de Discolaire calcule automatiquement la compatibilité des salles et la disponibilité des enseignants :</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Saisissez les contraintes de cours (ex: Mathématiques = 4 heures/semaine requérant idéalement un vidéo-projecteur).</li>
  <li>Glissez-déposez les cours sur la grille hebdomadaire visuelle.</li>
  <li>Le système vous alerte immédiatement si un enseignant est affecté sur le même créneau horaire ou si une salle de cours physique accueille déjà un autre groupe d'étude.</li>
</ul>`,
    subheadings: ["Cycles Académiques", "Planning Visuel", "Gestion des Salles de Cours"]
  },
  {
    id: "notes_bulletins",
    title: "Saisie des Notes et Calcul des Moyennes",
    section: "Notes",
    summary: "Paramétrage des formules d'examens, pondération des matières, appréciation générale et édition finale des bulletins scolaires.",
    content: `<h3>1. Coefficient et Types d'Évaluations</h3>
<p>Les enseignants définissent leurs matières respectives et créent des examens d'un type précis :</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Contrôle Continu :</strong> Coefficient mineur (ex: 1) pour les petits exercices du quotidien.</li>
  <li><strong>Devoir Trimestriel / Examen Majeur :</strong> Coefficient supérieur (ex: 3) pour juger des acquis.</li>
  <li><strong>Rattrapage / Bonus :</strong> Prise en compte optionnelle selon la politique de réussite de l'école.</li>
</ul>

<h3 class="mt-4">2. Calcul des Moyennes automatiques</h3>
<p>Dites adieu aux fastidieuses manipulations sur tableurs en fin de trimestre ! Discolaire calcule automatiquement la moyenne pondérée de chaque élève pour chaque matière, puis calcule la moyenne générale de la période. Les enseignants saisissent simplement leurs appréciations écrites, et l'administration peut générer en lot l'ensemble des PDF de la classe.</p>`,
    subheadings: ["Saisie Individuelle & Collective", "Règles d'Arrondi de Notes", "Conseil de Classe et Bulletins"]
  },
  {
    id: "comptabilite_frais",
    title: "Gestion Financière et Scolarités",
    section: "Comptabilité",
    summary: "Planification des frais de scolarité annuels, encaissement de paiements et suivi d'achalandage d'arriérés pour la direction.",
    content: `<h3>1. Configuration des Barèmes de Scolarité</h3>
<p>Déterminez la structure des tarifs d'apprentissage selon la classe ou l'inscription spécifique de l'élève (frais d'examen, adhésion bibliothèque, cantines, transports scolaires).</p>

<h3 class="mt-4">2. Facturation Échelonnée (Mensualités)</h3>
<p>Gérez le versement des frais de scolarité de vos familles de façon échelonnée avec support des prélèvements récurrents ou des rappels SMS écrits automatisés :</p>
<ul class="list-disc pl-5 space-y-1 mt-2">
  <li>Générez la facture globale annuelle de l'élève.</li>
  <li>Divisez-la commodément en mensualités fixes négociées avec la famille de l'apprenant.</li>
  <li>Suivez en direct le statut d'encaissement ("Payé", "Partiel", "En retard").</li>
  <li>Imprimez ou envoyez par mail les reçus de transactions officiels contenant un code QR sécurisé de validation intégrée.</li>
</ul>`,
    subheadings: ["Tableaux de Tarifs", "Enregistrement de Paiements", "Relances d'Arriérés de Cotisations"]
  }
];

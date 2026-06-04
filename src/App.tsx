import * as Icons from "lucide-react";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import DemoSandbox from "./components/DemoSandbox";
import DocViewer from "./components/DocViewer";
import HeroSection from "./components/HeroSection";
import LegalPage from "./components/LegalPage";
import PricingCalculator from "./components/PricingCalculator";
import type { LegalView } from "./data/legalContent";
import { DISCOLAIRE_MODULES } from "./data/modulesData";

export default function App() {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToRoute = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    setSelectedModuleId(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToLegalRoute = (view: LegalView) => {
    navigateToRoute(view === "privacy" ? "/privacy" : "/terms");
  };

  const getSectionElementId = (sectionId: string) =>
    sectionId === "playground"
      ? "experience-bac-a-sable"
      : sectionId === "pricing"
        ? "simulateur-de-tarifs"
        : sectionId === "docs"
          ? "documentation-complete"
          : sectionId === "contact"
            ? "formulaire-demo"
            : "section-hero-principale";

  // Helper to dynamically render a Lucide icon from its name string
  const renderModuleIcon = (name: string) => {
    const IconComp = (Icons as any)[name];
    if (IconComp) {
      return <IconComp className="w-5 h-5 text-[#1A1A1A]" />;
    }
    return <Icons.HelpCircle className="w-5 h-5 text-[#1A1A1A]" />;
  };

  const selectedModule = DISCOLAIRE_MODULES.find(
    (m) => m.id === selectedModuleId,
  );
  const legalRoute =
    currentPath === "/privacy"
      ? "privacy"
      : currentPath === "/terms"
        ? "terms"
        : null;

  // Navigation page transition scrolling helper
  const navigateToSection = (sectionId: string) => {
    if (currentPath !== "/") {
      window.history.pushState({}, "", "/");
      setCurrentPath("/");
      setActiveNav(sectionId);
      setIsMobileMenuOpen(false);
      window.setTimeout(() => {
        const targetElement = document.getElementById(
          getSectionElementId(sectionId),
        );
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      return;
    }

    setActiveNav(sectionId);
    setIsMobileMenuOpen(false);

    // Smooth scroll to container ID
    const targetElement = document.getElementById(getSectionElementId(sectionId));

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (legalRoute) {
    return (
      <LegalPage
        view={legalRoute}
        onNavigateHome={() => navigateToRoute("/")}
        onNavigateLegal={navigateToLegalRoute}
      />
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#1A1A1A] antialiased selection:bg-[#1A1A1A] selection:text-[#FDFCFB] font-sans"
      id="main-scroller"
    >
      {/* 1. TOP GLOBAL NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 px-6 py-5 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigateToSection("home")}
          >
            <div className="w-10 h-10 rounded-none bg-[#1A1A1A] flex items-center justify-center text-white">
              <Icons.GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif italic font-semibold text-[#1A1A1A] block leading-none tracking-tight">
                Discolaire
              </h1>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/60 block mt-1">
                Système Intégré
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-2 mb-1">
            <button
              onClick={() => navigateToSection("home")}
              className={`px-4 py-2 border-b-2 text-xs font-bold uppercase tracking-wider transition-all ${activeNav === "home" ? "border-[#1A1A1A] text-[#1A1A1A]" : "border-transparent text-[#1A1A1A]/65 hover:text-[#1A1A1A]"}`}
            >
              Accueil
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("les-15-modules");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setActiveNav("modules");
              }}
              className={`px-4 py-2 border-b-2 text-xs font-bold uppercase tracking-wider transition-all ${activeNav === "modules" ? "border-[#1A1A1A] text-[#1A1A1A]" : "border-transparent text-[#1A1A1A]/65 hover:text-[#1A1A1A]"}`}
            >
              15 Modules
            </button>
            <button
              onClick={() => navigateToSection("playground")}
              className={`px-4 py-2 border-b-2 text-xs font-bold uppercase tracking-wider transition-all ${activeNav === "playground" ? "border-[#1A1A1A] text-[#1A1A1A]" : "border-transparent text-[#1A1A1A]/65 hover:text-[#1A1A1A]"}`}
            >
              Démo Interactive
            </button>
            <button
              onClick={() => navigateToSection("pricing")}
              className={`px-4 py-2 border-b-2 text-xs font-bold uppercase tracking-wider transition-all ${activeNav === "pricing" ? "border-[#1A1A1A] text-[#1A1A1A]" : "border-transparent text-[#1A1A1A]/65 hover:text-[#1A1A1A]"}`}
            >
              Tarifs
            </button>
            <button
              onClick={() => navigateToSection("docs")}
              className={`px-4 py-2 border-b-2 text-xs font-bold uppercase tracking-wider transition-all ${activeNav === "docs" ? "border-[#1A1A1A] text-[#1A1A1A]" : "border-transparent text-[#1A1A1A]/65 hover:text-[#1A1A1A]"}`}
            >
              Documentation
            </button>
          </nav>

          {/* Practical CTAs */}
          <div className="hidden lg:flex items-center gap-4 mb-1">
            <div className="flex items-center gap-1.5 border border-[#1A1A1A]/10 bg-[#F4F1EE] rounded-none px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold text-[#1A1A1A]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Lancement FR</span>
            </div>

            <button
              onClick={() => {
                window.open("https://demo.discolaire.com", "_blank");
              }}
              className="bg-[#1A1A1A] hover:bg-opacity-90 text-white font-bold text-[11px] uppercase tracking-widest px-6 py-3 rounded-none transition-all"
            >
              Accèder à la Démo
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-none bg-[#F4F1EE] border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#E7E3DF]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <Icons.X className="w-5 h-5" />
            ) : (
              <Icons.Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCFB] border-b border-[#1A1A1A]/10 px-6 py-4 space-y-2 shadow-sm">
          <button
            onClick={() => navigateToSection("home")}
            className="w-full text-left p-3.5 rounded-none text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F4F1EE] block"
          >
            Accueil
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("les-15-modules");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left p-3.5 rounded-none text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F4F1EE] block"
          >
            15 Modules de Gestion
          </button>
          <button
            onClick={() => navigateToSection("playground")}
            className="w-full text-left p-3.5 rounded-none text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F4F1EE] block"
          >
            Démonstrateur Interactif
          </button>
          <button
            onClick={() => navigateToSection("pricing")}
            className="w-full text-left p-3.5 rounded-none text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F4F1EE] block"
          >
            Simuler Tarification
          </button>
          <button
            onClick={() => navigateToSection("docs")}
            className="w-full text-left p-3.5 rounded-none text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F4F1EE] block"
          >
            Documentation
          </button>
          <button
            onClick={() => navigateToSection("contact")}
            className="w-full text-center bg-[#1A1A1A] hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-none transition-all"
          >
            Réserver une Démo de Rentrée
          </button>
        </div>
      )}

      {/* 2. MAJESTIC MARKETING HERO SECTION */}
      <HeroSection onNavigate={navigateToSection} />

      {/* 3. CORE HIGHLIGHT: 15 MODULAIRE MODULES */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="les-15-modules">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-4"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 block">
            ÉCOSYSTÈME DE CONFORT PÉDAGOGIQUE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif italic font-medium tracking-tight text-[#1A1A1A]">
            Une Suite Administrative Redoutablement Complète
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm max-w-xl mx-auto leading-relaxed">
            Chaque module répond aux exigences réelles de la vie scolaire de vos
            établissements. Cliquez sur un bloc pour analyser son fonctionnement
            en profondeur.
          </p>
        </div>

        {/* Modules bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DISCOLAIRE_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedModuleId(mod.id)}
              className="bg-white p-8 rounded-none border border-[#1A1A1A]/10 hover:border-[#1A1A1A] cursor-pointer transition-all hover:bg-[#F4F1EE]/30 block flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#F4F1EE] rounded-none flex items-center justify-center border border-[#1A1A1A]/5">
                  {renderModuleIcon(mod.iconName)}
                </div>
                <h4 className="font-serif italic text-[#1A1A1A] text-lg font-medium tracking-tight leading-tight">
                  {mod.title}
                </h4>
                <p className="text-[#1A1A1A]/75 text-xs leading-relaxed line-clamp-3 font-sans">
                  {mod.description}
                </p>
              </div>

              <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] block pt-3 border-t border-[#1A1A1A]/5">
                En savoir plus →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODULE EXPLANATION OVERDRAWER / MODAL POPUP */}
      {selectedModuleId && selectedModule && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A]/50 backdrop-blur-sm flex items-center justify-center p-6 bg-opacity-65">
          <div className="bg-[#FDFCFB] w-full max-w-2xl rounded-none overflow-hidden shadow-xl border border-[#1A1A1A]/15 animate-scale-up">
            {/* Modal header with category banner */}
            <div className="bg-[#F4F1EE] p-8 border-b border-[#1A1A1A]/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white border border-[#1A1A1A]/10 rounded-none flex items-center justify-center">
                  {renderModuleIcon(selectedModule.iconName)}
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 font-bold block">
                    Module {selectedModule.category}
                  </span>
                  <h3 className="text-2xl font-serif italic font-medium text-[#1A1A1A]">
                    {selectedModule.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedModuleId(null)}
                className="p-2 rounded-none bg-white border border-[#1A1A1A]/10 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F4F1EE] transition-colors"
                aria-label="Fermer"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Body */}
            <div className="p-8 space-y-6">
              <p className="text-base text-[#1A1A1A] leading-relaxed font-serif italic">
                {selectedModule.description}
              </p>
              <div className="bg-[#F4F1EE]/50 border-l-4 border-[#1A1A1A] p-5 rounded-none">
                <span className="text-[10px] text-[#1A1A1A]/60 font-bold block mb-2 uppercase tracking-widest">
                  Spécifications techniques & fonctionnelles
                </span>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">
                  {selectedModule.fullDetails}
                </p>
              </div>
            </div>

            {/* Modal Footer actions */}
            <div className="bg-[#F4F1EE] px-8 py-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[10px] text-[#1A1A1A]/60 font-medium tracking-wide">
                Ce module s'adapte précisément au cahier des charges de votre
                établissement.
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedModuleId(null);
                    navigateToSection("contact");
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-none text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] text-white hover:bg-opacity-95 transition"
                >
                  Configurer
                </button>
                <button
                  onClick={() => setSelectedModuleId(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-none text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#E7E3DF] transition border border-[#1A1A1A]/10 bg-white"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. LIVE CODE INTERACTIVE DEMO (THE SHOWCASE WORKSPACE) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-4"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 block">
            IMMERSION ADMINISTRATIVE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif italic font-medium tracking-tight text-[#1A1A1A]">
            Faites un Voyage d'Essai Administratif
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm max-w-xl mx-auto leading-relaxed">
            Prenez les commandes de l'écosystème Discolaire en direct. Manipulez
            les bulletins scolaires, notez les devoirs ou validez les
            mensualités scolaires de scolarité.
          </p>
        </div>

        <DemoSandbox />
      </section>

      {/* 6. PRICING SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-4"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 block">
            VALEUR & ACCOMPAGNEMENT
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif italic font-medium tracking-tight text-[#1A1A1A]">
            Des Tarifs Clairs, Adaptés aux Écoles de Toutes Tailles
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm max-w-xl mx-auto leading-relaxed">
            Pas de frais d'installation faramineux ni de coûts cachés
            supplémentaires. Calculez votre rentabilité et définissez votre
            budget de fonctionnement trimestriel.
          </p>
        </div>

        <PricingCalculator />
      </section>

      {/* 7. DOCUMENTATION ENGINE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-4"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 block">
            MANUEL DE RÉFÉRENCE DE DÉPLOIEMENT
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif italic font-medium tracking-tight text-[#1A1A1A]">
            Lisez la Notice de Décollage de Discolaire
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm max-w-xl mx-auto leading-relaxed">
            Notre documentation complète, héritée de docs.discolaire.com, vous
            présente chaque étape pour un déploiement cloud ou local en totale
            autonomie académique.
          </p>
        </div>

        <DocViewer />
      </section>

      {/* 8. RESERVATION DE MO MEETING FORM */}
      <section className="py-24 px-6 max-w-7xl mx-auto font-sans">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-4"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 block">
            ENTRETIEN DE SÉCURITÉ DE RENTRÉE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif italic font-medium tracking-tight text-[#1A1A1A]">
            Planifiez l’Installation de Votre Établissement
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm max-w-xl mx-auto leading-relaxed">
            Discutez de vos contraintes d'équipement informatique avec nos
            équipes d'accompagnement technique d'écoles.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* 9. GLOBAL FRENCH SCHOOL MANAGEMENT FOOTER */}
      <footer className="bg-[#F4F1EE] text-[#1A1A1A]/80 py-20 px-6 mt-auto border-t border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Logo and motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1A1A1A] flex items-center justify-center text-white">
                <Icons.GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-serif italic font-semibold text-[#1A1A1A]">
                Discolaire
              </span>
            </div>
            <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
              Le premier système d'information complet pour l'administration
              moderne, la transparence financière, la réconciliation comptable
              et les bulletins d'excellence.
            </p>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase text-[#1A1A1A] tracking-wider">
              En raccourci
            </h5>
            <ul className="text-xs space-y-2.5">
              <li>
                <button
                  onClick={() => navigateToSection("home")}
                  className="hover:text-[#1A1A1A] transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("playground")}
                  className="hover:text-[#1A1A1A] transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Démo Interactive
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("pricing")}
                  className="hover:text-[#1A1A1A] transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Simulation de prix
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("docs")}
                  className="hover:text-[#1A1A1A] transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Guides Techniques
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Modules */}
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase text-[#1A1A1A] tracking-wider">
              Modules Clés
            </h5>
            <ul className="text-xs space-y-2 text-[#1A1A1A]/75">
              <li>Bulletins & Bulletins scolaires</li>
              <li>Saisie de notes & Calcul de moyennes</li>
              <li>Scolarité échelonnée & Caisse</li>
              <li>Assistance administrative par Intelligence Artificielle</li>
            </ul>
          </div>

          {/* Col 4: Tech specs */}
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase text-[#1A1A1A] tracking-wider">
              Engagement académique
            </h5>
            <p className="text-xs text-[#1A1A1A]/75 leading-normal">
              Solution hébergée sur des serveurs souverains sécurisés conformes
              pour assurer l'intégrité des dossiers d'évaluation et d'absences
              de la jeunesse.
            </p>
            <div className="text-[9px] uppercase tracking-wide text-[#1A1A1A] bg-white border border-[#1A1A1A]/10 px-3 py-1.5 inline-block font-bold">
              Intégration de docs.discolaire.com
            </div>
          </div>
        </div>

        {/* Global base footer */}
        <div className="max-w-7xl mx-auto border-t border-[#1A1A1A]/15 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#1A1A1A]/60">
          <span>
            &copy; {new Date().getFullYear()} Discolaire. Tous droits
            d'administration réservés.
          </span>
          <div className="flex gap-4">
            <span>
              Souveraineté des données
            </span>
            <a
              href="/privacy"
              onClick={(event) => {
                event.preventDefault();
                navigateToLegalRoute("privacy");
              }}
              className="hover:underline cursor-pointer text-[#1A1A1A]/60"
            >
              Confidentialité
            </a>
            <a
              href="/terms"
              onClick={(event) => {
                event.preventDefault();
                navigateToLegalRoute("terms");
              }}
              className="hover:underline cursor-pointer text-[#1A1A1A]/60"
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import * as Icons from "lucide-react";
import { LEGAL_CONTENT, type LegalView } from "../data/legalContent";

type LegalPageProps = {
  view: LegalView;
  onNavigateHome: () => void;
  onNavigateLegal: (view: LegalView) => void;
};

export default function LegalPage({
  view,
  onNavigateHome,
  onNavigateLegal,
}: LegalPageProps) {
  const content = LEGAL_CONTENT[view];
  const alternateView: LegalView = view === "privacy" ? "terms" : "privacy";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#1A1A1A] antialiased selection:bg-[#1A1A1A] selection:text-[#FDFCFB] font-sans">
      <header className="sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 px-6 py-5 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-none bg-[#1A1A1A] flex items-center justify-center text-white">
              <Icons.GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif italic font-semibold text-[#1A1A1A] block leading-none tracking-tight">
                Discolaire
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/60 block mt-1">
                Système Intégré
              </span>
            </div>
          </button>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-opacity-90 text-white font-bold text-[11px] uppercase tracking-widest px-5 py-3 rounded-none transition-all"
          >
            <Icons.ArrowLeft className="w-4 h-4" />
            Accueil
          </button>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="w-16 h-[1px] bg-[#1A1A1A] mb-6"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 block">
              {content.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif italic font-medium tracking-tight text-[#1A1A1A] mt-4 max-w-4xl">
              {content.title}
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed max-w-3xl mt-6">
              {content.intro}
            </p>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/55 block mt-6">
              Dernière mise à jour : 4 juin 2026
            </span>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.sections.map((section) => (
              <article
                key={section.heading}
                className="bg-white border border-[#1A1A1A]/10 p-6 rounded-none"
              >
                <h2 className="text-base font-bold text-[#1A1A1A] mb-3 leading-snug">
                  {section.heading}
                </h2>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#F4F1EE] text-[#1A1A1A]/80 py-10 px-6 mt-auto border-t border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-5">
          <p className="text-xs text-[#1A1A1A]/65 leading-relaxed max-w-2xl">
            Ce texte est fourni pour présenter les règles applicables au site
            public. Les contrats signés avec un établissement peuvent prévoir
            des conditions complémentaires.
          </p>
          <button
            onClick={() => onNavigateLegal(alternateView)}
            className="text-left sm:text-right text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:underline"
          >
            {alternateView === "privacy"
              ? "Voir la confidentialité"
              : "Voir les conditions"}
          </button>
        </div>
      </footer>
    </div>
  );
}

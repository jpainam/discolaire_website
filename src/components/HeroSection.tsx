import { Sparkles, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (tabId: "playground" | "pricing" | "docs" | "contact") => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32" id="section-hero-principale">
      
      {/* Editorial subtle pattern */}
      <div className="absolute inset-0 bg-[#F4F1EE]/10 pointer-events-none border-b border-[#1A1A1A]/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Tag Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#F4F1EE] border border-[#1A1A1A]/10 rounded-none px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>Disponible sur Web, Mobile et Desktop</span>
          </div>
        </div>

        {/* Big Catchy Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-8"></div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light leading-[1.05] tracking-tight text-[#1A1A1A]">
            Simplifiez la Gestion de votre <br className="hidden sm:inline" />
            <span className="italic font-normal">Établissement Scolaire</span> avec Discolaire
          </h1>

          <p className="text-[#1A1A1A]/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            La plateforme éducative tout-en-un conçue pour automatiser les inscriptions, sécuriser la facturation échelonnée des familles, consigner les bulletins de notes et garantir un suivi en temps réel pour parents et élèves.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <button
              onClick={() => onNavigate("playground")}
              className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#1A1A1A]"
            >
              Tester la démo interactive <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("docs")}
              className="w-full sm:w-auto bg-[#FDFCFB] hover:bg-[#F4F1EE] text-[#1A1A1A] border border-[#1A1A1A] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all flex items-center justify-center cursor-pointer"
            >
              Consulter la documentation
            </button>
          </div>
        </div>

        {/* Feature Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="bg-[#F4F1EE]/50 p-8 rounded-none border-t-2 border-[#1A1A1A] flex items-start gap-4">
            <div className="p-2.5 bg-white text-[#1A1A1A] rounded-none shrink-0 border border-[#1A1A1A]/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Conformité RGPD SecNum</h4>
              <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed font-sans">
                Hébergement souverain garantissant le cryptage et la confidentialité absolue des relevés d'évaluation de vos élèves.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-none border border-[#1A1A1A]/10 flex items-start gap-4">
            <div className="p-2.5 bg-[#F4F1EE] text-[#1A1A1A] rounded-none shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Migration Zéro Effort</h4>
              <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed font-sans">
                Gabarits d'importation CSV/Excel intelligents pour accueillir vos bases d'élèves en moins de 15 minutes chrono.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-none border border-[#1A1A1A]/10 flex items-start gap-4">
            <div className="p-2.5 bg-[#F4F1EE] text-[#1A1A1A] rounded-none shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Taux d'Adoption</h4>
              <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed font-sans">
                Des interfaces fluides pour les enseignants, claires pour les parents, et rassurantes à piloter pour l'administration.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

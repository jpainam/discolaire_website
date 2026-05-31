import { useState } from "react";
import { Sliders, Sparkles, Check, Hourglass, ArrowUpRight, Coins } from "lucide-react";

export default function PricingCalculator() {
  const [studentCount, setStudentCount] = useState<number>(350);
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [extraSupport, setExtraSupport] = useState<"standard" | "dedicated" | "onpremise">("standard");

  // Pricing configuration
  const getBasePricePerStudent = (count: number) => {
    if (count <= 150) return 0.8;
    if (count <= 500) return 0.6;
    return 0.4;
  };

  const basePricePerStudent = getBasePricePerStudent(studentCount);
  let monthlyBaseTotal = studentCount * basePricePerStudent;

  // Add-ons
  let addonMonthly = 0;
  if (extraSupport === "dedicated") addonMonthly = 99; // Dedicated phone/VIP support
  if (extraSupport === "onpremise") addonMonthly = 199; // Hybrid dedicated server monitoring

  const monthlyTotal = monthlyBaseTotal + addonMonthly;
  const discountMultiplier = isAnnual ? 0.8 : 1.0; // 20% discount on annual plan
  const finalMonthlyCost = monthlyTotal * discountMultiplier;
  const annualTotal = finalMonthlyCost * 12;

  // ROI stats calculations
  const weeklyHoursSaved = Math.round(studentCount * 0.15); // e.g. 15 mins saved per student/week
  const annualPaperSavings = Math.round(studentCount * 4.5); // folders, printer ink, envelopes, mailing
  const parentSatisfactionRate = studentCount > 500 ? "98.7%" : "99.2%";

  return (
    <div className="bg-white rounded-none border border-[#1A1A1A]/10 shadow-sm overflow-hidden" id="simulateur-de-tarifs">
      <div className="bg-[#1A1A1A] p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-serif italic text-white flex items-center gap-2 font-medium">
            <Coins className="w-6 h-6 text-white/90" /> Simulateur de Tarifs & de ROI
          </h3>
          <p className="text-white/70 text-xs mt-2 max-w-2xl font-sans">
            Ajustez le volume d'élèves de votre établissement pour évaluer votre abonnement et les heures de travail économisées après migration.
          </p>
        </div>
        <div className="text-right text-[10px] uppercase tracking-widest font-bold text-white/50 shrink-0">
          Barème dégressif
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sliders and configurations */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Nombre d'Élèves inscrits :</label>
              <span className="bg-[#F4F1EE] text-[#1A1A1A] px-4 py-1.5 rounded-none text-xs font-bold font-mono border border-[#1A1A1A]/15">
                {studentCount} Apprenants
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="2000"
              step="10"
              value={studentCount}
              onChange={(e) => setStudentCount(parseInt(e.target.value))}
              className="w-full h-1 bg-[#F4F1EE] appearance-none cursor-pointer accent-[#1A1A1A]"
            />
            <div className="flex justify-between text-[10px] uppercase tracking-wide text-[#1A1A1A]/50 mt-2 font-mono">
              <span>30 élèves (Petite école)</span>
              <span>1000 élèves</span>
              <span>2000 élèves (Grand campus)</span>
            </div>
          </div>

          {/* Billing Cycle Switch */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] block mb-3">Période de facturation :</label>
            <div className="bg-[#F4F1EE] p-1 rounded-none flex max-w-xs border border-[#1A1A1A]/5">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`flex-1 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-none transition-all ${!isAnnual ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
              >
                Mensuel
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`flex-1 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1 ${isAnnual ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
              >
                Annuel <span className={`text-[9px] px-1.5 py-0.5 rounded-none font-sans font-normal ${isAnnual ? 'bg-white/20 text-white' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'}`}>-20%</span>
              </button>
            </div>
          </div>

          {/* Support and Hosting Plans Slider */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] block mb-3">Niveau de Service & Hébergement :</label>
            <div className="space-y-4">
              <label className="flex items-start gap-4 p-4 rounded-none border border-[#1A1A1A]/10 hover:bg-[#F4F1EE]/30 cursor-pointer transition-colors block">
                <input
                  type="radio"
                  name="service"
                  checked={extraSupport === "standard"}
                  onChange={() => setExtraSupport("standard")}
                  className="mt-1 accent-[#1A1A1A]"
                />
                <div>
                  <span className="text-xs font-bold text-[#1A1A1A] block uppercase tracking-wide">Cloud Discolaire Standard (Inclus)</span>
                  <span className="text-[11px] text-[#1A1A1A]/70 leading-normal block mt-1">Mises à jour automatiques transparentes, sauvegardes chiffrées chaque jour sur hébergeur SecNumCloud.</span>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 rounded-none border border-[#1A1A1A]/10 hover:bg-[#F4F1EE]/30 cursor-pointer transition-colors block">
                <input
                  type="radio"
                  name="service"
                  checked={extraSupport === "dedicated"}
                  onChange={() => setExtraSupport("dedicated")}
                  className="mt-1 accent-[#1A1A1A]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#1A1A1A] block uppercase tracking-wide">Support Premium Dédié (+99 €/mois)</span>
                    <span className="bg-[#1A1A1A] text-white text-[8px] font-bold px-1.5 py-0.5 uppercase tracking-wider">Populaire</span>
                  </div>
                  <span className="text-[11px] text-[#1A1A1A]/70 leading-normal block mt-1">Ligne d'assistance téléphonique prioritaire en direct, réponses par WhatsApp & aide à l'intégration des bulletins.</span>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 rounded-none border border-[#1A1A1A]/10 hover:bg-[#F4F1EE]/30 cursor-pointer transition-colors block">
                <input
                  type="radio"
                  name="service"
                  checked={extraSupport === "onpremise"}
                  onChange={() => setExtraSupport("onpremise")}
                  className="mt-1 accent-[#1A1A1A]"
                />
                <div>
                  <span className="text-xs font-bold text-[#1A1A1A] block uppercase tracking-wide">Hébergement Hybride Local (+199 €/mois)</span>
                  <span className="text-[11px] text-[#1A1A1A]/70 leading-normal block mt-1">Pour les écoles à connectivité limitée. Installation physique, base de données locale synchronisable avec clés SSH privées.</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Pricing Output and ROI */}
        <div className="bg-[#F4F1EE] border border-[#1A1A1A]/10 p-8 rounded-none flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] text-[#1A1A1A]/60 font-bold uppercase tracking-widest block">Abonnement Mensuel Estimé</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-serif italic font-medium text-[#1A1A1A]">
                {finalMonthlyCost.toFixed(0)} €
              </span>
              <span className="text-[#1A1A1A]/70 text-xs font-mono">/ mois ({basePricePerStudent} € par élève)</span>
            </div>
            {isAnnual ? (
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Facturé annuellement soit {annualTotal.toFixed(0)} € / an (Économie de 20%)</p>
            ) : (
              <p className="text-xs text-[#1A1A1A]/60">Sans engagement annuel, résiliable avec 1 mois de préavis.</p>
            )}
          </div>

          {/* ROI metrics list */}
          <div className="border-t border-[#1A1A1A]/15 pt-6 space-y-4">
            <span className="text-[10px] text-[#1A1A1A]/60 font-bold uppercase tracking-widest block">Efficacité Opérationnelle Mesurée</span>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FDFCFB] p-4 rounded-none border border-[#1A1A1A]/10 flex items-center gap-3">
                <div className="p-2 bg-[#F4F1EE] text-[#1A1A1A] rounded-none shrink-0 border border-[#1A1A1A]/5">
                  <Hourglass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-[#1A1A1A]/60 uppercase tracking-wide block">Temps Épargné / sem</span>
                  <span className="text-sm font-bold text-[#1A1A1A] font-mono">{weeklyHoursSaved}h sauvées</span>
                </div>
              </div>

              <div className="bg-[#FDFCFB] p-4 rounded-none border border-[#1A1A1A]/10 flex items-center gap-3">
                <div className="p-2 bg-[#F4F1EE] text-[#1A1A1A] rounded-none shrink-0 border border-[#1A1A1A]/5">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-[#1A1A1A]/60 uppercase tracking-wide block">Frais Épargnés / an</span>
                  <span className="text-sm font-bold text-[#1A1A1A] font-mono">{annualPaperSavings} €</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFCFB] p-5 rounded-none border border-[#1A1A1A]/10 flex items-start gap-3 border-l-4 border-l-[#1A1A1A]">
              <Sparkles className="w-4 h-4 text-[#1A1A1A] mt-0.5 shrink-0" />
              <p className="text-[11px] text-[#1A1A1A]/80 leading-relaxed font-sans">
                Discolaire est la seule solution à offrir un <strong>calculateur d'arriérés pour inscriptions</strong> et l'envoi d'appels hebdomadaires par signature WhatsApp. Taux d'appréciation parents mesuré : <strong className="text-emerald-750">{parentSatisfactionRate}</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("formulaire-demo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full bg-[#1A1A1A] hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#1A1A1A]"
          >
            Planifier le Déploiement de Rentrée <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

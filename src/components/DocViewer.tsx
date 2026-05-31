import { useState, useMemo } from "react";
import { BookOpen, Search, FileText, ChevronRight, CornerDownRight, AlignLeft, Info } from "lucide-react";
import { DISCOLAIRE_DOCS } from "../data/docsData";

export default function DocViewer() {
  const [selectedArticleId, setSelectedArticleId] = useState<string>("installation");
  const [docSearch, setDocSearch] = useState<string>("");

  // Filter docs list based on search
  const filteredDocs = useMemo(() => {
    return DISCOLAIRE_DOCS.filter(doc => 
      doc.title.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.section.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.summary.toLowerCase().includes(docSearch.toLowerCase())
    );
  }, [docSearch]);

  const activeArticle = DISCOLAIRE_DOCS.find(d => d.id === selectedArticleId) || DISCOLAIRE_DOCS[0];

  return (
    <div className="bg-white rounded-none border border-[#1A1A1A]/10 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-4" id="documentation-complete">
      
      {/* Sidebar navigation */}
      <div className="bg-[#F4F1EE] border-r border-[#1A1A1A]/10 p-6 lg:Col-span-1 space-y-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <span className="text-[10px] text-[#1A1A1A]/60 font-bold uppercase tracking-widest block mb-1">Centre d'aide</span>
            <h4 className="text-xl font-serif italic text-[#1A1A1A] flex items-center gap-2 font-medium">
              <BookOpen className="w-5 h-5 text-[#1A1A1A]" /> Guides & Doc
            </h4>
          </div>

          {/* Local doc search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-[#1A1A1A]/50" />
            <input
              type="text"
              placeholder="Rechercher un module..."
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] pl-9 pr-3 py-2.5 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A] transition-all"
            />
          </div>

          {/* Menu list grouped */}
          <div className="space-y-3">
            <span className="text-[10px] text-[#1A1A1A]/60 font-bold uppercase tracking-wider block">GUIDES DISPONIBLES</span>
            <nav className="space-y-2">
              {filteredDocs.length === 0 ? (
                <span className="text-xs text-[#1A1A1A]/50 italic block p-2">Aucun guide de scolarisation</span>
              ) : (
                filteredDocs.map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedArticleId(doc.id)}
                    className={`w-full text-left p-3 rounded-none text-xs font-bold transition-all uppercase tracking-wider flex items-center justify-between border cursor-pointer ${
                      selectedArticleId === doc.id
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-white hover:bg-[#F4F1EE] text-[#1A1A1A]/70 border-[#1A1A1A]/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[130px]">{doc.title}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ))
              )}
            </nav>
          </div>
        </div>

        {/* Support anchor box */}
        <div className="bg-white p-5 rounded-none border border-[#1A1A1A]/10 border-l-4 border-l-[#1A1A1A] mt-6 flex flex-col justify-between">
          <div className="flex gap-2">
            <Info className="w-4 h-4 text-[#1A1A1A]/60 shrink-0 mt-0.5" />
            <span className="text-[10px] text-[#1A1A1A]/70 leading-normal block">
              Vous avez des difficultés techniques spécifiques ? Nos ingénieurs vous forment à l'administration.
            </span>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("formulaire-demo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 text-left text-xs text-[#1A1A1A] font-bold uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
          >
            Assistance directe →
          </button>
        </div>
      </div>

      {/* Main viewer text */}
      <div className="lg:col-span-3 bg-white p-8 lg:p-12 space-y-8">
        {/* Article header */}
        <div className="pb-6 border-b border-[#1A1A1A]/10">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">
            <span>Documentation Officielle</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1A1A1A] font-extrabold">{activeArticle.section}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif italic text-[#1A1A1A] mt-3 tracking-tight font-medium">
            {activeArticle.title}
          </h3>
          <p className="text-[#1A1A1A]/75 mt-4 text-sm leading-relaxed max-w-2xl bg-[#F4F1EE] p-5 rounded-none border-l-4 border-[#1A1A1A] font-serif italic">
            {activeArticle.summary}
          </p>
        </div>

        {/* Table of sub-headers in this section */}
        <div className="flex flex-wrap gap-2 py-1 items-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 mr-2 flex items-center gap-1">
            <AlignLeft className="w-3.5 h-3.5" /> Thèmes :
          </span>
          {activeArticle.subheadings.map((sub, i) => (
            <span key={i} className="bg-[#F4F1EE] text-[#1A1A1A] px-3 py-1.5 rounded-none text-xs font-mono border border-[#1A1A1A]/5 flex items-center gap-1">
              <CornerDownRight className="w-3 h-3 text-[#1A1A1A]/60" /> {sub}
            </span>
          ))}
        </div>

        {/* Content body with specialized style wrapper */}
        <div 
          className="prose prose-slate max-w-none text-sm text-[#1A1A1A]/80 leading-relaxed space-y-4 font-sans"
          dangerouslySetInnerHTML={{ __html: activeArticle.content }}
        />

        {/* Footer actions of docs */}
        <div className="border-t border-[#1A1A1A]/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] uppercase tracking-wider text-[#1A1A1A]/50">
          <span>Dernière mise à jour : Mai 2026</span>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                alert(`Cette documentation est extraite directement de https://docs.discolaire.com/. Vous pouvez consulter le site officiel.`);
              }} 
              className="text-[#1A1A1A] hover:underline font-bold bg-transparent border-none p-0 cursor-pointer"
            >
              Consulter en ligne sur docs.discolaire.com
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

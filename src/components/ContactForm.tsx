import React, { useState } from "react";
import { CheckCircle2, Calendar, Mail, Building2, Phone, User, Clock, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Directeur / Directrice");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  // Simulated calendaring slots
  const [selectedDay, setSelectedDay] = useState("Lundi pro.");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("10:00 - 11:30 (Matin)");

  const daysOpts = ["Lundi pro.", "Mardi pro.", "Mercredi pro.", "Jeudi pro.", "Vendredi pro."];
  const slotOpts = ["09:00 - 10:30 (Matin)", "10:30 - 12:00 (Matin)", "14:00 - 15:30 (Après-midi)", "16:00 - 17:30 (Après-midi)"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !school) {
      alert("Veuillez remplir au moins le nom, l'email et l'école.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-none overflow-hidden shadow-sm" id="formulaire-demo">
      <div className="lg:grid lg:grid-cols-5">
        
        {/* Contact Left Promo Card */}
        <div className="p-8 lg:p-12 lg:col-span-2 bg-[#F4F1EE] flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10">
          <div className="space-y-4">
            <span className="text-[9px] bg-[#1A1A1A] text-white font-bold uppercase tracking-widest px-3 py-1.5 inline-block">
              RÉSERVATION FACILE
            </span>
            <h3 className="text-3xl font-serif italic text-[#1A1A1A] tracking-tight font-medium leading-snug">
              Prenez rendez-vous pour une démonstration privée
            </h3>
            <p className="text-[#1A1A1A]/75 text-xs leading-relaxed font-sans">
              Nos ingénieurs d'intégration se feront un plaisir de vous faire visiter les coulisses de Discolaire : de la modélisation intelligente de vos bulletins jusqu'aux intégrations de reçus fiscaux.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 rounded-none shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[#1A1A1A]/80">Durée standard : 30 minutes de présentation + Questions-Réponses</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 rounded-none shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-[#1A1A1A]/80">Démonstration entièrement personnalisée selon la taille de votre école</span>
            </div>
          </div>

          <div className="border-t border-[#1A1A1A]/10 pt-6 text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">
            Données conformes RGPD SecNumCloud.
          </div>
        </div>

        {/* Form and interactive calendar right side */}
        <div className="p-8 lg:p-12 lg:col-span-3 bg-white">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-[#1A1A1A] text-white rounded-none flex items-center justify-center border border-[#1A1A1A]/10 font-bold">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-serif italic font-medium text-[#1A1A1A]">Demande Enregistrée !</h4>
              <p className="text-xs text-[#1A1A1A]/80 max-w-sm leading-relaxed mx-auto font-sans">
                Merci {name}. Nous avons bloqué votre créneau horaire du <strong className="text-[#1A1A1A] font-bold">{selectedDay}</strong> à <strong className="text-[#1A1A1A] font-bold">{selectedTimeSlot}</strong> pour le Lycée / Collège : <strong>{school}</strong>.
              </p>
              <p className="text-xs text-[#1A1A1A]/60 font-medium">Un courriel d'invitation avec le lien de visio-conférence Meet vous a été envoyé.</p>
              
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setSchool("");
                  setPhone("");
                  setMessage("");
                }}
                className="mt-6 text-xs uppercase tracking-widest text-[#1A1A1A] font-bold hover:underline"
              >
                Inscrire un autre établissement
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal details info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2">Votre Nom & Prénom</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-[#1A1A1A]/50" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Jean-Marc Dupont"
                      className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/15 text-[#1A1A1A] pl-9 pr-3 py-2.5 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2">Adresse Email de contact</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-[#1A1A1A]/50" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: proviseur@moncollege.fr"
                      className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/15 text-[#1A1A1A] pl-9 pr-3 py-2.5 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2">Nom de l'Établissement</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-[#1A1A1A]/50" />
                    <input
                      type="text"
                      required
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      placeholder="Ex: Groupe Scolaire d'Excellence"
                      className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/15 text-[#1A1A1A] pl-9 pr-3 py-2.5 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2">Téléphone direct</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-[#1A1A1A]/50" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: +33 6 12 34 56 78"
                      className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/15 text-[#1A1A1A] pl-9 pr-3 py-2.5 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
              </div>

              {/* Scheduling grid selector */}
              <div className="space-y-4 border-t border-[#1A1A1A]/10 pt-5">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]" /> Sélectionnez votre date idéale :
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {daysOpts.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`py-2 px-4 rounded-none text-xs font-bold transition-all uppercase tracking-wider border cursor-pointer ${
                          selectedDay === day 
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                            : 'bg-[#F4F1EE] hover:bg-[#E7E3DF] text-[#1A1A1A]/70 border-[#1A1A1A]/10'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2 block">Sélectionnez le créneau de visio :</span>
                  <div className="flex flex-wrap gap-2">
                    {slotOpts.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-3.5 rounded-none text-[10px] font-bold transition-all uppercase tracking-wider border cursor-pointer ${
                          selectedTimeSlot === slot 
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                            : 'bg-[#F4F1EE] hover:bg-[#E7E3DF] text-[#1A1A1A]/70 border-[#1A1A1A]/10'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message inputs */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-bold mb-2">Message ou Projets spécifiques (Optionnel)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Expliquez-nous brièvement vos attentes ou la nature de votre transition de logiciel..."
                  rows={3}
                  className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/15 text-[#1A1A1A] p-3 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1A1A] hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#1A1A1A]"
              >
                Bloquer mon créneau de démonstration <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

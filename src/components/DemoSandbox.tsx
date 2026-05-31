import React, { useState, useMemo } from "react";
import { 
  GraduationCap, 
  Award, 
  ClipboardCheck, 
  CreditCard, 
  Plus, 
  Trash2, 
  UserCheck, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  TrendingUp, 
  Download,
  DollarSign
} from "lucide-react";
import { Student } from "../types";

// Seed initial state
const INITIAL_CLASSES = [
  { id: "6emeA", name: "6ème - Section A", teacher: "Mme. Dubois" },
  { id: "5emeB", name: "5ème - Section B", teacher: "M. Lefevre" },
  { id: "3emeS", name: "3ème - Section Sciences", teacher: "Mme. Kamara" }
];

const INITIAL_STUDENTS: Student[] = [
  {
    id: "stud-1",
    name: "Arthur Rimbaud",
    gender: "M",
    classId: "6emeA",
    grades: [
      { subject: "Lettres Françaises", score: 16 },
      { subject: "Mathématiques", score: 11 },
      { subject: "Sciences Naturelles", score: 14 }
    ],
    attendance: [
      { date: "2026-05-28", status: "Present" },
      { date: "2026-05-29", status: "Present" },
      { date: "2026-05-30", status: "Present" }
    ],
    financials: [
      { feeName: "Frais Scolaires Annuels", total: 1200, paid: 800 },
      { feeName: "Cotisation Bibliothèque", total: 50, paid: 50 }
    ]
  },
  {
    id: "stud-2",
    name: "Marie Curie",
    gender: "F",
    classId: "3emeS",
    grades: [
      { subject: "Lettres Françaises", score: 14 },
      { subject: "Mathématiques", score: 19.5 },
      { subject: "Sciences Naturelles", score: 20 }
    ],
    attendance: [
      { date: "2026-05-28", status: "Present" },
      { date: "2026-05-29", status: "Present" },
      { date: "2026-05-30", status: "Present" }
    ],
    financials: [
      { feeName: "Frais Scolaires Annuels", total: 1500, paid: 1500 },
      { feeName: "Cotisation Laboratoire", total: 120, paid: 120 }
    ]
  },
  {
    id: "stud-3",
    name: "Léopold Sédar Senghor",
    gender: "M",
    classId: "3emeS",
    grades: [
      { subject: "Lettres Françaises", score: 19.5 },
      { subject: "Mathématiques", score: 14 },
      { subject: "Sciences Naturelles", score: 13.5 }
    ],
    attendance: [
      { date: "2026-05-28", status: "Present" },
      { date: "2026-05-29", status: "Absent" },
      { date: "2026-05-30", status: "Present" }
    ],
    financials: [
      { feeName: "Frais Scolaires Annuels", total: 1500, paid: 500 },
      { feeName: "Inscription Examens", total: 100, paid: 0 }
    ]
  },
  {
    id: "stud-4",
    name: "Simone de Beauvoir",
    gender: "F",
    classId: "6emeA",
    grades: [
      { subject: "Lettres Françaises", score: 18 },
      { subject: "Mathématiques", score: 15 },
      { subject: "Sciences Naturelles", score: 16 }
    ],
    attendance: [
      { date: "2026-05-28", status: "Present" },
      { date: "2026-05-29", status: "Present" },
      { date: "2026-05-30", status: "Late" }
    ],
    financials: [
      { feeName: "Frais Scolaires Annuels", total: 1200, paid: 1200 },
      { feeName: "Assurance Scolaire", total: 40, paid: 40 }
    ]
  }
];

export default function DemoSandbox() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "eleves" | "evals" | "appel" | "compta">("dashboard");
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  
  // States for student form
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGender, setNewStudentGender] = useState<"M" | "F">("F");
  const [newStudentClass, setNewStudentClass] = useState("6emeA");
  const [studentSearch, setStudentSearch] = useState("");

  // States for grade form
  const [selectedStudentId, setSelectedStudentId] = useState(INITIAL_STUDENTS[0].id);
  const [customSubject, setCustomSubject] = useState("Mathématiques");
  const [customGrade, setCustomGrade] = useState("15");
  const [gradeStatus, setGradeStatus] = useState<string | null>(null);

  // States for payment recording
  const [paymentStudentId, setPaymentStudentId] = useState(INITIAL_STUDENTS[0].id);
  const [paymentAmount, setPaymentAmount] = useState<number>(300);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  // Quick helper: compute general school average and financial aggregates
  const stats = useMemo(() => {
    let totalScore = 0;
    let totalGradesCount = 0;
    let presentCount = 0;
    let totalAttendanceCount = 0;
    let totalBilled = 0;
    let totalPaid = 0;

    students.forEach((student) => {
      student.grades.forEach((g) => {
        totalScore += g.score;
        totalGradesCount++;
      });
      student.attendance.forEach((a) => {
        if (a.status === "Present" || a.status === "Late") presentCount++;
        totalAttendanceCount++;
      });
      student.financials.forEach((f) => {
        totalBilled += f.total;
        totalPaid += f.paid;
      });
    });

    const schoolAverage = totalGradesCount > 0 ? (totalScore / totalGradesCount).toFixed(2) : "0.00";
    const attendanceRate = totalAttendanceCount > 0 ? ((presentCount / totalAttendanceCount) * 100).toFixed(1) : "100";
    const collectionRate = totalBilled > 0 ? ((totalPaid / totalBilled) * 100).toFixed(1) : "0.0";

    return {
      schoolAverage,
      attendanceRate,
      collectionRate,
      totalBilled,
      totalPaid,
      totalStudentsCount: students.length
    };
  }, [students]);

  // Actions
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const newStudent: Student = {
      id: `stud-${Date.now()}`,
      name: newStudentName.trim(),
      gender: newStudentGender,
      classId: newStudentClass,
      grades: [
        { subject: "Lettres Françaises", score: 10 },
        { subject: "Mathématiques", score: 10 },
        { subject: "Sciences Naturelles", score: 10 }
      ],
      attendance: [
        { date: "2026-05-30", status: "Present" }
      ],
      financials: [
        { feeName: "Frais Scolaires Annuels", total: newStudentClass === "3emeS" ? 1500 : 1200, paid: 0 }
      ]
    };

    setStudents([...students, newStudent]);
    setNewStudentName("");
    if (selectedStudentId === "") {
      setSelectedStudentId(newStudent.id);
    }
  };

  const handleDeleteStudent = (id: string) => {
    const updated = students.filter(s => s.id !== id);
    setStudents(updated);
    if (selectedStudentId === id && updated.length > 0) {
      setSelectedStudentId(updated[0].id);
    }
  };

  const handleAddGrade = (e: React.FormEvent) => {
    e.preventDefault();
    const scoreVal = parseFloat(customGrade);
    if (isNaN(scoreVal) || scoreVal < 0 || scoreVal > 20) {
      alert("La note doit être comprise entre 0 et 20.");
      return;
    }

    setStudents(prev => prev.map(student => {
      if (student.id === selectedStudentId) {
        const filteredGrades = student.grades.filter(g => g.subject !== customSubject);
        return {
          ...student,
          grades: [...filteredGrades, { subject: customSubject, score: scoreVal }]
        };
      }
      return student;
    }));

    setGradeStatus("Note enregistrée avec succès ! Bulletin recalculé.");
    setTimeout(() => setGradeStatus(null), 3500);
  };

  const handleMarkAttendance = (studentId: string, status: "Present" | "Absent" | "Late") => {
    setStudents(prev => prev.map(student => {
      if (student.id === studentId) {
        const updatedAttendance = student.attendance.filter(a => a.date !== "2026-05-31");
        return {
          ...student,
          attendance: [...updatedAttendance, { date: "2026-05-31", status }]
        };
      }
      return student;
    }));
  };

  const handleRegisterPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentAmount <= 0) return;

    setStudents(prev => prev.map(student => {
      if (student.id === paymentStudentId) {
        return {
          ...student,
          financials: student.financials.map(f => {
            if (f.feeName === "Frais Scolaires Annuels") {
              const capMax = f.total - f.paid;
              const payDelta = Math.min(paymentAmount, capMax);
              return { ...f, paid: f.paid + payDelta };
            }
            return f;
          })
        };
      }
      return student;
    }));

    setPaymentStatus(`Paiement de ${paymentAmount} € enregistré avec succès.`);
    setTimeout(() => setPaymentStatus(null), 3500);
  };

  const filteredStudents = useMemo(() => {
    return students.filter(s => 
      s.name.toLowerCase().includes(studentSearch.toLowerCase())
    );
  }, [students, studentSearch]);

  const activeStudentForReport = students.find(s => s.id === selectedStudentId);

  const calculateStudentGPA = (stud: Student) => {
    if (stud.grades.length === 0) return "0.00";
    const sum = stud.grades.reduce((acc, curr) => acc + curr.score, 0);
    return (sum / stud.grades.length).toFixed(2);
  };

  return (
    <div className="bg-white text-[#1A1A1A] rounded-none overflow-hidden border border-[#1A1A1A]/10 shadow-sm" id="experience-bac-a-sable">
      
      {/* Top Header/Status bar of the school application simulation */}
      <div className="bg-[#1A1A1A] p-8 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/60 font-bold">LOGICIEL ACADÉMIQUE SOUVERAIN</span>
          </div>
          <h3 className="text-2xl font-serif italic mt-1 text-white flex items-center gap-2 font-medium">
            <GraduationCap className="w-6 h-6 text-white" /> Lycée Bilingue d'Excellence
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-mono">Console de pilotage — Année {new Date().getFullYear()}/{new Date().getFullYear() + 1}</p>
        </div>

        {/* Tab buttons grouped in editorial fashion */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "dashboard", label: "Statistiques" },
            { id: "eleves", label: "Élèves & Inscriptions" },
            { id: "evals", label: "Notes & Bulletins" },
            { id: "appel", label: "Feuille d'Appel" },
            { id: "compta", label: "Caisse & Trésorerie" }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all border cursor-pointer ${
                activeTab === t.id 
                  ? 'bg-white text-[#1A1A1A] border-white' 
                  : 'bg-transparent text-white/60 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="p-8">
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Quick explanatory banner */}
            <div className="bg-[#F4F1EE] border border-[#1A1A1A]/10 p-5 rounded-none flex items-start gap-4 border-l-4 border-l-[#1A1A1A]">
              <Sparkles className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5 animate-pulse" />
              <div className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">
                <strong>Simulateur temps-réel actif :</strong> Testez les modules d'admission scolaire, d'appels quotidiens, de comptabilité de caisse et de saisie de relevés de notes. Les indicateurs dynamiques s'actualisent instantanément à chaque action.
              </div>
            </div>

            {/* Grid metrics in elegant table-like slots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10">
                <div className="flex justify-between items-start text-[#1A1A1A]/60">
                  <span className="text-[10px] uppercase tracking-wider font-bold">Élèves Enscrits</span>
                  <div className="p-2 bg-[#F4F1EE] text-[#1A1A1A] border border-[#1A1A1A]/5 rounded-none">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-serif italic text-[#1A1A1A]">{stats.totalStudentsCount}</span>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Actif</span>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/50 mt-2 uppercase font-mono">Dossiers modifiables</p>
              </div>

              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10">
                <div className="flex justify-between items-start text-[#1A1A1A]/60">
                  <span className="text-[10px] uppercase tracking-wider font-bold">Moyenne Générale</span>
                  <div className="p-2 bg-[#F4F1EE] text-[#1A1A1A] border border-[#1A1A1A]/5 rounded-none">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-serif italic text-[#1A1A1A]">{stats.schoolAverage}</span>
                  <span className="text-xs text-[#1A1A1A]/60 font-mono">/ 20</span>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/50 mt-2 uppercase font-mono">Mise à jour en direct</p>
              </div>

              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10">
                <div className="flex justify-between items-start text-[#1A1A1A]/60">
                  <span className="text-[10px] uppercase tracking-wider font-bold">Assiduité Globale</span>
                  <div className="p-2 bg-[#F4F1EE] text-[#1A1A1A] border border-[#1A1A1A]/5 rounded-none">
                    <ClipboardCheck className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-serif italic text-[#1A1A1A]">{stats.attendanceRate}%</span>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">&gt; 95%</span>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/50 mt-2 uppercase font-mono">Prise en compte de l'appel</p>
              </div>

              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10">
                <div className="flex justify-between items-start text-[#1A1A1A]/60">
                  <span className="text-[10px] uppercase tracking-wider font-bold">Scolarité Acquittée</span>
                  <div className="p-2 bg-[#F4F1EE] text-[#1A1A1A] border border-[#1A1A1A]/5 rounded-none">
                    <CreditCard className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 flex flex-col">
                  <span className="text-2xl font-serif italic text-emerald-800">{stats.totalPaid} €</span>
                  <span className="text-[10px] text-[#1A1A1A]/60 font-mono mt-1">sur {stats.totalBilled} € ({stats.collectionRate}%)</span>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/50 mt-2 uppercase font-mono">Sécurité d'en-caisse</p>
              </div>

            </div>

            {/* Quick Action Cards styled in bento layouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1A1A1A]" /> Suivi Pédagogique Général
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed font-sans">
                    Les indicateurs reflètent l'ensemble des copies et bulletins répertoriés dans la base de données scolaire. Discolaire permet de réduire drastiquement la manipulation administrative tout en offrant un suivi fluide de l'assiduité et des évaluations.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab("evals")} 
                  className="mt-6 w-full text-center text-xs uppercase tracking-widest text-[#1A1A1A] hover:bg-[#F4F1EE] font-bold py-3.5 border border-[#1A1A1A] rounded-none transition-all cursor-pointer"
                >
                  Gérer les notes et relevés →
                </button>
              </div>

              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]" /> Audit administrative des dossiers
                  </h4>
                  <ul className="text-xs text-[#1A1A1A]/80 mt-3 space-y-2.5 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-none"></span> 
                      Inscriptions contrôlées : Aucune omission critique détectée
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-none"></span> 
                      Suivi mobile des tuteurs activé sur invitation automatique
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-none"></span> 
                      Calcul automatique de la facturation échelonnée
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => setActiveTab("compta")} 
                  className="mt-6 w-full text-center text-xs uppercase tracking-widest text-[#1A1A1A] hover:bg-[#F4F1EE] font-bold py-3.5 border border-[#1A1A1A] rounded-none transition-all cursor-pointer"
                >
                  Suivre la trésorerie de rentrée →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SECTION: ÉLÈVES & INSCRIPTIONS */}
        {activeTab === "eleves" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form for adding student */}
            <div className="bg-[#F4F1EE]/40 p-6 rounded-none border border-[#1A1A1A]/10 h-fit">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#1A1A1A]" /> Inscrire un Élève
              </h4>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-1 uppercase font-mono">Formulaire d'enregistrement légal</p>

              <form onSubmit={handleAddStudent} className="mt-4 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5">Nom complet de l'apprenant</label>
                  <input
                    type="text"
                    required
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    placeholder="Ex: Léopold Senghor"
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-3 py-2.5 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5">Genre</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setNewStudentGender("F")}
                        className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all border cursor-pointer ${newStudentGender === 'F' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/10'}`}
                      >
                        Féminin
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewStudentGender("M")}
                        className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all border cursor-pointer ${newStudentGender === 'M' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/10'}`}
                      >
                        Masculin
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5">Classe d'affection initiale</label>
                    <select
                      value={newStudentClass}
                      onChange={(e) => setNewStudentClass(e.target.value)}
                      className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-2 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                    >
                      {INITIAL_CLASSES.map(cls => (
                        <option key={cls.id} value={cls.id}>{cls.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-opacity-90 font-bold text-white text-xs uppercase tracking-widest py-3 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#1A1A1A]"
                >
                  <Plus className="w-4 h-4" /> Finaliser l'Inscription scolaire
                </button>
              </form>
            </div>

            {/* Student Directory Grid */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                  <UserCheck className="w-4 h-4" /> Répertoire Général des Apprenants ({filteredStudents.length})
                </h4>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#1A1A1A]/50" />
                  <input
                    type="text"
                    placeholder="Chercher par nom..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] pl-9 pr-3 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-none border border-[#1A1A1A]/10 overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#F4F1EE]/80 text-[#1A1A1A] font-bold border-b border-[#1A1A1A]/10 uppercase tracking-widest text-[9px]">
                      <th className="px-4 py-3.5">Élève</th>
                      <th className="px-4 py-3.5">Genre</th>
                      <th className="px-4 py-3.5">Classe</th>
                      <th className="px-4 py-3.5">Moyenne Générale</th>
                      <th className="px-4 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]/10">
                    {filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-[#1A1A1A]/50 font-sans italic">Aucun élève trouvé.</td>
                      </tr>
                    ) : (
                      filteredStudents.map(student => {
                        const cl = INITIAL_CLASSES.find(c => c.id === student.classId);
                        const avg = calculateStudentGPA(student);
                        return (
                          <tr key={student.id} className="hover:bg-[#F4F1EE]/20 transition-colors">
                            <td className="px-4 py-3 font-semibold text-[#1A1A1A]">{student.name}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded-none text-[9px] uppercase tracking-wider font-bold ${student.gender === 'F' ? 'bg-[#1A1A1A]/10 text-[#1A1A1A]' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/80'}`}>
                                {student.gender === 'F' ? 'Fille' : 'Garçon'}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-[#1A1A1A]/80">{cl ? cl.name : "N/A"}</td>
                            <td className="px-4 py-3">
                              <span className={`font-mono font-bold ${parseFloat(avg) >= 12 ? 'text-emerald-800' : 'text-amber-800'}`}>{avg} / 20</span>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => { setSelectedStudentId(student.id); setActiveTab("evals"); }}
                                  className="px-2.5 py-1 rounded-none border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-all text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                                >
                                  Évaluer
                                </button>
                                <button
                                  onClick={() => handleDeleteStudent(student.id)}
                                  className="p-1.5 rounded-none text-red-700 hover:bg-red-50 cursor-pointer"
                                  title="Désinscrire"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* SECTION: NOTES & BULLETINS */}
        {activeTab === "evals" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Input Form for single grades */}
            <div className="bg-[#F4F1EE]/40 p-6 rounded-none border border-[#1A1A1A]/10 h-fit">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#1A1A1A]" /> Saisir une Copie / Évaluation
              </h4>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-1 uppercase font-mono">Consigner un devoir officiel</p>

              {gradeStatus && (
                <div className="bg-[#1A1A1A] text-white p-3 rounded-none text-[10px] uppercase tracking-wider font-bold mt-3.5 flex items-center gap-2 border-l-4 border-l-emerald-500">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" /> {gradeStatus}
                </div>
              )}

              <form onSubmit={handleAddGrade} className="mt-4 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5"> Sélectionner l'Élève</label>
                  <select
                    value={selectedStudentId}
                    onChange={(e) => setSelectedStudentId(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-2 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  >
                    {students.map(stud => (
                      <option key={stud.id} value={stud.id}>{stud.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5">Matière Enseignée</label>
                  <select
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-2 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option value="Lettres Françaises">Lettres Françaises</option>
                    <option value="Mathématiques">Mathématiques</option>
                    <option value="Sciences Naturelles">Sciences Naturelles</option>
                    <option value="Histoire & Géographie">Histoire & Géographie</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5">Note sur 20</label>
                  <input
                    type="number"
                    step="0.25"
                    min="0"
                    max="20"
                    required
                    value={customGrade}
                    onChange={(e) => setCustomGrade(e.target.value)}
                    placeholder="Ex: 14.75"
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-3 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-opacity-90 font-bold text-white text-xs uppercase tracking-widest py-3 rounded-none transition-all cursor-pointer border border-[#1A1A1A]"
                >
                  Ajouter au Bulletin
                </button>
              </form>
            </div>

            {/* Displaying Current Simulated Report Card */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1A1A1A]" /> Aperçu du Bulletin d'Évaluation Périodique
                </h4>
                {activeStudentForReport && (
                  <button 
                    onClick={() => alert(`Impression PDF simulée de Discolaire pour : ${activeStudentForReport.name}`)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-[#1A1A1A]/30 text-[#1A1A1A] rounded-none hover:bg-[#F4F1EE] font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <Download className="w-3 h-3" /> Exporter PDF
                  </button>
                )}
              </div>

              {activeStudentForReport ? (
                <div className="bg-white p-6 rounded-none border border-[#1A1A1A]/10 space-y-6">
                  {/* Student Card Block */}
                  <div className="flex flex-col sm:flex-row justify-between pb-4 border-b border-[#1A1A1A]/10 gap-4">
                    <div>
                      <h5 className="text-2xl font-serif italic text-[#1A1A1A] font-medium">{activeStudentForReport.name}</h5>
                      <p className="text-xs text-[#1A1A1A]/60 mt-1 uppercase font-mono">
                        Classe de : {INITIAL_CLASSES.find(c => c.id === activeStudentForReport.classId)?.name || "Non affecté"}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 block font-bold">Moyenne Générale</span>
                      <span className="text-3xl font-serif italic text-emerald-800">{calculateStudentGPA(activeStudentForReport)} <span className="text-xs text-[#1A1A1A]/60 font-mono">/ 20</span></span>
                    </div>
                  </div>

                  {/* Academic Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-[#F4F1EE]/80 text-[#1A1A1A] border-b border-[#1A1A1A]/10 font-bold uppercase tracking-wider text-[9px]">
                          <th className="px-3 py-2.5">Matière</th>
                          <th className="px-3 py-2.5">Note Retenue</th>
                          <th className="px-3 py-2.5">Coefficient</th>
                          <th className="px-3 py-2.5 text-center">Mention Académique</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1A1A1A]/10">
                        {activeStudentForReport.grades.map((grade, index) => {
                          let mention = "Passable";
                          if (grade.score >= 16) mention = "Très Bien";
                          else if (grade.score >= 14) mention = "Bien";
                          else if (grade.score >= 12) mention = "Assez Bien";
                          else if (grade.score < 10) mention = "Avertissement critique";

                          return (
                            <tr key={index} className="hover:bg-[#F4F1EE]/10">
                              <td className="px-3 py-3 text-[#1A1A1A] font-semibold">{grade.subject}</td>
                              <td className="px-3 py-3 font-mono font-bold text-[#1A1A1A]">{grade.score} / 20</td>
                              <td className="px-3 py-3 text-[#1A1A1A]/60">1.0</td>
                              <td className="px-3 py-3 text-center">
                                <span className={`px-2 py-0.5 rounded-none text-[9px] uppercase tracking-wider font-bold ${
                                  grade.score >= 14 ? 'bg-emerald-50 text-emerald-800' :
                                  grade.score >= 10 ? 'bg-amber-50 text-amber-800' : 'bg-red-50 text-red-800'
                                }`}>
                                  {mention}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-[#1A1A1A]/80 bg-[#F4F1EE] p-4 rounded-none border-l-4 border-l-[#1A1A1A] italic">
                    Note administrative : Ce relevé est instantanément partagé sur le portail mobile sécurisé de la famille.
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-none border border-[#1A1A1A]/10 text-center text-[#1A1A1A]/50 italic">
                  Sélectionnez ou inscrivez un apprenant pour générer sa fiche académique d'excellence.
                </div>
              )}
            </div>

          </div>
        )}

        {/* SECTION: FAIRE L'APPEL */}
        {activeTab === "appel" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1A1A1A]/10 pb-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                  <ClipboardCheck className="w-4 h-4 text-[#1A1A1A]" /> Feuille de Présence Quotidienne
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/60 mt-1 uppercase font-mono">Consigner l'appel d'évaluation d'aujourd'hui</p>
              </div>
              <div className="text-[10px] text-[#1A1A1A]/60 bg-[#F4F1EE] px-3 py-1.5 rounded-none font-mono border border-[#1A1A1A]/5 tracking-wider font-bold">
                Mise à Jour Active
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map(student => {
                const todayStatusObj = student.attendance.find(a => a.date === "2026-05-31");
                const currentStatus = todayStatusObj ? todayStatusObj.status : "NonMarqué";

                return (
                  <div key={student.id} className="bg-white p-6 rounded-none border border-[#1A1A1A]/10 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-[#1A1A1A] text-sm font-serif italic">{student.name}</h5>
                        <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 font-mono font-bold">Classe : {INITIAL_CLASSES.find(c => c.id === student.classId)?.name || "6ème"}</span>
                      </div>
                      <p className="text-[10px] text-[#1A1A1A]/60 font-sans mt-2">
                        Historique d'absences : {student.attendance.filter(a => a.status === "Absent").length} jour(s) d'absence repéré
                      </p>
                    </div>

                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => handleMarkAttendance(student.id, "Present")}
                        className={`flex-1 py-1 px-2 text-[9px] uppercase tracking-wider rounded-none font-bold transition-all border cursor-pointer ${
                          currentStatus === "Present" ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-[#F4F1EE] text-[#1A1A1A]/70 border-[#1A1A1A]/10 hover:bg-[#E7E3DF]'
                        }`}
                      >
                        Présent
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMarkAttendance(student.id, "Late")}
                        className={`flex-1 py-1 px-2 text-[9px] uppercase tracking-wider rounded-none font-bold transition-all border cursor-pointer ${
                          currentStatus === "Late" ? 'bg-amber-800 text-white border-amber-800' : 'bg-[#F4F1EE] text-[#1A1A1A]/70 border-[#1A1A1A]/10 hover:bg-[#E7E3DF]'
                        }`}
                      >
                        Retard
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMarkAttendance(student.id, "Absent")}
                        className={`flex-1 py-1 px-2 text-[9px] uppercase tracking-wider rounded-none font-bold transition-all border cursor-pointer ${
                          currentStatus === "Absent" ? 'bg-red-800 text-white border-red-800' : 'bg-[#F4F1EE] text-[#1A1A1A]/70 border-[#1A1A1A]/10 hover:bg-[#E7E3DF]'
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION: PAIEMENTS & TRÉSORERIE */}
        {activeTab === "compta" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Payment form */}
            <div className="bg-[#F4F1EE]/40 p-6 rounded-none border border-[#1A1A1A]/10 h-fit">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#1A1A1A]" /> Encaisser la Scolarité
              </h4>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-1 uppercase font-mono">Consigner un encaissement famille</p>

              {paymentStatus && (
                <div className="bg-[#1A1A1A] text-white p-3 rounded-none text-[10px] uppercase tracking-wider font-bold mt-3 flex items-center gap-2 border-l-4 border-l-emerald-500">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" /> {paymentStatus}
                </div>
              )}

              <form onSubmit={handleRegisterPayment} className="mt-4 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5"> Sélectionner l'Élève Débiteur</label>
                  <select
                    value={paymentStudentId}
                    onChange={(e) => setPaymentStudentId(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-2 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  >
                    {students.map(stud => {
                      const tuition = stud.financials.find(f => f.feeName === "Frais Scolaires Annuels");
                      const remaining = tuition ? tuition.total - tuition.paid : 0;
                      return (
                        <option key={stud.id} value={stud.id}>
                          {stud.name} (Restant : {remaining} €)
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A]/65 font-bold mb-1.5">Montant à percevoir (€)</label>
                  <input
                    type="number"
                    required
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(parseFloat(e.target.value) || 0)}
                    placeholder="Ex: 250"
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] px-3 py-2 rounded-none text-xs focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-opacity-90 font-bold text-white text-xs uppercase tracking-widest py-3 rounded-none transition-all cursor-pointer border border-[#1A1A1A]"
                >
                  Valider l'Écrit comptable & Reçu
                </button>
              </form>
            </div>

            {/* Invoicing list */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#1A1A1A]" /> Grand Livre des Paiements Scolaires
              </h4>
              <div className="bg-white rounded-none border border-[#1A1A1A]/10 overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#F4F1EE]/80 text-[#1A1A1A] font-bold border-b border-[#1A1A1A]/10 uppercase tracking-widest text-[9px]">
                      <th className="px-4 py-3.5">Intitulé de créance</th>
                      <th className="px-4 py-3.5">Élève Référent</th>
                      <th className="px-4 py-3.5">Frais de Scolarité</th>
                      <th className="px-4 py-3.5">Déjà versé</th>
                      <th className="px-4 py-3.5">Reste à payer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]/10">
                    {students.map(stud => {
                      return stud.financials.map((fee, idx) => (
                        <tr key={`${stud.id}-${idx}`} className="hover:bg-[#F4F1EE]/20 transition-colors">
                          <td className="px-4 py-3 font-semibold text-[#1A1A1A]">{fee.feeName}</td>
                          <td className="px-4 py-3 text-[#1A1A1A]/80">{stud.name}</td>
                          <td className="px-4 py-3 font-mono text-[#1A1A1A]">{fee.total} €</td>
                          <td className="px-4 py-3 font-mono text-emerald-800 font-bold">{fee.paid} €</td>
                          <td className="px-4 py-3 font-mono">
                            {fee.total - fee.paid === 0 ? (
                              <span className="text-[#1A1A1A] bg-[#F4F1EE] px-2 py-1 border border-[#1A1A1A]/10 text-[9px] uppercase font-bold tracking-wider">Soldé</span>
                            ) : (
                              <span className="text-red-800 font-bold">{fee.total - fee.paid} €</span>
                            )}
                          </td>
                        </tr>
                      ));
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: string; // Used to select Lucide icons dynamically
  category: "Pedagogie" | "Administration" | "Outils" | "Finance" | "Technologie";
}

export interface DocArticle {
  id: string;
  title: string;
  section: string;
  summary: string;
  content: string; // Markdown or simple HTML support
  subheadings: string[];
}

export interface Student {
  id: string;
  name: string;
  gender: "M" | "F";
  classId: string;
  grades: { subject: string; score: number }[];
  attendance: { date: string; status: "Present" | "Absent" | "Late" }[];
  financials: { feeName: string; total: number; paid: number }[];
}

export interface SchoolClass {
  id: string;
  name: string;
  level: string;
  teacher: string;
}

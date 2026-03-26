import projectLoof from "@/assets/project-loof.png";
import projectKandora from "@/assets/project-kandora.png";
import projectGoldSignature from "@/assets/project-gold-signature.png";
import projectBusiness from "@/assets/project-business-website.png";
import ismetchefWebsite from "@/assets/ismetchef_website.png";
import EcommerceFunnel from "@/assets/E-commerce-Funnel-Optimization.png";
import pharmaXPos from "@/assets/pharmax-pos1.png";
import restaurantPos from "@/assets/food-track.png";
import posInvoice from "@/assets/POS-invoice-Management.png";
import adminPanelUI from "@/assets/admin-penal-ui.png";
import AnalyticsDashboard from "@/assets/analytics-dashboard.png";

export type ProjectCategory =
  | "frontend"
  | "marketing"
  | "hybrid"
  | "Sales & Management Systems"
  | "All";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  role: string;
  tools: string[];
  highlights?: string[];
  result?: string;
  featured?: boolean;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Loof Boutique E-commerce",
    category: "frontend",
    description:
      "Built responsive frontend for an abaya store with product listing, cart management, and mobile-first design.",
    role: "Frontend Developer",
    tools: ["React", "TailwindCSS", "JavaScript", "Bootstrap", "REST API"],
    image: projectLoof,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Bait Al Kandora E-commerce",
    category: "frontend",
    description:
      "Premium e-commerce platform for traditional menswear with advanced filtering, multilingual support, and booking system.",
    role: "Frontend Developer",
    tools: ["React.js", "TailwindCSS", "REST API", "i18n"],
    image: projectKandora,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Gold Signature Business Website",
    category: "marketing",
    description:
      "Premium marketing site for a tailoring brand with lead-focused service pages and SEO-friendly structure.",
    role: "Frontend Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO"],
    image: projectGoldSignature,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Corporate Service Center",
    category: "marketing",
    description:
      "Bilingual corporate website optimized for service inquiries and localized search visibility.",
    role: "Frontend Developer",
    tools: ["React.js", "CSS3", "JavaScript", "i18n", "SEO"],
    image: projectBusiness,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "frontend",
    description:
      "Insight-rich dashboard with KPI tracking, interactive charts, and performance reporting.",
    role: "Frontend Developer",
    tools: ["React.js", "TypeScript", "TailwindCSS", "Chart.js", "REST API"],
    result: "40% faster reporting",
    featured: true,
    image: AnalyticsDashboard,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "E-commerce Funnel Optimization",
    category: "hybrid",
    description:
      "Redesigned product pages for increased conversions. Combined frontend optimization with A/B testing and data-driven improvements.",
    role: "Frontend Developer & Growth Strategist",
    tools: ["React", "Analytics", "A/B Testing", "TailwindCSS", "Conversion Rate Optimization"],
    result: "+35% Sales Increase",
    featured: true,
    image: EcommerceFunnel,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Ismet Chef Website",
    category: "marketing",
    description:
      "Premium restaurant website with elegant design showcase, menu display, reservation system, and responsive mobile experience.",
    role: "Frontend Developer",
    tools: ["React", "TailwindCSS", "JavaScript", "REST API"],
    image: ismetchefWebsite,
    liveUrl: "https://www.ismetchef.com/",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "PharmaX POS (Pharmacy System)",
    category: "Sales & Management Systems",
    description:
      "Advanced pharmacy POS system with inventory control, expiry tracking, and sales management.",
    role: "POS System Developer",
    tools: ["Python", "PySide6", "SQLite"],
    highlights: ["Expiry alerts", "Medicine tracking", "Full pharmacy workflow"],
    result: "Reduced inventory errors by 25%",
    image: pharmaXPos,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "QuickServe POS",
    category: "Sales & Management Systems",
    description:
      "Modern, full-featured POS built with React, TypeScript, and Supabase for fast order management, product tracking, analytics, and bilingual support.",
    role: "Full-Stack Developer",
    tools: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
      "i18n",
    ],
    highlights: [
      "Supabase Auth with Admin/Cashier roles",
      "Real-time order management and product catalog",
      "Admin dashboard with reports and analytics",
      "English & Arabic localization",
      "Responsive UI for tablet and mobile",
    ],
    image: restaurantPos,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "POS & Invoice Management",
    category: "Sales & Management Systems",
    description:
      "Desktop POS system with invoice generation, inventory tracking, and PDF export capabilities.",
    role: "POS System Developer",
    tools: ["Python", "Tkinter", "SQLite"],
    highlights: ["Fast checkout", "Invoice automation", "PDF export"],
    result: "Improved checkout speed by 30%",
    image: posInvoice,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    title: "Admin Panel UI",
    category: "Sales & Management Systems",
    description:
      "Interactive admin interface for internal tools with user management, data tables, and analytics widgets.",
    role: "Frontend Developer",
    tools: ["React.js", "TailwindCSS", "REST API", "TypeScript"],
    highlights: ["User management", "Data tables with filtering", "Analytics widgets"],
    result: "Increased admin efficiency by 40%",
    image: adminPanelUI,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
};

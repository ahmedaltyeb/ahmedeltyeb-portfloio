import analyticsDashboard from "@/assets/E-commerce-Conversion-Funnel-Optimization.png";
import funnelOptimization from "@/assets/Fashion-Boutique-Summer-Sale.png";
import ismetcheCampaigns1 from "@/assets/ismetchef-cam-2.png";

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyComparison = {
  label: string;
  before: string;
  after: string;
};

export type CaseStudy = {
  id: number;
  title: string;
  duration: string;
  problemMetrics: CaseStudyMetric[];
  execution: string[];
  results: CaseStudyComparison[];
  impact: string[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Fashion Boutique Summer Sale",
    duration: "Duration: 30 days",
    problemMetrics: [
      { label: "Conversion Rate", value: "0.9%" },
      { label: "Cost per Conversion", value: "18 AED" },
      { label: "CTR", value: "1.2%" },
    ],
    execution: [
      "Restructured campaigns by margin and intent",
      "Optimized product titles and descriptions",
      "Focused on high-intent keywords",
      "Applied bid optimization for ROAS",
    ],
    results: [
      { label: "Sales Growth", before: "0%", after: "+35%" },
      { label: "Cost per Conversion", before: "18 AED", after: "8.5 AED" },
      { label: "CTR", before: "1.2%", after: "3.85%" },
    ],
    impact: ["Increased revenue during seasonal peak", "Improved efficiency", "Scaled orders consistently"],
    image: funnelOptimization,
  },
  {
    id: 2,
    title: "Restaurant Messaging Campaign",
    duration: "Duration: 28 days",
    problemMetrics: [
      { label: "Weekly Messages", value: "12" },
      { label: "Cost per Message", value: "4.5 AED" },
      { label: "CTR", value: "1.4%" },
    ],
    execution: [
      "Launched video-first creatives",
      "Geo-targeted high-intent neighborhoods",
      "Optimized click-to-message placements",
      "Refined copy around limited-time offers",
    ],
    results: [
      { label: "Messages", before: "12", after: "54" },
      { label: "Cost per Message", before: "4.5 AED", after: "1.99 AED" },
      { label: "CTR", before: "1.4%", after: "4.01%" },
    ],
    impact: ["Increased dine-in demand", "Lower acquisition cost", "Consistent message volume"],
    image: ismetcheCampaigns1,
  },
  {
    id: 3,
    title: "E-commerce Conversion Funnel Optimization",
    duration: "Duration: 8 weeks",
    problemMetrics: [
      { label: "Conversion Rate", value: "1.2%" },
      { label: "Bounce Rate", value: "72%" },
      { label: "Cart Abandonment", value: "68%" },
    ],
    execution: [
      "Simplified checkout from 6 to 3 steps",
      "Improved product page clarity and CTAs",
      "Added trust signals and urgency cues",
      "A/B tested headlines and pricing layouts",
    ],
    results: [
      { label: "Conversion Rate", before: "1.2%", after: "2.8%" },
      { label: "Bounce Rate", before: "72%", after: "48%" },
      { label: "Cart Abandonment", before: "68%", after: "42%" },
    ],
    impact: ["Increased revenue per visitor", "Reduced friction", "Higher checkout completion"],
    image: analyticsDashboard,
  },
];

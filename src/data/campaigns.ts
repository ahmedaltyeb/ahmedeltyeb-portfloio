import ismetcheCampaigns1 from "@/assets/marketing_campaigns-imgs/ismetche_campaigns1.png";
import ismetcheCampaigns2 from "@/assets/marketing_campaigns-imgs/ismetche_campaigns2.png";
import analyticsDashboard from "@/assets/analytics-dashboard.png";
import funnelOptimization from "@/assets/Google-Ads-e-commerce-campaign.png";

export type CampaignKpi = {
  value: string;
  label: string;
};

export type CampaignMetric = {
  label: string;
  value: string;
};

export type Campaign = {
  id: number;
  title: string;
  tags: string[];
  objective: string;
  strategy: string[];
  kpis: CampaignKpi[];
  highlightMetrics: CampaignMetric[];
  image: string;
};

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Fashion Boutique Summer Sale",
    tags: ["Google Ads", "E-commerce", "Conversion Campaign"],
    objective: "Increase online sales during the summer sale with high-intent traffic.",
    strategy: [
      "Google Shopping campaign",
      "High-intent keywords",
      "Product feed optimization",
      "Bid optimization",
    ],
    kpis: [
      { value: "+35%", label: "Sales Growth" },
      { value: "127", label: "Leads Generated" },
    ],
    highlightMetrics: [
      { label: "CTR", value: "3.85%" },
      { label: "Cost per Result", value: "8.5 AED" },
      { label: "Impressions", value: "24,500" },
    ],
    image: funnelOptimization,
  },
  {
    id: 2,
    title: "E-commerce Retargeting Campaign",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
    objective: "Recover abandoned carts and drive repeat purchases.",
    strategy: [
      "Segmented retargeting flows",
      "Dynamic product ads",
      "Cart-stage messaging",
      "ROAS-focused bidding",
    ],
    kpis: [
      { value: "2.8x", label: "ROAS" },
      { value: "156", label: "Recovered Orders" },
    ],
    highlightMetrics: [
      { label: "CTR", value: "6.8%" },
      { label: "Cost per Result", value: "5.20 AED" },
      { label: "Impressions", value: "18,500" },
    ],
    image: analyticsDashboard,
  },
  {
    id: 3,
    title: "ISMET Steak Messages",
    tags: ["Meta Ads", "Restaurant", "Message Campaign"],
    objective: "Drive direct customer inquiries for a new smoked meat offer.",
    strategy: [
      "Video-first creatives",
      "Geo-targeted audiences",
      "Click-to-message CTAs",
      "Placement optimization",
    ],
    kpis: [
      { value: "54", label: "Messages" },
      { value: "1.99 AED", label: "Cost per Message" },
    ],
    highlightMetrics: [
      { label: "CTR", value: "4.01%" },
      { label: "Impressions", value: "16,971" },
      { label: "Reach", value: "12,800" },
    ],
    image: ismetcheCampaigns1,
  },
  {
    id: 4,
    title: "Local Business Growth",
    tags: ["Meta Ads", "Services", "Lead Generation"],
    objective: "Generate qualified local leads for service bookings.",
    strategy: [
      "Hyper-local targeting",
      "Lookalike audiences",
      "Mobile-first lead forms",
      "Cost-per-lead optimization",
    ],
    kpis: [
      { value: "89", label: "Leads" },
      { value: "4.75 AED", label: "Cost per Lead" },
    ],
    highlightMetrics: [
      { label: "CTR", value: "5.2%" },
      { label: "Reach", value: "45K" },
      { label: "Impressions", value: "52,300" },
    ],
    image: ismetcheCampaigns2,
  },
];

import ismetChefCover from "@/assets/ismetchef_website.png";
import ismetChefPreview1 from "@/assets/ismetchef-camp1.png";
import ismetChefPreview2 from "@/assets/ismetchef-cam-2.png";
import ismetChefPreview3 from "@/assets/marketing_campaigns-imgs/ismetche_campaigns1.png";
import loofCover from "@/assets/project-loof.png";
import loofPreview1 from "@/assets/Fashion-Boutique-Summer-Sale.png";
import loofPreview2 from "@/assets/Google-Ads-e-commerce-campaign.png";
import loofPreview3 from "@/assets/project-loof.png";
import alArabiCover from "@/assets/digital-marketing-campaign..png";
import alArabiPreview1 from "@/assets/analytics-dashboard.png";
import alArabiPreview2 from "@/assets/digital-marketing-campaign..png";
import alArabiPreview3 from "@/assets/Google-Ads-e-commerce-campaign.png";

export type SocialPlatform = "instagram" | "facebook" | "tiktok";

export type SocialMediaBrand = {
  id: number;
  slug: string;
  name: string;
  category: "Restaurants" | "Fashion" | "Corporate";
  summary: string;
  workSummary: string[];
  platforms: { type: SocialPlatform; label: string; url?: string }[];
  accountName: string;
  coverImage: string;
  previews: string[];
  stats: { label: string; value: string }[];
  featured?: boolean;
  profileUrl?: string;
};

export const socialMediaBrands: SocialMediaBrand[] = [
  {
    id: 1,
    slug: "ismet-chef",
    name: "Ismet Chef",
    category: "Restaurants",
    summary:
      "Managed restaurant social presence with campaign support, brand content direction, and growth-focused marketing execution.",
    workSummary: [
      "Content creation and weekly planning",
      "WhatsApp conversion campaigns",
      "Cinematic food creatives and reels",
      "Audience growth strategy",
    ],
    platforms: [
      { type: "instagram", label: "Instagram" },
      { type: "facebook", label: "Facebook" },
      { type: "tiktok", label: "TikTok" },
    ],
    accountName: "@ismetchef",
    coverImage: ismetChefCover,
    previews: [ismetChefPreview1, ismetChefPreview2, ismetChefPreview3],
    stats: [
      { label: "WhatsApp Leads", value: "+54 in 7 days" },
      { label: "Engagement Lift", value: "+32%" },
      { label: "CTR", value: "3.85%" },
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "al-arabi-falcons",
    name: "Al Arabi Falcons",
    category: "Corporate",
    summary:
      "Supported brand presentation, digital visibility, and structured content direction.",
    workSummary: [
      "Campaign strategy and paid ads support",
      "Landing page and funnel refinement",
      "Brand visibility improvements",
      "Performance reporting cadence",
    ],
    platforms: [
      { type: "instagram", label: "Instagram" },
      { type: "facebook", label: "Facebook" },
    ],
    accountName: "@alarabifalcons",
    coverImage: alArabiCover,
    previews: [alArabiPreview1, alArabiPreview2, alArabiPreview3],
    stats: [
      { label: "Leads Generated", value: "+120" },
      { label: "CPL Reduction", value: "-40%" },
      { label: "Reach", value: "45K" },
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "loof-boutique",
    name: "Loof Boutique",
    category: "Fashion",
    summary:
      "Worked on social media presentation, content styling, and digital brand support for women's fashion products.",
    workSummary: [
      "Content styling and visual direction",
      "Campaign support for seasonal drops",
      "Story and reel performance tracking",
      "Brand consistency updates",
    ],
    platforms: [
      { type: "instagram", label: "Instagram" },
      { type: "tiktok", label: "TikTok" },
      { type: "facebook", label: "Facebook" },
    ],
    accountName: "@loofboutique",
    coverImage: loofCover,
    previews: [loofPreview1, loofPreview2, loofPreview3],
    stats: [
      { label: "Follower Growth", value: "+18%" },
      { label: "Engagement Rate", value: "4.6%" },
      { label: "Campaign Reach", value: "28K" },
    ],
    featured: true,
  },
];

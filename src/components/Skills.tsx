import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  Megaphone,
  Palette,
  PenTool,
  PieChart,
  Scissors,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

const skills = [
  "Content & Branding",
  "Growth Marketing",
  "Social Media Strategy",
  "Analytics",
  "Marketing Strategy",
  "Brand Management",
  "Creative Campaigns",
];

const toolGroups = [
  {
    title: "Marketing Strategy",
    tools: [
      { name: "Google Analytics", label: "Marketing Strategy", icon: BarChart3 },
      { name: "Google Trends", label: "Marketing Strategy", icon: TrendingUp },
      { name: "Google Search Console", label: "Marketing Strategy", icon: Search },
    ],
  },
  {
    title: "Branding & Social Media",
    tools: [
      { name: "Adobe Creative Suite", label: "Branding", icon: Palette },
      { name: "Figma", label: "Design", icon: PenTool },
      { name: "CapCut", label: "Video", icon: Scissors },
    ],
  },
  {
    title: "Analytics & Insights",
    tools: [
      { name: "Power BI", label: "Analytics", icon: PieChart },
      { name: "Microsoft 365", label: "Reporting", icon: Briefcase },
    ],
  },
  {
    title: "Ads & Growth",
    tools: [
      { name: "Meta Ads", label: "Paid Media", icon: Megaphone },
      { name: "Google Ads", label: "Paid Media", icon: Target },
    ],
  },
];

const certifications = [
  {
    name: "Digital Marketing Bootcamp",
    provider: "Growth Academy",
    date: "2024",
  },
  {
    name: "Advanced Social Media Marketing",
    provider: "Meta Blueprint",
    date: "2023",
  },
  {
    name: "Google Project Management Certificate",
    provider: "Google",
    date: "2023",
  },
  {
    name: "Google Data Analytics Certificate",
    provider: "Google",
    date: "2022",
  },
  {
    name: "Business Analyst Certification",
    provider: "IIBA",
    date: "2022",
  },
];

export const Skills = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute -top-12 right-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-28 w-28 rounded-full border border-primary/20" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12"
        >
          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold text-foreground font-display">skills.</h3>
                <span className="h-px w-12 bg-primary/40" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm px-4 py-2 rounded-full bg-background/80 border border-border shadow-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold text-foreground font-display">tools.</h3>
                <span className="h-px w-12 bg-primary/40" />
              </div>

              <div className="space-y-6">
                {toolGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      {group.title}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {group.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="rounded-xl border border-border bg-background/90 p-4 shadow-sm flex items-start gap-3"
                        >
                          <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                            <tool.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{tool.name}</p>
                            <p className="text-xs text-muted-foreground">{tool.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-8 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-foreground font-display">
                certification.
              </h3>
              <span className="h-px w-12 bg-primary/40" />
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-xl border border-border bg-background/90 p-4 shadow-sm flex items-start gap-3"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.provider}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

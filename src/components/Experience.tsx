import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type ExperienceItem = {
  company: string;
  title: string;
  duration: string;
  summary: string[];
  results: string[];
  logoText: string;
  accentClass: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "ISMET CHEF Steakhouse",
    title: "Digital Marketing Specialist",
    duration: "Jan 2026 - Present",
    summary: [
      "Managed Meta Ads campaigns focused on WhatsApp conversions",
      "Optimized targeting within Ajman to reduce wasted spend",
      "Tested multiple creatives including food cinematic videos",
    ],
    results: ["+54 Leads in 7 days", "CTR: 3.85%", "Cost per Result: 8.5 AED"],
    logoText: "IC",
    accentClass: "bg-primary/10 text-primary",
  },
  {
    company: "Almoheeb Real Estate",
    title: "Marketing and Lead Generation",
    duration: "2025",
    summary: [
      "Built lead generation campaigns for property rentals and sales",
      "Created landing pages and optimized WhatsApp funnel",
    ],
    results: ["+120 Leads Generated", "Reduced CPL by 40%", "Improved conversion rate"],
    logoText: "AR",
    accentClass: "bg-secondary text-foreground",
  },
];

export const Experience = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Experience
          </p>
          <h2 className="section-title">
            Performance <span className="text-primary">Timeline</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Results-focused roles delivered through performance marketing and conversion-led execution.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative pl-16"
              >
                <div
                  className={`absolute left-0 top-2 h-12 w-12 rounded-full flex items-center justify-center border border-border shadow-sm ${exp.accentClass}`}
                >
                  <span className="text-sm font-semibold">{exp.logoText}</span>
                </div>

                <div className="glass-card p-6 md:p-8 hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-display">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Impact
                      </p>
                      <ul className="space-y-2">
                        {exp.summary.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/90 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Results
                      </p>
                      <div className="space-y-3">
                        {exp.results.map((result) => (
                          <div key={result} className="text-base font-semibold text-primary">
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

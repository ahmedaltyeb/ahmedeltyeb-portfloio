"use client";

import { motion } from "framer-motion";

const partners: { name: string; tooltip: string; accent: string; logo?: string }[] = [
  {
    name: "Ismet CHEF",
    tooltip: "Meta Ads Campaign - 54 Leads Generated",
    accent: "group-hover:text-rose-500",
  },
  {
    name: "Al Arabi Falcons",
    tooltip: "Conversion Optimization - 35% Sales Lift",
    accent: "group-hover:text-blue-500",
  },
  {
    name: "Loof Boutique",
    tooltip: "E-commerce Growth - 127 Leads Generated",
    accent: "group-hover:text-emerald-500",
  },
  {
    name: "Gold Signature",
    tooltip: "Brand Campaign - CTR 3.85%",
    accent: "group-hover:text-amber-500",
  },
  {
    name: "Epicminds IT",
    tooltip: "Performance Site Build - 50% Faster Load",
    accent: "group-hover:text-indigo-500",
  },
  {
    name: "Expert Caller",
    tooltip: "Lead Funnel - 40% CPL Reduction",
    accent: "group-hover:text-cyan-500",
  },
  {
    name: "TechSculpt",
    tooltip: "Growth Sprint - +28% Conversion Rate",
    accent: "group-hover:text-violet-500",
  },
];

export const PartnersMarquee = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Client Proof
          </p>
          <h2 className="section-title">
            Brands I've <span className="text-primary">Worked With</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Real companies I helped grow through marketing campaigns and digital solutions.
          </p>
          <p className="text-sm text-muted-foreground">
            Worked with 10+ brands across UAE and India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              title={partner.tooltip}
              className="group w-full"
            >
              <div className="rounded-2xl border border-border bg-background/90 px-6 py-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-center">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 w-auto grayscale transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  ) : (
                    <span
                      className={`text-sm sm:text-base font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 ${partner.accent}`}
                    >
                      {partner.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;

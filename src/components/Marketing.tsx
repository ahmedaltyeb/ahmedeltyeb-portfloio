import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { campaigns } from "@/data/campaigns";

export const Marketing = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="campaigns" className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Campaign Results
          </p>
          <h2 className="section-title">
            Marketing <span className="text-primary">Campaigns</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            KPI-first campaigns structured for growth, efficiency, and measurable impact.
          </p>
        </motion.div>

        <div className="space-y-10">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 md:p-10 hover-lift"
            >
              <div className="flex flex-wrap gap-8 items-end mb-8">
                {campaign.kpis.map((kpi) => (
                  <div key={kpi.label}>
                    <p className="text-3xl md:text-4xl font-semibold text-foreground font-display">
                      {kpi.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                {campaign.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground font-display mb-3">
                    {campaign.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Objective
                    </p>
                    <p className="text-sm text-foreground">{campaign.objective}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Strategy
                    </p>
                    <ul className="space-y-2">
                      {campaign.strategy.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
                    <img
                      src={campaign.image}
                      alt={`${campaign.title} visual`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-secondary/60 border border-border px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Metrics
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {campaign.highlightMetrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

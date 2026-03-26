import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { caseStudies } from "@/data/caseStudies";

export const CaseStudies = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="case-studies" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Case Studies
          </p>
          <h2 className="section-title">
            Structured <span className="text-primary">Campaign Stories</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Clear, metric-focused stories that show how each campaign moved the numbers.
          </p>
        </motion.div>

        <div className="space-y-10">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 md:p-12 hover-lift"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {caseStudy.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-display mb-6">
                    {caseStudy.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Problem
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {caseStudy.problemMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-border bg-background/80 px-4 py-3"
                        >
                          <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Execution
                    </p>
                    <ul className="space-y-2">
                      {caseStudy.execution.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Results (Before vs After)
                    </p>
                    <div className="space-y-3">
                      {caseStudy.results.map((result) => (
                        <div
                          key={result.label}
                          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3"
                        >
                          <p className="text-sm font-semibold text-foreground">{result.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {result.before} &rarr; <span className="text-foreground">{result.after}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Business Impact
                    </p>
                    <ul className="space-y-2">
                      {caseStudy.impact.map((item) => (
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
                      src={caseStudy.image}
                      alt={`${caseStudy.title} visual`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

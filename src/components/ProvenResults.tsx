import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const kpis = [
  { value: "+35%", label: "Sales Increase" },
  { value: "127", label: "Leads Generated" },
  { value: "-52%", label: "Cost Reduction" },
];

export const ProvenResults = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            KPI Snapshot
          </p>
          <h2 className="section-title">
            Proven <span className="text-primary">Results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-6 text-center hover-lift"
            >
              <p className="text-3xl md:text-4xl font-semibold text-foreground font-display">
                {kpi.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

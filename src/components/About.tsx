import { motion } from "framer-motion";
import { Award, Code2, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import profileImage from "@/assets/ahmed-profile.png";

const highlights = [
  { icon: Code2, label: "Years Experience", value: "3+" },
  { icon: Users, label: "Projects Completed", value: "20+" },
  { icon: Award, label: "Happy Clients", value: "15+" },
];

export const About = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src={profileImage}
                  alt="Ahmed Eltyeb Khalifa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
            </div>

            <div className="flex justify-center gap-6 mt-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am a performance-driven Digital Marketer and Frontend Developer based in the UAE. I build modern
              web applications and run campaigns that turn marketing spend into measurable growth.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My marketing background gives me an edge in conversion optimization, while my React and TypeScript
              expertise lets me ship fast, polished experiences that align with campaign goals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I combine strategy, execution, and engineering to move the metrics that matter: revenue, leads, and
              customer acquisition efficiency.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Bachelor of Computer Applications (BCA)</span>
                <span className="text-muted-foreground text-sm">- Bengaluru City University</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">React.js and Frontend Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Top Performer Award</span>
                <span className="text-muted-foreground text-sm">- Al Arabi Falcons</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

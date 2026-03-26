import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import profileImage from "@/assets/ahmed-profile.png";
import { useEffect, useState } from "react";

const heroRoles = ["Frontend Developer", "Digital Marketer"];

const heroMetrics = [
  { label: "Sales Lift", value: "+35%" },
  { label: "CTR", value: "3.85%" },
  { label: "Cost per Result", value: "1.99 AED" },
];

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Ahmed Eltyeb Khalifa
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 leading-tight font-display">
              Digital Marketer & Frontend Developer
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl leading-relaxed">
              I drive measurable growth through performance marketing and build high-converting web experiences.
            </p>

            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              <span>Switching Between</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="text-foreground min-w-[160px] text-left"
                >
                  {heroRoles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="hover-lift" asChild>
                <Link to="/campaigns">View Campaign Results</Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-background/70 px-4 py-3">
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                  <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ahmed-eltyeb/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ahmedaltyeb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:khalifa.ahmedeltyeb@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={profileImage}
                  alt="Ahmed Eltyeb Khalifa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-semibold text-sm text-center leading-tight">
                  3+ Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

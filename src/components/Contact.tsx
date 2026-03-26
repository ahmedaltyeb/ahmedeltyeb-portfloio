import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useInView } from "@/hooks/useInView";

export const Contact = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Contact
          </p>
          <h2 className="section-title">
            Work <span className="text-primary">With Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Available for marketing campaigns and web development projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <a href="https://wa.me/971529307250" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:khalifa.ahmedeltyeb@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +971 52 930 7250
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              khalifa.ahmedeltyeb@gmail.com
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

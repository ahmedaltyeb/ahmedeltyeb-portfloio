import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useInView } from "@/hooks/useInView";
import { socialMediaBrands } from "@/data/socialMedia";
import { Instagram, Facebook, Music2 } from "lucide-react";

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
};

export const SocialMediaPreview = () => {
  const { ref, isInView } = useInView(0.2);
  const featuredBrands = socialMediaBrands.filter((brand) => brand.featured).slice(0, 3);

  return (
    <section id="social-media-preview" className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Social Media Brands
          </p>
          <h2 className="section-title">
            Social Media <span className="text-primary">Brands</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Brands and pages I supported through content, campaign strategy, and digital growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBrands.map((brand, index) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card overflow-hidden hover-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={brand.coverImage}
                  alt={`${brand.name} cover`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{brand.name}</h3>
                    <p className="text-xs text-muted-foreground">{brand.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {brand.platforms.map((platform) => {
                      const Icon = platformIcons[platform.type];
                      return (
                        <span
                          key={`${brand.slug}-${platform.type}`}
                          className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                      );
                    })}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                  {brand.summary}
                </p>

                <div className="mt-5">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/social-media/${brand.slug}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

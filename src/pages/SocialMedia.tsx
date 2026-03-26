import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { socialMediaBrands } from "@/data/socialMedia";

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
};

const filters = ["All", "Restaurants", "Fashion", "Corporate"] as const;

const SocialMedia = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredBrands = useMemo(() => {
    if (activeFilter === "All") return socialMediaBrands;
    return socialMediaBrands.filter((brand) => brand.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Accounts" },
        ]}
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground font-display mb-2">
                Social Media Work
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Brand pages and managed accounts presented as performance case studies with clear growth outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card overflow-hidden hover-lift"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={brand.coverImage}
                    alt={`${brand.name} cover`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
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

                  <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                    {brand.summary}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    {brand.stats.slice(0, 3).map((stat) => (
                      <div
                        key={`${brand.slug}-${stat.label}`}
                        className="rounded-xl border border-border bg-background/80 px-2 py-3"
                      >
                        <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/social-media/${brand.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;

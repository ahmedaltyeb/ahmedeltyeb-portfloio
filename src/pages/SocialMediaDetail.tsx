import { Link, useParams } from "react-router-dom";
import { Instagram, Facebook, Music2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { socialMediaBrands } from "@/data/socialMedia";
import NotFound from "./NotFound";

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
};

export const SocialMediaDetail = () => {
  const { slug } = useParams();
  const brand = socialMediaBrands.find((item) => item.slug === slug);

  if (!brand) {
    return <NotFound />;
  }

  const actionHref = brand.profileUrl ?? "#previews";
  const actionLabel = brand.profileUrl ? "Open Profile" : "See Work";
  const isExternal = Boolean(brand.profileUrl);

  return (
    <div>
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Accounts", href: "/social-media" },
          { label: brand.name },
        ]}
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground font-display mb-3">
                {brand.name}
              </h1>
              <p className="text-muted-foreground mb-6 max-w-2xl">{brand.summary}</p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                {brand.platforms.map((platform) => {
                  const Icon = platformIcons[platform.type];
                  return (
                    <span
                      key={`${brand.slug}-${platform.type}`}
                      className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {platform.label}
                    </span>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-border bg-background/90 p-5 mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Account
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{brand.name}</p>
                    <p className="text-xs text-muted-foreground">{brand.accountName}</p>
                  </div>
                  <Button size="sm" asChild>
                    <a
                      href={actionHref}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {actionLabel}
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {brand.stats.map((stat) => (
                  <div
                    key={`${brand.slug}-${stat.label}`}
                    className="rounded-xl border border-border bg-secondary/30 px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Work Summary
                </p>
                <ul className="space-y-2">
                  {brand.workSummary.map((item) => (
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
                <img src={brand.coverImage} alt={`${brand.name} cover`} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-background/90 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Brand Focus
                </p>
                <p className="text-sm text-foreground">{brand.category} social growth and content strategy.</p>
              </div>
            </div>
          </div>

          <div id="previews" className="mt-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-foreground font-display">
                Account Preview
              </h2>
              <Button variant="outline" size="sm" asChild>
                <Link to="/social-media">Back to All Brands</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {brand.previews.map((preview, index) => (
                <div
                  key={`${brand.slug}-preview-${index}`}
                  className="rounded-2xl overflow-hidden border border-border bg-background/90 shadow-sm"
                >
                  <img src={preview} alt={`${brand.name} preview ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

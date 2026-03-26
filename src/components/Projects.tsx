import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useInView } from "@/hooks/useInView";
import { projects, getProjectsByCategory, type ProjectCategory } from "@/data/projects";

const isValidLink = (url?: string) => Boolean(url && url !== "#");
const formatCategory = (category: ProjectCategory) =>
  category === "Sales & Management Systems"
    ? category
    : category.charAt(0).toUpperCase() + category.slice(1);

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [showAll, setShowAll] = useState(false);
  const { ref, isInView } = useInView(0.1);

  const categories: ProjectCategory[] = [
    "All",
    "frontend",
    "marketing",
    "hybrid",
    "Sales & Management Systems",
  ];

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
  const filteredProjects = getProjectsByCategory(activeFilter).filter((project) => !project.featured);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Featured Projects
          </p>
          <h2 className="section-title">
            High-Impact <span className="text-primary">Web Projects</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Two flagship builds that combine performance-driven marketing with conversion-focused frontend execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card overflow-hidden hover-lift"
            >
              <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-6 h-full">
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {formatCategory(project.category)}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground mt-4 font-display">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {project.result && (
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-sm font-semibold px-3 py-1">
                        {project.result}
                      </span>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.slice(0, 5).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    {isValidLink(project.liveUrl) && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live
                        </a>
                      </Button>
                    )}
                    {isValidLink(project.githubUrl) && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="relative h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground font-display">
                Other Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                A broader snapshot of marketing sites, web apps, and internal systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {category === "All" ? "All" : formatCategory(category)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                className="group glass-card overflow-hidden hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {(isValidLink(project.liveUrl) || isValidLink(project.githubUrl)) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                      {isValidLink(project.liveUrl) && (
                        <a
                          href={project.liveUrl}
                          className="p-2.5 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                          aria-label="Live demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {isValidLink(project.githubUrl) && (
                        <a
                          href={project.githubUrl}
                          className="p-2.5 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                          aria-label="GitHub repository"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {formatCategory(project.category)}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {project.result && (
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.result}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length > 9 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show Less" : "View All Projects"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Projects } from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div>
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
      <Projects />
    </div>
  );
};

export default ProjectsPage;

import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Experience } from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div>
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Experience" }]} />
      <Experience />
    </div>
  );
};

export default ExperiencePage;

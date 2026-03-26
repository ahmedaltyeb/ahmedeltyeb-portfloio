import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { CaseStudies } from "@/components/CaseStudies";

const CaseStudiesPage = () => {
  return (
    <div>
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
      <CaseStudies />
    </div>
  );
};

export default CaseStudiesPage;

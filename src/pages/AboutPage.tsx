import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

const AboutPage = () => {
  return (
    <div>
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Me" }]} />
      <About />
      <Skills />
    </div>
  );
};

export default AboutPage;

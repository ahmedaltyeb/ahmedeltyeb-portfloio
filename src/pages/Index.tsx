import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ProvenResults } from "@/components/ProvenResults";
import { Marketing } from "@/components/Marketing";
import { CaseStudies } from "@/components/CaseStudies";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { Contact } from "@/components/Contact";
import { SocialMediaPreview } from "@/components/SocialMediaPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <ProvenResults />
      <Marketing />
      <CaseStudies />
      <SocialMediaPreview />
      <Skills />
      <About />
      <Experience />
      <Testimonials />
      <PartnersMarquee />
      <Contact />
    </div>
  );
};

export default Index;

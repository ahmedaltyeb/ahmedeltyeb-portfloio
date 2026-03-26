import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Contact } from "@/components/Contact";

const ContactPage = () => {
  return (
    <div>
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <Contact />
    </div>
  );
};

export default ContactPage;

import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Marketing } from "@/components/Marketing";

const CampaignsPage = () => {
  return (
    <div>
      <PageBreadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Marketing Campaigns" }]}
      />
      <Marketing />
    </div>
  );
};

export default CampaignsPage;

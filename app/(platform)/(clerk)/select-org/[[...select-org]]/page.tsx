import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div>
      select-org
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterSelectPersonalUrl="/organization/:id"
      />
    </div>
  );
}

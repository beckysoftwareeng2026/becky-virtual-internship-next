import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import PlanCard from "@/components/PlanCard";

export default function ChoosePlanPage() {
  return (
    <PageContainer>
      <PageTitle>
        Choose Your Plan
      </PageTitle>

   <PlanCard title="Basic" price="$0/month" plan="basic" />

<PlanCard title="Premium" price="$9.99/month" plan="monthly" />

<PlanCard title="Premium Plus" price="$99.99/year" plan="yearly" />
    </PageContainer>
  );
}
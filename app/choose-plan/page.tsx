import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import PlanCard from "@/components/PlanCard";

export default function ChoosePlanPage() {
  return (
    <PageContainer>
      <PageTitle>
        Choose Your Plan
      </PageTitle>

      <PlanCard
        title="Basic"
        price="$0/month"
      />

      <PlanCard
        title="Premium"
        price="$9.99/month"
      />
    </PageContainer>
  );
}
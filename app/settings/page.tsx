import AuthGuard from "@/components/AuthGuard";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import UserEmail from "@/components/UserEmail";
import SubscriptionStatus from "@/components/SubscriptionStatus";

export default function SettingsPage() {
  return (
    <AuthGuard>
      <PageContainer>
        <PageTitle>Settings</PageTitle>

        <UserEmail />

        <SubscriptionStatus />
      </PageContainer>
    </AuthGuard>
  );
}
import AuthGuard from "@/components/AuthGuard";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import UserEmail from "@/components/UserEmail";

export default function SettingsPage() {
  return (
    <AuthGuard>
      <PageContainer>
        <PageTitle>Settings</PageTitle>

        <UserEmail />

        <p>Status: Free Plan</p>
      </PageContainer>
    </AuthGuard>
  );
}
import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import UserEmail from "@/components/UserEmail";
import SubscriptionStatus from "@/components/SubscriptionStatus";

export default function SettingsPage() {
  return (
    <AuthGuard>
      <PageContainer>
        <Link href="/for-you" className="back-link">
          ← Back
        </Link>

        <PageTitle>Settings</PageTitle>

        <section className="settings-section">
          <h3>Account</h3>
          <UserEmail />
        </section>

        <SubscriptionStatus />
      </PageContainer>
    </AuthGuard>
  );
}
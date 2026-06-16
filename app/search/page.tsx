import AuthGuard from "@/components/AuthGuard";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";

export default function SearchPage() {
  return (
    <AuthGuard>
      <PageContainer>
        <PageTitle>Search</PageTitle>
        <p>Search functionality coming soon.</p>
      </PageContainer>
    </AuthGuard>
  );
}
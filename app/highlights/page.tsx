import AuthGuard from "@/components/AuthGuard";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";

export default function HighlightsPage() {
  return (
    <AuthGuard>
      <PageContainer>
        <PageTitle>Highlights</PageTitle>
        <p>Your book highlights will appear here.</p>
      </PageContainer>
    </AuthGuard>
  );
}
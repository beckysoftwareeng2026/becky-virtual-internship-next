import AuthGuard from "@/components/AuthGuard";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";

export default function LibraryPage() {
  return (
    <AuthGuard>
      <PageContainer>
        <PageTitle>My Library</PageTitle>
        <p>Your saved books will appear here.</p>
      </PageContainer>
    </AuthGuard>
  );
}
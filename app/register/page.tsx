import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <PageContainer>
      <PageTitle>Register</PageTitle>

      <AuthForm
        buttonText="Create Account"
      />
    </PageContainer>
  );
}
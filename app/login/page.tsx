import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>

      <AuthForm
        buttonText="Login"
      />
    </PageContainer>
  );
}
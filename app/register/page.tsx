import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-modal">
       <Link href="/" className="auth-close">
  ×
</Link>

        <h2>Create your account</h2>

        <AuthForm buttonText="Create Account" />

        <div className="auth-footer">
          <Link href="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
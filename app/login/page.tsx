import AuthForm from "@/components/AuthForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-modal">
        <div className="auth-close">×</div>

        <h2>Log in to Summarist</h2>

        <button className="auth-social auth-guest">
          👤 Login as a Guest
        </button>

        <div className="auth-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <button className="auth-social auth-google">
          G Login with Google
        </button>

        <div className="auth-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <AuthForm buttonText="Login" />

        <p className="auth-link">
          Forgot your password?
        </p>

       <div className="auth-footer">
  <Link href="/register">
    Don&apos;t have an account?
  </Link>
</div>
      </div>
    </div>
  );
}
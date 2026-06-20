"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  const router = useRouter();

  async function handleLogin(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/for-you");
  }

  return (
    <div className="auth-page">
      <div className="auth-modal">
        <Link href="/" className="auth-close">
          ×
        </Link>

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

        <AuthForm buttonText="Login" onSubmit={handleLogin} />

        <p className="auth-link">Forgot your password?</p>

        <div className="auth-footer">
          <Link href="/register">Don&apos;t have an account?</Link>
        </div>
      </div>
    </div>
  );
}
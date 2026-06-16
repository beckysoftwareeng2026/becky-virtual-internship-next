"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  const router = useRouter();

  async function handleRegister(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/for-you");
  }

  return (
    <div className="auth-page">
      <div className="auth-modal">
        <Link href="/" className="auth-close">
          ×
        </Link>

        <h2>Create your account</h2>

        <AuthForm
          buttonText="Create Account"
          onSubmit={handleRegister}
        />

        <div className="auth-footer">
          <Link href="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
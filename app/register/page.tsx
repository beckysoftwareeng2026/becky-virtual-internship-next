"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleRegister(
    email: string,
    password: string
  ) {
    try {
      setError("");

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/for-you");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-modal">
        <Link href="/" className="auth-close">
          ×
        </Link>

        <h2>Create your account</h2>

        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}

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


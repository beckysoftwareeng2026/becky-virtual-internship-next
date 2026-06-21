"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleLogin(email: string, password: string) {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/for-you");
    } catch (err: any) {
      if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        setError("Invalid email or password.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  async function handleGuestLogin() {
    try {
      setError("");
      await signInWithEmailAndPassword(
        auth,
        "guest@gmail.com",
        "guest123"
      );
      router.push("/for-you");
    } catch {
      setError(
        "Guest login failed. Make sure guest@gmail.com exists in Firebase Authentication."
      );
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-modal">
        <Link href="/" className="auth-close">
          ×
        </Link>

        <h2>Log in to Summarist</h2>

        <button
          type="button"
          className="auth-social auth-guest"
          onClick={handleGuestLogin}
        >
          👤 Login as a Guest
        </button>

        <div className="auth-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <button type="button" className="auth-social auth-google">
          G Login with Google
        </button>

        <div className="auth-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        {error && <p className="auth-error">{error}</p>}

        <AuthForm buttonText="Login" onSubmit={handleLogin} />

        <p className="auth-link">Forgot your password?</p>

        <div className="auth-footer">
          <Link href="/register">Don&apos;t have an account?</Link>
        </div>
      </div>
    </div>
  );
}
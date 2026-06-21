"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function AuthButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    await signOut(auth);
    router.push("/login");
  }

  if (!loggedIn) {
    return (
      <Link href="/login" className="sidebar__login">
        ↪ Login
      </Link>
    );
  }

  return (
    <button
      className="sidebar__logout"
      onClick={handleLogout}
    >
      ↪ Logout
    </button>
  );
}
"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { isUserSubscribed } from "@/lib/subscription";
import { useRouter } from "next/navigation";
import { Book } from "@/lib/types";

type Props = {
  book: Book;
  children: React.ReactNode;
};

export default function PlayerAccessGuard({ book, children }: Props) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const user = auth.currentUser;

      if (!user) {
        router.push("/login");
        return;
      }

      const subscribed = await isUserSubscribed(user.uid);

      if (book.subscriptionRequired && !subscribed) {
        router.push("/choose-plan");
        return;
      }

      setChecking(false);
    }

    checkAccess();
  }, [book, router]);

  if (checking) {
    return <p>Checking access...</p>;
  }

  return <>{children}</>;
}
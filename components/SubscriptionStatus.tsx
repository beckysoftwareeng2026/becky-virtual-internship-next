"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { auth, db } from "@/lib/firebase";

export default function SubscriptionStatus() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("Free");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const success = searchParams.get("success");
      const plan = searchParams.get("plan");

      if (success === "true" && plan) {
        const newStatus =
          plan === "yearly" ? "Premium Plus" : "Premium";

        await setDoc(
          doc(db, "users", user.uid),
          { subscriptionStatus: newStatus },
          { merge: true }
        );

        setStatus(newStatus);
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        setStatus(userDoc.data().subscriptionStatus || "Free");
      }
    });

    return () => unsubscribe();
  }, [searchParams]);

  return (
    <div className="settings-section">
      <h3>Subscription</h3>
      <p>Status: {status}</p>
    </div>
  );
}
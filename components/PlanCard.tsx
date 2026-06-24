"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

type Props = {
  title: string;
  price: string;
  plan: "monthly" | "yearly" | "basic";
};

export default function PlanCard({ title, price, plan }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleCheckout() {
    if (plan === "basic") return;

    const user = auth.currentUser;

    if (!user) {
      router.push("/login");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Checkout failed. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="plan-card">
      <h3>{title}</h3>
      <p>{price}</p>

      {plan === "basic" ? (
        <button disabled>Current Plan</button>
      ) : (
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? "Loading..." : "Choose Plan"}
        </button>
      )}
    </div>
  );
}
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function isUserSubscribed(userId: string) {
  const userDoc = await getDoc(doc(db, "users", userId));

  if (!userDoc.exists()) {
    return false;
  }

  const status = userDoc.data().subscriptionStatus;

  return status === "Premium" || status === "Premium Plus";
}
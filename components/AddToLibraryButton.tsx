"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

type Props = {
  bookId: string;
};

export default function AddToLibraryButton({ bookId }: Props) {
  const [isSaved, setIsSaved] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsChecking(false);
        return;
      }

      const bookRef = doc(db, "users", user.uid, "library", bookId);
      const bookSnap = await getDoc(bookRef);

      setIsSaved(bookSnap.exists());
      setIsChecking(false);
    });

    return () => unsubscribe();
  }, [bookId]);

  async function handleAddToLibrary() {
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in first.");
      return;
    }

    await setDoc(doc(db, "users", user.uid, "library", bookId), {
      bookId,
      addedAt: new Date().toISOString(),
    });

    setIsSaved(true);
  }

  return (
    <button
      className="book-page__library"
      onClick={handleAddToLibrary}
      disabled={isSaved || isChecking}
    >
     {isChecking
  ? "Checking..."
  : isSaved
  ? "✓ Added to My Library"
  : "♡ Add title to My Library"}
    </button>
  );
}
"use client";

import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import Link from "next/link";

type Props = {
  bookId: string;
  onRemove: (bookId: string) => void;
};

export default function RemoveFromLibraryButton({ bookId, onRemove }: Props) {
  async function handleRemove() {
    const user = auth.currentUser;
    if (!user) return;

    await deleteDoc(doc(db, "users", user.uid, "library", bookId));

    onRemove(bookId);
  }

  return (
  <Link href="/for-you" className="library-empty__button">
  Browse Books
</Link>
  );
}
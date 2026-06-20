"use client";

import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

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
    <button className="library-remove" onClick={handleRemove}>
      Remove
    </button>
  );
}
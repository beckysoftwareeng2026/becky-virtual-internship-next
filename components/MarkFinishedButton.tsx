"use client";

import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type Props = {
  bookId: string;
};

export default function MarkFinishedButton({ bookId }: Props) {
  async function handleFinished() {
    const user = auth.currentUser;

    if (!user) return;
await setDoc(doc(db, "users", user.uid, "finished", bookId), {
  bookId,
  finishedAt: new Date().toISOString(),
});

await deleteDoc(doc(db, "users", user.uid, "library", bookId));

window.location.reload();
  }

  return (
    <button
      className="library-finished"
      onClick={handleFinished}
    >
      Mark Finished
    </button>
  );
}
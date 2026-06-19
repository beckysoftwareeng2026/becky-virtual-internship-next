"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import LibraryBooks from "@/components/LibraryBooks";

export default function LibraryPage() {
  const [bookIds, setBookIds] = useState<string[]>([]);
  const [finishedBookIds, setFinishedBookIds] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const librarySnapshot = await getDocs(
        collection(db, "users", user.uid, "library")
      );

      const finishedSnapshot = await getDocs(
        collection(db, "users", user.uid, "finished")
      );

      setBookIds(librarySnapshot.docs.map((doc) => doc.data().bookId));
      setFinishedBookIds(
        finishedSnapshot.docs.map((doc) => doc.data().bookId)
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthGuard>
      <div className="dashboard">
        <Sidebar />

        <main className="dashboard__main">
          <Navbar />

          <div className="dashboard__content">
          <section className="library-section">
              <h1>Saved Books</h1>
              <p>{bookIds.length} items</p>
              <LibraryBooks bookIds={bookIds} />
            </section>


          <section className="library-section">
  <h1>Finished</h1>
  <p>{finishedBookIds.length} items</p>

  <LibraryBooks
    bookIds={finishedBookIds}
    emptyTitle="Done and dusted!"
    emptyText="When you finish a book, you can find it here later."
    showActions={false}
  />
</section>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
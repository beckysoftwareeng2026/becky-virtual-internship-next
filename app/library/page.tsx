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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "library")
      );

      const ids = snapshot.docs.map((doc) => doc.data().bookId);
      setBookIds(ids);
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
            <h1>My Library</h1>

            {bookIds.length === 0 ? (
              <p>Your saved books will appear here.</p>
            ) : (
              <div>
               <LibraryBooks bookIds={bookIds} />
              </div>
            )}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
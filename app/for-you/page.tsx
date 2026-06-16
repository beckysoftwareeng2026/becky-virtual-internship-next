import {
  getSelectedBooks,
  getRecommendedBooks,
  getSuggestedBooks,
} from "@/lib/api";
import SectionTitle from "@/components/SectionTitle";
import BookRow from "@/components/BookRow";
import SelectedBook from "@/components/SelectedBook";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AuthGuard from "@/components/AuthGuard";



export default async function ForYouPage() {
  const selectedBooks = await getSelectedBooks();
  const recommendedBooks = await getRecommendedBooks();
  const suggestedBooks = await getSuggestedBooks();

return (
  <AuthGuard>
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard__main">
  <Navbar />

  <div className="dashboard__content">
    <SectionTitle>Selected just for you</SectionTitle>
    <SelectedBook book={selectedBooks[0]} />

    <BookRow title="Recommended For You" books={recommendedBooks} />
    <BookRow title="Suggested Books" books={suggestedBooks} />
  </div>
</main>
    </div>
  </AuthGuard>
);


}
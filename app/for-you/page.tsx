import {
  getSelectedBooks,
  getRecommendedBooks,
  getSuggestedBooks,
} from "@/lib/api";
import SectionTitle from "@/components/SectionTitle";
import BookRow from "@/components/BookRow";
import SelectedBook from "@/components/SelectedBook";
import PageTitle from "@/components/PageTitle";

// SelectedBook has an incorrect typing (returns void). Cast to any to allow JSX usage.
const Selected: any = SelectedBook;

export default async function ForYouPage() {
  const selectedBooks = await getSelectedBooks();
  const recommendedBooks = await getRecommendedBooks();
  const suggestedBooks = await getSuggestedBooks();

return (
  <div>
    <PageTitle>For You</PageTitle>

    <SectionTitle>Selected</SectionTitle>

    <Selected book={selectedBooks[0]} />

    <BookRow
      title="Recommended"
      books={recommendedBooks}
    />

    <BookRow
      title="Suggested"
      books={suggestedBooks}
    />
  </div>
);
}
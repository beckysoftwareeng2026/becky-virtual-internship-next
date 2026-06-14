import BookRow from "./BookRow";
import { Book } from "@/lib/types";

interface BookPillProps {
  selectedBooks: Book[];
  recommendedBooks: Book[];
  suggestedBooks: Book[];
}

export default function BookPill({
  selectedBooks,
  recommendedBooks,
  suggestedBooks,
}: BookPillProps) {
  const selectedBook = selectedBooks[0];

  return (
    <>
      {selectedBook ? (
        <div>
          <strong>Selected Book:</strong> {selectedBook.title || JSON.stringify(selectedBook)}
        </div>
      ) : null}

      <BookRow title="Recommended" books={recommendedBooks} />

      <BookRow title="Suggested" books={suggestedBooks} />
    </>
  );
}

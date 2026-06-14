import BookRow from "./BookRow";

interface BookPillProps {
  selectedBooks: any[];
  recommendedBooks: any[];
  suggestedBooks: any[];
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
          <strong>Selected Book:</strong> {selectedBook.title || selectedBook.name || JSON.stringify(selectedBook)}
        </div>
      ) : null}

      <BookRow title="Recommended" books={recommendedBooks} />

      <BookRow title="Suggested" books={suggestedBooks} />
    </>
  );
}

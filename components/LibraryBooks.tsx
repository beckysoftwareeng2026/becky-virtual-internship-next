"use client";

import { useEffect, useState } from "react";
import { getBook } from "@/lib/api";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/types";
import RemoveFromLibraryButton from "./RemoveFromLibraryButton";

type Props = {
  bookIds: string[];
};

export default function LibraryBooks({ bookIds }: Props) {
  const [books, setBooks] = useState<Book[]>([]);

  function handleRemove(bookId: string) {
  setBooks((currentBooks) =>
    currentBooks.filter((book) => book.id !== bookId)
  );
}

  useEffect(() => {
    async function loadBooks() {
      const results = await Promise.all(bookIds.map((id) => getBook(id)));
      setBooks(results);
    }

    if (bookIds.length > 0) {
      loadBooks();
    }
  }, [bookIds]);

 if (bookIds.length === 0) {
  return (
    <div className="library-empty">
      <h3>Your library is empty</h3>

      <p>
        Start exploring books and save your favorites.
      </p>

      <a href="/for-you" className="library-empty__button">
        Browse Books
      </a>
    </div>
  );
}

  return (
   <div className="book-row">
  {books.map((book) => (
    <div key={book.id} className="library-book">
      <BookCard book={book} />

      <RemoveFromLibraryButton
        bookId={book.id}
        onRemove={handleRemove}
      />
    </div>
  ))}
</div>
  );
}
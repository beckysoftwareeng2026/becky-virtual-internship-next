"use client";

import { useEffect, useState } from "react";
import { getAllBooks } from "@/lib/api";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/types";

export default function SearchBooks() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      const allBooks = await getAllBooks();
      setBooks(allBooks);
      setLoading(false);
    }

    loadBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.subTitle}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <input
        className="search-page__input"
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p>Loading books...</p>
      ) : query.trim() === "" ? (
        <p>Start typing to search for books.</p>
      ) : filteredBooks.length === 0 ? (
        <p>No books found. Try another search.</p>
      ) : (
        <div className="book-row">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  );
}




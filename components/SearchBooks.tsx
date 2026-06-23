"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAllBooks } from "@/lib/api";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/types";

export default function SearchBooks() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function loadBooks() {
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    }

    loadBooks();
  }, []);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

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

      {query && (
        <p className="search-results-count">
          Showing {filteredBooks.length} result
          {filteredBooks.length === 1 ? "" : "s"} for "{query}"
        </p>
      )}

      <div className="book-row">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}




import BookCard from "./BookCard";
import { Book } from "@/lib/types";

type Props = {
  title: string;
  subtitle?: string;
  books: Book[];
};

export default function BookRow({ title, subtitle, books }: Props) {
  return (
    <>
      <h2>{title}</h2>
{subtitle && <p className="book-row__subtitle">{subtitle}</p>}

      <div className="book-row">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </>
  );
}
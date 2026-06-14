import BookCard from "./BookCard";
import SectionTitle from "./SectionTitle";
import { Book } from "@/lib/types";

type Props = {
  title: string;
  books: Book[];
};

export default function BookRow({ title, books }: Props) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>

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
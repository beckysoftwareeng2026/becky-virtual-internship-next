import Link from "next/link";
import { Book } from "@/lib/types";

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
 return (
  <Link href={`/book/${book.id}`} className="book-card-link">
    <div className="book-card">
      <img
        src={book.imageLink}
        alt={book.title}
        className="book-card__image"
      />

      <h3>{book.title}</h3>

      <p>{book.author}</p>

      <p>⭐ {book.averageRating}</p>
    </div>
  </Link>
);
}
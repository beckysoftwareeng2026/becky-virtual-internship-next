import Link from "next/link";
import { Book } from "@/lib/types";

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  return (
    <Link
      href={`/book/${book.id}`}
      className="book-card-link"
    >
      <div className="book-card">
        <img
          src={book.imageLink}
          alt={book.title}
          className="book-card__image"
        />

        <h3 className="book-card__title">
          {book.title}
        </h3>

        <p className="book-card__author">
          {book.author}
        </p>

        <p className="book-card__subtitle">
          {book.subTitle}
        </p>

        <div className="book-card__details">
          <span>⏱ 03:24</span>
          <span>⭐ {book.averageRating}</span>
        </div>
      </div>
    </Link>
  );
}
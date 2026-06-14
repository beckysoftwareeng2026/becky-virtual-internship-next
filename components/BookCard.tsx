import Link from "next/link";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  averageRating: number;
  totalRating: number;
  subTitle: string;
};

export default function BookCard({ book }: { book: Book }) {
 return (
  <Link href={`/book/${book.id}`}>
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
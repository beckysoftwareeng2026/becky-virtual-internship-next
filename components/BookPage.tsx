import { Book } from "@/lib/types";
import ButtonLink from "@/components/ButtonLink";
import BookStats from "@/components/BookStats";
import AddToLibraryButton from "@/components/AddToLibraryButton";

type Props = {
  book: Book;
};

export default function BookPage({ book }: Props) {
  if (!book) return null;

  return (
    <div className="book-page">
      <div className="book-page__hero">
        <div className="book-page__info">
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <p>{book.subTitle}</p>

          <BookStats book={book} />

          <div className="book-page__buttons">
            <ButtonLink href={`/book/${book.id}`}>Read</ButtonLink>
            <ButtonLink href={`/player/${book.id}`}>Listen</ButtonLink>
          </div>

       <AddToLibraryButton bookId={book.id} />
        </div>

        <div className="book-page__cover">
          <img src={book.imageLink} alt={book.title} />
        </div>
      </div>

      <section className="book-page__section">
        <h3>What's it about?</h3>

        <div className="book-page__tags">
          <span>Communication Skills</span>
          <span>Technology &amp; the Future</span>
        </div>

        <p>{book.summary}</p>
      </section>

      <section className="book-page__section">
        <h3>About the author</h3>
        <p>{book.author}</p>
      </section>
    </div>
  );
}
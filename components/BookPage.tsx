"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { Book } from "@/lib/types";
import BookStats from "@/components/BookStats";
import AddToLibraryButton from "@/components/AddToLibraryButton";
import { isUserSubscribed } from "@/lib/subscription";

type Props = {
  book: Book;
};

export default function BookPage({ book }: Props) {
  const router = useRouter();

  if (!book) return null;

async function handleReadOrListen() {
  const user = auth.currentUser;

  if (!user) {
    router.push("/login");
    return;
  }

  const subscribed = await isUserSubscribed(user.uid);

  if (book.subscriptionRequired && !subscribed) {
    router.push("/choose-plan");
    return;
  }

  router.push(`/player/${book.id}`);
}

  return (
    <div className="book-page">
      <div className="book-page__hero">
        <div className="book-page__info">
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <p>{book.subTitle}</p>

          <BookStats book={book} />

          <div className="book-page__buttons">
            <button onClick={handleReadOrListen}>Read</button>
            <button onClick={handleReadOrListen}>Listen</button>
          </div>

          <AddToLibraryButton bookId={book.id} />
        </div>

        <div className="book-page__cover">
          <img src={book.imageLink} alt={book.title} />
        </div>
      </div>

      <section className="book-page__section">
        <h3>What&apos;s it about?</h3>

        <div className="book-page__tags">
          {book.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <p>{book.summary}</p>
      </section>

      <section className="book-page__section">
        <h3>About the author</h3>
        <p>{book.authorDescription}</p>
      </section>
    </div>
  );
}
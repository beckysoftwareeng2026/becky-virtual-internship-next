import { getBook } from "@/lib/api";
import ButtonLink from "@/components/ButtonLink";
import BookStats from "@/components/BookStats";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  const book = await getBook(id);

  return (
    <div className="book-page">

    <h1>{book.title}</h1>

  <BookStats book={book} />

    <p>{book.author}</p>
    <p>{book.subTitle}</p>
    <ButtonLink href={`/player/${book.id}`}>Listen Now</ButtonLink>

    <img
      src={book.imageLink}
      alt={book.title}
      width={250}
    />

    <h2>{book.subTitle}</h2>

    <p className="book-summary">
      {book.summary}
    </p>

  </div>
);
}

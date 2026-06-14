import { getBook } from "@/lib/api";
import ButtonLink from "@/components/ButtonLink";

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

    <p>⭐ {book.averageRating}</p>
    <p>{book.totalRating} ratings</p>
    <p>{book.keyIdeas} key ideas</p>
    <p>{book.type}</p>

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

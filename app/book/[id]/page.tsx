import { getBook } from "@/lib/api";
import ButtonLink from "@/components/ButtonLink";
import BookStats from "@/components/BookStats";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import AuthGuard from "@/components/AuthGuard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  const book = await getBook(id);

  return (
    <AuthGuard>
   <PageContainer>
  <div className="book-page">
    <PageTitle>{book.title}</PageTitle>

    <BookStats book={book} />

    <p>{book.author}</p>
    <p>{book.subTitle}</p>

    <ButtonLink href={`/player/${book.id}`}>
      Listen Now
    </ButtonLink>

    <img
      src={book.imageLink}
      alt={book.title}
      width={250}
    />

    <h2>{book.subTitle}</h2>

    <p className="book-summary">{book.summary}</p>
  </div>
</PageContainer>
</AuthGuard>
);
}

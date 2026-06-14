import { Book } from "@/lib/types";

type Props = {
  book: Book;
};

export default function SelectedBook({ book }: Props) {
  if (!book) return null;

  return (
    <div className="selected-book">
      <img src={book.imageLink} alt={book.title} width={200} />

      <h3>{book.title}</h3>

      <p>{book.author}</p>

      <p>{book.subTitle}</p>
    </div>
  );
}
 
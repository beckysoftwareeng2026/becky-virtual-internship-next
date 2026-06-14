import { Book } from "../lib/types";

type Props = {
  book: Book;
};

export default function BookStats({ book }: Props) {
  return (
    <>
      <p>⭐ {book.averageRating}</p>
      <p>{book.totalRating} ratings</p>
      <p>{book.keyIdeas} key ideas</p>
      <p>{book.type}</p>
    </>
  );
}
import { Book } from "@/lib/types";

type Props = {
 book: Book & { audioLength?: string };
};

export default function BookStats({ book }: Props) {
  return (
    <div className="book-stats">
      <div className="book-stats__item">
        <span>☆</span>
        <p>{book.averageRating} ({book.totalRating} ratings)</p>
      </div>

     <div className="book-stats__item">
  <span>⏱</span>
  <p>{book.audioLength || "03:24"}</p>
</div>

      <div className="book-stats__item">
        <span>🎙</span>
        <p>{book.type}</p>
      </div>

      <div className="book-stats__item">
        <span>☼</span>
        <p>{book.keyIdeas} Key ideas</p>
      </div>
    </div>
  );
}
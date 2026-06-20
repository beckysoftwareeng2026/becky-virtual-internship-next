import { Book } from "@/lib/types";

type Props = {
  book: Book;
};

export default function SelectedBook({ book }: Props) {
  if (!book) return null;

  return (
    <div className="selected-book">
      <div className="selected-book__summary">
        <p>{book.subTitle}</p>
      </div>

      <div className="selected-book__cover">
        <img
          src={book.imageLink}
          alt={book.title}
          width={140}
        />
      </div>

      <div className="selected-book__info">
        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "12px",
          }}
        >
          <button className="selected-book__play">
            ▶
          </button>

          <span>3 mins 23 secs</span>
        </div>
      </div>
    </div>
  );
}
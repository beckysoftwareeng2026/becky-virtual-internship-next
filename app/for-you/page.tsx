import BookCard from "@/components/BookCard";
import {
  getSelectedBooks,
  getRecommendedBooks,
  getSuggestedBooks,
} from "@/lib/api";


export default async function ForYouPage() {
  const selectedBooks = await getSelectedBooks();
  const recommendedBooks = await getRecommendedBooks();
  const suggestedBooks = await getSuggestedBooks();

  return (
    <div>
      <h1>For You</h1>

      <h2>Selected</h2>
      <div className="selected-book">
  <img
    src={selectedBooks[0].imageLink}
    alt={selectedBooks[0].title}
    width="200"
  />

  <h3>{selectedBooks[0].title}</h3>

  <p>{selectedBooks[0].author}</p>

  <p>{selectedBooks[0].subTitle}</p>
</div>
     



      <h2>Recommended</h2>
    <div className="book-grid">
  {recommendedBooks.map((book: any) => (
    <BookCard key={book.id} book={book} />
  ))}
</div>

      <h2>Suggested</h2>

<div className="book-grid">
  {suggestedBooks.map((book: any) => (
    <BookCard key={book.id} book={book} />
  ))}
</div>
    </div>
  );
}
import SectionTitle from "@/components/SectionTitle";
import { getBook } from "@/lib/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlayerPage({ params }: Props) {
  const { id } = await params;
  const book = await getBook(id);

  return (
    <div className="player-page">
    <h1>{book.title}</h1>
<p>{book.author}</p>

<img
  src={book.imageLink}
  alt={book.title}
  width={200}
/>

<audio controls src={book.audioLink}>
  Your browser does not support the audio element.
</audio>

     <SectionTitle>Summary</SectionTitle>
      <p className="book-summary">{book.summary}</p>
    </div>
  );
}
import AuthGuard from "@/components/AuthGuard";
import SectionTitle from "@/components/SectionTitle";
import AudioPlayer from "@/components/AudioPlayer";
import { getBook } from "@/lib/api";
import PlayerAccessGuard from "@/components/PlayerAccessGuard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlayerPage({ params }: Props) {
  const { id } = await params;
  const book = await getBook(id);

return (
  <AuthGuard>
    <PlayerAccessGuard book={book}>
      <div className="player-page">
        <div className="player-page__book">
          <img src={book.imageLink} alt={book.title} />

          <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
          </div>
        </div>

        <AudioPlayer
          audioLink={book.audioLink}
          title={book.title}
        />

        <SectionTitle>Summary</SectionTitle>
        <p className="book-summary">{book.summary}</p>
      </div>
    </PlayerAccessGuard>
  </AuthGuard>
);
}
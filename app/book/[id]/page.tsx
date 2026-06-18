import { getBook } from "@/lib/api";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AuthGuard from "@/components/AuthGuard";
import BookPage from "@/components/BookPage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookPageRoute({ params }: Props) {
  const { id } = await params;

  const book = await getBook(id);
  console.log(JSON.stringify(book, null, 2));
  

return (
  <AuthGuard>
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard__main">
        <Navbar />

        <div className="dashboard__content">
          <BookPage book={book} />
        </div>
      </main>
    </div>
  </AuthGuard>
);
}

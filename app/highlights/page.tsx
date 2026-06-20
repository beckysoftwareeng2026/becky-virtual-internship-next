import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function HighlightsPage() {
  return (
    <AuthGuard>
      <div className="dashboard">
        <Sidebar />

        <main className="dashboard__main">
          <Navbar />

          <div className="dashboard__content">
            <div className="highlights-empty">
              <h1>Highlights</h1>

              <h3>No highlights yet</h3>

              <p>
                Your favorite quotes and notes from books
                will appear here.
              </p>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
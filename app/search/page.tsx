import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SearchBooks from "@/components/SearchBooks";

export default function SearchPage() {
  return (
    <AuthGuard>
      <div className="dashboard">
        <Sidebar />

        <main className="dashboard__main">
          <Navbar />

          <div className="dashboard__content">
            <h1>Search</h1>
            <SearchBooks />
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
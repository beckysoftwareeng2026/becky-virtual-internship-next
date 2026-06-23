"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/search?q=${encodeURIComponent(search.trim())}`);
  }

  return (
    <>
      <nav className="dashboard__navbar">
        <button
          className="burger-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <form className="dashboard__search" onSubmit={handleSearch}>
          <input
            placeholder="Search for books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">⌕</button>
        </form>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>

          <Sidebar />
        </div>
      )}
    </>
  );
}
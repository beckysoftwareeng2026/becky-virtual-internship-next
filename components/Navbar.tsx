import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="dashboard__navbar">
      <div className="dashboard__search">
        <input placeholder="Search for books" />
        <button>⌕</button>
      </div>
    </nav>
  );
}
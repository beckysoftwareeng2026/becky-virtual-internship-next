import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__logo">
          <img src="/assets/logo.png" alt="Summarist" />
        </div>

        <nav className="sidebar__links">
          <Link href="/for-you">⌂ For you</Link>
          <Link href="/library">♡ My Library</Link>
          <Link href="/highlights">✎ Highlights</Link>
          <Link href="/search">⌕ Search</Link>
        </nav>
      </div>

      <nav className="sidebar__bottom">
        <Link href="/settings">⚙ Settings</Link>
        <Link href="#">? Help & Support</Link>
        <LogoutButton />
      </nav>
    </aside>
  );
}
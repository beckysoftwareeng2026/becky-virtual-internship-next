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
          <span className="sidebar__disabled">✎ Highlights</span>
          <span className="sidebar__disabled">⌕ Search</span>
        </nav>
      </div>

      <nav className="sidebar__bottom">
        <Link href="/settings">⚙ Settings</Link>
        <span className="sidebar__disabled">? Help & Support</span>
        <LogoutButton />
      </nav>
    </aside>
  );
}
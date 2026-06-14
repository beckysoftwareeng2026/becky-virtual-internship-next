import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/for-you">For You</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/choose-plan">Choose Plan</Link>
    </nav>
  );
}
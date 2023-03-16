import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <h1>Resume Builder</h1>
      <Link href="/">Home</Link>
    </nav>
  );
}

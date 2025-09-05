import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">MonPortfolio</h1>
      <div className="flex gap-4">
        <Link href="/">Accueil</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

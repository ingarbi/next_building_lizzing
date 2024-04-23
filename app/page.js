import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-red-300">
      Home
      <br />
      <Link href="/properties">Properties Page</Link>
    </main>
  );
}

import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Zwe Min Maw </title>
      </Head>
      <h1>Suppliers</h1>
      <p>Supplier Page for final exam.</p>

      <Link href="/about">About</Link> |
      <Link href="/suppliers">Suppliers List</Link>
    </div>
  );
}
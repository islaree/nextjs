import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcom home!</h1>
      <Link href="/blog">blog</Link>
      <Link href="/products">products</Link>
    </>
  );
}

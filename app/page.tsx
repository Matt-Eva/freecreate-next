import Auth from "./auth";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>FreeCreate</h1>
      <Auth />
      <Link href="/test">test</Link>
    </>
  );
}

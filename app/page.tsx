import connectMongoose from "@/mongo/config";
import sql from "@/utils/supabase/pg";
import Link from "next/link";

export default async function Home() {
  try {
    await connectMongoose();
  } catch (e) {
    console.error(e);
  }

  const users = await sql`SELECT id FROM auth.users`;
  console.log(users);
  const paras = users.map((user) => <p key={user.id}>{user.id}</p>);

  return (
    <>
      <h1>FreeCreate</h1>
      <Link href="/test">test</Link>
      {paras}
    </>
  );
}

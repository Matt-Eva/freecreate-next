import connectMongoose from "@/mongo/config";
import { createClient } from "@/utils/supabase/server";
import sql from "@/utils/supabase/pg";

export default async function Home() {
  try {
    await connectMongoose();
  } catch (e) {
    console.error(e);
  }

  const users = await sql`SELECT id FROM auth.users`;
  console.log(users);

  return <></>;
}

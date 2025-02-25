"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function Home() {
  const supabase = createClient();
  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/oauth-callback",
      },
    });
  };

  return (
    <>
      <h1>FreeCreate</h1>
      <button onClick={googleLogin}>log in with google</button>
      <Link href="/test">test</Link>
    </>
  );
}

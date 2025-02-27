"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState(false);

  const supabase = createClient();

  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/oauth-callback",
      },
    });
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    setUser(false);
  };

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    console.log(data);
    if (data.user) {
      setUser(true);
    }
    // if (error) {
    //   console.error(error);
    // }
  };
  getUser();

  return (
    <>
      <h1>FreeCreate</h1>
      {user ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={googleLogin}>log in with google</button>
      )}

      <br />
      <Link href="/test">test</Link>
    </>
  );
}

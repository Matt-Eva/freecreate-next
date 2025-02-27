"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState({ pending: true, present: false });

  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        setUser({ pending: false, present: true });
      }
      if (error) {
        console.log("error", error);
        setUser({ present: false, pending: false });
      }
    };
    getUser();
  }, []);

  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/oauth-callback",
      },
    });
    setUser({ ...user, pending: true });
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    setUser({ pending: false, present: false });
  };

  const deleteUser = async () => {
    const res = await fetch("/api/delete-user", { method: "DELETE" });
    if (res.ok) {
      console.log("user deleted");
    } else {
      const error = await res.json();
      console.error(error);
    }
    setUser({ present: false, pending: false });
  };

  if (user.pending) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <h1>FreeCreate</h1>
      {user.present ? (
        <>
          <button onClick={logout}>logout</button>
          <br />
          <button onClick={deleteUser}>delete user</button>
        </>
      ) : (
        <button onClick={googleLogin}>log in with google</button>
      )}

      <br />
      <Link href="/test">test</Link>
    </>
  );
}

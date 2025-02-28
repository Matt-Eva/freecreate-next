"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useAuth } from "@/context/AuthProvider";


export default function Auth() {
  const { user, setPending } = useAuth();

  const supabase = createClient();

  const googleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/api/auth/oauth-callback",
      },
    });
    console.log("google login", data, error);
    setPending();
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
  };

  const deleteUser = async () => {
    const res = await fetch("/api/delete-user", { method: "DELETE" });
    if (res.ok) {
      console.log("user deleted");
    } else {
      const error = await res.json();
      console.error(error);
    }
  };

  if (user.pending) {
    return <h1>loading...</h1>;
  }

  return (
    <>
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
    </>
  );
}

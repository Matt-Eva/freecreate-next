"use client";

import { useAuth } from "@/context/AuthProvider";

export default function Auth() {
  const { user, googleLogin, logout, deleteUser } = useAuth();

  return (
    <>
      {user.present ? (
        <>
          <button onClick={() => logout()}>logout</button>
          <br />
          <button onClick={() => deleteUser()}>delete user</button>
        </>
      ) : (
        <button onClick={() => googleLogin()}>log in with google</button>
      )}

      <br />
    </>
  );
}

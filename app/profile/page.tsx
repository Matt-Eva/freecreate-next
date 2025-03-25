"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";

function Profile() {
  const { user, logout, deleteUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user.present) {
      router.push("/login");
    }
  }, []);

  if (user.pending || !user.present) {
    return <div>loading</div>;
  }

  return (
    <div>
      Profile
      <Button onClick={() => logout()}>logout</Button>
      <Button onClick={() => deleteUser()}>delete account</Button>
    </div>
  );
}

export default Profile;

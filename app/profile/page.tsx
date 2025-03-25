"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";

function Profile() {
  const { user, logout, deleteUser } = useAuth();

  const router = useRouter();

  if (user.pending) {
    return <div>loading</div>;
  }

  if (!user.present) {
    router.push("/login");
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

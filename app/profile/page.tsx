"use client";

import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";

function Profile() {
  const { user, logout, deleteUser } = useAuth();
  return (
    <div>
      Profile
      <Button onClick={() => logout()}>logout</Button>
      <Button onClick={() => deleteUser()}>delete account</Button>
    </div>
  );
}

export default Profile;

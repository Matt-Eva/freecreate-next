"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useAuth } from "@/context/AuthProvider";

function UsernameForm() {
  const { updateUsername } = useAuth();
  const [username, setUsername] = useState("");

  const supabase = createClient();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    console.log(value);
    setUsername(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username);
    const error = await updateUsername(username);
    if (error) {
      console.error(error);
    } else {
      setUsername("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add or update username"
        value={username}
        onChange={handleChange}
        className="border rounded-lg p-1 shadow-xs"
      />
      <input
        type="submit"
        className="border rounded-lg p-2 ml-2 bg-black text-white text-xs font-bold"
      />
    </form>
  );
}

export default UsernameForm;

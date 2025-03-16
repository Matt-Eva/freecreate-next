"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type AuthContextType = {
  user: {
    pending: boolean;
    present: boolean;
  };
  setPending: Function;
  googleLogin: Function;
  logout: Function;
  deleteUser: Function;
};

const initialContext: AuthContextType | null = {
  user: {
    pending: true,
    present: false,
  },
  setPending: () => {},
  googleLogin: () => {},
  logout: () => {},
  deleteUser: () => {},
};

const AuthContext = createContext<AuthContextType>(initialContext);

export function AuthProvider(props: React.PropsWithChildren) {
  const [user, setUser] = useState({
    pending: true,
    present: false,
  });

  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        console.log("auth provider", data.user);
        setUser({ pending: false, present: true });
      }
      if (error) {
        console.log("auth provider error", error);
        setUser({ present: false, pending: false });
      }
    };
    getUser();
  }, []);

  const setPending = () => {
    setUser({ ...user, pending: true });
  };

  const googleLogin = async () => {
    const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${domainURL}/api/auth/oauth-callback`,
      },
    });
    console.log("google login", data, error);
    // setPending();
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

  return (
    <AuthContext.Provider
      value={{ user, setPending, googleLogin, logout, deleteUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type User = {
  pending: boolean;
  present: boolean;
};

type AuthContextType = {
  user: User;
  passwordLogin: Function;
  emailLogin: Function;
  googleLogin: Function;
  logout: Function;
  deleteUser: Function;
};

const initialUser = {
  pending: true,
  present: false,
};

const initialContext: AuthContextType | null = {
  user: {
    pending: true,
    present: false,
  },
  passwordLogin: () => {},
  emailLogin: () => {},
  googleLogin: () => {},
  logout: () => {},
  deleteUser: () => {},
};

const AuthContext = createContext<AuthContextType>(initialContext);

export function AuthProvider(props: React.PropsWithChildren) {
  const [user, setUser] = useState(initialUser);

  const router = useRouter();

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

  const googleLogin = async () => {
    const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${domainURL}/api/auth/oauth-callback`,
      },
    });
    console.log("google login", data, error);
  };

  const emailLogin = async (userEmail: string) => {
    const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL;
    const redirectURL = domainURL + "/profile";
    const { data, error } = await supabase.auth.signInWithOtp({
      email: userEmail,
      options: {
        emailRedirectTo: redirectURL,
      },
    });
    console.log("email login", data, error);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      setUser(initialUser);
      router.push("/");
    }
  };

  const passwordLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return error;
    } else {
      setUser({ pending: false, present: true });
    }
  };

  const deleteUser = async () => {
    const res = await fetch("/api/delete-user", { method: "DELETE" });
    if (res.ok) {
      console.log("user deleted");
      setUser(initialUser);
      router.push("/");
    } else {
      const error = await res.json();
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        passwordLogin,
        emailLogin,
        googleLogin,
        logout,
        deleteUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

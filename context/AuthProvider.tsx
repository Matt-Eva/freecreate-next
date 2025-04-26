"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type Creator = {
  name: string;
  uuid: string;
  id: string;
};

const initialCreators: Creator[] = [];

type User = {
  pending: boolean;
  present: boolean;
  userMetadata: object;
  creators: Array<Creator> | [];
};

type AuthContextType = {
  user: User;
  passwordLogin: Function;
  emailLogin: Function;
  googleLogin: Function;
  logout: Function;
  deleteUser: Function;
  updateUsername: Function;
};

const initialUser = {
  pending: true,
  present: false,
  userMetadata: {},
  creators: initialCreators,
};

const initialContext: AuthContextType | null = {
  user: {
    pending: true,
    present: false,
    userMetadata: {},
    creators: initialCreators,
  },
  passwordLogin: () => {},
  emailLogin: () => {},
  googleLogin: () => {},
  logout: () => {},
  deleteUser: () => {},
  updateUsername: () => {},
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
        const userMetadata = data.user.user_metadata;
        const creators = await supabase
          .from("creators")
          .select("name, uuid, id")
          .eq("user_id", data.user.id);
        console.log("creators", creators);
        const creatorData: Array<Creator> = creators.data!;
        setUser({
          pending: false,
          present: true,
          userMetadata: userMetadata,
          creators: creatorData,
        });
      }
      if (error) {
        console.error("auth provider error", error);
        setUser({ ...user, present: false, pending: false });
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
      setUser({ ...user, pending: false, present: true });
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

  const updateUsername = async (username: string) => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        username: username,
      },
    });
    if (error) {
      return error;
    } else {
      setUser({ ...user, userMetadata: data.user.user_metadata });
    }
  };

  const addCreator = async (creatorName: string) => {
    const { data, error } = await supabase
      .from("creators")
      .insert({ name: creatorName })
      .select();
    if (error) {
      console.error(error);
    } else {
      console.log(data);
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
        updateUsername,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

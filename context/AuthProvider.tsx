"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type AuthContextType = {
  user: {
    pending: boolean;
    present: boolean;
  };
  setPending: Function;
};

const initialContext: AuthContextType | null = {
  user: {
    pending: true,
    present: false,
  },
  setPending: () => {},
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

  return (
    <AuthContext.Provider value={{ user, setPending }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

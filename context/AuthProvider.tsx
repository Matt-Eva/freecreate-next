"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const AuthContext = createContext(null);

export function AuthProvider(props: React.PropsWithChildren) {
  return (
    <AuthContext.Provider value={null}>{props.children}</AuthContext.Provider>
  );
}

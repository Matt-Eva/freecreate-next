"use client";

import { AuthProvider } from "./AuthProvider";

export function Providers(props: React.PropsWithChildren) {
  return <AuthProvider>{props.children}</AuthProvider>;
}

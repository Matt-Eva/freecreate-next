"use client";

import { AuthProvider } from "./AuthProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Providers(props: React.PropsWithChildren) {
  return <AuthProvider>{props.children}</AuthProvider>;
}

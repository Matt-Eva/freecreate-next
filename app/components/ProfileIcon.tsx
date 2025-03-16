"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import AuthDialog from "./AuthDialog";
import { CircleUserRound } from "lucide-react";

function ProfileIcon() {
  const { user } = useAuth();
  return (
    <>
      {user.present ? (
        <Link
          href="/profile"
          className=" justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:text-underline text-muted-foreground transition ease-in-out duration-500 hover:text-black"
        >
          <CircleUserRound
            className="text-muted-foreground hover:text-black transition ease-in-out duration-500"
            strokeWidth={1.5}
          />
        </Link>
      ) : (
        <AuthDialog />
      )}
    </>
  );
}

export default ProfileIcon;

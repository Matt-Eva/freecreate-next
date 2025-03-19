"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";

import AuthDialog from "./AuthDialog";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";

function ProfileIcon() {
  const { user } = useAuth();
  return (
    <>
      {user.present ? (
        <Link
          href="/profile"
          className=" justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:text-underline  transition ease-in-out duration-500 hover:text-black"
        >
          <CircleUserRound
            className=" hover:text-black transition ease-in-out duration-500"
            strokeWidth={1.5}
          />
        </Link>
      ) : (
        <AuthDialog>
          {/* <CircleUserRound
            className="hover:text-black transition ease-in-out duration-500"
            strokeWidth={1.5}
          /> */}
          <Button variant="ghost" className="font-light underline">
            login
          </Button>
        </AuthDialog>
      )}
    </>
  );
}

export default ProfileIcon;

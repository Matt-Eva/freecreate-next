"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";

import AuthDialog from "./AuthDialog";

import { PersonIcon } from "@radix-ui/react-icons";

function ProfileIcon() {
  const { user } = useAuth();
  return (
    <>
      {user.present ? (
        <Link
          href="/profile"
          className=" justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 underline  transition ease-in-out duration-500 hover:text-black"
        >
          profile
        </Link>
      ) : (
        <AuthDialog>
          {/* <CircleUserRound
            className="hover:text-black transition ease-in-out duration-500"
            strokeWidth={1.5}
          /> */}
          <button className="">login</button>
        </AuthDialog>
      )}
    </>
  );
}

export default ProfileIcon;

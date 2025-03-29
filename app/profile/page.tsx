"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function Profile() {
  const { user, logout, deleteUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user.pending && !user.present) {
      router.push("/login");
    }
  }, [user]);

  if (user.pending || !user.present) {
    return <div>loading</div>;
  }

  return (
    <div className="px-2 w-[100%]">
      <section className="flex flex-wrap">
        <Button onClick={() => logout()} className="ml-auto">
          logout
        </Button>
      </section>
      <section className="flex flex-wrap ">
        <h2 className="underline font-bold text-xl ml-auto">Authentication</h2>
      </section>
      <section className="flex flex-wrap">
        <h2 className="underline w-[100%] font-bold ml-auto text-xl text-right text-red-600">
          Delete Account
        </h2>

        <Button
          onClick={() => deleteUser()}
          id="delete"
          className="block bg-white border border-red-600 text-red-600 hover:bg-gray-200"
        >
          delete account
        </Button>
        <p>
          Deleting your account will remove all your data from FreeCreate,
          including your entire user profile and all of your likes, libraries
          items, reading list items, stories, drafts, and creator profiles. The
          only items this will not delete is your donations, which we preserve
          for essential financial records.
        </p>
        <p className="text-red-600">
          <strong>
            <em>
              This action is irreversible. Once you delete your account, we
              cannot recover any of your information.
            </em>
          </strong>
        </p>
      </section>
    </div>
  );
}

export default Profile;

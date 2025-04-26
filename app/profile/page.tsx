"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

import { useAuth } from "@/context/AuthProvider";

import ChangePassword from "./components/ChangePassword";
import UsernameForm from "./components/UsernameForm";
import AddCreatorForm from "./components/AddCreatorForm";
import { Button } from "@/components/ui/button";

import { Pencil1Icon } from "@radix-ui/react-icons";
import { create } from "domain";

function Profile() {
  const { user, logout, deleteUser } = useAuth();
  const [showUsernameForm, setShowUsernameForm] = useState(false);
  const [showAddCreatorForm, setShowAddCreatoForm] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  console.log(user);

  let username = "";
  if ("username" in user.userMetadata) {
    username = user.userMetadata.username as string;
  } else if ("name" in user.userMetadata) {
    username = user.userMetadata.name as string;
  }
  useEffect(() => {
    if (!user.pending && !user.present) {
      router.push("/login");
    } else if (user.present) {
    }
  }, [user]);

  if (user.pending || !user.present) {
    return <div>loading</div>;
  }

  return (
    <div className="px-2 w-[100%]">
      <section className="flex flex-wrap mb-8">
        <div className="w-[100%] flex">
          <h2 className="font-bold text-2xl mr-2">
            {username
              ? `Welcome, ${username}!`
              : "You haven't added a username yet"}
          </h2>
          <Button
            onClick={() => setShowUsernameForm(!showUsernameForm)}
            className="bg-white text-black border-none shadow-none hover:bg-white hover:cursor-pointer  h-7 w-5"
          >
            <Pencil1Icon className="" />
          </Button>
        </div>

        {showUsernameForm ? <UsernameForm /> : null}
      </section>
      <section className="flex flex-wrap mb-8">
        <h2 className="font-bold text-2xl ml-auto w-[100%] border-b mb-2">
          Creator Profiles
        </h2>
        <Button onClick={() => setShowAddCreatoForm(!showAddCreatorForm)}>
          {showAddCreatorForm ? "Hide Form" : "Add Creator Profile"}
        </Button>
        <div className="w-[100%] mt-2">
          {showAddCreatorForm ? <AddCreatorForm /> : null}
        </div>
        <div>
          {user.creators.map((creator) => {
            return (
              <div>
                <h3>{creator.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-wrap mb-8">
        <h2 className="font-bold text-2xl ml-auto w-[100%] border-b mb-2">
          Authentication
        </h2>
        <h3 className="font-bolder text-lg font-bold w-[100%] mb-2">Logout</h3>
        <Button onClick={() => logout()} className="block mb-8">
          logout
        </Button>
        <ChangePassword />
      </section>
      <section className="flex flex-wrap">
        <h2 className="underline w-[100%] font-bold ml-auto text-xl text-red-600">
          Delete Account
        </h2>

        <Button onClick={() => deleteUser()} id="delete" variant="destructive">
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

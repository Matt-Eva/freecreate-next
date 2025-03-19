"use client";

import { useState } from "react";

import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleUserRound } from "lucide-react";

function AuthDialog(props: React.PropsWithChildren) {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(true);
  };

  const toggleCreateAccount = () => {
    setLogin(false);
  };

  return (
    <Dialog>
      <DialogTrigger className="justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:text-underline transition ease-in-out duration-500 hover:text-black">
        {props.children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{login ? "Login" : "Create Account"}</DialogTitle>
          <DialogDescription></DialogDescription>
          {login ? (
            <LoginForm toggleCreateAccount={toggleCreateAccount} />
          ) : (
            <CreateAccountForm toggleLogin={toggleLogin} />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
